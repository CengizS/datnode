"use strict";
const config = require("./config.json");
const https = require('https');
const url = require('url');

function callStub(url, request, cb, err) {
    makeCall("POST",
        url,
        {
            "request": request
        },
        function (result) {  // Success-handler
            cb(result);
        },
        function (e) {       // Error-handler
            err(e);
        }
    );
}

function makeCall(method, target, data, success, error) {
    if (!target) {
        error(new Error("No URL specified"))
        return;
    }

    const options = {
        hostname: url.parse(target).hostname,
        path: url.parse(target).path,
        method: method,
        json: true,
        body: JSON.stringify(data),
        headers: {
            "Content-Type": "application/json",
            "customerNumber": config.customerNumber,
            "customerLogin": config.customerLogin,
            "customerSignature": config.customerSignature,
            "interfacePartnerNumber": config.interfacePartnerNumber,
            "interfacePartnerSignature": config.interfacePartnerSignature
        }
    };

    //console.debug(options);
    const req = https.request(options, (res) => {
        let result = '';

        res.on('data', (chunk) => {
            result += chunk;
        });

        res.on('error', (e) => {
            error(e);
        });

        res.on('end', () => {
            success(result);
        });
    });

    req.on('error', (e) => {
        error(e);
    });

    req.write(JSON.stringify(data), "utf8");
    req.end();
}

module.exports.callStub = callStub;
module.exports.makeCall = makeCall;