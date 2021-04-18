const fs = require("fs");
const readline = require("readline");
const path = require('path');

// 引数1: 入力ファイル
var inputFile = process.argv[2];
// 引数2: 出力ファイル
var outputFile = process.argv[3];

const br = '\n';

// Streamを準備
const stream = fs.createReadStream(inputFile, {
    encoding: "utf8", // 文字コード
    highWaterMark: 1024 // 一度に取得するbyte数
});

// readlineにStreamを渡す
const reader = readline.createInterface({ input: stream });

var questions = [];
var question = null;
var sec = "";

const addQuestion = () => {
    // questionを追加する
    if (question) {
        question.sentence = question.sentence.trim();
        question.comment = question.comment.trim();

        questions.push(question);
    }
}

reader.on("line", (data) => {
    // #~
    if (/^# .*$/.test(data)) {
        // console.log("id : " + data.match(/^# (.*)$/)[1]);

        addQuestion();

        question = {
            "id": "",
            "sentence": "",
            "type": "",
            "choices": [],
            "answer": 0,
            "comment": "",
            "rating": 0,
            "category": path.basename(inputFile, ".md")
        };

        question.id = data.match(/^# (.*)$/)[1];
    }
    // ##~
    else if (/^## .*$/.test(data)) {
        // console.log("sec : " + data.match(/^## (.*)$/)[1]);
        sec = data.match(/^## (.*)$/)[1];
    }
    // その他
    else {
        // secで分岐
        switch (sec) {
            case 'sentence':
                {
                    question.sentence += data + br;
                }
                break;
            case 'type':
                {
                    if (data.length > 0) question.type = data;
                }
                break;
            case 'choices':
                {
                    if (/^- .*$/.test(data)) {
                        question.choices.push(data.match(/^- (.*)$/)[1]);
                    }
                }
                break;
            case 'answer':
                {
                    if (!data) break;

                    if (question.type === 'checkbox') {
                        question.answer = data.split(',').map(Number);
                    } else if (question.type === 'radio') {
                        question.answer = Number(data);
                    } else {
                        question.answer = data;
                    }
                }
                break;
            case 'comment':
                {
                    question.comment += data + br;
                }
                break;
            case 'rating':
                {
                    if (data)
                        question.rating = Number(data);
                }
                break;
            default:
                break;
        }
    }
});

reader.on('close', () => {
    // console.log(questions);
    addQuestion();

    fs.writeFileSync(outputFile, JSON.stringify(questions, null, "\t"));
});