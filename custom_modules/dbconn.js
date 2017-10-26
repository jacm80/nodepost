
// Bring Mongoose into the app 
//var mongoose = require( 'mongoose' ); 
import mongoose from 'mongoose';
import nodePostSchema from '../models/nodePost.model';
import AlgoliaService from '../server/api/services/algolia.service';

const POPULATE_TABLE = true;

// Build the connection string 
var dbURI = 'mongodb://localhost/nodepost'; 

// Create the database connection 
mongoose.connect(dbURI, { useMongoClient: true }); 

// CONNECTION EVENTS
// When successfully connected
mongoose.connection.on('connected', function () {  
  console.log('Mongoose default connection open to ' + dbURI);
}); 

// If the connection throws an error
mongoose.connection.on('error',function (err) {  
  console.log('Mongoose default connection error: ' + err);
}); 

// When the connection is disconnected
mongoose.connection.on('disconnected', function () {  
  console.log('Mongoose default connection disconnected'); 
});

// If the Node process ends, close the Mongoose connection 
process.on('SIGINT', function() {  
  mongoose.connection.close(function () { 
    console.log('Mongoose default connection disconnected through app termination'); 
    process.exit(0); 
  }); 
}); 

mongoose.connection.once('open', function() {
    console.log('Connected!')

    if (!POPULATE_TABLE) {
      console.log('Database Not Sync');
      return;
    }

    const nodePost = mongoose.model('nodePost', nodePostSchema);
    /* truncate table */
    nodePost.collection.remove()
    /* fill table with the service */
    AlgoliaService.all().then(response => {
      const posts = response.hits
      for (var i in posts){
        const p = posts[i];
        var _post = { 'id': p.created_at_i, 'title': (p.story_title) ? p.story_title : p.title, 'author': p.author,'date': p.created_at }
        // console.log('_post', _post)
        nodePost.create(_post)
      }
      console.log('Database Sync');
    }).catch((error) => {
      console.log('error',error)
    })

  });