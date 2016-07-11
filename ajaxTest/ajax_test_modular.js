/**
 * Created by Arthur on 2016-06-14.
 */

(function () {
    var myModule = {
        apiEndpoint: "https://eu.api.battle.net/wow/character/",
        apiRealm: "burning-legion/",
        apiName: "Alisandre",
        apiExt: "?locale=en_GB&apikey=rbe5yym9jfyu2822ykq2taekxdsfn6kd",
        init: function () {
            this.cacheDOM();
            this.setupListeners();
        },
        cacheDOM: function () {
            this.$mainText = $("#mainText");
            this.$nameInput = $("#nameInput");
            this.$characterTemplate = $("#character_template").html();
        },
        setupListeners: function () {
            this.$nameInput.keypress(this.onEnterPressed)
        },
        onEnterPressed: function (e) {
            if (e.which == 13) {
                myModule.$mainText.removeClass("errorText");
                myModule.$mainText.text("Loading data...");
                myModule.getJSON();
            }
        },
        createUrl: function (name) {
            return this.apiEndpoint + this.apiRealm + name + this.apiExt;
        },
        getJSON: function () {
            var name = this.$nameInput.val();
            if (name == "") {
                this.$mainText.addClass("errorText");
                this.$mainText.text("Invalid name");
            } else {
                $.ajax({
                    type: 'GET',
                    url: myModule.createUrl(name),
                    success: function (data, status) {
                        myModule.renderResult(data, status);
                    },
                    error: function (data, status) {
                        myModule.renderResult(data, status);
                    }
                });
            }
        },
        renderResult: function (data, status) {
            console.log("Result: " + data + ";  " + status + ";");
            var result;
            if (status == "success") {
                result = "<strong>Status: </strong>" + status;
                result += Mustache.render(this.$characterTemplate, data);
                this.$mainText.html(result);
            } else {
                this.$mainText.addClass("errorText");
                result = "Error loading data";
                this.$mainText.html(result);
            }
        }

    };

    myModule.init();
})();
