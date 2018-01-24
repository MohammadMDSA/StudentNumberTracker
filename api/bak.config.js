module.exports = {
	// Routes
	prefix: '/api',
	routes: [
		'./controllers/contact'
	],

	// Plugins
	registrations: [
		'@bakjs/mongo',
		// '@bakjs/auth'
	],

	// Mongo, lkm
	mongo: {
		connections: {
			default: {
				uri: 'mongodb://localhost/contacts'
			}
		}
	}
}