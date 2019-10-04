$(document).ready(function () {
    $.getJSON("./json-data/hot_tags.json", function (data) {
        var hotTagsData = data;
        var hottags = $(".container .hot-tags");
        hottags.append('<a class="tag ' + hotTagsData[0].class + '" style="text-decoration:none;cursor:default" >' + hotTagsData[0].tag + '</a>')
        for(var i = 1; i < hotTagsData.length; i++){
            hottags.append('<a href="' + hotTagsData[i].url + '"  class="tag ' + hotTagsData[i].class + '">' + hotTagsData[i].tag + '</a>')
        }
    })
})