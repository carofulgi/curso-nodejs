const { crearArchivo } = require('./helpers/multiplicar')
const argv = require('./config/yargs')

console.clear()

crearArchivo(argv.l, argv.b, argv.h)
    .then((nombreArchivo) => console.log(nombreArchivo, 'creado'))
    .catch((err) => console.log(err))
