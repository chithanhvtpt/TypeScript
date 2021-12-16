function fibonancci(number) {
    var numberA = 1;
    var numberB = 1;
    var numberC = numberA + numberB;
    var sum = numberC;
    var count = 2;
    while (count < number) {
        numberC = numberA + numberB;
        numberA = numberB;
        numberB = numberC;
        sum += numberC;
        console.log(sum);
        count++;
    }
}
fibonancci(20);
