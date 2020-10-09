export const getMoney = value => {
  return `￥${(value / 100).toFixed(2)}/人`;
};

/**
 * 在指定的对象数组中 返回含有关键词的对象
 * @params data:[{}]对象数组
 * @params keywords:"" 关键词
 * toUpperCase 都转换成大写进行比较，使得顾虑结果不用区分大小写
 */

export const filterData = (data, keywords) => {
  const arr = [];
  if (data.length) {
    data.forEach((item, index) => {
      if (
        Object.values(item)
          .join()
          .toUpperCase()
          .includes(keywords.toUpperCase())
      ) {
        arr.push({ ...item, key: index });
      }
    });
  }
  return arr;
};
