require('source-map-support/register')
module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, {
/******/ 				configurable: false,
/******/ 				enumerable: true,
/******/ 				get: getter
/******/ 			});
/******/ 		}
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "/";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 5);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("express");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("mongoose");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("path");

/***/ }),
/* 3 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _pino = __webpack_require__(16);

var _pino2 = _interopRequireDefault(_pino);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const l = (0, _pino2.default)({
  name: process.env.APP_ID,
  level: process.env.LOG_LEVEL
});

exports.default = l;

/***/ }),
/* 4 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
var Schema = __webpack_require__(1).Schema;

var nodePost = new Schema({
  id: Number,
  title: String,
  author: String,
  date: String
});

exports.default = nodePost;

/***/ }),
/* 5 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(6);


/***/ }),
/* 6 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

__webpack_require__(7);

var _server = __webpack_require__(9);

var _server2 = _interopRequireDefault(_server);

var _routes = __webpack_require__(17);

var _routes2 = _interopRequireDefault(_routes);

__webpack_require__(25);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = new _server2.default().router(_routes2.default).listen(process.env.PORT);

/***/ }),
/* 7 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _dotenv = __webpack_require__(8);

var _dotenv2 = _interopRequireDefault(_dotenv);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_dotenv2.default.config();

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("dotenv");

/***/ }),
/* 9 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var _express2 = _interopRequireDefault(_express);

var _path = __webpack_require__(2);

var path = _interopRequireWildcard(_path);

var _bodyParser = __webpack_require__(10);

var bodyParser = _interopRequireWildcard(_bodyParser);

var _http = __webpack_require__(11);

var http = _interopRequireWildcard(_http);

var _os = __webpack_require__(12);

var os = _interopRequireWildcard(_os);

var _cookieParser = __webpack_require__(13);

var _cookieParser2 = _interopRequireDefault(_cookieParser);

var _swagger = __webpack_require__(14);

var _swagger2 = _interopRequireDefault(_swagger);

var _logger = __webpack_require__(3);

var _logger2 = _interopRequireDefault(_logger);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const app = new _express2.default();

class ExpressServer {
  constructor() {
    const root = path.normalize(`${__dirname}/../..`);
    app.set('appPath', `${root}client`);
    app.set('view engine', 'pug');
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));
    app.use((0, _cookieParser2.default)(process.env.SESSION_SECRET));
    app.use(_express2.default.static(`${root}/public`));
  }

  router(routes) {
    (0, _swagger2.default)(app, routes);
    return this;
  }

  listen(port = process.env.PORT) {
    const welcome = p => () => _logger2.default.info(`up and running in ${"development" || 'development'} @: ${os.hostname()} on port: ${p}}`);
    http.createServer(app).listen(port, welcome(port));
    return app;
  }
}
exports.default = ExpressServer;
/* WEBPACK VAR INJECTION */}.call(exports, "server/common"))

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("body-parser");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("http");

/***/ }),
/* 12 */
/***/ (function(module, exports) {

module.exports = require("os");

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("cookie-parser");

/***/ }),
/* 14 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";
/* WEBPACK VAR INJECTION */(function(__dirname) {

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (app, routes) {
  (0, _swaggerExpressMiddleware2.default)(path.join(__dirname, 'Api.yaml'), app, (err, mw) => {
    // Enable Express' case-sensitive and strict options
    // (so "/entities", "/Entities", and "/Entities/" are all different)
    app.enable('case sensitive routing');
    app.enable('strict routing');

    app.use(mw.metadata());
    app.use(mw.files({
      // Override the Express App's case-sensitive 
      // and strict-routing settings for the Files middleware.
      caseSensitive: false,
      strict: false
    }, {
      useBasePath: true,
      apiPath: process.env.SWAGGER_API_SPEC
      // Disable serving the "Api.yaml" file
      // rawFilesPath: false
    }));

    app.use(mw.parseRequest({
      // Configure the cookie parser to use secure cookies
      cookie: {
        secret: process.env.SESSION_SECRET
      },
      // Don't allow JSON content over 100kb (default is 1mb)
      json: {
        limit: process.env.REQUEST_LIMIT
      }
    }));

    // These two middleware don't have any options (yet)
    app.use(mw.CORS()
    //mw.validateRequest()
    );

    // Error handler to display the validation error as HTML
    app.use((err, req, res, next) => {
      // eslint-disable-line no-unused-vars, no-shadow
      res.status(err.status || 500);
      res.send(`<h1>${err.status || 500} Error</h1>` + `<pre>${err.message}</pre>`);
    });

    routes(app);
  });
};

var _swaggerExpressMiddleware = __webpack_require__(15);

var _swaggerExpressMiddleware2 = _interopRequireDefault(_swaggerExpressMiddleware);

var _path = __webpack_require__(2);

var path = _interopRequireWildcard(_path);

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }
/* WEBPACK VAR INJECTION */}.call(exports, "server/common/swagger"))

