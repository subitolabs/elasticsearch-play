var availableFilters = [
    {
        "title": "Standard",
        "uid": "standard",
        "options": []
    },
    {
        "title": "ASCII Folding",
        "uid": "asciifolding",
        "options": [
            {"title": "preserve_original", "default": false}
        ]
    },
    {
        "title": "Length",
        "uid": "length",
        "options": [
            {"title": "min", "default": 0},
            {"title": "max", "default": 99999999}
        ]
    },
    {
        "title": "Lowercase",
        "uid": "lowercase",
        "options": []
    },
    {
        "title": "Uppercase",
        "uid": "uppercase",
        "options": []
    },
    {
        "title": "NGram",
        "uid": "ngram",
        "options": [
            {"title": "min_gram", "default": 1},
            {"title": "max_gram", "default": 2}
        ]
    },
    {
        "title": "Edge NGram",
        "uid": "edge_gram",
        "options": [
            {"title": "min_gram", "default": 1},
            {"title": "max_gram", "default": 2},
            {"title": "side", "default": "front"}
        ]
    },
    {
        "title": "Porter Stem",
        "uid": "porter_stem",
        "options": []
    },
    {
        "title": "Shingle",
        "uid": "shingle",
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
        "options": [
            {"title": "stopwords", "default": ["this", "is", "the", "of", "le", "la"]},
            {"title": "ignore_case", "default": true},
            {"title": "remove_trailing", "default": false}
        ]
    },
    {
        "title": "Word Delimiter",
        "uid": "word",
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
        "options": [
            {"title": "language", "default": "english"}
        ]
    },
    {
        "title": "Stemmer Override",
        "uid": "stemmer_override",
        "options": [
            {"title": "rules", "default": "actrice=>actrice"}
        ]
    },
    {
        "title": "Keyword Marker",
        "uid": "keyword_marker",
        "options": [
            {"title": "keywords", "default": "rct,toulon,actrice"},
            {"title": "ignore_case", "default": false}
        ]
    },
    {
        "title": "Keyword Repeat",
        "uid": "keyword_repeat",
        "options": []
    },
    {
        "title": "KStem",
        "uid": "kstem",
        "options": []
    },
    {
        "title": "Snowball",
        "uid": "snowball",
        "options": [
            {"title": "language", "default": "English"}
        ]
    },
    {
        "title": "Phonetic",
        "uid": "phonetic",
        "options": []
    },
    {
        "title": "Synonym",
        "uid": "synonym",
        "options": [
            {"title": "synonyms", "default": ["universe, cosmos", "€, euro, euros"]}
        ]
    },
    {
        "title": "Compound Word (Dictionnary)",
        "uid": "dictionary_decompounder",
        "options": [
            {"title": "word_list", "default": ["one", "two", "three"]}
        ]
    },
    {
        "title": "Compound Word (Hyphenation)",
        "uid": "hyphenation_decompounder",
        "options": [
            {"title": "word_list", "default": ["one", "two", "three"]}
        ]
    },
    {
        "title": "Reverse",
        "uid": "reverse",
        "options": []
    },
    {
        "title": "Elision",
        "uid": "elision",
        "options": [
            {"title": "articles", "default": ["l", "m", "t", "n", "s"]}
        ]
    },
    {
        "title": "Truncate",
        "uid": "truncate",
        "options": [
            {"title": "length", "default": 10}
        ]
    },
    {
        "title": "Unique",
        "uid": "unique",
        "options": [
            {"title": "only_on_same_position", "default": false}
        ]
    },
    {
        "title": "Pattern Capture",
        "uid": "pattern_capture",
        "options": [
            {"title": "preserve_original", "default": true},
            {"title": "patterns", "default": []}
        ]
    },
    {
        "title": "Pattern Replace",
        "uid": "pattern_replace",
        "options": [
            {"title": "replacement", "default": ""},
            {"title": "pattern", "default": ""}
        ]
    },
    {
        "title": "Trim",
        "uid": "trim",
        "options": []
    },
    {
        "title": "Limit Token Count",
        "uid": "limit",
        "options": [
            {"title": "max_token_count", "default": 1},
            {"title": "consume_all_tokens", "default": false}
        ]
    },
    {
        "title": "Hunspell",
        "uid": "hunspell",
        "options": [
            {"title": "ignore_case", "default": false},
            {"title": "dedup", "default": true},
            {"title": "locale", "default": "en_US"}
        ]
    },
    {
        "title": "Common Grams",
        "uid": "common_grams",
        "options": [
            {"title": "common_words", "default": ["a", "an", "the"]},
            {"title": "query_mode", "default": true},
            {"title": "ignore_case", "default": false}
        ]
    },
    {
        "title": "CJK Width",
        "uid": "cjk_width",
        "options": []
    },
    {
        "title": "CJK Bigram",
        "uid": "cjk_bigram",
        "options": [
            {"title": "ignore_scripts", "default": ["hiragana", "katakana", "hangul"]},
            {"title": "output_unigrams", "default": true}
        ]
    },
    {
        "title": "Delimited Payload",
        "uid": "delimited_payload_filter",
        "options": [
            {"title": "delimiter", "default": "|"},
            {"title": "encoding", "default": "float"}
        ]
    },
    {
        "title": "Keep Words",
        "uid": "keep",
        "options": [
            {"title": "keep_words", "default": ["one", "two", "three"]}
        ]
    },
    {
        "title": "Keep Types",
        "uid": "keep_types",
        "options": [
            {"title": "types", "default": ["<NUM>"]}
        ]
    },
    {
        "title": "Classic",
        "uid": "classic",
        "options": []
    },
    {
        "title": "Apostrophe",
        "uid": "apostrophe",
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
    }
]