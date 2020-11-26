function serachEvenOdd(arr) {
    let arrEven = 0, arrOdd = 0, arrZero = 0, arrNotNumber = 0;

    arr.forEach(function (item, index, array) {
        if (typeof (item) !== 'number' || (!+item && item !== 0)) {
            arrNotNumber++;
        } else if (item == 0) {
            arrZero++;
        } else if (item % 2 == 0) {
            arrEven++;
        } else {
            arrOdd++;
        }
    })

    console.log("Even " + arrEven);
    console.log("Odd " + arrOdd);
    console.log("Zero: " + arrZero);
    console.log("NotNumber " + arrNotNumber);
};
let arr = [1, 2, 3, 0,undefined, true, NaN, 4, 6, 0];
serachEvenOdd(arr);

// Есть пару замечаний к решению:
// 1. Для подсчета нужных значений оптимальнее использовать обычные переменные, чем массивы. 
// 2. Старайтесь не использовать ключевое слово var для объявления переменных, это устаревший синтаксис. Лучше использовать более современные операторы let или const