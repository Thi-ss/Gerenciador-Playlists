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

let opcao = ""
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

opcao = prompt(`Escolha uma opção: `)
}


switch (opcao) {
case "1":
    let pesquisarMusica = prompt((`Pesquisar música na playlist: ${playlist.join(`, `)}`));
    
    if (playlist.includes(pesquisarMusica)) {
        console.log(`${pesquisarMusica} encontrada!`);
        console.log(`${pesquisarMusica} encontrada!, posição: ${playlist.indexOf(pesquisarMusica)}`);
    } else {
        console.log(`${pesquisarMusica} não foi encontrada. Posição não encontrada: ${playlist.indexOf(pesquisarMusica)}`);
        console.log(`${pesquisarMusica} não encontrada!`);
    }

case "2":
    console.log(`Selecione as músicas que deseja ver da playlist (sequência númerica das músicas: 0, 1, 2...): ${playlist.join(`, `)}`);
    console.log(`Para selecionar uma fatia das músicas, digite a posição da música, e quantas apartir dela deseja reunir.`);
    let posicaoSlice = prompt((`Digite posição: `));
    let quantiaSlice = prompt((`Digite quantia: `));
    let recortePlaylist = playlist.slice(posicaoSlice, quantiaSlice);
    console.log(`${recortePlaylist}`);

case "3":
    let remover = prompt((`Selecione uma música que deseja remover.`))

    if (playlist.includes(remover)) {
        let indice = playlist.indexOf(remover);
        playlist.splice(indice, 1);
        console.log(`Música: ${remover} removida.`);
    } else {
        console.log(`Essa música não pertence à playlist.`);
    }

case "4":
    
}