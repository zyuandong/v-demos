const Mock = require('mockjs');
const Random = Mock.Random;

const mockArticle = function () {
  let isCN = Math.random()*10 < 5;
  let article = {
    title: isCN ? Random.ctitle(5, 30) : Random.title(5, 30),
    date: Random.datetime(),
    author: isCN ? Random.cname() : Random.name(),
    category: isCN ? Random.cword(3, 5) : Random.word(3, 5),
    tags: [],
    image: Random.dataImage('200x200'),
    content: isCN ? Random.cparagraph(10, 50) : Random.paragraph(10, 50)
  };

  let loopNumber = Math.random()*10+1;
  for (let i=0; i<loopNumber; i++) {
    article.tags.push(isCN ? Random.cword(3, 5) : Random.word(3, 5));
  }

  return {
    data: article
  }
};

Mock.mock('/article/articleId', 'post', mockArticle);