module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'b52ef91931e23b75b80139fb2c617cfc'),
  },
});
