"use strict";
const config = require("./config.json");
const identify = require("./identify.js");

const locale = config.locale;

identify.getVehicleTypes("ALL", locale, success, error);
identify.getManufacturer(1, "ALL", locale, success, error);
identify.getBaseModels(1, 130, "ALL", locale, success, error);
identify.getSubModels(1, 130, 10, "ALL", locale, success, error);

function hr() {
    console.log("----------------------------------------------------------------------")
}

function success(result) {
    console.log(result);
    hr();
}

function error(e) {
    console.error(e);
}