/***/ }),
/* 15 */
/***/ (function(module, exports) {

module.exports = require("swagger-express-middleware");

/***/ }),
/* 16 */
/***/ (function(module, exports) {

module.exports = require("pino");

/***/ }),
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = routes;

var _router = __webpack_require__(18);

var _router2 = _interopRequireDefault(_router);

var _router3 = __webpack_require__(22);

var _router4 = _interopRequireDefault(_router3);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function routes(app) {
  app.use('/api/v1/examples', _router2.default);
  app.use('/api/v1/nodepost', _router4.default);
}

/***/ }),
/* 18 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var express = _interopRequireWildcard(_express);

var _controllerExamples = __webpack_require__(19);

var _controllerExamples2 = _interopRequireDefault(_controllerExamples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = express.Router().post('/', _controllerExamples2.default.create).get('/', _controllerExamples2.default.all).get('/:id', _controllerExamples2.default.byId);

/***/ }),
/* 19 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.ControllerExamples = undefined;

var _examples = __webpack_require__(20);

var _examples2 = _interopRequireDefault(_examples);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ControllerExamples {

  all(req, res) {
    _examples2.default.all().then(r => res.json(r));
  }

  byId(req, res) {
    _examples2.default.byId(req.params.id).then(r => {
      if (r) res.json(r);else res.status(404).end();
    });
  }

  create(req, res) {
    _examples2.default.create(req.body.name).then(r => res.status(201).location(`/api/v1/examples/${r.id}`).json(r));
  }

}

exports.ControllerExamples = ControllerExamples;
exports.default = new ControllerExamples();

/***/ }),
/* 20 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _logger = __webpack_require__(3);

var _logger2 = _interopRequireDefault(_logger);

var _examplesDb = __webpack_require__(21);

var _examplesDb2 = _interopRequireDefault(_examplesDb);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class ExamplesService {
  all() {
    _logger2.default.info(`${this.constructor.name}.all()`);
    return _examplesDb2.default.all();
  }

  byId(id) {
    _logger2.default.info(`${this.constructor.name}.byId(${id})`);
    return _examplesDb2.default.byId(id);
  }

  create(name) {
    return _examplesDb2.default.insert(name);
  }
}

exports.default = new ExamplesService();

/***/ }),
/* 21 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
class ExamplesDatabase {
  constructor() {
    this._data = [];
    this._counter = 0;

    this.insert('example 0');
    this.insert('example 1');
  }

  all() {
    return Promise.resolve(this._data);
  }

  byId(id) {
    return Promise.resolve(this._data[id]);
  }

  insert(name) {
    const record = {
      id: this._counter,
      name
    };

    this._counter += 1;
    this._data.push(record);

    return Promise.resolve(record);
  }
}

exports.default = new ExamplesDatabase();

/***/ }),
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _express = __webpack_require__(0);

var express = _interopRequireWildcard(_express);

var _controllerNodePost = __webpack_require__(23);

