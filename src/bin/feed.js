const fs = require('fs');
const Parser = require('rss-parser');
const parser = new Parser();
const feeds = {};
const sources = [
  { key: 'docusaurus', link: 'https://docusaurus.io/zh-CN/blog/rss.xml' }
]

!(async () => {
  for (let v of sources) {
    const res = await parser.parseURL(v.link);
    const data = {
      title: res.title,
      description: res.description,
      items: []
    }
    res.items.forEach(item => {
      data.items.push({
        title: item.title,
        link: item.link,
        description: item.description || item.contentSnippet,
        pubDate: item.pubDate
      })
    });
    feeds[v.key] = data;
  }

  fs.writeFileSync(`./src/data/feed.json`, JSON.stringify(feeds));
})();


