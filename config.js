module.exports = {
  client_port: 3000,
  client_host: 'http://localhost:3000',
  server_port: 4000,
  server_host: 'http://localhost:4000',
  dboptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
		auto_reconnect: true,
		poolSize: 10
  },
  OAUTH2_CLIENT_ID: '122388849548-qtdng04l7vo27i6up7429dr87korq64e.apps.googleusercontent.com',
  OAUTH2_CLIENT_SECRET: 'RePeveCIVncsrt2oeYy-ng0h',
  OAUTH2_CALLBACK: 'http://localhost:8080/auth/google/callback'
}
