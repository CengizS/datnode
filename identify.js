"use strict";
const datNode = require("./datnode");
const selectionTarget = "https://www.dat.de/DATECodeSelection/rest/VehicleSelectionService";
const identificationTarget = "https://www.dat.de/DATECodeSelection/rest/VehicleSelectionService";
const conversionTarget = "https://www.dat.de/DATECodeSelectio/rest/ConversionFunctionsService";
const imageryTarget = "https://www.dat.de/DATECodeSelectio/rest/VehicleImageryService";

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