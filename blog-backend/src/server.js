const express = require("express")
const bodyParser = require("body-parser")
const {MongoClient} = require("mongodb")

const app = express();

app.use(bodyParser.json());

app.get('/api/articles/:name', async (req,res)=> {
  try {
    const articleName = req.params.name;
    const client = await MongoClient.connect('mongodb://localhost:27017', {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("mern-blog");
    const articleInfo = await db.collection('articles').findOne({name: articleName})
    res.status(200).json(articleInfo)
    client.close();
  } catch(err) {
    res.status(500).json({message: "Can't connecto to database", err});
  }
});

app.post('/api/articles/:name/add-comments', (req, res) => {
  const { username, text } = req.body;
  const articleName = req.params.name;

  articlesInfo[articleName].comments.push({username, text});
  res.status(200).send(articlesInfo[articleName]);
});
app.listen(8000, () => console.log("listening on port 8000"));