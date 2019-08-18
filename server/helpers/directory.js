import fs from 'fs'

export const getAllDirectoryContent = (directory) => {
   return new Promise((resolve, reject) => {
     fs.readdir(directory, (err, files) => {
       if (err) {
         reject([])
       } else {
         resolve(files)
       }
     })
   })
}
