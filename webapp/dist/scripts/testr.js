/*! testr - v0.0.1 - 2014-12-31 */var myApp=angular.module("testr",["ngResource","ngRoute","ngSanitize","ui.ace"]).run(["$rootScope","$location",function(a){document.getElementById("html").className="",a.currentPage="test"}]);myApp.controller("testr",["$scope","$http",function(a,b){a.filters='{"my_word_delimiter" : {"type" : "word_delimiter", "catenate_words" : true, "preserve_original" : true, "generate_word_parts" : false}}',a.analyzers='{"standard" : {"type" : "standard"}, "french" : {"type" : "french"}}',a.run=function(){b.post("http://local/testr.php",{filters:a.filters,analyzers:a.analyzers}).success(function(){}).error(function(){})},a.aceLoaded=function(a){a.getSession().setTabSize(2),a.getSession().setUseWrapMode(!0),a.getSession().setFoldStyle("markbeginend")},a.aceChanged=function(){};{var c=document.getElementById("inputFilters");new JSONEditor(c)}}]);