function showNumbers(a, b){
    for (var i=a;i<=b;i++) {
        (function(i) {
            setTimeout(function(){console.log(i);}, 1000 + (1000 * i));
        })(i);
    }
}
showNumbers(5, 15)