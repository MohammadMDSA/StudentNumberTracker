const {Controller} = require('bak')

const {Contact} = require('../models')

class ContactController extends Controller {
	init() {
		this.get('/contact', this.contactGet)
		this.post('/contact', this.contactPost)
	}

	async contactGet() {
		const all = await Contact.find({});
		console.log(all);
		return all;
	}

	async contactPost(req, res) {
		console.log('inside');
		let payload = req.payload;
		console.log(payload.data)
		if(payload.action === 'add') {
			let c = new Contact(payload.data);
			let result = await c.save();
			console.log(result);
			if(result.ok === 1) return true;
			return false;
		}
		else {

		}
	}
}

module.exports = ContactController