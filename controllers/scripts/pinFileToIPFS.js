
// const fs = require('fs');
// import axios from 'axios';
// const FormData = require('form-data');
// const path = require('path');
// const envFilePath = path.join(__dirname, '../config.env');
// require('dotenv').config({path:envFilePath});

// // Calls Pinata API's to pin file to IPFS
// const pinFileToIPFS = async (filePath) => {
//   const pinataEndpoint = process.env.PINATA_ENDPOINT;
//   const pinataApiKey = process.env.PINATA_API_KEY;
//   const pinataApiSecret = process.env.PINATA_API_SECRET;
//   const form_data = new FormData();
//   try {
//     form_data.append('file', fs.createReadStream(filePath));
//     const request = {
//       method: 'post',
//       url: pinataEndpoint,
//       maxContentLength: 'Infinity',
//       headers: {
//         pinata_api_key: pinataApiKey,
//         pinata_secret_api_key: pinataApiSecret,
//         'Content-Type': `multipart/form-data; boundary=${form_data._boundary}`,
//       },
//       data: form_data,
//     };
//    // console.log('request:', request);
//     const response = await axios(request);
//     console.log(`Successfully pinned file to IPFS : ${response.data.IpfsHash}`);
   
//     return response.data.IpfsHash
//    // await storeDataToFile(response.data);
//     //console.log('Successfully added IPFS response to json file');
//   } catch (err) {
//     console.log('Error occurred while pinning file to IPFS: ', err);
//   }
// };

// module.exports = pinFileToIPFS;
