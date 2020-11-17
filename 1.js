function serachEvenOdd(arr) {

    var arrEven = []
    var arrOdd = []
    var arrZero = []
    var arrNotNumber = []


    arr.forEach(function (item, index, array) {
        if (typeof (item) !== 'number' || (!+item && item !== 0)) {
            arrNotNumber.push("NotNumber")
        } else if (item == 0) {
            arrZero.push("Zero")
        } else if (item % 2 == 0) {
            arrEven.push("Even")
        } else {
            arrOdd.push("Odd")
        }
    })

    console.log("Even " + arrEven.length)
    console.log("Odd " + arrOdd.length)
    console.log("Zero: " + arrZero.length)
    console.log("NotNumber " + arrNotNumber.length)
};
var arr = [1, 2, 3, 0,undefined, true, NaN, 4, 6, 0];
serachEvenOdd(arr);