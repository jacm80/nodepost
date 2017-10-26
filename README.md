# nodePost

Node Post Aplication, connect with algolia Api and save the result to mongodb database
in table nodePosts 

## Database

Mongodb database name is **nodepost** (in uppercase), the name of the collection is **nodePost** with the capitalized "P"

## Install It
```
npm install
```

## Run It
#### Run in *development* mode:

```
npm run dev
```

#### Source Directories
* custom_modules: mongodb connection
    - dbconn: connection file with mongo database, this fila have a flag POPULATE_TABLE (line 8), if the variable is set to true
    ever sync the collection nodePost with algolia api, the idea is sync only time, and set false the var 
* models: mongodb schemas
    - nodePost.model.js
* views: template pug, html template
    - index.pug
* public
    - static files
* server/api/controllers: logic of the application, every module have own folder
    - nodePost: controller and route (express)
* server/api/services: external API called
    - algolia.service.js: call api with axios (http://hn.algolia.com/api/)

#### Run in *production* mode:

```
npm run compile
npm start
```

#### Run tests:

```
npm test
```

### Try It
* Point you're browser to [http://localhost:3000/api/v1/nodepost](http://localhost:3000/api/v1/nodepost)
* Invoke the REST endpoint `curl http://localhost:3000/api/v1/nodepost` to get list of node posts