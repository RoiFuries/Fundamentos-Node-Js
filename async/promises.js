function hola(nombre){
    return new Promise(function(resolve1, reject){
        setTimeout(function(){
            console.log('hola ' + nombre);
            resolve1(nombre)
        },1500)
    });
}
function hablar(nombre){
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log('blablabala...')
            // resolve(nombre)
            reject('hay un error')
        }, 1000)
    })    
}
function byebye (nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve()
        }, 1000);
    })
}
//--
console.log('emprezamos el proceso amix');

hola('carlos')
    .then(hablar)
    .then(hablar)
    .then(byebye)
    .then((nombre) => {
        console.log('terminamos el proceso amix');
    })
    .catch(error => {
        console.error('Tenemos problemas');
        console.error(error);
    })

