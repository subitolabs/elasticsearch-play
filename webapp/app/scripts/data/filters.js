var availableFilters = [
    {
        "title": "Standard",
        "uid": "standard",
        "url" : "analysis-standard-tokenfilter.html",
        "options": []
    },
    {
        "title": "ASCII Folding",
        "uid": "asciifolding",
        "url" : "analysis-asciifolding-tokenfilter.html",
        "options": [
            {"title": "preserve_original", "default": false}
        ]
    },
    {
        "title": "Length",
        "uid": "length",
        "url" : "analysis-length-tokenfilter.html",
        "options": [
            {"title": "min", "default": 0},
            {"title": "max", "default": 99999999}
        ]
    },
    {
        "title": "Lowercase",
        "uid": "lowercase",
        "url" : "analysis-lowercase-tokenfilter.html",
        "options": []
    },
    {
        "title": "Uppercase",
        "uid": "uppercase",
        "url" : "analysis-uppercase-tokenfilter.html",
        "options": []
    },
    {
        "title": "NGram",
        "uid": "ngram",
        "url" : "analysis-ngram-tokenfilter.html",
        "options": [
            {"title": "min_gram", "default": 1},
            {"title": "max_gram", "default": 2}
        ]
    },
    {
        "title": "Edge NGram",
        "uid": "edge_gram",
        "url" : "analysis-edgengram-tokenfilter.html",
        "options": [
            {"title": "min_gram", "default": 1},
            {"title": "max_gram", "default": 2},
            {"title": "side", "default": "front"}
        ]
    },
    {
        "title": "Porter Stem",
        "uid": "porter_stem",
        "url" : "analysis-porterstem-tokenfilter.html",
        "options": []
    },
    {
        "title": "Shingle",
        "uid": "shingle",
        "url" : "analysis-shingle-tokenfilter.html",
        "options": [
            {"title": "min_shingle_size", "default": 2},
            {"title": "max_shingle_size", "default": 2},
            {"title": "output_unigrams", "default": true},
            {"title": "output_unigrams_if_no_shingles", "default": false},
            {"title": "token_separator", "default": " "},
            {"title": "filler_token", "default": "_"}
        ]
    },
    {
        "title": "Stop",
        "uid": "stop",
        "url" : "analysis-stop-tokenfilter.html",
        "options": [
            {"title": "stopwords", "default": ["this", "is", "the", "of", "le", "la"]},
            {"title": "ignore_case", "default": true},
            {"title": "remove_trailing", "default": false}
        ]
    },
    {
        "title": "Word Delimiter",
        "uid": "word_delimiter",
        "url" : "analysis-word-delimiter-tokenfilter.html",
        "options": [
            {"title": "generate_word_parts", "default": true},
            {"title": "generate_number_parts", "default": true},
            {"title": "catenate_words", "default": false},
            {"title": "catenate_numbers", "default": true},
            {"title": "catenate_all", "default": false},
            {"title": "split_on_case_change", "default": true},
            {"title": "preserve_original", "default": false},
            {"title": "split_on_numerics", "default": true},
            {"title": "stem_english_possessive", "default": true}
        ]
    },
    {
        "title": "Stemmer",
        "uid": "stemmer",
        "url" : "analysis-stemmer-tokenfilter.html",
        "options": [
            {"title": "language", "default": "english"}
        ]
    },
    {
        "title": "Stemmer Override",
        "uid": "stemmer_override",
        "url" : "analysis-stemmer-override-tokenfilter.html",
        "options": [
            {"title": "rules", "default": "actrice=>actrice"}
        ]
    },
    {
        "title": "Keyword Marker",
        "uid": "keyword_marker",
        "url" : "analysis-keyword-marker-tokenfilter.html",
        "options": [
            {"title": "keywords", "default": "rct,toulon,actrice"},
            {"title": "ignore_case", "default": false}
        ]
    },
    {
        "title": "Keyword Repeat",
        "uid": "keyword_repeat",
        "url" : "analysis-keyword-repeat-tokenfilter.html",
        "options": []
    },
    {
        "title": "KStem",
        "uid": "kstem",
        "url" : "analysis-kstem-tokenfilter.html",
        "options": []
    },
    {
        "title": "Snowball",
        "uid": "snowball",
        "url" : "analysis-snowball-tokenfilter.html",
        "options": [
            {"title": "language", "default": "English"}
        ]
    },
    {
        "title": "Phonetic",
        "uid": "phonetic",
        "url" : "analysis-phonetic-tokenfilter.html",
        "options": []
    },
    {
        "title": "Synonym",
        "uid": "synonym",
        "url" : "analysis-synonym-tokenfilter.html",
        "options": [
            {"title": "synonyms", "default": ["universe, cosmos", "€, euro, euros"]},
            {"title": "tokenizer", "default": "whitespace"}
        ]
    },
    {
        "title": "Compound Word (Dictionnary)",
        "uid": "dictionary_decompounder",
        "url" : "analysis-compound-word-tokenfilter.html",
        "options": [
            {"title": "word_list", "default": ["one", "two", "three"]}
        ]
    },
    {
        "title": "Compound Word (Hyphenation)",
        "uid": "hyphenation_decompounder",
        "url" : "analysis-compound-word-tokenfilter.html",
        "options": [
            {"title": "word_list", "default": ["one", "two", "three"]}
        ]
    },
    {
        "title": "Reverse",
        "uid": "reverse",
        "url" : "analysis-reverse-tokenfilter.html",
        "options": []
    },
    {
        "title": "Elision",
        "uid": "elision",
        "url" : "analysis-elision-tokenfilter.html",
        "options": [
            {"title": "articles", "default": ["l", "m", "t", "n", "s"]}
        ]
    },
    {
        "title": "Truncate",
        "uid": "truncate",
        "url" : "analysis-truncate-tokenfilter.html",
        "options": [
            {"title": "length", "default": 10}
        ]
    },
    {
        "title": "Unique",
        "uid": "unique",
        "url" : "analysis-unique-tokenfilter.html",
        "options": [
            {"title": "only_on_same_position", "default": false}
        ]
    },
    {
        "title": "Pattern Capture",
        "uid": "pattern_capture",
        "url" : "analysis-pattern-capture-tokenfilter.html",
        "options": [
            {"title": "preserve_original", "default": true},
            {"title": "patterns", "default": []}
        ]
    },
    {
        "title": "Pattern Replace",
        "uid": "pattern_replace",
        "url" : "analysis-pattern_replace-tokenfilter.html",
        "options": [
            {"title": "replacement", "default": ""},
            {"title": "pattern", "default": ""}
        ]
    },
    {
        "title": "Trim",
        "uid": "trim",
        "url" : "analysis-trim-tokenfilter.html",
        "options": []
    },
    {
        "title": "Limit Token Count",
        "uid": "limit",
        "url" : "analysis-limit-token-count-tokenfilter.html",
        "options": [
            {"title": "max_token_count", "default": 1},
            {"title": "consume_all_tokens", "default": false}
        ]
    },
    {
        "title": "Hunspell",
        "uid": "hunspell",
        "url" : "analysis-hunspell-tokenfilter.html",
        "options": [
            {"title": "ignore_case", "default": false},
            {"title": "dedup", "default": true},
            {"title": "locale", "default": "en_US"}
        ]
    },
    {
        "title": "Common Grams",
        "uid": "common_grams",
        "url" : "analysis-common-grams-tokenfilter.html",
        "options": [
            {"title": "common_words", "default": ["a", "an", "the"]},
            {"title": "query_mode", "default": true},
            {"title": "ignore_case", "default": false}
        ]
    },
    {
        "title": "CJK Width",
        "uid": "cjk_width",
        "url" : "analysis-cjk-width-tokenfilter.html",
        "options": []
    },
    {
        "title": "CJK Bigram",
        "uid": "cjk_bigram",
        "url" : "analysis-cjk-bigram-tokenfilter.html",
        "options": [
            {"title": "ignore_scripts", "default": ["hiragana", "katakana", "hangul"]},
            {"title": "output_unigrams", "default": true}
        ]
    },
    {
        "title": "Delimited Payload",
        "uid": "delimited_payload_filter",
        "url" : "analysis-delimited-payload-tokenfilter.html",
        "options": [
            {"title": "delimiter", "default": "|"},
            {"title": "encoding", "default": "float"}
        ]
    },
    {
        "title": "Keep Words",
        "uid": "keep",
        "url" : "analysis-keep-words-tokenfilter.html",
        "options": [
            {"title": "keep_words", "default": ["one", "two", "three"]}
        ]
    },
    {
        "title": "Keep Types",
        "uid": "keep_types",
        "url" : "analysis-keep-types-tokenfilter.html",
        "options": [
            {"title": "types", "default": ["<NUM>"]}
        ]
    },
    {
        "title": "Classic",
        "uid": "classic",
        "url" : "analysis-classic-tokenfilter.html",
        "options": []
    },
    {
        "title": "Apostrophe",
        "uid": "apostrophe",
        "url" : "analysis-apostrophe-tokenfilter.html",
        "options": []
    },
    {
        "title" : "ICU normalizer",
        "uid" : "icu_normalizer",
        "url" : "https://github.com/elasticsearch/elasticsearch-analysis-icu",
        "options" : []
    },
    {
        "title" : "ICU folding",
        "uid" : "icu_folding",
        "url" : "https://github.com/elasticsearch/elasticsearch-analysis-icu",
        "options" : []
    },
    {
        "title" : "ICU collation",
        "uid" : "icu_collation",
        "url" : "https://github.com/elasticsearch/elasticsearch-analysis-icu",
        "options" : [
            {"title":"language", "default" : "en"}
        ]
    },
    {
        "title" : "Phonetic",
        "uid" : "phonetic",
        "url" : "https://github.com/elasticsearch/elasticsearch-analysis-phonetic",
        "options" : [
            {"title":"replace", "default" : true},
            {"title":"encoder", "default" : "metaphone"}
        ]
    }
]