var _controllerNodePost2 = _interopRequireDefault(_controllerNodePost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _interopRequireWildcard(obj) { if (obj && obj.__esModule) { return obj; } else { var newObj = {}; if (obj != null) { for (var key in obj) { if (Object.prototype.hasOwnProperty.call(obj, key)) newObj[key] = obj[key]; } } newObj.default = obj; return newObj; } }

exports.default = express.Router().get('/', _controllerNodePost2.default.all).get('/:id', _controllerNodePost2.default.byId).delete('/:id', _controllerNodePost2.default.remove);

/***/ }),
/* 23 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});
exports.ControllerNodePost = undefined;

var _pug = __webpack_require__(24);

var _pug2 = _interopRequireDefault(_pug);

var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _nodePost = __webpack_require__(4);

var _nodePost2 = _interopRequireDefault(_nodePost);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const nodePost = _mongoose2.default.model('nodePost', _nodePost2.default);

class ControllerNodePost {

    remove(req, res) {
        const id = req.params.id;
        console.log('id', id);
        nodePost.remove({ 'id': id }, err => {
            if (err) console.log('err', err);
        });
        res.json({ success: true });
    }

    all(req, res) {
        nodePost.find({}, (error, docs) => {
            res.render('index', { title: 'Node Post', message: 'Welcome!', 'posts': docs });
        });
    }

    byId(req, res) {
        const id = req.params.id;
        nodePost.find({ 'id': id }, (error, doc) => {
            res.json({ succes: true, data: doc });
        });
    }

}
exports.ControllerNodePost = ControllerNodePost;
exports.default = new ControllerNodePost();

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("pug");

/***/ }),
/* 25 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


var _mongoose = __webpack_require__(1);

var _mongoose2 = _interopRequireDefault(_mongoose);

var _nodePost = __webpack_require__(4);

var _nodePost2 = _interopRequireDefault(_nodePost);

var _algolia = __webpack_require__(26);

var _algolia2 = _interopRequireDefault(_algolia);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const POPULATE_TABLE = true;

// Build the connection string 

// Bring Mongoose into the app 
//var mongoose = require( 'mongoose' ); 
var dbURI = 'mongodb://localhost/nodepost';

// Create the database connection 
_mongoose2.default.connect(dbURI, { useMongoClient: true });

// CONNECTION EVENTS
// When successfully connected
_mongoose2.default.connection.on('connected', function () {
  console.log('Mongoose default connection open to ' + dbURI);
});

// If the connection throws an error
_mongoose2.default.connection.on('error', function (err) {
  console.log('Mongoose default connection error: ' + err);
});

// When the connection is disconnected
_mongoose2.default.connection.on('disconnected', function () {
  console.log('Mongoose default connection disconnected');
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function () {
  _mongoose2.default.connection.close(function () {
    console.log('Mongoose default connection disconnected through app termination');
    process.exit(0);
  });
});

_mongoose2.default.connection.once('open', function () {
  console.log('Connected!');

  if (!POPULATE_TABLE) {
    console.log('Database Not Sync');
    return;
  }

  const nodePost = _mongoose2.default.model('nodePost', _nodePost2.default);
  /* truncate table */
  nodePost.collection.remove();
  /* fill table with the service */
  _algolia2.default.all().then(response => {
    const posts = response.hits;
    for (var i in posts) {
      const p = posts[i];
      var _post = { 'id': p.created_at_i, 'title': p.story_title ? p.story_title : p.title, 'author': p.author, 'date': p.created_at
        // console.log('_post', _post)
      };nodePost.create(_post);
    }
    console.log('Database Sync');
  }).catch(error => {
    console.log('error', error);
  });
});

/***/ }),
/* 26 */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
    value: true
});

var _axios = __webpack_require__(27);

var _axios2 = _interopRequireDefault(_axios);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

const query = 'http://hn.algolia.com/api/v1/search_by_date?query=nodejs';

class Algolia {
    all() {
        return new Promise((resolve, reject) => {
            _axios2.default.get(query).then(response => {
                resolve(response.data);
            }).catch(error => {
                reject(error);
            });
        });
    }
}

exports.default = new Algolia();

/***/ }),
/* 27 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ })
/******/ ]);
//# sourceMappingURL=main.map