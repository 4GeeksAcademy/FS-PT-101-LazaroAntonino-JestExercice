test("One euro should be 1.07 dollars", () => {
    // Importo la funcion desde app.js
    const { fromEuroToDollar } = require('./app.js');

    // Uso la función como debe ser usada
    const dollars = fromEuroToDollar(3.5);

    // Si 1 euro son 1.07 dólares, entonces 3.5 euros debe ser (3.5 * 1.07)
    const expected = 3.5 * 1.07;

    // Hago mi comparación (la prueba)
    expect(fromEuroToDollar(3.5)).toBe(3.745); // 1 euro son 1.07 dólares, entonces 3.5 euros deberían ser = (3.5 * 1.07)
})


test("One dollar should be 1462.6168224299065", () => {

    const { fromDollarToYen } = require('./app.js');

    const yen = fromDollarToYen(1);

    const expected= (1/1.07)*156.5;

    expect(fromDollarToYen(10)).toBe(1462.6168224299065);

});


test("One yen should be 0.05559105431309904", () => {

    const { fromYenToPound } = require('./app.js');

    const yen = fromYenToPound(1);

    const expected= (1/156.5)*0.87;

    expect(fromYenToPound(10)).toBe(0.05559105431309904);

});