class Critério {
    public descricao:string;
    private nivel:number
    constructor(
        descricao:string, 
        nivel:number
    ) 
    {
        this.descricao=descricao;
        this.nivel=nivel;
    }
    public buscarDados(){
        return{descricao: this.descricao, nivel:this.nivel}
    }
    public buscarNivel(){
        return this.nivel;
    }
}

export default Critério;