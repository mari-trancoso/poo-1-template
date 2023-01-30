export class User {
    //caracteristicas, informações do objeto, ATRIBUTOS
    // ENCAPSULAMENTO (public, private, protect)
    // id: string
    // name: string
    // email: string
    // password: string

    //ações, funções, MÉTODOS
    //CriarConta()
    //MudarConta()
    constructor(
        private id: string, 
        private name: string, 
        private email: string, 
        private password: string,
        private createdAt: string
        )
    {
        // this.id = id
        // this.name = name
        // this.email = email
        // this.password = password
    }

    //OUTROS MÉTODOS
    public getId(): string {
        return this.id
    }

    public getName() : string{
        return this.name
    }

    public getEmail() : string{
        return this.email
    }

    public getPassword() : string{
        return this.password
    }

    public getCreatedAt() : string{
        return this.createdAt
    }

    public setId(newId:string) : void{
        this.id = newId
    }

    public setName(newName:string) : void{
        this.id = newName
    }

    public setEmail(newEmail:string) : void{
        this.email = newEmail
    }

    public setPassword(newPassword:string) : void{
        this.password = newPassword
    }

    public setCreatedAt(newCreatedAt:string) : void{
        this.createdAt = newCreatedAt
    }
   
}

//INSTANCIAR
const user1 = new User("i001", "Mariana", "mari@email.com", "mari123@", "2023-01-30 10:00:00")
const user2 = new User("i002", "Paulo", "paulo@email.com", "paulo123@", "2023-01-30 10:00:00")

console.log(user1.getId())
user1.setId("i010")
console.log(user1.getId())
