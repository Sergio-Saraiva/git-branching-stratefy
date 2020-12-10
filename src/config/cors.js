import 'dotenv/config';

const corsConfig = {};

if (process.env.NODE_ENV === 'production') {
  corsConfig.corsOption = {
    origin(origin, callback) {
      if (!origin || [process.env.FRONT1_URL].indexOf(origin) !== -1) {
        callback(null, origin);
      } else {
        callback(new Error('Not allowed by CORS'));
      }
    },
  };
} else {
  corsConfig.corsOption = {
    origin: '*',
  };
}

export default corsConfig;
