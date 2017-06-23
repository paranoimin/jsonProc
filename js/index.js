$(document).ready(function() {
    var option = {};
    option.url = "/json/store.json";
    option.method = "get";
    option.dataType = "json";
    option.success = function(data, textStatus, xhr) {
        var list = data.categories;
        recursion(data, function(elem) {
           console.log(elem);
        });
    };
    option.error = function(jqXHR, textStatus, errorThrown) {
        console.log( errorThrown );
    };
    $.ajax(option);
});

function recursion(target, callback) {
    var categoriList = $("#categoriList");
    var html = "";

    if(target.hasOwnProperty("categories")) {
        for(var i = 0; i < Object.keys(target.categories).length; i++) {
            html += "<li>";
            html += target.categories[i].title;
            for(var j = 0; j < Object.keys(target.categories[i].categories).length; j++) {
                html += "<ul>";
                html +=     "<li>";
                html +=         target.categories[i].categories[j].title;
                html +=     "</li>";
                html += "</ul>";
            }
            html += "</li>";
        }
    } else {
        html += "<li>";
        html += "no";
        html += "</li>";
    }

    callback(target);
    categoriList.append(html);
}
