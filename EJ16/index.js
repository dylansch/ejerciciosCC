/* 16. Guerra de palabras
 	Utils: 
 var abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}


Debés crear una función llamada `warWords` que reciba dos palabras como parámetro
 y devuelva la ganadora según la suma del valor de sus letras (dado por su posición en el abecedario).

Ejemplo:
warWord(“hola”, “chau”) debe retornar  “hola” (36 > 33)
warWord(“love”, “friendship”) debe retornar “friendship” */

let abc = {a:1,b:2,c:3,d:4,e:5,f:6,g:7,h:8,i:9,j:10,k:11,l:12,m:13,n:14,o:15,p:16,q:17,r:18,s:19,t:20,u:21,v:22,w:23,x:24,y:25,z:26}
let warWords = (str1,str2) =>{
    let acc = 0
    let acc2 = 0
    for(let i = 0; i < str1.length; i++){
        for(let key in abc){
            if(str1[i] == key){
                acc = acc + abc[key]
            }
        }
    }
    for(let i = 0; i < str2.length; i++){
        for(let key in abc){
            if(str2[i] == key){
                acc2 = acc2 + abc[key]
            }
        }
    }
    if(acc > acc2){
        return `La palabra ganadora es ${str1} con ${acc} puntos`
    } else if(acc < acc2){
        return `La palabra ganadora es ${str2} con ${acc2} puntos`
    } else{
        return `Empate tecnico!!! las palabras ${str1} y ${str2} tienen el mismo puntaje`  
    }
}
console.log(warWords("A","Z"))