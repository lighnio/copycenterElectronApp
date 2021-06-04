export class Product{

    constructor(color, docLink, name, status = "en proceso", total, type, dataxd, idDocumento){

    this.color = color;
    this.docLink = docLink;
    this.name = name;
    this.status = status;
    this.total = total;
    this.type = type;
    this.dataxd = dataxd;
    this.idDocument = idDocumento;
    }
}