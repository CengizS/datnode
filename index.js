"use strict";
const config = require("./config.json");
const identify = require("./identify.js");

const locale = config.locale;

identify.getVehicleTypes("ALL", locale, success, error);
identify.getManufacturer(1, "ALL", locale, success, error);
identify.getBaseModels(1, 130, "ALL", locale, success, error);
identify.getSubModels(1, 130, 85, "ALL", locale, success, error);
identify.compileDATECode(1, 130, 85, 1, "ALL", locale, null, null, null, success, error);
identify.getClassificationGroups(1, 130, 85, 1, "ALL", locale, success, error);
identify.getOptionsbyClassification(1, 130 ,85, 1, null, 11, null, null, "APPRAISAL", locale, success, error);
identify.getEngineOptions(1, 130, 85, 1, null, "ALL", locale, null, null, success, error);
identify.getConstructionOptions(1, 40, 28, 2, "APPRAISAL", locale, [88100, 75205], null, null, success, error);
identify.getConstructionPeriods("015700460110001", "DE001", "REPAIR", locale, success, error);

function success(result, request) {
    // The nature of the result may differ from real objects to plain string
    // Get things straight here ...
    if(typeof result === 'string') {
        try {
            result = JSON.parse(result);
        } catch(e) {
            // result is Non-JSON - just do nothing
        }
    }
    console.log(JSON.stringify(request, null, 3));
    console.log(JSON.stringify(result, null, 3));
    console.log("----------------------------------------------------------------------")
}

function error(e) {
    console.error(e);
}