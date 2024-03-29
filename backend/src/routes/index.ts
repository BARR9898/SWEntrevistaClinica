import {Router} from "express";
import {readdirSync} from "fs"

const PATH_ROUTER = `${__dirname}`;
const router = Router();


/**
 * 
 * @param fileName 
 * @returns 
 */
const cleanFileName = (fileName:string) => {
    const file = fileName.split('.').shift();
    return file;
}

readdirSync(PATH_ROUTER).filter((fileName) => {
    const cleanName = cleanFileName(fileName);
    if (cleanName !== 'index') {
        import(`./${cleanName}`).then((moduleRouter) => {
            console.log(`SE ESTA CARGANDO LA RUTA .../${cleanName}`);

            
            router.use(`/api/${cleanName}`,moduleRouter.router)
        })
    }
 


    
})



export {router};

