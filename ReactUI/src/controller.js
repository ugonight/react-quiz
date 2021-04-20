const axiosBase = require('axios');
const axios = axiosBase.create({
    baseURL: '',
    headers: {
        'Content-Type': 'application/json',
    },
    responseType: 'json'
});

exports.getCategoryList = function() {
    return new Promise(function(callback) {
        axios.get('/Menu/Categories')
            .then(function(response) {
                callback(response.data);
            })
            .catch(function(error) {
                console.error("REST ERROR from /Menu/Categories");
            });
    });
}