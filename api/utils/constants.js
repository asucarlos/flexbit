'use strict';

exports.URL = process.env.MONGODB_URI || 'mongodb://heroku_8xzpgpqm:9lb1so0mik5f69ti8ptdv7fubh@ds045157.mlab.com:45157/heroku_8xzpgpqm'
// 'mongodb://localhost:27017/flexbit'
exports.PORT = process.env.PORT || 4000;
exports.SECRET = process.env.SECRET || 'super-secret-passphrase';
