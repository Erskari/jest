function yhteystiedot(a,b,c = ""){
    if(a === undefined || a === null || a === "" || b === undefined || b === null || b === ""){
        throw new Error('Syötteitä on liian vähän');
    } else {
        var patt = /[0-9]|\s|\u002D/g;
        var result = c.match(patt);
        if (result != null || result != undefined) {
            var result2 = result.join("");
            var resultObj = {
                firstname: a,
                lastname: b,
                phone: result2
            };
            return resultObj;
        } else {
            result = "";
            var resultObj2 = {
                firstname: a,
                lastname: b,
                phone: result
            };
            return resultObj2;
        }
    }
}
module.exports = yhteystiedot;