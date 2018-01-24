const {Controller} = require('bak')

const {Contact} = require('../models')

class ContactController extends Controller {
	init() {
		this.get('/contact', this.contactGet)
		this.post('/contact', this.contactPost)
	}

	async contactGet() {
		const all = await Contact.find({})
		return all;
	}

	async contactPost(req, res) {
	
	}
}

module.exports = ContactController