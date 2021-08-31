function hola(nombre, micallback){
    setTimeout(function(){
        console.log('hola ' + nombre);
        micallback(nombre)
    },1001)
}

function byebye (nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ' + nombre);
        otroCallback()
    },1000)
}

console.log('Iniciando proceso...');

hola('Roi', function(nombre){
    byebye(nombre, function(){
        console.log('Terminado proceso');
    })
});


// hola('Roi', function(){});
// byebye('Roi', function(){});