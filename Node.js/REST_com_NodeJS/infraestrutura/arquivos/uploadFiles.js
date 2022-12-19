const fs = require('fs')
const _path = require('path')


module.exports = (path, filename, callbackCreatedImage) => {
    const validTypes = ['jpg', 'png', 'jpeg']
    const ext = _path.extname(path)
    const typeIsValid = validTypes.indexOf(ext.substring(1)) !== -1

    if(typeIsValid) {
        const newPath = `./assets/images/${filename}${ext}`
    
        fs.createReadStream(path)
            .pipe(fs.createWriteStream(newPath))
            .on('finish', () => callbackCreatedImage(false, newPath))
        } else {
            const erro = 'Tipo de imagem inválida'
            console.log('Erro! Tipo de imagem inválida.')
            callbackCreatedImage(erro)
        }
}