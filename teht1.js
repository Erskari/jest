function puhelin(a){
    if(a === undefined || a === null){
        throw new Error('nolla parametriä annettu');
    } else if(a.length < 10) {
        throw new Error('syöte on liian lyhyt');
    } else {
        var patt = /[0-9]|\s|\u002D/g;
        var result = a.match(patt);
        if (result != null) {
            var result2 = result.join("");
            return result2;
        } else {
            return result;
        }
    }
}
module.exports = puhelin;