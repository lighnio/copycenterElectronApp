export class Product{

    constructor(color, docLink, name, status = "en proceso", total, type, userOwner){

    this.color = color;
    this.docLink = docLink;
    this.name = name;
    this.status = status;
    this.total = total;
    this.type = type;
    this.userOwner = userOwner;
    }
}