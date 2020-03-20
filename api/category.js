import axios from 'axios';

// eslint-disable-next-line import/prefer-default-export
export const getCategory = () => axios.get('https://lagougou.github.io/mt-webApp/js/json/header.json')
  .then((res) => {
    if (res.data.code === 0) {
      return res.data.data;
    }
    throw new Error('获取数据失败');
  }).catch((err) => {
    throw new Error(err);
  });

