function hello(name) {
    if (name == undefined) {
        console.log('Hello, world!');
    } else {
        console.log(`Hello, ${name}`);
    }
    return name;
  }
hello('Mustache');
hello();

function madlib(name, subject) {
    return `${name}'s favorite subject in school is ${subject}.`
}
console.log(madlib('Anushka', 'art'))

function tipAmount(billAmount, serviceQuality,) {
    if (serviceQuality == 'good') {
        var tip = billAmount * .2;
    } else if (serviceQuality == 'fair') {
        tip = billAmount * .15;
    } else {
        tip = billAmount * .1;
    }
    return tip;
}
console.log(tipAmount(100, 'good'))
console.log(tipAmount(40, 'fair'))

function totalAmount(billAmount, serviceQuality,) {
    if (serviceQuality == 'good') {
        var tip = billAmount * .2;
    } else if (serviceQuality == 'fair') {
        tip = billAmount * .15;
    } else {
        tip = billAmount * .1;
    }
    return billAmount + tip;
}
console.log(totalAmount(100, 'good'))
console.log(totalAmount(40, 'fair'))

function splitAmount(billAmount, serviceQuality, numOfSplit) {
    if (serviceQuality == 'good') {
        var tip = billAmount * .2;
    } else if (serviceQuality == 'fair') {
        tip = billAmount * .15;
    } else {
        tip = billAmount * .1;
    }
    return (billAmount + tip) / numOfSplit;
}

console.log(splitAmount(100, 'good', 5))
console.log(splitAmount(40, 'fair', 2))