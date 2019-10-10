sap.ui.define([
	"sap/ui/core/mvc/Controller"
], function (Controller) {
	"use strict";

	return Controller.extend("zkav.OData_HW.controller.View1", {
		onInit: function () {
			var XHR = new XMLHttpRequest();

			XHR.open("GET", "http://localhost:3000/plant/?$format=json");
			XHR.setRequestHeader("X-Requested-With", "XMLHttpRequest");
			XHR.setRequestHeader("Content-Type", "application/json");
			XHR.send();
			var oModel = new sap.ui.model.json.JSONModel();
			XHR.onreadystatechange = function () {
				if (XHR.readyState == 4 && XHR.status == 200) {
					var data = XHR.response;
					oModel.setData(JSON.parse(data))
						//var oJsonModel = new sap.ui.model.json.JSONModel();
				}
			}
			this.getView().setModel(oModel, "plant");
		}
	});
});