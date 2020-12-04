let integers = [2, 4, 1, 6, 5, 40, -1];

let findIntegersThatMultiplyTo = (array, target) => {
    let resultingIntegers = [];

    array.some(integer => {
        let secondNumber = target / integer;

        if (array.indexOf(secondNumber) > -1)
            resultingIntegers.push(integer, secondNumber);

        return resultingIntegers.length === 2;
    });

    return resultingIntegers;
};

console.log(findIntegersThatMultiplyTo(integers, 40));