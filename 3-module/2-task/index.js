function getMinMax(str) {
  function compare(a, b) {
    if (a > b) return 1; // если первое значение больше второго
    if (a == b) return 0; // если равны
    if (a < b) return -1; // если первое значение меньше второго
  }

  let newArr = str.split([","]).join(" ").split([" "]).filter(function (element) {
    return +element
  }).join(",").split([","]).sort(compare)

  let result = {
    min: Math.min.apply(null, newArr),
    max: Math.max.apply(null, newArr)
  }
  return result
}
