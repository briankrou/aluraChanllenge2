
var letas = document.getElementById("ContenedorLetras");
var LUsadas = document.getElementById("ContenedorLetrasUsadas");

var oportunidades=0;


//arreglo de palabras
var palabra=[];



var arregloLetrasUsadas=[];

var arr =["amigos",
        "alura",
        "estudiar",
        "esfuerzo",
        "variable",
        "pasion",
        "programar",
        "oracle",
        "educacion",
        "juego",
        "web"];




var contador=0;
var lighter=true;

let nombre = localStorage.getItem("n");
console.log("asi llega "+nombre)

if(nombre!=undefined){
    
    palabra=nombre
    console.log("palabra "+palabra);
    
}else{
   
    var numeroAleatorio= (Math.round(Math.random(1)*10));
    nombre=arr[numeroAleatorio];
        while(lighter){
        console.log(nombre[contador]);
        if(nombre[contador]==undefined){
            console.log("el valor es null");
            lighter=false;
        }else{
            palabra.push(nombre[contador]);
            contador++;
            
        }      
    }

}



var encontradas=0;

var letraOprimida


//captura el evento al oprimir una tecla
document.addEventListener('keydown', (event) => {

    
    letraOprimida= event.key;
    console.log("quedan "+oportunidades+" oportunidades");
    if(!Buscadorletrasutilizadas(letraOprimida)){
if(oportunidades<=5){
    

   

    if(/([a-z A-Z])/.test(letraOprimida)){

        mostrarcaracterUsados(letraOprimida);
        arregloLetrasUsadas.push(letraOprimida)
        console.log("se agrego "+ arregloLetrasUsadas)
        var mostrarletras = buscarcaracter(letraOprimida);

        if(mostrarletras.length==0){
            mostrarmuñeco(oportunidades);
            oportunidades++;

        }else{
            for(var i=0;i<mostrarletras.length;i++){
           
                var letras= document.getElementById("item"+mostrarletras[i]);
        
                letras.textContent=palabra[mostrarletras[i]];
                encontradas++;

                if(encontradas==palabra.length){
                    
                
                    console.log("fin del juego");
                    localStorage.setItem("n","brayan");
                    winner();
                }
            }
        }

 
    }else{
        console.log("no es una letra");
    }
}


}}, false) ;


function mostrarletrasUsadas(){

    arregloLetrasUsadas
    
}

//busca el caracater dentro de la palabra y retorna un arreglo con las posiciones
function buscarcaracter(n){
    let id =[]

    for(let i=0;i<palabra.length;i++){
        if(palabra[i]==n){
            id.push(i);    
        }     
    }

    return id;
     
}

// funcion que muestra los caracter uno por uno en el DOM del
function mostrarcaracter(id){
    var caracter = document.createElement("div");
    var c = document.createElement("p");
    c.setAttribute("id","item"+id)
    caracter.appendChild(c);
    caracter.classList.add("contenedorcaracter")
    letas.appendChild(caracter);
}

function mostrarcaracterUsados(l){
    var caracter = document.createElement("p");
    caracter.textContent= l;
    LUsadas.appendChild(caracter);
}

function Buscadorletrasutilizadas(letra){
    var respuesta;
    for(var i=0;i<arregloLetrasUsadas.length;i++){
        if(arregloLetrasUsadas[i]==letra){
            respuesta=true;
        }
    }
    return respuesta;
}










//----------------------------------------------canvas/----------------------------------------/////////////
var lienzo = document.querySelector("canvas");
var ctx= lienzo.getContext("2d");

var x=0;
var xd=0;
var yd=0;
var xz=0;
var yz=0;
var n=0;
var i=0;
var z=false;


function valancear(){
   

if(z){
    borrar(100,52.5, 180,260);
    cuerda(n);
    cabeza(n);
    //ojos();
    //boca();
    cabezacolgado(n);
    cuerpo(n);
    ManoDerecha(n);
    ManoIzquierda(n);
    piernaDerecha(n);
    piernaIzquierda(n);
    Gameover();
    n++;
    if(n>8){
        z=false;
    }
}else{

    borrar(100,52.5, 180,260);
    cuerda(n);
    cabeza(n);

    //ojos();
    //boca();
    cabezacolgado(n);
    cuerpo(n);
    ManoDerecha(n);
    ManoIzquierda(n);
    piernaDerecha(n);
    piernaIzquierda(n);
    Gameover();
     n--;
    if(n<-8){
        z=true;
    }
    
}

}

function sudor(x,y){
    
    ctx.beginPath();
    ctx.lineWidth=5;
    ctx.fillStyle="#0A3871";
    ctx.arc(x,y, 2, 0, 2 * Math.PI);
    ctx.fill();
}

