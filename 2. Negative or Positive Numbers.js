function negativeOrPositiveNumbers(arr) {
    let newArr = [];
    for (let num of arr) {
        if (num < 0) {
            newArr.unshift(num);
        } else {
            newArr.push(num);
        }
    }
    console.log(newArr.join(`\n`));
    
    // for (let final of newArr) {
    //     console.log(final);

    // }


}
negativeOrPositiveNumbers(['7', '-2', '8', '9']);
