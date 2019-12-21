const addZore = str => {
  if (Number(str) < 10) {
    return `0${str}`;
  }
  return str;
};

// 当前时间戳
const getCurTimer = date => {
  return new Date(date).getTime();
};

const formatDate = (date = new Date(), type) => {
  date = new Date(date);
  let y = date.getFullYear();
  let MM = addZore(date.getMonth() + 1);
  let dd = addZore(date.getDate());
  let hh = addZore(date.getHours());
  let mm = addZore(date.getMinutes());
  let ss = addZore(date.getSeconds());
  if (type) {
    switch (type) {
      case "yyyy-MM-dd":
        return `${y}-${MM}-${dd}`;
        break;
    }
  } else {
    return `${y}-${MM}-${dd} ${hh}:${mm}:${ss}`;
  }
};

module.exports = {
  formatDate,
  getCurTimer
};
