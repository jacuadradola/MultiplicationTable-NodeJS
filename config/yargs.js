const argv = require('yargs')

    .option('b', {
        alias: 'base',
        type: 'number',
        demandOption: true,
        describe: 'Es la base de la tabla de multiplicar'
    })
    .option('l', {
        alias: 'listar',
        type: 'boolean',
        default: false,
        describe: 'Lista la tabla al finalizar'
    }).option('h', {
        alias: 'hasta',
        type: 'number',
        default: 10,
        describe: 'Establece el limite de la tabla'
    }).check((argv, Options) => {
        if (isNaN(argv.base)) {
            throw 'La base tiene que ser número'
        }
        return true;
    })
    .argv;

    module.exports = argv;