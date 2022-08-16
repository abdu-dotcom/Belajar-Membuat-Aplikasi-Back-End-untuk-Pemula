const routes = [{
            method: 'GET',
            path: '/',
            handler: (request, h) => {
                return `HomePage`;
            }
        },
        {
            method: '*',
            path: '/',
            handler: (request, h) => {
                return `Halaman tidak dapat diakses dengan method tersebut`;
            }
        },
        {
            method: 'GET',
            path: '/about',
            handler: (request, h) => {
                return `About Page`;
            }
        },
        {
            method: '*',
            path: '/about',
            handler: (request, h) => {
                return 'Halaman tidak dapat diakses dengan method';
            },
        },
        {
            method: 'GET',
            path: '/hello/{username?}',
            handler: (request, h) => {
                const { username = "stranger" } = request.params;
                return `Hello, ${username}!`;
            },
        },
        {
            method: '*',
            path: '/{any*}',
            handler: (request, h) => {
                return 'Halaman tidak ditemukan';
            },
        },
    ]

module.exports = routes;