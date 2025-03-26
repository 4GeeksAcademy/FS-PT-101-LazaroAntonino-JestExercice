
let oneEuroIs = {
    "JPY": 156.5, // japan yen
    "USD": 1.07, // us dollar
    "GBP": 0.87, // british pound
}

const fromEuroToDollar = (euro) =>{
    let dollar = euro*oneEuroIs["USD"];
    return dollar;
}

const fromDollarToYen = (dollar) =>{
    let euro = dollar / oneEuroIs["USD"];
    let yen = euro*oneEuroIs["JPY"];
    return yen;
}


const fromYenToPound = (yen) =>{
    let euro = yen/oneEuroIs["JPY"]
    let pound = euro*oneEuroIs["GBP"]
    return pound;
}
console.log(fromYenToPound(10));



module.exports = {fromYenToPound,fromEuroToDollar,fromDollarToYen};

