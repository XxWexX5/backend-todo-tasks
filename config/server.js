module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'), ['komny+Ffv3+DxzvwhXkbmQ==','EIDjvfsBpIcvneRCaukFGg==','Gl6FLars8cw4aFtbClfDTw==','L7ZTLg/2pbBTrgszW0oRfw=='],
  },
});
