const hinta = require('./demo1');

test('syötteet ei numeromaisia merkkijonoja "Minna"+"Jaakko", heittää poikkeuksen', () => {
    expect(() => {hinta()}).toThrow('nolla parametriä annettu');
});

test ('Testaa hinnalla 101', () => {
    expect(hinta(101)).toBe(95.94999999999999);
});
test ('Testaa hinnalla 202', () => {
    expect(hinta(202)).toBe(181.8);
});

test ('Testaa hinnalla 500', () => {
    expect(hinta(500)).toBe(425);
});

test ('Testaa hinnalla 502', () => {
    expect(hinta(502)).toBe(426.7);
});