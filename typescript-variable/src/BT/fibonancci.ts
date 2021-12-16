function fibonancci(number: number) {
    let numberA: number = 1;
    let numberB: number = 1;
    let numberC: number = numberA + numberB;
    let sum: number = numberC;
    let count: number = 2;
    while (count < number){
        numberC = numberA + numberB;
        numberA = numberB;
        numberB = numberC;
        sum += numberC;
        console.log(sum);
        count++;
    }    
}

fibonancci(20);