function asustado(){
var o=false;

    borrar(171,90, 40,41);
    borrar(248,90, 46,43);

    if(i>15){
        i=0
    }
        switch(i){
            case 1:
                sudor(250+i,116-i);
                sudor(250+i,110-i);
                sudor(250+i,116+i);
                sudor(250+i,110+i);

                sudor(205-i,110-i);
                sudor(208-i,115-i);
                sudor(208-i,100-i);
                sudor(250+i,110+i);
             case 3:
                sudor(250+i,116+i);
                sudor(250+i,110+i);
                sudor(250+i,116+i);
                sudor(250+i,110+i);

                sudor(205-i,110-i);
                sudor(208-i,115-i);
                sudor(208-i,100-i);
                sudor(250+i,110+i);

            case 8:
                sudor(250+i,116+i);
                sudor(250+i,110+i);
                sudor(250+i,116+i);
                sudor(250+i,110+i);

                sudor(205-i,110-i);
                sudor(208-i,115-i);
                sudor(208-i,100-i);
                sudor(250+i,110+i);


        }



    i++;
}





ctx.beginPath();
ctx.lineWidth=5;
ctx.strokeStyle="#0A3871";
ctx.moveTo(40,390);
ctx.lineTo(350,390);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle="#0A3871";
ctx.moveTo(80,390);
ctx.lineTo(80,50);
ctx.lineTo(230,50);
ctx.stroke()



function cuerda(x){
    ctx.beginPath();
    ctx.strokeStyle="#0A3871";
    ctx.lineWidth=5;
    ctx.moveTo(228,50);
    ctx.lineTo(229+x,110);
    ctx.stroke();
}



function borrar(x1,y1,x2,y2){
    ctx.clearRect(x1,y1,x2,y2)
}

function cabeza(x){
    ctx.beginPath();
    ctx.fillStyle= "#0A3871" ;

    ctx.arc(230+x, 119, 18, 0, 2 * Math.PI);
    ctx.fill();
 

}


function boca(){
    
    var  boca= new Image();
    boca.src="./igm/boca.png";
    boca.onload = function(){
        ctx.drawImage(boca, 217,105);

     }
     
}
function cabezacolgado(x){
    var  boca= new Image();
    
    boca.src="./igm/Colgado.png";
    boca.onload = function(){
        ctx.drawImage(boca, 217+ x*1.3,105+(x*0.1)*0.4);
    
    }
}


function ManoIzquierda(x){
    
    ctx.beginPath();
    ctx.strokeStyle="#0A3871";
    ctx.moveTo((244+ x*1.3+xz),(145+(x*0.1)+yz));
    ctx.lineTo((255+x*1.9+xz),(200+(x*0.1)*0.5+yz));
    ctx.stroke();
}
function ManoDerecha(x){
    ctx.beginPath();
    ctx.strokeStyle="#0A3871";
    ctx.lineWidth=14;
    ctx.lineCap="round";
    ctx.moveTo((216+x*1.3+xd),(145+(x*0.1)*0.4+yd));
    ctx.lineTo((200+x*1.9+xd),(200+(x*0.1)*0.5+yd));
    ctx.stroke();
}
function cuerpo(x){
    ctx.beginPath();
    ctx.strokeStyle="#0A3871";
    ctx.lineWidth=25;
    ctx.lineCap="round";
    ctx.moveTo(230+ x*1.3,148+(x*0.1)*0.4);
    ctx.lineTo(230+ x*2,220+(x*0.1)*0.6);
    ctx.stroke();
 

}
function piernaDerecha(x){
    ctx.beginPath();
    ctx.strokeStyle="#0A3871";
    ctx.lineWidth=14;
    ctx.lineCap="round";
    ctx.moveTo((225+ x*2+xd),(220+yd));
    ctx.lineTo((220+ x*2.7+xd),(290+yd));
    ctx.stroke();
}
function piernaIzquierda(x){
    ctx.beginPath();
    ctx.strokeStyle="#0A3871";
    ctx.lineWidth=14;
    ctx.lineCap="round";
    ctx.moveTo((235+ x*2+xz),(220+yz));
    ctx.lineTo((240+ x*2.7+xz),(290+yz));
    ctx.stroke();
}

function Gameover(x){
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.strokeStyle="RED";
    ctx.font = "68px serif";
    ctx.strokeText("GAME OVER", 0, 250);
}

function winner(){
    ctx.lineWidth=2;
    ctx.beginPath();
    ctx.strokeStyle="Green";
    ctx.font = "120px serif";
    ctx.strokeText("winner", 0, 250);
}

var ahorcado =0;

function mostrarmuñeco(v){

        switch(v){
            case 0:
                cuerda(n);
                cabeza(n);
                boca();
                break;
            case 1:
                cuerpo(n);
                break;
            case 2:
                ManoDerecha(n);
                break;
            case 3:
                ManoIzquierda(n);
                break;
            case 4:
                piernaDerecha(n);
          
                break;
            case 5:
                piernaIzquierda(1);
                setInterval(valancear,60);
                break;
    
        }
     
}



console.log("aquiii "+palabra.length)
function mostra(){
    for(var i=0;i<palabra.length;i++){
        mostrarcaracter(i)
    }
    
}
mostra();

