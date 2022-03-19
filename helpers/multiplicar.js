const fs = require('fs');


require('colors');

const crearArchivo = async (base = 5, listar = false, hasta = 10) => {
    try {

        let salida, consola = '';

        for (let i = 1; i <= hasta; i++) {
            consola += (`${base} ${'x'.green} ${i} ${'='.green} ${base * i}\n`);
            salida += (`${base} x ${i} = ${base * i}\n`);
        }
        if (listar) {

            console.log('================================='.green);
            console.log('Tabla de multiplicar del:'.blue, `${base}`.yellow);
            console.log('================================='.green);
            console.log(consola);
        }

        fs.writeFileSync(`./salida/Tabla-${base}.txt`, salida,);

        return `Tabla-${base}.txt`.magenta;

    } catch (error) {
        throw error;
    }

}
module.exports = {
    crearArchivo
}