function lista(contact){
    if(contact === undefined || contact === null){
        throw new Error('Syötteitä ei ole');
    } else if (typeof contact.firstname != "string" || typeof contact.lastname != "string" || typeof contact.phone != "string") {
        throw new Error('Syötteet eivät ole merkkijonoja');
    } else {
        result = "<li>" + contact.lastname + ", " + contact.firstname + " : " + contact.phone + "</li>";
        return result;
    }
}
module.exports = lista;