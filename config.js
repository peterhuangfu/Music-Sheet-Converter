module.exports = {
  client_port: 3000,
  client_host: "http://localhost:3000",
  server_port: 4000,
  server_host: "http://localhost:4000",
  dboptions: {
    useNewUrlParser: true,
    useUnifiedTopology: true,
		auto_reconnect: true,
		poolSize: 10
	}
}
