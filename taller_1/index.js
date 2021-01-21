/*Taller 1 


1.Instale Node js y gestor NPM 

2. Cree un proyecto Node con npm init

3. Cree un index.js con las siguientes funciones(flechas) que hagan las operaciones matemáticas:


- sumar(a,b) :
- restar(a,b) validar que a sea mayor que b.
- multplicar(a,b)
- dividir(a,b) : validar que b sea distinto de 0. */




function sumar (a,b){
    return a+ b;
}

function restar (a,b ){
    if (a>b){
        console.log ('a tiene que ser mayor que b');
    }else{  
        return a -b;
    }
}


function multiplicar (a,b){
    return a * b;

}
function dividir (a,b){
    if (b ==  0){
        console.log ('no se puede dividir');
    }else{
        return a/ b ;
    }
}

console.log(sumar (2,1));
console.log(restar (2,1));
console.log(multiplicar (2,1));
console.log(dividir (2,0));

