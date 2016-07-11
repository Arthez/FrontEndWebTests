/**
 * Created by Arthur on 2016-06-15.
 */

var myModule = (function () {
    apiEndpoint = "https://eu.api.battle.net/wow/character/";
    apiRealm = "burning-legion/";
    apiName = "Alisandre";
    apiExt = "?locale=en_GB&apikey=rbe5yym9jfyu2822ykq2taekxdsfn6kd";

    $mainText = $("#mainText");
    $nameInput = $("#nameInput");
    $characterTemplate = $('#character_template').html();

    setupListeners();

    function setupListeners() {
        $nameInput.keypress(onEnterPressed)
    }

    function onEnterPressed(e) {
        if (e.which == 13) {
            startLoadingData();
        }
    }
    
    function startLoadingData(name) {
        $mainText.removeClass("errorText");
        $mainText.text("Loading data...");
        getJSON(name);
    }

    function createUrl(name) {
        return apiEndpoint + apiRealm + name + apiExt;
    }

    function getJSON(inputName) {
        var name = (typeof inputName == 'string') ? inputName : $nameInput.val();
        if (name == "") {
            $mainText.addClass("errorText");
            $mainText.text("Invalid name");
        } else {
            $.ajax({
                type: 'GET',
                url: createUrl(name),
                success: function (data, status) {
                    renderResult(data, status);
                },
                error: function (data, status) {
                    renderResult(data, status);
                }
            });
        }
    }

    function renderResult(data, status) {
        console.log("Result: " + data + ";  " + status + ";");
        var result;
        if (status == "success") {
            result = "<strong>Status: </strong>" + status;
            result += Mustache.render($characterTemplate, data);
            $mainText.html(result);
            $nameInput.val("");
        } else {
            $mainText.addClass("errorText");
            result = "Error loading data";
            $mainText.html(result);
        }
    }
    
    return {
        loadData: startLoadingData
    };

})();

