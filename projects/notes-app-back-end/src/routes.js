/** Memuat kode konfigurasi routing server seperti menentukan path, method, dan handler *
 * yang digunakan. *
 * */

const { addNoteHandler, getAllnotesHandler } = require('./handler');

const routes = [
	{
		method: 'POST',
		path: '/notes',
		handler: addNoteHandler,
	},
	{
		method: 'GET',
		path: '/notes',
		handler: getAllnotesHandler,
	},
];

module.exports = routes;
