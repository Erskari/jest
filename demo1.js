function hinta(a){
    if(a === undefined || a === null){
        throw new Error('nolla parametriä annettu');
    }
    if(a > 100 && a < 200){
        let kerto = Number(a) * 0.95;
        return kerto;
    } else if (a > 201 && a < 500){
        let kerto = Number(a) * 0.9;
        return kerto;
    } else (a >= 500) 
        let kerto = Number(a) * 0.85;
        return kerto;
}
module.exports = hinta;