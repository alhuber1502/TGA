
    var viewer;
    var openseadragonOptions = {
	showNavigator: true,
	id: "openseadragon",
	navigatorAutoFade: false,
	showRotationControl: true,
	gestureSettingsTouch: {
	    pinchRotate: true
	},
	prefixUrl: "/_js/openseadragon-bin-2.4.2/openseadragon-flat-toolbar-icons-master/images/",
	sequenceMode: true
    };
    openseadragonOptions.tileSources = sources;
    viewer = OpenSeadragon( openseadragonOptions );
