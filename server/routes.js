import examplesRouter from './api/controllers/examples/router';
import nodePostRouter from './api/controllers/nodePost/router';

export default function routes(app) {
  app.use('/api/v1/examples', examplesRouter);
  app.use('/api/v1/nodepost', nodePostRouter);
}
