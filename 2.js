function simpleNum(){
    const num = arguments[0]
    if (num === 0 || num === 1) {
        return "не простое";
    }else if (num <= 1000) {

        for (var i = 2; i < num; i++)
            if (num % i === 0) return "составное";
        return "простое";

    } else {
        return "данные неверны";
    }
}

console.log(simpleNum(1000))