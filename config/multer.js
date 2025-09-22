import multer from 'multer'
const stoarge =  multer.diskStorage({
    destination : 'upload',
    filename : (req,file,cb) =>{
        cb(null,file.originalname)
    } 
})