import * as express from 'express';
import ControllerExamples from './controllerExamples';

export default express
.Router()
.post('/', ControllerExamples.create)
.get('/', ControllerExamples.all)
.get('/:id', ControllerExamples.byId);
