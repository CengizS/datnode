"use strict";
const config = require("./config.json");
const datNode = require("./datnode");
const selectionTarget = "https://" + config.environment + "/" + config.app + "/rest/VehicleSelectionService";
const identificationTarget = "https://" + config.environment + "/" + config.app + "/rest/VehicleIdentificationService";
const conversionTarget = "https://" + config.environment + "/" + config.app + "/rest/ConversionFunctionsService";
const imageryTarget = "https://" + config.environment + "/" + config.app + "/rest/VehicleImageryService";

function getVehicleTypes(restriction, locale, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;

    datNode.callStub(
        selectionTarget + "/getVehicleTypes",
        request,
        cb,
        err
    );
}

function getManufacturer(vt, restriction, locale, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;

    datNode.callStub(
        selectionTarget + "/getManufacturers",
        request,
        cb,
        err
    )
}

function getBaseModels(vt, manufacturer, restriction, locale, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;

    datNode.callStub(
        selectionTarget + "/getBaseModels",
        request,
        cb,
        err
    )
}

function getSubModels(vt, manufacturer, bm, restriction, locale, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;

    datNode.callStub(
        selectionTarget + "/getSubModels",
        request,
        cb,
        err
    )
}

function getClassificationGroups(vt, manufacturer, bm, subModel, restriction, locale, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = subModel;

    datNode.callStub(
        selectionTarget + "/getClassificationGroups",
        request,
        cb,
        err
    )
    
}

function compileDATECode(vt, manufacturer, bm, submodel, restriction, locale, options, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (options) {
        request.selectedOptions = selectedOptions // JSON-Array of options
    }
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/compileDatECode",
        request,
        cb,
        err
    )
}

function getConstructionOptions(vt, manufacturer, bm, submodel, restriction, locale, availableOptions, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (availableOptions) {
        request.availableOptions = availableOptions // JSON-Array of options
    }
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getConstructionOptions",
        request,
        cb,
        err
    )
}



module.exports.getVehicleTypes = getVehicleTypes;
module.exports.getManufacturer = getManufacturer;
module.exports.getBaseModels = getBaseModels;
module.exports.getSubModels = getSubModels;
module.exports.compileDATECode = compileDATECode;
module.exports.getClassificationGroups = getClassificationGroups;
module.exports.getConstructionOptions = getConstructionOptions;