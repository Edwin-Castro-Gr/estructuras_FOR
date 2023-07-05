/* 3. Crea un programa que recorra el arreglo [4,”dos”,8,”tres”,5,9,1,”cero”] 
y muestre en consola solo los elementos que son tipo número.*/
let array =  [4,"dos",8,"tres",5,9,1,"cero"]; 
let num;

for (let i = 0; i <= array.length; i++) {
    if(typeof array[i] == "number"){
        num=array[i];
    }   
    console.log(num);  
}      
