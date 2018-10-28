const argv=require('./config/yargs').argv
const {crearArchivo,listar}=require('./operacion/multiplicar');

let comando=argv._[0];
switch (comando) {
    case 'listar':
        listar(argv.base,argv.limite);
        break;
    case 'crear':
        crearArchivo(argv.base,argv.limite)
        .then((archivo)=>{
            console.log(`archivo creado: ${archivo}`);
        })
        .catch(e=>console.log(e))
        break;
    default:
        console.log('comando no reconocido');
        break;
}



