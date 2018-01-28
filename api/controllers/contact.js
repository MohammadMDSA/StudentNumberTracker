const {Controller} = require('bak')

const {Contact} = require('../models')

class ContactController extends Controller {
	init() {
		this.get('/contact', this.contactGet)
		this.post('/contact', this.contactPost)
	}

	async contactGet() {
		const all = await Contact.find({});
		return all;
	}

	async contactPost(req, res) {
		let payload = req.payload;
		if(payload.action === 'add') {
			let c = new Contact(payload.data);
			let result = await c.save();
			// TODO something not right here
			return result;
		}
		else {
			let result = await Contact.remove(payload.data)
			return result;
		}
	}
}

module.exports = ContactController;