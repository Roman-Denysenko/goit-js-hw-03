// Подсчет количества свойств в объекте
// Напиши функцию countProps(obj), которая возвращает
// число - количество свойств в объекте.

// Циклы не должны использоваться

const countProps = function (obj) {
  "use strict";
  const numberValues = Object.keys(obj).length;
  return numberValues;
};

console.log(countProps({})); // 0

console.log(countProps({ a: 1, b: 1 })); // 2

console.log(countProps({ a: 1, b: 1, c: 1, d: 1, e: 1 })); // 5
