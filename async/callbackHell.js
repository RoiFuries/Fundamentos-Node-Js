function hola(nombre, micallback){
    setTimeout(function(){
        console.log('hola ' + nombre);
        micallback(nombre)
    },1500)
}

function hablar(callbackhablar){
    setTimeout(function(){
        console.log('blablablablalbala bla...')
        callbackhablar()
    }, 1000)
}

function byebye (nombre, otroCallback){
    setTimeout(function(){
        console.log('Adios ' + nombre);
        otroCallback()
    }, 1000);
}
function conversation (nombre, veces, callback) {
    if (veces >= 0){
        hablar(function(){
            conversation (nombre, --veces, callback)
        })
    } else {
        byebye(nombre, callback )
    }
    
}
console.log('Iniciando proceso...');
hola('Roi', function(nombre){
    conversation(nombre, 6, function(){
        console.log('Procesos finished');
    })
})



// hola('Roi', function(nombre){
//     hablar(function () { 
//         hablar(function () {
//             byebye(nombre, function(){
//                 console.log('Terminado proceso');
//             });
//         })
//     });
// });


// hola('Roi', function(){});
// byebye('Roi', function(){});
