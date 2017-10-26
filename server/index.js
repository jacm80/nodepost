import './common/env';
import Server from './common/server';
import routes from './routes';

import '../custom_modules/dbconn';

export default new Server()
  .router(routes)
  .listen(process.env.PORT);
