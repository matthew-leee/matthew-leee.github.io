function dateLoop (n) {
    var date1 = new Date ();
    date1.setFullYear();
    date1.setSeconds(n);
    return date1;
};

console.log (dateLoop());