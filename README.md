## elasticSearch Play

Play with elasticSearch filters, tokenizers and analyzers online without install anything!

Available at http://es.subitolabs.com, open or create index at http://es.subitolabs.com/#/testr/YOURINDEX (replace YOURINDEX by the name you want).

### Screenhots

![alt tag](https://raw.githubusercontent.com/subitolabs/elasticsearch-play/gh-pages/images/screenshot1.jpg)

### Technologies

#### Front stack

- Angular as Javascript framework
- Compass as CSS framework
- Grunt as task manager (minify, test ...)

#### Server stack

- Php without framework (a bit of SF2 component)
- Php elasticSearch library
- Nginx as HTTP server
- ElasticSearch 1.4 as ... elasticsearch server
- ICU and Phonetic plugins
- Hosted on SubitoLabs cloud

And a lot of magic!

#### How it works ?

Add some filters, you can click on "+" button to browse existing filter (this will add default options as well), then you can add some analyzers (this is optional), end click on "Run test" et voilà!

Php API will call elasticSearch _analyze API for each filters and each analyzers.

#### Road maps

Keep in touch with the road map by browsing the issues page.

### Contributions

It's an open project, contributors are welcome. Send us pull request on master branch, we will merge it asap.
