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
}

const configuration = (): AppConfig => ({
  pagination: {
    page: parseInt(process.env.PAGE || '1', 10),
    size: parseInt(process.env.SIZE || '20', 10),
  },
  app: {
    name: process.env.APP_NAME || 'Simple Chat System',
    version: process.env.APP_VERSION || '1.0.0',
    port: parseInt(process.env.PORT || '3000', 10),
    env: process.env.NODE_ENV || 'development',
    corsOrigin: process.env.CORS_ORIGIN || 'http://localhost:3000',
    corsMethods: process.env.CORS_METHODS || 'GET,POST',
  },
});

export default configuration;
