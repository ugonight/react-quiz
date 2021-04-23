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

exports.getRatingList = function() {
    return new Promise(function(callback) {
        axios.get('/Menu/Ratings')
            .then(function(response) {
                callback(response.data);
            })
            .catch(function(error) {
                console.error("REST ERROR from /Menu/Ratings");
            });
    });
}

exports.getQuizCount = function(categoryList, ratingList) {
    return new Promise(function(callback) {
        // console.log(categoryList);
        axios.post('/Menu/QuizCount', { categoryList: categoryList, ratingList: ratingList })
            .then(function(response) {
                callback(response.data);
            })
            .catch(function(error) {
                console.error("REST ERROR from /Menu/QuizCount\n" + error);
            });
    });
}