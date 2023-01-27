const path = require("path");
const pinFileToIPFS = require("./pinFileToIPFS");
const fs = require('fs')
const subColletion=4
exports.runScript= Model => async (req, res, next) => {
    for(let i=1;i<=25;i++){
        setTimeout(async()=>{
    
           let hash = await uploadToIPFS(i)
           await readDataFromJSON(Model,i,hash)
        }, i*3000);
    
        
    }

    res.status(204).json({
                    status: 'success',
                    data: null
                });

}


function jsonReader(filePath, cb) {
    fs.readFile(filePath, (err, fileData) => {
        if (err) {
            return cb && cb(err)
        }
        try {
            const object = JSON.parse(fileData)
            return cb && cb(null, object)
        } catch(err) {
            return cb && cb(err)
        }
    })
}

const readDataFromJSON = async(Model,i,hash)=>{
    let filePath = path.join(__dirname, `../NFT/Sub${subColletion}/${i}.json`);

    jsonReader(filePath, async (err, nftData) => {
        if (err) {
            console.log(err)
            return
        }
        await Model.create({
            name:nftData.name,
            image:nftData.image,
            hash:hash,
            categories:subColletion,
            description:nftData.description,
            attributes:nftData.attributes
        })
       console.log(`save to database for name: ${nftData.name}, hash: ${hash}`)
    })
}
const uploadToIPFS = async(i)=>{
    let filePath = path.join(__dirname, `../NFT/Sub${subColletion}/${i}.json`);

     return await pinFileToIPFS(filePath);
}
