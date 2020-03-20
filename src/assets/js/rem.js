/* eslint-disable no-use-before-define */
/* eslint-disable one-var */
/* eslint-disable prefer-const */
// eslint-disable-next-line func-names
(function () {
  const rootEl = document.documentElement;
  let dpr = window.devicePixelRatio || 1;
  // eslint-disable-next-line no-nested-ternary
  // dpr = dpr >= 3 ? 3 : (dpr >= 2 ? 2 : 1);
  if (dpr >= 3) {
    dpr = 3;
  } else if (dpr >= 2) {
    dpr = 2;
  } else {
    dpr = 1;
  }


  let viewEl = document.querySelector('meta[name="viewport"]');
  let maxWidth = 1120,
    minWidth = 320;
  // eslint-disable-next-line one-var
  let scale = 1 / dpr,
    content = `width=device-width, initial-scale=${scale},maximum-scale=${scale},minimum-scale=${scale},user-scalable=no`;

  rootEl.setAttribute('data-dpr', dpr);
  if (maxWidth && minWidth) {
    rootEl.setAttribute('max-width', maxWidth);
    rootEl.setAttribute('min-width', minWidth);
  }


  if (viewEl) {
    viewEl.setAttribute('content', content);
  } else {
    viewEl = document.createElement('meta');
    viewEl.setAttribute('name', 'viewport');
    viewEl.setAttribute('content', content);
    document.head.appendChild(viewEl);
  }

  setRemUnit();
  window.addEventListener('resize', setRemUnit);

  function setRemUnit() {
    const ratio = 10;
    let viewWidth = rootEl.getBoundingClientRect().width || window.innerWidth;
    if (maxWidth && (viewWidth / dpr) > maxWidth) {
      viewWidth = maxWidth * dpr;
    }

    if (minWidth && (viewWidth / dpr) < minWidth) {
      viewWidth = minWidth * dpr;
    }

    rootEl.style.fontSize = `${viewWidth / ratio}px`;
  }
}());
