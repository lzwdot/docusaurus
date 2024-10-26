const fs = require('fs');
const dayjs = require('dayjs')
const Parser = require('rss-parser');
const parser = new Parser();
const feeds = {};
const sources = [
  { key: 'docusaurus', link: 'https://docusaurus.io/zh-CN/blog/rss.xml' },
  { key: 'vuejs', link: 'https://blog.vuejs.org/feed.rss' },
  { key: 'nodejs', link: 'https://nodejs.org/zh-cn/feed/blog.xml' },
  { key: 'laravel', link: 'https://feed.laravel-news.com' },
  { key: 'javascriptweekly', link: 'https://cprss.s3.amazonaws.com/javascriptweekly.com.xml' },
]

!(async () => {
  for (let v of sources) {
    const res = await parser.parseURL(v.link);
    const data = {
      title: res.title,
      description: res.description=='undefined' ? '' : res.description,
      items: []
    }
    res.items.forEach(item => {
      data.items.push({
        title: item.title,
        link: item.link,
        description: item.content || item.contentSnippet || item.description,
        pubDate:  dayjs(item.isoDate).format('YYYY-MM-DD')
      })
    });

    feeds[v.key] = data;
  }

  fs.writeFileSync(`./src/data/feed.json`, JSON.stringify(feeds));
})();


