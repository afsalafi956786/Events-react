import express from 'express';
const router=express.Router()
import {candidatePost,getNoticeboard} from '../controller/eventController.js'


router.post('/event',candidatePost);
router.get('/notice',getNoticeboard)


export default router;