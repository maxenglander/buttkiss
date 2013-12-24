(function() {
    "use strict";

    var _generator = null,
        _config = null;

    var PLUGIN_ID = require("./package.json").name,
        MENU_ID = "buttkiss",
        MENU_LABEL = "$$$/JavaScripts/Generator/Buttkiss/Menu=Buttkiss";

    function init(generator, config) {
        _generator = generator;
        _config = config;

        console.log("initializing generator buttkiss with config %j", _config);

        _generator.addMenuItem(MENU_ID, MENU_LABEL, true, false).then(
            function () {
                console.log("Menu created", MENU_ID);
            }, function () {
                console.error("Menu creation failed", MENU_ID);
            }
        );
    }

    exports.init = init;
}());
