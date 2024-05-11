module.exports = {
  host: process.env.HOST,
  port: process.env.PORT_EMAIL,
  secure: process.env.SECURE,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  }
}
