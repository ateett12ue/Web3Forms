// import {useMoralis} from "react-moralis"

// export async function UploadIpfs(ethAdd, data){
//     const {Moralis} = useMoralis()

//     const metaData = {
//         "name": ethAdd,
//         "description": data
//     }
//     const file = new Moralis.File("file.json", {base64: btoa(JSON.stringify(metaData ))})
//     await file.saveIPFS();

//     console.log(file.ipfs(), file.hash())

//     return file.ipfs();
// } 

