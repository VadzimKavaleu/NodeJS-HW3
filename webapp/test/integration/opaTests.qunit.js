/* global QUnit */
QUnit.config.autostart = false;

sap.ui.getCore().attachInit(function () {
	"use strict";

	sap.ui.require([
		"zkav/OData_HW/test/integration/AllJourneys"
	], function () {
		QUnit.start();
	});
});