const { response } = require("express")

const fs = require('fs')

let directoryName = "C:/Users/Laptop Asus M415DA/Desktop/Universidad/semestre 8/S.O/taller procesos/files";

const getFolders = async (req, res = response) => {
    console.log("UUUUUUUUUUUUUUUUUUUU");
    let folders = []
    let localFolders = fs.readdirSync(directoryName);
    localFolders.forEach((folder) => {
        folders.push(folder)
    });
    console.log("aaaaaaaaaaaaaaaaaaaaaaaaa");

    return res.status(200).json(
        {
            msg: "consulta éxitosa",
            statusCode: 0,
            body: folders
        }

    )
}

const getChildFolders = async (req, res = response) => {
    let { folderName } = req.params

    const url = `${directoryName}/${folderName}`;
    let localChildFolders = fs.readdirSync(url.toString());
    let childFolders = []

    localChildFolders.forEach((folder) => {
        childFolders.push(folder)
    });

    return res.status(200).json(
        {
            msg: "consulta éxitosa",
            statusCode: 0,
            body: childFolders
        }

    )
}
const getFolderFiles = async (req, res = response) => {

    let { folderName, childFolderName } = req.params

    const url = `${directoryName}/${folderName}/${childFolderName}`;
    let localfiles = fs.readdirSync(url.toString());
    let files = []

    localfiles.forEach((folder) => {
        files.push(folder)
    });

    return res.status(200).json(
        {
            msg: "consulta éxitosa",
            statusCode: 0,
            body: files
        }
    )
}
module.exports = { 
    getFolders, 
    getChildFolders,
    getFolderFiles, 
}  