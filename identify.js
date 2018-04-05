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

function getOptionsbyClassification(vt, manufacturer, bm, submodel, options, classification, ctFrom, ctTo, restriction, locale, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (options) {
        request.availableOptions = availableOptions // JSON-Array of options
    }
    request.classification = classification;
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getOptionsbyClassification",
        request,
        cb,
        err
    );
}

function getEngineOptions(vt, manufacturer, bm, submodel, options, restriction, locale, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (options) {
        request.availableOptions = options // JSON-Array of options
    }
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getEngineOptions",
        request,
        cb,
        err
    );
}

function getCarBodyOptions(vt, manufacturer, bm, submodel, options, restriction, locale, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (options) {
        request.availableOptions = options // JSON-Array of options
    }
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getCarBodyOptions",
        request,
        cb,
        err
    );
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
    );
}

function getConstructionPeriods(ecode, container, restriction, locale, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.datECode = ecode;
    request.container = container;

    datNode.callStub(
        selectionTarget + "/getConstructionPeriodsN",
        request,
        cb,
        err
    );
}

function getGearingOptions(vt, manufacturer, bm, submodel, options, restriction, locale, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (options) {
        request.availableOptions = options // JSON-Array of options
    }
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getGearingOptions",
        request,
        cb,
        err
    );
}

function getDriversCabOptions(vt, manufacturer, bm, submodel, options, restriction, locale, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (options) {
        request.availableOptions = options // JSON-Array of options
    }
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getDriversCabOptions",
        request,
        cb,
        err
    );
}

function getGrossVehicleWeightOptions(vt, manufacturer, bm, submodel, options, restriction, locale, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (options) {
        request.availableOptions = options // JSON-Array of options
    }
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getGrossVehicleWeightOptions",
        request,
        cb,
        err
    );
}

function getNumberOfAxleOptions(vt, manufacturer, bm, submodel, options, restriction, locale, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (options) {
        request.availableOptions = options // JSON-Array of options
    }
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getNumberOfAxleOptions",
        request,
        cb,
        err
    );
}

function getSuspensionOptions(vt, manufacturer, bm, submodel, options, restriction, locale, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (options) {
        request.availableOptions = options // JSON-Array of options
    }
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getSuspensionOptions",
        request,
        cb,
        err
    );
}

function getTypeOfDriveOptions(vt, manufacturer, bm, submodel, options, restriction, locale, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (options) {
        request.availableOptions = options // JSON-Array of options
    }
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getTypeOfDriveOptions",
        request,
        cb,
        err
    );
}

function getWheelBaseOptions(vt, manufacturer, bm, submodel, options, restriction, locale, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (options) {
        request.availableOptions = options // JSON-Array of options
    }
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getWheelBaseOptions",
        request,
        cb,
        err
    );
}

function getEquipmentLineOptions(vt, manufacturer, bm, submodel, options, restriction, locale, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.vehicleType = vt;
    request.manufacturer = manufacturer;
    request.baseModel = bm;
    request.subModel = submodel;
    if (options) {
        request.availableOptions = options // JSON-Array of options
    }
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getEquipmentLineOptions",
        request,
        cb,
        err
    );
}

function getPriceFocusCases(ecode, restriction, locale, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.datECode = ecode;

    datNode.callStub(
        selectionTarget + "/getPriceFocusCases",
        request,
        cb,
        err
    );
}

function getPriceFocusConstructionYears(datecode, restriction, locale, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.datECode = ecode;

    datNode.callStub(
        selectionTarget + "/getPriceFocusConstructionPeriods",
        request,
        cb,
        err
    );
}

function getVehicleData(datecode, container, ct, restriction, locale, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.datECode = ecode;
    if (container) {
        request.container = container;
    }
    request.constructionTime = ct;

    datNode.callStub(
        selectionTarget + "/getVehicleData",
        request,
        cb,
        err
    );
}

function getSubModelsByTextSearch(needle, restriction, locale, ctFrom, ctTo, cb, err) {
    var request = {};
    request.locale = locale;
    request.restriction = restriction;
    request.searchText = needle;
    if (ctFrom) {
        request.constructionTimeFrom = ctFrom;
    }
    if (ctTo) {
        request.constructionTimeTo = ctTo;
    }

    datNode.callStub(
        selectionTarget + "/getVehicleData",
        request,
        cb,
        err
    );
}

module.exports.getVehicleTypes = getVehicleTypes;
module.exports.getManufacturer = getManufacturer;
module.exports.getBaseModels = getBaseModels;
module.exports.getSubModels = getSubModels;
module.exports.compileDATECode = compileDATECode;
module.exports.getClassificationGroups = getClassificationGroups;
module.exports.getOptionsbyClassification = getOptionsbyClassification;
module.exports.getEngineOptions = getEngineOptions;
module.exports.getCarBodyOptions = getCarBodyOptions;
module.exports.getConstructionOptions = getConstructionOptions;
module.exports.getConstructionPeriods = getConstructionPeriods;
module.exports.getGearingOptions = getGearingOptions;
module.exports.getDriversCabOptions = getDriversCabOptions;
module.exports.getGrossVehicleWeightOptions = getGrossVehicleWeightOptions;
module.exports.getNumberOfAxleOptions = getNumberOfAxleOptions;
module.exports.getSuspensionOptions = getSuspensionOptions;
module.exports.getTypeOfDriveOptions = getTypeOfDriveOptions;
module.exports.getWheelBaseOptions = getWheelBaseOptions;
module.exports.getEquipmentLineOptions = getEquipmentLineOptions;
module.exports.getPriceFocusCases = getPriceFocusCases;
module.exports.getPriceFocusConstructionYears = getPriceFocusConstructionYears;
module.exports.getVehicleData = getVehicleData;
module.exports.getSubModelsByTextSearch = getSubModelsByTextSearch;