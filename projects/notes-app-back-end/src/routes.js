/** Memuat kode konfigurasi routing server seperti menentukan path, method, dan handler *
 * yang digunakan. *
 * */

const { addNoteHandler } = require('./handler');

const routes = [
	{
		method: 'POST',
		path: '/notes',
		handler: addNoteHandler,
	},
];

module.exports = routes;
