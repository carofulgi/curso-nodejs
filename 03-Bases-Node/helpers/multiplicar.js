const fs = require('fs')
const colors = require('colors')

const crearArchivo = async (lista, base = 5, hasta = 10) => {
    try {
        let salida = ''
        let consola = ''

        for (let i = 1; i <= hasta; i++) {
            salida += `${base} x ${i} = ${base * i}\n`
            consola += `${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`
        }
        if (lista) {
            console.log('------------------------'.black)
            console.log(`    Tabla del:`.red, `${base}`.white)
            console.log('------------------------'.black)
            console.log(consola)
        }

        // fs.writeFile('tabla 5.txt', salida, (err) => {
        //     if(err) throw err
        //     console.log('tabla 5.txt creado')
        // })

        fs.writeFileSync(`./salida/tabla-${base}.txt`, salida)
        return `tabla ${base}.txt creado`
    } catch (error) {
        throw error
    }
}

module.exports = {
    crearArchivo,
}
