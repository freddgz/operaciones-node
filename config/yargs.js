const opciones={
    base:{
        demand:true,
        alias:'b'
    },
    limite:{
        alias:'l',
        default:10
    }
}
const argv=require('yargs')
            .command('listar','mostra en consola',opciones)
            .command('crear','crea el archivo de la opracion',opciones)
            .help()
            .argv;
module.exports={
    argv
}