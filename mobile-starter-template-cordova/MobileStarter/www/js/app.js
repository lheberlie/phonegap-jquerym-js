/*
 *
 *
 * Your custom code goes here
 *
 *
 */
function applicationInitialize() {
    console.log("applicationInitialize()");
    var appGlobals = {map: null};



    function initializeEsriJS() {
        console.log("initializeEsriJS()");
        require([
                    "dojo/on",
                    "esri/dijit/Geocoder",
                    "esri/dijit/HomeButton",
                    "esri/dijit/LocateButton",
                    "esri/map", "dojo/domReady!"
                ], function (on, Geocoder, HomeButton, LocateButton, Map) {

            appGlobals.map = new Map("ui-map", {
                sliderOrientation: "horizontal",
                sliderPosition: "bottom-right",
                basemap: "topo",
                center: [-117.157259932, 32.715328559],
                zoom: 12,
                sliderStyle: "small"
            });

            var geocoder = new Geocoder({
                                            map: appGlobals.map
                                        }, "ui-dijit-geocoder");
            geocoder.startup();

            var geoLocate = new LocateButton({
                                                 map: appGlobals.map
                                             }, "ui-dijit-locatebutton");
            geoLocate.startup();

            on(geoLocate, "locate", function (event) {
                console.log("locate");
                var coords = event.position.coords;
                console.log("altitude: ", coords.altitude, " heading: ", coords.heading, " speed: ", coords.speed);
            });

            var homeButton = new HomeButton({
                                                map: appGlobals.map
                                            }, "ui-home-button-hidden");
            homeButton.startup();

            $("#ui-home-button").click(function () {
                homeButton.home();
                $("#ui-settings-panel").panel("close");
            });

            //            $("#ui-settingsbutton").css("top", (window.innerHeight / 2 - (34 / 2)));
            positionSettingsUIElement();
            $(window).resize(positionSettingsUIElement);

            $(".basemapOption").click(swapBasemap);
            $(".ui-loader").hide();
        });
    }

    function swapBasemap(event) {
        var _basemapName = event.target.dataset.basemapname;
        appGlobals.map.setBasemap(_basemapName);
        console.log("basemap: ", _basemapName);
        $("#ui-settings-panel").panel("close");
    }

    function positionSettingsUIElement(event) {
        $("#ui-settingsbutton").css("top", (window.innerHeight / 2 - (34 / 2)));
    }

    initializeEsriJS();
}