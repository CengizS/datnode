"use strict";
const config = require("./config.json");
const datNode = require("./datnode");
const selectionTarget = "https://" + config.environment + "/" + config.app + "/rest/VehicleSelectionService";
const identificationTarget = "https://" + config.environment + "/" + config.app + "/rest/VehicleSelectionService";
const conversionTarget = "https://" + config.environment + "/" + config.app + "/rest/ConversionFunctionsService";
const imageryTarget = "https://" + config.environment + "/" + config.app + "/rest/VehicleImageryService";

function getVehicleTypes(restriction, locale, cb, err) {
    var request = {
        "locale": {
            datCountryIndicator: locale.datCountryIndicator,
            country: locale.country,
            language: locale.language
        },
        "restriction": restriction
    };

    datNode.callStub(
        selectionTarget + "/getVehicleTypes",
        request,
        cb,
        err
    );
}

function getManufacturer(vt, restriction, locale, cb, err) {
    var request = {
        "locale": {
            datCountryIndicator: locale.datCountryIndicator,
            country: locale.country,
            language: locale.language
        },
        "restriction": restriction,
        "vehicleType": vt
    };

    datNode.callStub(
        selectionTarget + "/getManufacturers",
        request,
        cb,
        err
    )
}

function getBaseModels(vt, manufacturer, restriction, locale, cb, err) {
    var request = {
        "locale": {
            datCountryIndicator: locale.datCountryIndicator,
            country: locale.country,
            language: locale.language
        },
        "restriction": restriction,
        "vehicleType": vt,
        "manufacturer": manufacturer
    };

    datNode.callStub(
        selectionTarget + "/getBaseModels",
        request,
        cb,
        err
    )
}

function getSubModels(vt, manufacturer, bm, restriction, locale, cb, err) {
    var request = {
        "locale": {
            datCountryIndicator: locale.datCountryIndicator,
            country: locale.country,
            language: locale.language
        },
        "restriction": restriction,
        "vehicleType": vt,
        "manufacturer": manufacturer,
        "baseModel": bm
    };

    datNode.callStub(
        selectionTarget + "/getSubModels",
        request,
        cb,
        err
    )
}

module.exports.getVehicleTypes = getVehicleTypes;
module.exports.getManufacturer = getManufacturer;
module.exports.getBaseModels = getBaseModels;
module.exports.getSubModels = getSubModels;