const {Controller} = require('bak')

const {Contact} = require('../models')

class ContactController extends Controller {
	init() {
		this.get('/contact', this.contactGet)
		this.post('/contact', this.contactPost)
	}

	async contactGet() {
		const all = await Contact.find({});
		
		let cat = {
			'#': [],
			A: [],
			B: [],
			C: [],
			D: [],
			E: [],
			F: [],
			G: [],
			H: [],
			I: [],
			J: [],
			K: [],
			L: [],
			M: [],
			N: [],
			O: [],
			P: [],
			Q: [],
			R: [],
			S: [],
			T: [],
			U: [],
			V: [],
			W: [],
			X: [],
			Y: [],
			Z: []
		}

		all.forEach((item) => {
			let gp = item.lastName.charAt(0);
			if(gp.match(/[a-z]/i)) {
				cat[gp.toUpperCase()].push(item);
			}
			else {
				cat['#'].push(item);
			}
		});

		
		Object.keys(cat).forEach((item) => {
			cat[item].sort((a, b) => (a.lastName.toLowerCase() > b.lastName.toLowerCase()) ? 1 : -1);
		});
		
		console.log(cat);










		return cat;
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