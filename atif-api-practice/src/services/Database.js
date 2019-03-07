import mongoose from 'mongoose';

export default class Database {
    static open ({mongoUrl}) {
        // Mongoose options
        console.log(mongoUrl);
      const options = {
        useNewUrlParser: true
      };
      mongoose.connect(mongoUrl, options);
      const db = mongoose.connection;
      // Mock the mongoose for testing purpose using Mockgoose
      // connect to mongo db
        return new Promise ((resolve, reject)=>  {
            db.on('connected',()=>{
                resolve();
            });
            db.on('error',(err)=>{
                reject(err);
            });

        });
    }
    static close(){
        mongoose.disconnect();
    }
}