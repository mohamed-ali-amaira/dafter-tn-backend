module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '62f91ee4e0be11f85a69b1fcebed29dd'),
  },
});
