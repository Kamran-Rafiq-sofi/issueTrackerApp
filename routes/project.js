const express=require('express');
const router=express.Router();
const projectController=require('../controllers/project_Controller')
// router.get('/project',projectController.project)

router.post('/create', projectController.create);
router.get('/:id', projectController.project);
router.post('/:id', projectController.createIssue);
module.exports=router;
