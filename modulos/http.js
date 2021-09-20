const http = require('http');

http.createServer(router).listen(3001)

function router (req1, res1){
    console.log('nueva peticion');
    console.log(req1.url);

    switch(req1.url) {
        case '/hola':
            res1.write('hola, que tal')
            res1.end()
            break;

            default:
                res1.write('Error 404, no se lo que quieres')
                res1.end()

    }

    // res1.writeHead(201, {'Content-Type': 'text/plain'})

    // // escribir respuesta al usuario
    // res1.write('hola, ya se usar http de node js')

    // res1.end()
}

console.log('escuchando http en el puerto 3001');