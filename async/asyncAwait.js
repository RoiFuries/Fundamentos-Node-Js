async function hola(nombre){
    return new Promise(function(resolve1, reject){
        setTimeout(function(){
            console.log('hola ' + nombre);
            resolve1(nombre)
        },1500)
    });
}
async function hablar(nombre){
    return new Promise ((resolve, reject) => {
        setTimeout(function() {
            console.log('blablabala...')
            resolve(nombre)
            // reject('hay un error')
        }, 1000)
    })    
}
async function byebye (nombre){
    return new Promise((resolve, reject) =>{
        setTimeout(function() {
            console.log('Adios ' + nombre);
            resolve()
        }, 1000);
    })
}
//--

async function main(){
    let nombre = await hola('carlos');
    await hablar();
    await hablar();
    await byebye (nombre)
}
console.log('Aqui empieza');
main()
console.log('Aqui termina');