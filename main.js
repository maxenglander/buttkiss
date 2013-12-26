(function() {
    "use strict";

    var _generator = null,
        _config = null;

    var PLUGIN_ID = require("./package.json").name,
        MENU_ID = "buttkiss",
        MENU_LABEL = "$$$/JavaScripts/Generator/Buttkiss/Menu=Buttkiss";

    function startOscServer() {
        console.log("starting osc server");
        var inport, osc, sock, udp;
        osc = require('osc-min');
        udp = require("dgram");

        inport = 41234;

        sock = udp.createSocket("udp4", function(msg, rinfo) {
          var error;
          try {
            console.log(osc.fromBuffer(msg));
            var flipColorsExtendScript = "var color = app.foregroundColor; color.rgb.red = 255 * Math.random(); color.rgb.green = 255 * Math.random(); color.rgb.blue = 255 * Math.random(); app.foregroundColor = color;";
            _generator.evaluateJSXString(flipColorsExtendScript);
          } catch (_error) {
            error = _error;
            return console.log("invalid OSC packet");
          }
        });

        sock.bind(inport);
    }

    function init(generator, config) {
        _generator = generator;
        _config = config;
        _generator.addMenuItem(MENU_ID, MENU_LABEL, true, false);

        function initLater() {
           startOscServer();
        }

        process.nextTick(initLater);
    }

    exports.init = init;
}());


