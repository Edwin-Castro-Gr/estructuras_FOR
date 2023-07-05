/* 2. Crea un programa que pregunte al usuario un número. 
Usando el archivo de arreglo de Pokémons, 
mostrar solo los nombres de los Pokémons cuyos números que son múltiplos de 5 desde 1 hasta el número introducido por el usuario. https://pastebin.com/Zzk8g7Z6.*/
import {pokemon} from '/pokemons array.js';
let num = prompt('Ingrese un numero');
for (let i = 0; i <= num; i++) {
    let multip = i+5;
    console.log(pokemon.pokemons[multip]);  
}      
