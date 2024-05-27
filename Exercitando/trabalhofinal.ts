export class User {
    private static idCounter: number = 1; // Contador para gerar IDs únicos
    readonly id: number; // ID do usuário (somente leitura)
    readonly username: string; // Nome de usuário
    readonly email: string; // E-mail
    readonly name: string; // Nome completo
    readonly password: string; // Senha
    followers: User[]; // Lista de seguidores

    // Construtor da classe
    constructor(username: string, email: string, name: string, password: string) {
        this.id = User.idCounter++; // Atribui um ID único ao usuário
        this.username = username; // Define o nome de usuário
        this.email = email; // Define o e-mail
        this.name = name; // Define o nome completo
        this.password = password; // Define a senha
        this.followers = []; // Inicializa a lista de seguidores como vazia
    }



// Método para seguir outro usuário
    follow(user: User): void {
        if (user !== this && !this.followers.includes(user)) { // Verifica se o usuário não está tentando seguir a si mesmo e se já não está seguindo o usuário
            this.followers.push(user); // Adiciona o usuário à lista de seguidores
            console.log(`${this.username} is now following ${user.username}`); // Exibe uma mensagem indicando que o usuário começou a seguir outro usuário com sucesso
        } else {
            console.log("Cannot follow user."); // Exibe uma mensagem indicando que não foi possível seguir o usuário
        }
    }

    // Método para deixar de seguir outro usuário
    unfollow(user: User): void {
        const index = this.followers.indexOf(user); // Obtém o índice do usuário na lista de seguidores
        if (index !== -1) { // Verifica se o usuário está na lista de seguidores
            this.followers.splice(index, 1); // Remove o usuário da lista de seguidores
            console.log(`${this.username} has unfollowed ${user.username}`); // Exibe uma mensagem indicando que o usuário deixou de seguir outro usuário com sucesso
        } else {
            console.log("Cannot unfollow user."); // Exibe uma mensagem indicando que não foi possível deixar de seguir o usuário
        }
    }
}



// Enumeração para definir o tipo de tweet
export enum TweetType {
    Normal,
    Reply
}


// Classe representando um tweet
export class Tweet {
    private static idCounter: number = 1; // Contador para gerar IDs únicos
    readonly id: number; // ID do tweet (somente leitura)
    readonly author: User; // Autor do tweet
    readonly content: string; // Conteúdo do tweet
    readonly type: TweetType; // Tipo do tweet
    likes: number; // Quantidade de likes
    replies: Tweet[]; // Lista de respostas

    // Construtor da classe
    constructor(author: User, content: string, type: TweetType = TweetType.Normal) {
        this.id = Tweet.idCounter++; // Atribui um ID único ao tweet
        this.author = author; // Define o autor do tweet
        this.content = content; // Define o conteúdo do tweet
        this.type = type; // Define o tipo do tweet
        this.likes = 0; // Inicializa a quantidade de likes como zero
        this.replies = []; // Inicializa a lista de respostas como vazia
    }

    // Método para adicionar um like ao tweet
    like(): void {
        this.likes++; // Incrementa a quantidade de likes
        console.log(`${this.author.username}'s tweet liked. Total likes: ${this.likes}`); // Exibe uma mensagem indicando que o tweet foi curtido e o total de likes
    }

    // Método para adicionar uma resposta ao tweet
    reply(content: string): void {
        const reply = new Tweet(this.author, content, TweetType.Reply); // Cria um novo tweet do tipo "reply"
        this.replies.push(reply); // Adiciona a resposta à lista de respostas
        console.log(`Reply added to ${this.author.username}'s tweet: "${content}"`); // Exibe uma mensagem indicando que a resposta foi adicionada ao tweet
    }
}


import { User } from "../models/User";

// Serviço para gerenciar usuários
export class UserService {
    private static users: User[] = []; // Lista de usuários

    // Método para criar um novo usuário
    static createUser(username: string, email: string, name: string, password: string): void {
        const newUser = new User(username, email, name, password); // Cria um novo usuário
        UserService.users.push(newUser); // Adiciona o usuário à lista de usuários
        console.log(`User ${username} created.`); // Exibe uma mensagem indicando que o usuário foi criado com sucesso
    }

    // Método para obter todos os usuários
    static getUsers(): User[] {
        return UserService.users; // Retorna a lista de usuários
    }

    // Método para obter um usuário pelo ID
    static getUserById(id: number): User | undefined {
        return UserService.users.find(user => user.id === id); // Retorna o usuário com o ID especificado, se encontrado
    }
}

import { Tweet, TweetType } from "../models/Tweet";
import { User } from "../models/User";

// Serviço para gerenciar tweets
export class TweetService {
    private static tweets: Tweet[] = []; // Lista de tweets

    // Método para criar um novo tweet
    static createTweet(author: User, content: string, type: TweetType = TweetType.Normal): void {
        const newTweet = new Tweet(author, content, type); // Cria um novo tweet
        TweetService.tweets.push(newTweet); // Adiciona o tweet à lista de tweets
        console.log(`${author.username} tweeted: "${content}"`); // Exibe uma mensagem indicando que o tweet foi criado com sucesso
    }

    // Método para obter todos os tweets
    static getTweets(): Tweet[] {
        return TweetService.tweets; // Retorna a lista de tweets
    }

