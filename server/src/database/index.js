import Sequelize from 'sequelize';
import mongoose from 'mongoose';

import databaseConfig from '../config/database';
import mongoConfig from '../config/mongo';

const models = [];

class Database {
  constructor() {
    this.mongo();
  }

  init() {
    this.connection = new Sequelize(databaseConfig);

    models
      .map(model => model.init(this.connection))
      .map(model => model.associate && model.associate(this.connection.models));
  }

  mongo() {
    this.mongoConnection = mongoose
      .connect(mongoConfig.MONGO_URI, {
        useCreateIndex: true,
        useNewUrlParser: true,
        useUnifiedTopology: true,
      })
      .then(() => console.log('connecting to database successfully'))
      .catch(err => console.error('could not connect to mongo DB', err));
  }
}

export default new Database();
