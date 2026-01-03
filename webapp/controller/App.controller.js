sap.ui.define([
    'sap/ui/core/mvc/Controller',
    'sap/m/library',
    'sap/m/MessageToast',
    'sap/ui/model/json/JSONModel',
    'sap/ui/model/BindingMode'
], function (Controller,
    mobileLibrary,
	MessageToast,
	JSONModel,
	BindingMode){

    var BreadcrumbsSeparatorStyle = mobileLibrary.BreadcrumbsSeparatorStyle;

    "use strict";
    return Controller.extend("de.sapui5buch.demo.controller.App",
        {
            onInit: function() {

                var oMData = [];
				oModel =  new JSONModel().setDefaultBindingMode(BindingMode.TwoWay);
                
        } } );
});