export interface AppConfig {
  pagination: {
    page: number;
    size: number;
  };
  app: {
    name: string;
    version: string;
    port: number;
    env: string;
    corsOrigin: string;
    corsMethods: string;
  };
  mongodb: {
    uri: string;
    username: string;
    password: string;
    dbName: string;
  };
}

const configuration = (): AppConfig => ({
  pagination: {
    page: parseInt(process.env.PAGE || '1', 10),
    size: parseInt(process.env.SIZE || '20', 10),
  },
  app: {
    name: process.env.APP_NAME || 'Simple Chat System',
    version: process.env.APP_VERSION || '0.0.1',
    port: parseInt(process.env.PORT || '3000', 10),
    env: process.env.NODE_ENV || 'development',
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    corsMethods: process.env.CORS_METHODS || 'GET,POST',
  },
  mongodb: {
    uri: process.env.MONGODB_URI || 'mongodb://localhost:27017',
    username: process.env.MONGODB_USERNAME || 'admin',
    password: process.env.MONGODB_PASSWORD || 'password',
    dbName: process.env.MONGODB_DB_NAME || 'chat-system',
  },
});

export default configuration;
