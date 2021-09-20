function otraFuncion(){
    seRompe();
}

function seRompe (){
    return 3 + z
}

function seRompeAsync(cb) {
    setTimeout(function (){
        try {
            return 3 + z
        } catch (err) {
            console.error('error en mi funcin async');
            cb(err);
        }
    } )
}

try{
    // otraFuncion()
    seRompeAsync(function (err){
        console.log(err.message);
    })
} catch(err){
    console.error('algo se ha roto');
    console.error(err);
    console.log('pero no pasa nada lo hemos capturado');
}

console.log('esto de aqui esta al final');