import * as express from 'express';
import ControllerNodePost from './controllerNodePost';

export default express
.Router()
.get('/', ControllerNodePost.all)
.get('/:id', ControllerNodePost.byId)
.delete('/:id', ControllerNodePost.remove);