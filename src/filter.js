// 定义全局过滤方法

/**
 * 千分位
 * @param {*} value 
 * @returns 
 */
let NumFormatThousand = function (value) {
  if (value != null || "") {
    return value.toLocaleString("en-US");
  }
}

/**
 * 千分位并保留两位小数
 * @param {*} value 
 */
let NumFormatThousandTwo = function (value) {
  if (value != null || "") {
    var intPartFormat = Number(value)
      .toFixed(2)
      .replace(/(\d)(?=(\d{3})+\.)/g, "$1,"); // 将整数部分逢三一断
    return intPartFormat;
  }
}

export {
  NumFormatThousand,
  NumFormatThousandTwo
} //导出过滤函数
