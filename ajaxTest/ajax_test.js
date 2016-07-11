/**
 * Created by Arthur on 2016-06-13.
 */
var apiEndpoint = "https://eu.api.battle.net/wow/character/";
var apiRealm = "burning-legion/";
var apiName = "Alisandre";
var apiExt = "?locale=en_GB&apikey=rbe5yym9jfyu2822ykq2taekxdsfn6kd";

var $mainText = $("#mainText");
var $nameInput = $("#nameInput");
var $characterTemplate = $("#character_template").html();

var translations = {
    'user': 'Użytkownik',
    
};

//czemu tak funkcje nie dzialaja???
function getJSON_v1() {
    $.ajax({
        type: 'GET',
        url: createUrl(apiName),
        success: onSuccess("OK"),
        failure: onSuccess("fail")
    });
}

//tylko jesli success dziala
function getJSON_v2() {
    $.get(createUrl(apiName), function (data, status) {
        var result;
        result = "Data: " + data.name + "; Status: " + status;
        $mainText.text(result);
    });
}

function getJSON_v3() {
    var name = $nameInput.val();
    if (name == "") {
        $mainText.text("Invalid name");
    } else {
        $.ajax({
            type: 'GET',
            url: createUrl(name),
            success: function (data, status) {
                showResult(data, status);
            },
            error: function (data, status) {
                showResult(data, status);
            }
        });
    }
}

function showResult(data, status) {
    console.log("Result: " + data + ";  " + status + ";");
    var result;
    if (status == "success") {
        result = "<strong>Status: </strong>" + status;
        result += Mustache.render($characterTemplate, data);
        $mainText.html(result);
    } else {
        $mainText.addClass("errorText");
        result = "Error loading data";
        $mainText.html(result);
    }
}

function onSuccess(data) {
    console.log(data);
}

function createUrl(name) {
    return apiEndpoint + apiRealm + name + apiExt;
}

function setupListeners() {
    $nameInput.keypress(function (e) {
        if (e.which == 13) {
            $mainText.removeClass("errorText");
            $mainText.text("Loading data...");
            getJSON_v3();
        }
    })
}


//------------------
$(setupListeners());
