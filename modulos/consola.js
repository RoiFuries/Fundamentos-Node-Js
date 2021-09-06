console.log('console punto log ');
console.info('console punto info');
console.error('console punto error');
console.warn('console punto warn');

var tabla = [
    {
        a: 1,
        b: 'z',
    },
    {
        a: 2,
        b: 'ulululu',
        c: 34
    }
]

console.table(tabla);
console.group('conversacion')
console.log('Hola niggas');
console.group('the blabla')
console.log('blablabla');
console.log('blablabla');
console.log('blablabla');
console.groupEnd('thethe blabla')
console.log('cahito');
console.groupEnd('conversacion')

console.log('this is a real example');

function function1(){
    console.group('funcion 1')
        console.log(' esto es de la funcion 1 ');
        console.log(' esto también ');
        function2()
    console.groupEnd('funcion 1')

}
function function2(){
    console.group('funcion 2')
    console.log('ahora estamos en la funcion 2');
    console.groupEnd('funcion 2')


    
}
console.log('empezamos');
function1()

console.count('veces');
console.count('veces');
console.count('veces');
console.count('veces');
console.countReset('veces');
console.count('veces');
console.count('veces');
