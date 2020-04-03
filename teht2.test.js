const yhteystiedot = require('./teht2');

test('Syötteitä ei ole', () => {
    expect(() => {yhteystiedot()}).toThrow('Syötteitä on liian vähän');
});

test('Syötteitä on vain yksi', () => {
    expect(() => {yhteystiedot("ds")}).toThrow('Syötteitä on liian vähän');
});

test('Testaa tyhjillä syötteillä', () => {
    expect(() => {yhteystiedot("","")}).toThrow('Syötteitä on liian vähän');
});

test ('Testaa kolmella syötteellä', () => {
    expect(yhteystiedot("Eero","Savukoski","0401231234")).toEqual({firstname: "Eero", lastname: "Savukoski", phone: "0401231234"});
});

test ('Testaa kahdella syötteellä', () => {
    expect(yhteystiedot("Eero","Savukoski")).toEqual({firstname: "Eero", lastname: "Savukoski", phone: ""});
});

test ('Testaa väärällä numerolla', () => {
    expect(yhteystiedot("Eero","Savukoski","asdasd")).toEqual({firstname: "Eero", lastname: "Savukoski", phone: ""});
});

test ('Testaa "undefined" numerolla', () => {
    expect(yhteystiedot("Eero","Savukoski",undefined)).toEqual({firstname: "Eero", lastname: "Savukoski", phone: ""});
});