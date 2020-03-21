import axios from 'axios';

export const getOrderList = () => axios.get('https://lagougou.github.io/mt-webApp/js/json/orders.json')
  .then((res) => {
    console.log(res.data.code === 0);
    if (res.data.code === 0) {
      return res.data.data;
    }
    throw new Error('获取数据失败');
  }).catch((err) => {
    throw new Error(err);
  });