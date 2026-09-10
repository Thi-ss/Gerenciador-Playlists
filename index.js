const prompt = require("prompt-sync")();

// ================================================================
// 👇 Escreva a lógica do seu desafio a partir daqui:
// ================================================================

let playlist = [
    "Numb",
    "In The End",
    "Enter Sandman",
    "Fear of the Dark",
    "Breaking the Law",
    "Master of Puppets",
    "The Trooper",
    "Paranoid"
];

console.log(`
    ======Menu======
    1 - Pesquisar música
    2 - Criar seleção
    3 - Remover Música
    4 - Inserir música
    5 - Ordenar A-Z
    6 - Inverter playlist
    7 - Exibir playlist
    8 - Sair`);

let opcao = ""
opcao = prompt(`Escolha uma opção: `)

while (opcao ==! "0"){
    console.log(`
        ---Menu---
        1 - Pesquisar música
        2 - Criar seleção
        3 - Remover Música
        4 - Inserir música
        5 - Ordenar A-Z
        6 - Inverter playlist
        7 - Exibir playlist
        8 - Sair`)
}


switch (opcao) {
    case "1":
        let pesquisarMusica = prompt((`Pesquisar música na playlist: ${playlist.join(`, `)}`));

    if (playlist.includes(pesquisarMusica)){
        console.log(`${pesquisarMusica} encontrada!`);
        console.log(`${pesquisarMusica} encontrada!, posição: ${playlist.indexOf(pesquisarMusica)}`);
    } else {
        console.log(`${pesquisarMusica} não foi encontrada. Posição não encontrada: ${playlist.indexOf(pesquisarMusica)}`);
        console.log(`${pesquisarMusica} não encontrada!`);
    }

    case "2":
        console.log(`Selecione as músicas que deseja ver da playlist (sequência númerica das músicas: 0, 1, 2...): ${playlist.join(`, `)}`);
        console.log(`Para selecionar uma fatia das músicas, digite a posição da música, e quantas apartir dela deseja reunir.`);

        let escolhaSlice = prompt((`Digite na seguinte ordem: posição e quantia:`))
        let recortePlaylist = playlist.slice(a, b);
    
}
