const MongoClient = require('mongodb').MongoClient;
const uri = require("./setting.json").MongoUrl || "mongodb://127.0.0.1:27017";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });
const fs = require('fs');

// 引数1: 入力ファイル
var inputFile = process.argv[2];

const transaction = async() => {
    try {
        const jsonObject = await JSON.parse(fs.readFileSync(inputFile, 'utf8'));

        await client.connect();
        const collection = client.db("react_quiz").collection("questions");

        // questionについてループ
        await Promise.all(jsonObject.map(async(question) => {
            // idを見て更新か追加か決める
            const _ques = await collection.findOne({ id: question.id });
            if (_ques) {
                await collection.updateOne({ "id": question.id }, { $set: question });
            } else {
                await collection.insertOne(question);
            }
        }));
    } catch (error) {
        console.log(error);
    } finally {
        client.close();
    }
};

transaction();