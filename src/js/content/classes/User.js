export class User{
    constructor(email, orders = "no hay", name, foto, id){
        this.email = email,
        this.orders = orders,
        this.name = name,
        this.foto = foto,
        this.id = id
    }
}