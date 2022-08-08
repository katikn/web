function giveMoney(money, country, frus, fnor) {
    if (country == "Россия") {
        return frus(money);
    } else if (country == "Норвегия") {
        return fnor(money)
    }
}

function frus(money) {
    if (money <= 12000) {
        return money;
    } else {
        return (money / 100) * 87
    }
}

function fnor(money) {
    if (money <= 12000) {
        return money;
    } else if (money <= 100000) {
        return (money / 100) * 90;
    } else if (money > 100000) {
        return (money / 100) * 67;
    }
}