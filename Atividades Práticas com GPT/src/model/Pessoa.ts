class Pessoa {
    private documento:string;
    private nome:string;
    public idade:number;
    public sexo:'M' | 'F';

    constructor(
        documento:string,
        nome:string,
        idade:number,
        sexo:'M' | 'F',
    ) 
    {
        this.documento=documento;
        this.nome=nome;
        this.idade=idade;
        this.sexo=sexo;
    }
    public buscarDocumento(){
        return this.documento;
    }
    public buscarNome(){
        return this.nome;
    }
    public buscarDados(){
        return{
            nome:this.nome, 
            documento:this.documento, 
            idade:this.idade, 
            sexo:this.sexo
        }
    }
}

export default Pessoa