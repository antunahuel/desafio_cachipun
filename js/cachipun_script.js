//DESAFÍO CACHIPÚN


let juego = 0;
let score_jugador = 0;
let score_maquina = 0;
let empate = 0;
let resultado = "";


function main() {
    let juego = Number(prompt("Cuántas veces deseas jugar"));

    for (i = 1; i <= juego; i++) {
        jugar(i);
    }

    resultado += "Puntaje jugador = " + score_jugador;
    resultado += "\nPuntaje Maquina = " + score_maquina;
    resultado += "\nEmpates = " + empate;

    alert(resultado);

    if (score_jugador > score_maquina) {
        document.writeln("Haz ganado a la máquina con... ", score_jugador, "ptos.");
    } else if (score_jugador == score_maquina) {
        alert("empate");
    }
    else {
        alert("game over...esta vez gano la máquina con:" + "" + score_maquina + "ptos.");
    }

}

function aleatorio() {
    return Math.floor(Math.random() * 3)
}

function jugar() {
    let jugador = prompt("escoge una opcion: 1.- Piedra 2.- Papel 3.- Tijera");
    maquina = aleatorio();

    if (jugador == maquina) {
        empate++;
        alert("EMPATE");
    } else if (jugador == 1 && maquina == 3) {
        score_jugador++;
        alert("GANASTE");
    } else if (jugador == 2 && maquina == 1) {
        score_jugador++;
        alert("GANASTE");
    } else if (jugador == 3 && maquina == 2) {
        score_jugador++;
        alert("GANASTE");
    } else {
        score_maquina++;
        alert("PERDISTE");
    }
}

main();

