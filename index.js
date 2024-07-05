function calcularNivel(vitorias, derrotas) {
    let saldoVitorias = vitorias - derrotas;
    let nivel;

    // Determinando o nível do jogador com base no saldo de vitórias
    if (vitorias < 10) {
        nivel = "Ferro";
    } else if (vitorias >= 11 && vitorias <= 20) {
        nivel = "Bronze";
    } else if (vitorias >= 21 && vitorias <= 50) {
        nivel = "Prata";
    } else if (vitorias >= 51 && vitorias <= 80) {
        nivel = "Ouro";
    } else if (vitorias >= 81 && vitorias <= 90) {
        nivel = "Diamante";
    } else if (vitorias >= 91 && vitorias <= 100) {
        nivel = "Lendário";
    } else { // vitórias >= 101
        nivel = "Imortal";
    }

    // Retornando o resultado formatado
    return `O Herói tem saldo de ${saldoVitorias} está no nível de ${nivel}`;
}

// Exemplo de uso da função
const resultado1 = calcularNivel(85, 20);
console.log(resultado1); // Saída: O Herói tem saldo de 65 está no nível de Ouro

const resultado2 = calcularNivel(5, 10);
console.log(resultado2); // Saída: O Herói tem saldo de -5 está no nível de Ferro
