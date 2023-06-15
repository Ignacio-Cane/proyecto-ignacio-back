const multer=require('multer');

const storage= multer.diskStorage({
    destination:(req, file, callback)=>{
        const pathDocument= './imagenes' 
        callback(null,pathDocument)
    },
    filename:(req, file, callback)=>{
        const ext= file.originalname.split('.').pop()
        const filename=`img-${Date.now()}.${ext}`
        callback(null,filename)
    },
});
const upload= multer({storage});

module.exports= upload;