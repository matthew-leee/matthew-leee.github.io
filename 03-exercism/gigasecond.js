function gs (y, m, d){
    let bDay = new Date (y, m-1, d, 0, 0, 0);
    bDay.setSeconds(1000000000);
    return bDay;
};

console.log (gs(1027, 12, 5))