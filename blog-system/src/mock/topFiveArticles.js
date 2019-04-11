const Mock = require('mockjs');
const Random = Mock.Random;

const mockFiveArticles = function () {
  let topFiveArticles = [];

  for (let i=0; i<5; i++) {
    let isCN = Math.random()*10 < 5;
    let mockArticleObj = {
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
      mockArticleObj.tags.push(isCN ? Random.cword(3, 5) : Random.word(3, 5));
    }

    topFiveArticles.push(mockArticleObj);
  }

  return {
    data: topFiveArticles
  }
};

Mock.mock('/articles/top-five', 'post', mockFiveArticles);
