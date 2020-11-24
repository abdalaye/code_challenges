const maxPossible = (first, second) => {
    let first_string = first.toString();
    let second_string = second.toString();
}

function getMaxOrder(number) {
    let arrayNumber = number.toString().split('');

    arrayNumber.sort((a, b) => {
        return Number(b) - Number(a);
    });

    return arrayNumber.join('');
}

getMaxOrder(15236659);