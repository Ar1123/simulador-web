const { Router } = require('express');
const { getFolders, getChildFolders, getFolderFiles } = require('../controller/local_process');

const router = Router();
router.get('/home', (req, res) => {
    
    res.render('index', { title: 'First Web Node' }
    
    );

});
router.get('/getFolders/v1', getFolders,)
router.get('/getChildFolders/v1/:folderName', getChildFolders,)
router.get('/getFolderfiles/v1/:folderName/:childFolderName', getFolderFiles,)


module.exports = router