    // Método para obter um tweet pelo ID
    static getTweetById(id: number): Tweet | undefined {
        return TweetService.tweets.find(tweet => tweet.id === id); // Retorna o tweet com o ID especificado, se encontrado
    }
}


import { User } from "./models/User";
import { TweetService } from "./services/TweetService";
import { UserService } from "./services/UserService";

// Criar usuários
UserService.createUser("john_doe", "john@example.com", "John Doe", "password1");
UserService.createUser("jane_smith", "jane@example.com", "Jane Smith", "password2");
UserService.createUser("alice_wonderland", "alice@example.com", "Alice Wonderland", "password3");

// Obter usuários e exibir
const users = UserService.getUsers();
console.log("Users:");
users.forEach(user => console.log(user));

// Criar tweets
const john = UserService.getUserById(1);
const jane = UserService.getUserById(2);
TweetService.createTweet(john!, "Hello, Twitter!");
TweetService.createTweet(jane!, "Just another tweet.");
TweetService.createTweet(john!, "Tweeting again...");

// Obter tweets e exibir
const tweets = TweetService.getTweets();
console.log("\nTweets:");
tweets.forEach(tweet => console.log(tweet));

// John segue Jane
john!.follow(jane!);

// Jane responde ao tweet de John
const johnsTweet = tweets.find(tweet => tweet.author === john);
if (johnsTweet) {
    jane!.reply(`@${john!.username} Nice tweet, John!`);
}

// Exibir feed de John
console.log(`\n${john!.username}'s Feed:`);
john!.followers.forEach(user => {
    console.log(`- Tweets from @${user.username}:`);
    user.replies.forEach(reply => console.log(`  > ${reply.content}`));
});



/*
Uma tabela dos códigos presentes na aplicação e suas descrições:
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| Código                                     | Descrição                                                                                                |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `User`                                     | Classe que representa um usuário na aplicação.                                                           |
| `Tweet`                                    | Classe que representa um tweet na aplicação.                                                             |
| `UserService`                              | Serviço para gerenciar operações relacionadas aos usuários.                                              |
| `TweetService`                             | Serviço para gerenciar operações relacionadas aos tweets.                                                |
| `User.createUser`                          | Método estático da classe `UserService` para criar um novo usuário.                                      |
| `User.follow`                              | Método da classe `User` para que um usuário siga outro usuário.                                          |
| `User.unfollow`                            | Método da classe `User` para que um usuário deixe de seguir outro usuário.                               |
| `Tweet.createTweet`                        | Método estático da classe `TweetService` para criar um novo tweet.                                       |
| `Tweet.like`                               | Método da classe `Tweet` para adicionar um like a um tweet.                                              |
| `Tweet.reply`                              | Método da classe `Tweet` para adicionar uma resposta a um tweet.                                         |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `UserService.getUsers`                     | Método estático da classe `UserService` para obter todos os usuários.                                    |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `UserService.getUserById`                  | Método estático da classe `UserService` para obter um usuário pelo ID.                                   |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------| 
| `TweetService.getTweets`                   | Método estático da classe `TweetService` para obter todos os tweets.                                     |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `TweetService.getTweetById`                | Método estático da classe `TweetService` para obter um tweet pelo ID.                                    |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `UserService.users`                        | Lista estática de usuários dentro da classe `UserService`.                                               |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `TweetService.tweets`                      | Lista estática de tweets dentro da classe `TweetService`.                                                |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `User.idCounter`                           | Contador estático para gerar IDs únicos para os usuários.                                                |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `Tweet.idCounter`                          | Contador estático para gerar IDs únicos para os tweets.                                                  |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `TweetType`                                | Enumeração que define os tipos de tweets (Normal ou Reply).                                              |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `TweetType.Normal`                         | Valor da enumeração `TweetType` para representar um tweet normal.                                        |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `TweetType.Reply`                          | Valor da enumeração `TweetType` para representar uma resposta a um tweet.                                |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `User.id`                                  | Propriedade somente leitura que representa o ID de um usuário.                                           |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `User.username`                            | Propriedade somente leitura que representa o nome de usuário de um usuário.                              |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `User.email`                               | Propriedade somente leitura que representa o email de um usuário.                                        |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `User.name`                                | Propriedade somente leitura que representa o nome completo de um usuário.                                |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `User.password`                            | Propriedade somente leitura que representa a senha de um usuário.                                        |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `User.followers`                           | Propriedade que armazena os seguidores de um usuário.                                                    |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `Tweet.id`                                 | Propriedade somente leitura que representa o ID de um tweet.                                             |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `Tweet.author`                             | Propriedade somente leitura que representa o autor de um tweet.                                          |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `Tweet.content`                            | Propriedade somente leitura que representa o conteúdo de um tweet.                                       |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `Tweet.type`                               | Propriedade somente leitura que representa o tipo de um tweet.                                           |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `Tweet.likes`                              | Propriedade que armazena o número de curtidas de um tweet.                                               |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
| `Tweet.replies`                            | Propriedade que armazena as respostas a um tweet.                                                        |
|--------------------------------------------|----------------------------------------------------------------------------------------------------------|
Esses são os códigos presentes na aplicação e suas respectivas descrições, incluindo classes, métodos, propriedades e enumerações. Eles desempenham papéis essenciais no funcionamento do sistema de gerenciamento de tweets e usuários.
*/