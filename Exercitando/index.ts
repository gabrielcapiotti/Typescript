/*
Claro, aqui estão cinco exercícios simples de TypeScript:

1. **Definindo tipos básicos:**
   Crie uma interface `Pessoa` com as seguintes propriedades: `nome` (string), `idade` (number), `email` (string, opcional). Em seguida, declare uma variável do tipo `Pessoa` e atribua valores a ela.
*/

interface Pessoa {
    nome: string;
    idade: number;
    profissao: string;
    conjuge: string;
}

const pessoa:Pessoa = {
    nome: "Pandora Venusia-MorningStar",
    idade: 348,
    profissao: "Matriarca Venusia",
    conjuge: "Nocturna MorningStar"
}






/*
2. **Função com tipos explícitos:**
   Crie uma função chamada `soma` que aceita dois parâmetros do tipo number e retorna a soma desses dois números. Certifique-se de definir explicitamente os tipos dos parâmetros e o tipo de retorno da função.
*/

function soma(a:number, b:number): number {
    return a + b;
}

const resultado: number = soma(187,912)




/*
3. **Usando tipos de união:**
   Defina um tipo `Nota` que pode ser uma string ou um número. Em seguida, declare uma variável que pode conter uma `Nota` e atribua a ela tanto uma string quanto um número.
*/

type Nota = string | number;

let nota: Nota;
nota = "A";
nota = 8;



/*
4. **Usando tipos de interseção:**
   Crie duas interfaces, `Veiculo` com propriedades `marca` (string) e `modelo` (string), e `Motor` com propriedades `potencia` (number) e `combustivel` (string). Em seguida, crie uma terceira interface chamada `Carro` que combine as propriedades de `Veiculo` e `Motor`.
*/

interface Venusia{
    familia: string;
    chefeFamiliar: string;
}

interface Poder {
    nivelPoder: number;
    energia: string;
}

interface Venusia extends Poder{}
    const familia = {
        familia: "Venuttia",
        chefeFamiliar: "Aragorn",
        nivelPoder: 40.000,
        energia: "mana"
    };

/*
5. **Validação de parâmetros de função:**
   Escreva uma função chamada `mostrarMensagem` que aceita um parâmetro chamado `mensagem` do tipo string. Dentro da função, verifique se a mensagem não está vazia. Se não estiver vazia, imprima a mensagem no console. Se estiver vazia, imprima uma mensagem de erro.
*/

function revelarVenusia(venusia:string):void {
    if (venusia.trim() !== "") {
        console.log(venusia);
    } else {
        console.error("Erro: mensagem vazia!");
    }
}

revelarVenusia("Pandora Venusia-MorningStar é a melhor venusia de todas.")
revelarVenusia("")



/*
Esses exercícios devem proporcionar uma prática básica para trabalhar com tipos em TypeScript.
*/