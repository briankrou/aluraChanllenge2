
let ventanaconfirmacion = document.querySelector(".ventanaGuardado")
let palabra = document.getElementById("agregar");
let btn = document.getElementById("agregarpalabra");



var arr=[];

btn.addEventListener(`click`,function(){
    ag();
})



function ag(){

    var contador=0;
    var lighter=true;
    
    localStorage.setItem("n",arr);

    if(palabra.value==""){
        console.log("ingrese palabra");
    }else{
        if(/\s/.test(palabra.value)){

            console.log("contiene espacios");
        
            }else{


                console.log("asi esta el arreglo "+arr.length)
                while(lighter){
    
                    if(palabra.value[contador]==undefined){
                        console.log("el valor es null");
                        lighter=false;
                    }else{

                        console.log("queda asi: "+arr);
                        if(arr.length==0){
                            arr.push(palabra.value[contador]);
                        }else{
                            arr=[];

                        }

                  
                        contador++;
                    }      
                }

                console.log("agregado con exito: "+palabra.value.length);

                arr= palabra.value;
                
 
                localStorage.setItem("n",arr);
                ventanaconfirmacion.showModal();
                setTimeout(ocultarventana,2000)
           
           
            }
    }
}

function ocultarventana(){
    ventanaconfirmacion.close();
}
