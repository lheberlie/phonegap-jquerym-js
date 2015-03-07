/*
 *
 *
 * Your custom code goes here
 *
 *
  */
function applicationInitialize() {

            var map, geocoder, locateButton;

            require(["esri/map", "esri/dijit/Geocoder", "esri/dijit/LocateButton", "dojo/domReady!"], function (Map, Geocoder, LocateButton) {
                map = new Map("map", {
                    /* streets | satellite | hybrid | topo | gray | oceans | national-geographic | osm. */
                    basemap: "satellite",
                    center: [-116.538580, 33.824699],
                    zoom: 17,
                    sliderStyle: "small"
                });
                geocoder = new Geocoder({map: map}, "search");
                geocoder.startup();

                locateButton = new LocateButton({
                    map: map
                }, "locate");
                locateButton.startup();

            });

            // create the image rotator
            $("#mobileBasemapSwitcher").click(rotateImages);

            function rotateImages() {
                var currentBaseMap = $('#mobileBasemapSwitcher div.current');
                var _basemapName = $("#mobileBasemapSwitcher div.current img").data("basemapname");
                map.setBasemap(_basemapName);
                console.log("basemap: ", _basemapName);
                var nextBaseMap = currentBaseMap.next();
                //console.log($("#div1").data("key1");
                if (nextBaseMap.length == 0)
                    nextBaseMap = $('#mobileBasemapSwitcher div:first');

                currentBaseMap.removeClass('current').addClass('previous');
                nextBaseMap.css({ opacity: 0.0 }).addClass('current').animate({ opacity: 1.0 }, 1000,
                        function () {
                            currentBaseMap.removeClass('previous');
                        });
            }
        }

