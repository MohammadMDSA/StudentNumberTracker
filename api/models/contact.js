const { Model, Schema } = require('@bakjs/mongo')

class Contact extends Model {
	static get $schema() {
		return {
			firstName: {type: Schema.Types.String},
			lastName: {type: Schema.Types.String},
			dateOfBirth: {type: Schema.Types.Date},
			userName: {type: Schema.Types.String},
			note: {type: Schema.Types.String}
		}
	}
}

module.exports = Contact.$model;