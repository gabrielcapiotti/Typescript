/*
Exercício: Sistema de Gerenciamento de Biblioteca
Você vai criar um sistema de gerenciamento de uma biblioteca com os seguintes requisitos:
*/




/*
1 - Classe Livro:

PROPRIEDADES:
titulo (string)
autor (string)
anoPublicacao (number)
disponivel (boolean)

MÉTODOS:
emprestar (marca o livro como indisponível)
devolver (marca o livro como disponível)

2 - Classe Usuario:

PROPRIEDADES:
nome (string)
id (number)

MÉTODOS:
emprestarLivro (empresta um livro, atualizando o estado do livro)
devolverLivro (devolve um livro, atualizando o estado do livro)

3 - Classe Funcionario (herda de Usuario):

PROPRIEDADES:
cargo (string)

MÉTODOS:
adicionarLivro (adiciona um novo livro à biblioteca)
removerLivro (remove um livro da biblioteca)

4 - Classe Biblioteca:

PROPRIEDADES:
livros (array de Livro)
usuarios (array de Usuario)

MÉTODOS:
registrarUsuario (adiciona um novo usuário à biblioteca)
listarLivrosDisponiveis (retorna uma lista de livros disponíveis)
buscarLivroPorTitulo (retorna um livro pelo título)
emprestarLivro (empresta um livro para um usuário)
devolverLivro (devolve um livro de um usuário)]
*/