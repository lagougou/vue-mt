import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getContentList = () => axios.get('https://lagougou.github.io/mt-webApp/js/json/homelist.json')
  .then((res) => {
    // console.log(res);
    if (res.status === 200) {
      return res.data;
    }
    throw new Error('获取数据失败');
  }).catch((err) => {
    throw new Error(err);
  });

