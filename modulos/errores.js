// function seRompe (){
//     let a = 2;
//     let b = i;
//     let ab = a + b
//     return console.log(ab);;
    
// }
// try{
//     seRompe()
// } catch(err){
//     console.error('baibai tacubaia alogo se rompio');
//     console.error(err.message);
// }
// console.log('esto de aqui esta al final ');
// console.log(' but nothing happens, we have it');

//////

function otraFuncion(){
    seRompe ()
}

function seRompe (){
    let a = 2;
    let b = 5;
    let ab = a + b
    return console.log(ab);;
    
}

function seRompeAsync (cb){
    setTimeout(function(){
        try {
            return 3 + z;
        } catch (error) {
            console.error('error en mi funcion sync');
            cb(error)
        }
    })
}

try{
    // otraFuncion()
    seRompeAsync(function(err){
        console.log(err.message);
    })
} catch(err){
    console.error('baibai tacubaia alogo se rompio');
    console.error(err);
}
console.log(' but nothing happens, we have it');
console.log('esto de aqui esta al final ');

