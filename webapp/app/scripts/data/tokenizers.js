var availableTokenizers = [
{
    "title": "Standard Tokenizer",
    "url": "analysis-standard-tokenizer.html",
    "uid": "standard",
    "options": [
        {"title": "max_token_length", "default": 255}
    ]
}, {
    "title": "Edge NGram Tokenizer",
    "url": "analysis-edgengram-tokenizer.html",
    "uid": "edgeNGram",
    "options": [
        {"title": "min_gram", "default": 1},
        {"title": "max_gram", "default": 2},
        {"title": "token_chars", "default": []}
    ]
}, {
    "title": "Keyword Tokenizer",
    "url": "analysis-keyword-tokenizer.html",
    "uid": "keyword",
    "options": [
        {"title": "buffer_size", "default": 256}
    ]

}, {
    "title": "Letter Tokenizer",
    "url": "analysis-letter-tokenizer.html",
    "uid": "letter"
}, {
    "title": "Lowercase Tokenizer",
    "url": "analysis-lowercase-tokenizer.html",
    "uid": "lowercase"
}, {
    "title": "NGram Tokenizer",
    "url": "analysis-ngram-tokenizer.html",
    "uid": "nGram",
    "options": [
        {"title": "min_gram", "default": 1},
        {"title": "max_gram", "default": 2},
        {"title": "token_chars", "default": []}
    ]
}, {
    "title": "Whitespace Tokenizer",
    "url": "analysis-whitespace-tokenizer.html",
    "uid": "whitespace"
}, {
    "title": "Pattern Tokenizer",
    "url": "analysis-pattern-tokenizer.html",
    "uid": "pattern",
    "options": [
        {"title": "pattern", "default": "\\W+"},
        {"title": "flags", "default": ""},
        {"title": "group", "default": -1}
    ]
}, {
    "title": "UAX Email URL Tokenizer",
    "url": "analysis-uaxurlemail-tokenizer.html",
    "uid": "uax_url_email",
    "options": [
        {"title": "max_token_length", "default": 255}
    ]
}, {
    "title": "Path Hierarchy Tokenizer",
    "url": "analysis-pathhierarchy-tokenizer.html",
    "uid": "path_hierarchy",
    "options": [
        {"title": "delimiter", "default": "/"},
        {"title": "replacement", "default": "/"},
        {"title": "buffer_size", "default": 1024},
        {"title": "reverse", "default": false},
        {"title": "skip", "default": 0},
        {"title": "type", "default": "PathHierarchy"}
    ]
}, {
    "title": "Classic Tokenizer",
    "url": "analysis-classic-tokenizer.html",
    "uid": "classic",
    "options": [
        {"title": "max_token_length", "default": 255}
    ]
},
    {"title": "Thai Tokenizer", "url": "analysis-thai-tokenizer.html", "uid": "thai"},
    {"title" : "ICU", "uid":"icu_tokenizer", "url" : "https://github.com/elasticsearch/elasticsearch-analysis-icu"}
];