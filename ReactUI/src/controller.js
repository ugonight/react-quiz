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

exports.startQuiz = function(categoryList, ratingList, quesNumber) {
    return new Promise(function(callback) {
        // console.log(categoryList);
        axios.post('/Quiz/Start', { categoryList: categoryList, ratingList: ratingList, quesNumber: quesNumber })
            .then(function(response) {
                callback(response.data);
            })
            .catch(function(error) {
                console.error("REST ERROR from /Quiz/Start\n" + error);
            });
    });
}

exports.getCurrentQuestion = function() {
    return new Promise(function(callback) {
        // console.log(categoryList);
        axios.post('/Quiz/Get')
            .then(function(response) {
                callback(response.data);
            })
            .catch(function(error) {
                console.error("REST ERROR from /Quiz/Get\n" + error);
            });
    });
}

exports.applyResult = function(result) {
    return new Promise(function(callback) {
        axios.post('/Quiz/SetResult', { result: result })
            .then(function(response) {
                callback(response.data);
            })
            .catch(function(error) {
                console.error("REST ERROR from /Quiz/Get\n" + error);
            });
    });
}