const lista = require('./teht3');

test('Testaa tyhjällä syötteellä', () => {
    expect(() => {lista()}).toThrow('Syötteitä ei ole');
});

test('Testaa syötteellä joka ei ole olio', () => {
    expect(() => {lista("Eero","Savukoski","0401231234")}).toThrow('Syötteet eivät ole merkkijonoja');
});

test('Testaa syötteillä jotka eivät ole merkkijonoja', () => {
    var x;
    expect(() => {lista({firstname: true, lastname: 123, phone: x})}).toThrow('Syötteet eivät ole merkkijonoja');
});

test ('Testaa oikeilla syötteill', () => {
    expect(lista({firstname: "Eero", lastname: "Savukoski", phone: "0401231234"})).toBe("<li>Savukoski, Eero : 0401231234</li>");
});