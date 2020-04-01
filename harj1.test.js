const puhelin = require('./teht1');

test('Syötteitä ei ole', () => {
    expect(() => {puhelin()}).toThrow('nolla parametriä annettu');
});

test('Liian lyhyt numero', () => {
    expect(() => {puhelin("040123")}).toThrow('syöte on liian lyhyt');
});

test ('Testaa ei numeroilla', () => {
    expect(puhelin("abcdefghij")).toBe(null);
});

test ('Testaa numerolla ilman välejä ja viivaa', () => {
    expect(puhelin("0401234567")).toBe("0401234567");
});

test ('Testaa numerolla jossa on väli ja viiva', () => {
    expect(puhelin("040-123 1234")).toBe("040-123 1234");
});