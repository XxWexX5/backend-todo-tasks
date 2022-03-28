module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '6a4ed157accab73c5759d1f4f850a0bf'),
  },
});
