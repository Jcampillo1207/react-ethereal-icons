'use strict';

var React = require('react');

/******************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
/* global Reflect, Promise, SuppressedError, Symbol */


var __assign = function() {
    __assign = Object.assign || function __assign(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};

function __rest(s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
}

typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
};

var Apple = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M12 21.878c1.65 0 3.025 1.122 4.4 1.122 3.3 0 6.6-8.47 6.6-12.938a5.11 5.11 0 0 0-1.667-3.62 5.52 5.52 0 0 0-3.833-1.44c-2.442 0-4.4 1.524-5.5 2.117C10.9 6.526 8.942 5 6.5 5a5.5 5.5 0 0 0-3.836 1.437A5.1 5.1 0 0 0 1 10.062C1 14.53 4.3 23 7.6 23c1.375 0 2.75-1.122 4.4-1.122" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M10 3C8 1 4 1 4 1s0 3 2 5 6 2 6 2 0-3-2-5", opacity: ".5" })));
};

var Backpack = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M3 9.5A4.5 4.5 0 0 1 7.5 5h9A4.5 4.5 0 0 1 21 9.5v11.25A2.25 2.25 0 0 1 18.75 23H5.25A2.25 2.25 0 0 1 3 20.75z" }),
        React.createElement("g", { opacity: ".5" },
            React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M8 22v-5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v5z" }),
            React.createElement("path", { stroke: "#61FFFF", "stroke-linecap": "round", "stroke-linejoin": "round", "stroke-": true, d: "M8 10h8M8 22v-5m0 5h8m-8 0v-5m0 0a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2m0 0v5m0-5v5M9 5V3.5c0-.398.21-.78.586-1.06C9.96 2.157 10.47 2 11 2h2c.53 0 1.04.158 1.414.44.375.28.586.662.586 1.06V5" }))));
};

var BadgeAlert = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M3.022 5.86a4.2 4.2 0 0 0-.069 2.087 4.2 4.2 0 0 0 0 7.098 4.202 4.202 0 0 0 5.018 5.01 4.2 4.2 0 0 0 7.085 0A4.196 4.196 0 0 0 20 17.121c.197-.68.219-1.397.064-2.087a4.2 4.2 0 0 0 0-7.078 4.203 4.203 0 0 0-2.927-4.956c-.68-.197-1.4-.219-2.09-.063a4.2 4.2 0 0 0-7.075 0 4.197 4.197 0 0 0-4.95 2.921M11.5 6A1.5 1.5 0 0 0 10 7.5v4a1.5 1.5 0 0 0 3 0v-4A1.5 1.5 0 0 0 11.5 6m0 11a1.5 1.5 0 1 0 0-3 1.5 1.5 0 0 0 0 3", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705", opacity: ".5" })));
};

var BadgeCheck = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M2.953 7.947a4.202 4.202 0 0 1 5.018-5.01 4.2 4.2 0 0 1 7.075 0 4.197 4.197 0 0 1 5.017 5.02 4.2 4.2 0 0 1 0 7.078 4.2 4.2 0 0 1-5.007 5.02 4.2 4.2 0 0 1-7.085 0 4.198 4.198 0 0 1-5.018-5.01 4.2 4.2 0 0 1 0-7.098m12.754 2.76a1 1 0 0 0-1.414-1.414L11 12.586l-1.293-1.293a1 1 0 0 0-1.414 1.414l2 2a1 1 0 0 0 1.414 0z", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705", opacity: ".5" })));
};

var BadgeDollarSign = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M9.75 9.25h1v1.5h-1c-.3 0-.568-.103-.75-.259-.178-.152-.25-.333-.25-.491s.072-.338.25-.491a1.16 1.16 0 0 1 .75-.259M12.25 13.75v-1.5h1c.3 0 .568.103.75.259.178.152.25.333.25.491s-.072.338-.25.491a1.16 1.16 0 0 1-.75.259z" }),
        React.createElement("path", { fill: color2 ? color2 : '#735CFF', "fill-rule": "evenodd", d: "M3.022 5.86a4.2 4.2 0 0 0-.069 2.087 4.2 4.2 0 0 0 0 7.098 4.202 4.202 0 0 0 5.018 5.01 4.2 4.2 0 0 0 7.085 0A4.196 4.196 0 0 0 20 17.121c.197-.68.219-1.397.064-2.087a4.2 4.2 0 0 0 0-7.078 4.203 4.203 0 0 0-2.927-4.956c-.68-.197-1.4-.219-2.09-.063a4.2 4.2 0 0 0-7.075 0 4.197 4.197 0 0 0-4.95 2.921M12.25 7a.75.75 0 0 0-1.5 0v.75h-1c-.629 0-1.25.213-1.726.62-.478.41-.774.993-.774 1.63s.296 1.22.774 1.63c.475.407 1.097.62 1.726.62h1v1.5H8a.75.75 0 0 0 0 1.5h2.75V16a.75.75 0 0 0 1.5 0v-.75h1c.629 0 1.25-.213 1.726-.62.478-.41.774-.993.774-1.63s-.296-1.22-.774-1.63a2.66 2.66 0 0 0-1.726-.62h-1v-1.5H15a.75.75 0 0 0 0-1.5h-2.75z", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color1 ? color1 : '#61FFFF', d: "M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705", opacity: ".5" })));
};

var BadgeEuroSign = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M3.022 5.86a4.2 4.2 0 0 0-.069 2.087 4.2 4.2 0 0 0 0 7.098 4.202 4.202 0 0 0 5.018 5.01 4.2 4.2 0 0 0 7.085 0A4.196 4.196 0 0 0 20 17.121c.197-.68.219-1.397.064-2.087a4.2 4.2 0 0 0 0-7.078 4.203 4.203 0 0 0-2.927-4.956c-.68-.197-1.4-.219-2.09-.063a4.2 4.2 0 0 0-7.075 0 4.197 4.197 0 0 0-4.95 2.921M13.22 7.16A5 5 0 0 0 7.061 11H7a1 1 0 1 0 0 2h.061a5 5 0 0 0 8.699 2.25 1 1 0 1 0-1.52-1.3A3 3 0 0 1 9.132 13H12a1 1 0 1 0 0-2H9.132a3 3 0 0 1 3.584-1.903 3 3 0 0 1 1.524.953 1 1 0 1 0 1.52-1.3 5 5 0 0 0-2.54-1.589", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705", opacity: ".5" })));
};

var BadgeHelp = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M2.953 7.947a4.202 4.202 0 0 1 5.018-5.01 4.2 4.2 0 0 1 7.075 0 4.197 4.197 0 0 1 5.017 5.02 4.2 4.2 0 0 1 0 7.078 4.2 4.2 0 0 1-5.007 5.02 4.2 4.2 0 0 1-7.085 0 4.198 4.198 0 0 1-5.018-5.01 4.2 4.2 0 0 1 0-7.098M9.995 16a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1m-.158-7.722c.429-.24.938-.33 1.436-.249s.94.327 1.252.68c.311.354.476.792.475 1.238v.002c0 .427-.356.903-1.08 1.364a6.4 6.4 0 0 1-1.294.621l-.017.006h-.001a1 1 0 0 0 .607 1.906h.002l.001-.001.004-.001.011-.004.035-.012q.045-.014.119-.041A8.37 8.37 0 0 0 12.993 13c.819-.521 2.006-1.517 2.007-3.05a3.86 3.86 0 0 0-.976-2.565 4.13 4.13 0 0 0-2.428-1.33 4.2 4.2 0 0 0-2.737.478A3.98 3.98 0 0 0 7.062 8.62a1 1 0 0 0 1.876.692 1.98 1.98 0 0 1 .899-1.035", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705", opacity: ".5" })));
};

var BadgeInfo = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M19.978 17.14a4.2 4.2 0 0 0 .069-2.087 4.2 4.2 0 0 0 0-7.098 4.202 4.202 0 0 0-5.018-5.01 4.2 4.2 0 0 0-5.563-1.427 4.2 4.2 0 0 0-1.522 1.428 4.197 4.197 0 0 0-5.007 5.02 4.2 4.2 0 0 0 0 7.077 4.202 4.202 0 0 0 5.017 5.02 4.2 4.2 0 0 0 7.075 0 4.2 4.2 0 0 0 4.95-2.922M11.5 17a1.5 1.5 0 0 0 1.5-1.5v-4a1.5 1.5 0 0 0-3 0v4a1.5 1.5 0 0 0 1.5 1.5m0-11a1.5 1.5 0 1 0 0 3 1.5 1.5 0 0 0 0-3", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705", opacity: ".5" })));
};

var BadgeMinus = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M3.022 5.86a4.2 4.2 0 0 0-.069 2.087 4.2 4.2 0 0 0 0 7.098 4.202 4.202 0 0 0 5.018 5.01 4.2 4.2 0 0 0 7.085 0A4.196 4.196 0 0 0 20 17.121c.197-.68.219-1.397.064-2.087a4.2 4.2 0 0 0 0-7.078 4.203 4.203 0 0 0-2.927-4.956c-.68-.197-1.4-.219-2.09-.063a4.2 4.2 0 0 0-7.075 0 4.197 4.197 0 0 0-4.95 2.921M8.5 13a1.5 1.5 0 0 1 0-3h6a1.5 1.5 0 0 1 0 3z", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705", opacity: ".5" })));
};

var BadgePlus = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M3.022 5.86a4.2 4.2 0 0 0-.069 2.087 4.2 4.2 0 0 0 0 7.098 4.202 4.202 0 0 0 5.018 5.01 4.2 4.2 0 0 0 7.085 0A4.196 4.196 0 0 0 20 17.121c.197-.68.219-1.397.064-2.087a4.2 4.2 0 0 0 0-7.078 4.203 4.203 0 0 0-2.927-4.956c-.68-.197-1.4-.219-2.09-.063a4.2 4.2 0 0 0-7.075 0 4.197 4.197 0 0 0-4.95 2.921M11.5 5A1.5 1.5 0 0 0 10 6.5V10H6.5a1.5 1.5 0 0 0 0 3H10v3.5a1.5 1.5 0 0 0 3 0V13h3.5a1.5 1.5 0 0 0 0-3H13V6.5A1.5 1.5 0 0 0 11.5 5", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705", opacity: ".5" })));
};

var BadgeX = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M3.022 5.86a4.2 4.2 0 0 0-.069 2.087 4.2 4.2 0 0 0 0 7.098 4.202 4.202 0 0 0 5.018 5.01 4.2 4.2 0 0 0 7.085 0A4.196 4.196 0 0 0 20 17.121c.197-.68.219-1.397.064-2.087a4.2 4.2 0 0 0 0-7.078 4.203 4.203 0 0 0-2.927-4.956c-.68-.197-1.4-.219-2.09-.063a4.2 4.2 0 0 0-7.075 0 4.197 4.197 0 0 0-4.95 2.921m13.074 1.044a1.5 1.5 0 0 0-2.121 0L11.5 9.379 9.025 6.904a1.5 1.5 0 0 0-2.121 2.121L9.379 11.5l-2.475 2.475a1.5 1.5 0 1 0 2.121 2.121l2.475-2.475 2.475 2.475a1.5 1.5 0 1 0 2.121-2.121L13.621 11.5l2.475-2.475a1.5 1.5 0 0 0 0-2.121", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705", opacity: ".5" })));
};

var Badge = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M2.953 7.947a4.202 4.202 0 0 1 5.018-5.01 4.2 4.2 0 0 1 7.075 0 4.197 4.197 0 0 1 5.017 5.02 4.2 4.2 0 0 1 0 7.078 4.2 4.2 0 0 1-5.007 5.02 4.2 4.2 0 0 1-7.085 0 4.198 4.198 0 0 1-5.018-5.01 4.2 4.2 0 0 1 0-7.098" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M15.744 17.646a1.6 1.6 0 0 1 1.912-1.908 1.6 1.6 0 0 1 2.695 0 1.6 1.6 0 0 1 1.911 1.912 1.6 1.6 0 0 1 0 2.697 1.6 1.6 0 0 1-1.907 1.912 1.6 1.6 0 0 1-2.7 0 1.598 1.598 0 0 1-1.91-1.908 1.6 1.6 0 0 1 0-2.705", opacity: ".5" })));
};

var Bag = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1; _a.color2; var className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M18 7H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2" }),
        React.createElement("path", { stroke: "#61FFFF", "stroke-linecap": "round", "stroke-": true, d: "M14 8V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v4", opacity: ".5" })));
};

var Banknote = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1; _a.color2; var className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M1 16V8a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2" }),
        React.createElement("g", { fill: "#61FFFF", opacity: ".5" },
            React.createElement("path", { d: "M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0M19 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0M7 12a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }))));
};

var Boost = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#FF51D9', d: "M14.646 10.251c1.35.78 1.35 2.728 0 3.508L4.057 19.872c-1.35.78-3.037-.195-3.037-1.754V5.892c0-1.56 1.687-2.533 3.037-1.754z" }),
        React.createElement("path", { fill: color2 ? color2 : '#CA35FF', d: "M17.952 10.244c1.35.78 1.35 2.728 0 3.507L7.364 19.865c-1.35.779-3.038-.195-3.038-1.754V5.885c0-1.56 1.688-2.533 3.038-1.754z", opacity: ".5" }),
        React.createElement("path", { fill: color1 ? color1 : '#A635FF', d: "M21.959 10.244c1.35.78 1.35 2.728 0 3.507l-10.588 6.114c-1.35.779-3.038-.195-3.038-1.754V5.885c0-1.56 1.688-2.533 3.038-1.754z", opacity: ".5" })));
};

var Contrast = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("circle", { cx: "10", cy: "10", r: "9", fill: color1 ? color1 : '#735CFF' }),
        React.createElement("circle", { cx: "18", cy: "18", r: "5", fill: color2 ? color2 : '#61FFFF', opacity: ".5" })));
};

var CreditCard2 = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1; _a.color2; var className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M1 18V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2" }),
        React.createElement("g", { fill: "#61FFFF", opacity: ".5" },
            React.createElement("path", { d: "M1 10V6h22v4zM5 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M8 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0M11 17a1 1 0 1 1-2 0 1 1 0 0 1 2 0" }))));
};

var CreditCard3 = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1; _a.color2; var className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M1 18V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2" }),
        React.createElement("g", { fill: "#61FFFF", opacity: ".5" },
            React.createElement("path", { d: "M1 10V6h22v4zM3.5 18a.5.5 0 0 1-.5-.5v-1a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5z" }))));
};

var CreditCard = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M1 18V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M1 10V6h22v4z", opacity: ".5" })));
};

var File2 = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1; _a.color2; var className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M16 1H5.25c-.597 0-1.169.232-1.591.644A2.17 2.17 0 0 0 3 3.2v17.6c0 .584.237 1.143.659 1.556.422.412.994.644 1.591.644h13.5c.597 0 1.169-.232 1.591-.644S21 21.383 21 20.8V6z" }),
        React.createElement("g", { fill: "#61FFFF", opacity: ".5" },
            React.createElement("path", { d: "M14 1v4.667A2.333 2.333 0 0 0 16.333 8H21" }),
            React.createElement("path", { d: "m21 6-5-5h-2v4.667A2.333 2.333 0 0 0 16.333 8H21z" }))));
};

var File = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M3 5a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v16a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M16 1H7a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V6z", opacity: ".5" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M15 1v4a2 2 0 0 0 2 2h4" }),
        React.createElement("path", { fill: color2 ? color2 : '#735CFF', d: "m21 6-5-5h-1v4a2 2 0 0 0 2 2h4z" })));
};

var Forge = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#F46C00', d: "M4.372 1c-.633 0-1.146.513-1.146 1.147v13.302c0 .634.513 1.147 1.146 1.147h5.505c.633 0 1.147.514 1.147 1.147v1.835c0 .633.513 1.147 1.147 1.147h5.504c.633 0 1.147-.514 1.147-1.147V6.275c0-.633-.514-1.147-1.147-1.147h-5.504a1.147 1.147 0 0 1-1.147-1.146V2.147C11.024 1.513 10.51 1 9.877 1z" }),
        React.createElement("path", { fill: color2 ? color2 : '#FFA700', d: "M6.147 3C5.513 3 5 3.513 5 4.147v13.52c0 .633.513 1.147 1.147 1.147h5.206c.634 0 1.147.513 1.147 1.147v1.892c0 .634.513 1.147 1.147 1.147h5.206c.634 0 1.147-.513 1.147-1.147V8.333c0-.634-.513-1.147-1.147-1.147h-5.206A1.147 1.147 0 0 1 12.5 6.039V4.147C12.5 3.513 11.987 3 11.353 3z", opacity: ".5" })));
};

var Grow = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#FF5151', d: "M3.75 9.8c0-.506.41-.917.917-.917h7.516c.507 0 .917.41.917.917v12.283c0 .507-.41.917-.917.917H4.667a.917.917 0 0 1-.917-.917z" }),
        React.createElement("path", { fill: color2 ? color2 : '#FF72CF', d: "M8.333 1.917c0-.507.41-.917.917-.917h7.517c.506 0 .916.41.916.917v20.166c0 .507-.41.917-.916.917H9.25a.917.917 0 0 1-.917-.917z", opacity: ".5" })));
};

var Home = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M2 9.42c0-.306.07-.608.206-.886s.335-.524.582-.722l7.778-6.315c.4-.32.909-.497 1.434-.497s1.033.176 1.434.497l7.778 6.315c.247.198.445.444.582.722s.206.58.206.887v9.474a2.05 2.05 0 0 1-.65 1.488 2.29 2.29 0 0 1-1.572.617H4.222c-.59 0-1.154-.222-1.571-.617A2.05 2.05 0 0 1 2 18.895z" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M14 12h-4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2v-7a2 2 0 0 0-2-2", opacity: ".5" })));
};

var Intello = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#fff', d: "M5.335 23h1.572c.603 0 1.13-.473 1.288-1.153L11.88 6.002C12.465 3.482 10.846 1 8.617 1H5.335C4.598 1 4 1.7 4 2.564v18.872c0 .863.598 1.563 1.335 1.563z" }),
        React.createElement("path", { fill: color2 ? color2 : '#4690FF', d: "M16 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8" })));
};

var Layers = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "m2.078 14.64 8.672-4.353a2.87 2.87 0 0 1 2.5 0l8.672 4.353c1.385.695 1.447 2.273.119 3.034L13.37 22.65c-.817.468-1.923.468-2.74 0L1.96 17.674c-1.328-.761-1.266-2.339.12-3.034" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "m2.078 9.64 8.672-4.353a2.87 2.87 0 0 1 2.5 0l8.672 4.353c1.385.695 1.447 2.273.119 3.034L13.37 17.65c-.817.468-1.923.468-2.74 0L1.96 12.674c-1.328-.761-1.266-2.339.12-3.034", opacity: ".5" }),
        React.createElement("path", { fill: color1 ? color1 : '#61FFFF', d: "m2.078 5.64 8.672-4.353a2.87 2.87 0 0 1 2.5 0l8.672 4.353c1.385.695 1.447 2.273.119 3.034L13.37 13.65c-.817.468-1.923.468-2.74 0L1.96 8.674C.631 7.913.693 6.335 2.079 5.64", opacity: ".5" })));
};

var Mail = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M1 18V6a2 2 0 0 1 2-2h18a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M3 4h18l-7.452 9.108a2 2 0 0 1-3.096 0z", opacity: ".5" })));
};

var MapPin = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M3.685 14.235c.176-.14.391-.223.615-.235h15.4c.224.012.439.095.616.235.176.141.307.334.374.553l2.2 6.75c.11.112.11.224.11.337C23 22.55 22.56 23 21.9 23H2.1c-.66 0-1.1-.45-1.1-1.125 0-.113 0-.225.11-.337l2.2-6.75c.067-.22.198-.412.375-.553" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', "fill-rule": "evenodd", d: "M10.866 17.089c.66.564 1.608.564 2.268 0C15.116 15.398 19 11.599 19 7.8a6.7 6.7 0 0 0-2.05-4.808A7.1 7.1 0 0 0 12 1a7.1 7.1 0 0 0-4.95 1.992A6.7 6.7 0 0 0 5 7.8c0 3.799 3.884 7.598 5.866 9.289M14.333 7.8c0 1.252-1.044 2.267-2.333 2.267S9.667 9.052 9.667 7.8 10.71 5.533 12 5.533s2.333 1.015 2.333 2.267", "clip-rule": "evenodd", opacity: ".5" })));
};

var MessageCircleDots = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1; _a.color2; var className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M14.851 21.917a10.6 10.6 0 0 1-7.293-.88l-5.687 1.927a.659.659 0 0 1-.835-.835l1.928-5.687a10.602 10.602 0 1 1 11.887 5.475M9.286 11.143a2.143 2.143 0 1 1-4.286 0 2.143 2.143 0 0 1 4.286 0m5.357 0a2.143 2.143 0 1 1-4.286 0 2.143 2.143 0 0 1 4.286 0m3.214 2.143a2.143 2.143 0 1 0 0-4.286 2.143 2.143 0 0 0 0 4.286", "clip-rule": "evenodd" })));
};

var MessageCircle = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1; _a.color2; var className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M7.558 21.036a10.603 10.603 0 1 0-4.594-4.594l-1.928 5.687a.659.659 0 0 0 .835.835z" })));
};

var MessageSquareDots = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1; _a.color2; var className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M20.067 1H3.933C2.313 1 1 2.378 1 4.078v18.15c0 .686.79 1.03 1.252.545l3.756-3.941a2.87 2.87 0 0 1 2.074-.902h11.985c1.62 0 2.933-1.378 2.933-3.078V4.078C23 2.378 21.687 1 20.067 1M9 9a2 2 0 1 1-4 0 2 2 0 0 1 4 0m5 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0m3 2a2 2 0 1 0 0-4 2 2 0 0 0 0 4", "clip-rule": "evenodd" })));
};

var MessageSquare = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1; _a.color2; var className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M3.933 1h16.134C21.687 1 23 2.378 23 4.078v10.774c0 1.7-1.313 3.078-2.933 3.078H8.082c-.778 0-1.524.325-2.074.902l-3.756 3.941C1.79 23.258 1 22.915 1 22.23V4.079C1 2.378 2.313 1 3.933 1" })));
};

var MessagesCircle = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M5.472 14.661a7.229 7.229 0 1 0-3.133-3.133l-1.314 3.878a.449.449 0 0 0 .569.57z" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M18.529 21.661a7.229 7.229 0 1 1 3.132-3.133l1.314 3.878a.449.449 0 0 1-.569.57z", opacity: ".5" })));
};

var MessagesSquare = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M3 1h11c1.105 0 2 .94 2 2.099v7.346c0 1.159-.895 2.098-2 2.098H5.828c-.53 0-1.039.222-1.414.615l-2.56 2.687c-.315.33-.854.097-.854-.37V3.098C1 1.939 1.895 1 3 1" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M21 8H10c-1.105 0-2 .94-2 2.099v7.346c0 1.159.895 2.098 2 2.098h8.172c.53 0 1.039.222 1.414.615l2.56 2.687c.315.33.854.097.854-.37V10.098C23 8.939 22.105 8 21 8", opacity: ".5" })));
};

var PillHorizontal2 = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M17 6a6 6 0 0 1 0 12h-5V6z" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M7 18A6 6 0 0 1 7 6h5v12z", opacity: ".5" })));
};

var PillHorizontal = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M7 18A6 6 0 0 1 7 6h5v12z" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M17 6a6 6 0 0 1 0 12h-5V6z", opacity: ".5" })));
};

var PillVertical2 = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M18 17a6 6 0 0 1-12 0v-5h12z" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M6 7a6 6 0 1 1 12 0v5H6z", opacity: ".5" })));
};

var PillVertical = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M6 7a6 6 0 1 1 12 0v5H6z" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M18 17a6 6 0 0 1-12 0v-5h12z", opacity: ".5" })));
};

var Pills2 = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1; _a.color2; var className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("g", { fill: "#61FFFF", opacity: ".5" },
            React.createElement("path", { d: "M12.778 4.172a4 4 0 0 1 0 5.656l-2.475 2.475-5.657-5.657 2.475-2.474a4 4 0 0 1 5.657 0M11.172 19.778a4 4 0 0 1 0-5.657l2.474-2.475 5.657 5.657-2.475 2.475a4 4 0 0 1-5.656 0" })),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M2.172 9.121a4 4 0 0 0 5.656 5.657l2.475-2.475-5.657-5.657zM21.778 14.828a4 4 0 1 0-5.657-5.656l-2.475 2.474 5.657 5.657z" })));
};

var Pills = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1; _a.color2; var className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("g", { fill: "#61FFFF", opacity: ".5" },
            React.createElement("path", { d: "M7 1a4 4 0 0 1 4 4v3.5H3V5a4 4 0 0 1 4-4M17 23a4 4 0 0 1-4-4v-3.5h8V19a4 4 0 0 1-4 4" })),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M3 12a4 4 0 0 0 8 0V8.5H3zM21 12a4 4 0 0 0-8 0v3.5h8z" })));
};

var Search = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M10.9 1C5.432 1 1 5.432 1 10.9s4.432 9.9 9.9 9.9c2.338 0 4.486-.81 6.18-2.165l4.042 4.043a1.1 1.1 0 1 0 1.556-1.556l-4.043-4.043A9.86 9.86 0 0 0 20.8 10.9c0-5.468-4.432-9.9-9.9-9.9m-7.7 9.9a7.7 7.7 0 1 1 15.4 0 7.7 7.7 0 0 1-15.4 0", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', "fill-opacity": ".5", d: "M10.9 3.2a7.7 7.7 0 1 0 0 15.4 7.7 7.7 0 0 0 0-15.4" })));
};

var Squares2 = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M14 8H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M21 1H10a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2", opacity: ".5" })));
};

var Squares3 = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M21 8H10a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M14 1H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2", opacity: ".5" })));
};

var Squares4 = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M21 1H10a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M14 8H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2", opacity: ".5" })));
};

var Squares = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M14 1H3a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', d: "M21 8H10a2 2 0 0 0-2 2v11a2 2 0 0 0 2 2h11a2 2 0 0 0 2-2V10a2 2 0 0 0-2-2", opacity: ".5" })));
};

var Studio = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#00AA4E', "fill-rule": "evenodd", d: "M4 18.233C4 20.866 6.015 23 8.5 23s4.5-2.134 4.5-4.767V1.917C13 1.41 12.613 1 12.135 1h-7.27C4.387 1 4 1.41 4 1.917zm4.5 2.017c.956 0 1.73-.82 1.73-1.833s-.774-1.834-1.73-1.834-1.73.821-1.73 1.834c0 1.012.774 1.833 1.73 1.833", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color2 ? color2 : '#2CD7A4', "fill-rule": "evenodd", d: "M4.633 15.764c-1.303 2.307-.53 5.257 1.727 6.589 2.256 1.332 5.141.541 6.444-1.766l8.074-14.3a.94.94 0 0 0-.332-1.267l-6.6-3.896a.896.896 0 0 0-1.239.34zm3.087 4.179a1.793 1.793 0 0 0 2.479-.68c.501-.887.204-2.021-.664-2.533a1.793 1.793 0 0 0-2.479.678c-.5.888-.203 2.023.664 2.535", "clip-rule": "evenodd", opacity: ".5" })));
};

var Tag = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1; _a.color2; var className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M10.673 2.67A2.29 2.29 0 0 0 9.056 2H3.143A1.143 1.143 0 0 0 2 3.143v5.913c0 .607.241 1.188.67 1.617l6.521 6.52a2.774 2.774 0 0 0 3.91 0l4.093-4.092a2.774 2.774 0 0 0 0-3.91zM8 6.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0", "clip-rule": "evenodd" }),
        React.createElement("path", { stroke: "#61FFFF", "stroke-linecap": "round", "stroke-": true, d: "M17.5 14.5c1.907 1.126 2.252 1.619 3.5 3.5m1 4-1.315-.564A12.47 12.47 0 0 1 13.5 13", opacity: ".5" })));
};

var Tags = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', "fill-rule": "evenodd", d: "M9.673 4.67A2.29 2.29 0 0 0 8.056 4H2.143A1.143 1.143 0 0 0 1 5.143v5.913c0 .607.241 1.188.67 1.617l6.521 6.52a2.774 2.774 0 0 0 3.91 0l4.093-4.092a2.774 2.774 0 0 0 0-3.91zM7 8.5a1.5 1.5 0 1 1-3 0 1.5 1.5 0 0 1 3 0", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color2 ? color2 : '#61FFFF', "fill-rule": "evenodd", d: "M16.589 7.586A2 2 0 0 0 15.174 7H10a1 1 0 0 0-1 1v5.174a2 2 0 0 0 .586 1.415l5.706 5.706a2.427 2.427 0 0 0 3.421 0l3.582-3.582a2.427 2.427 0 0 0 0-3.42zm-2.339 3.351a1.312 1.312 0 1 1-2.625 0 1.312 1.312 0 0 1 2.625 0", "clip-rule": "evenodd", opacity: ".5" })));
};

var User = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M12 10C3.415 10 1.53 17.919 1.116 21.395c-.059.5-.089.748.013.991.08.19.25.383.43.484.229.13.503.13 1.051.13h18.78c.548 0 .822 0 1.051-.13.18-.101.35-.294.43-.484.102-.243.072-.492.013-.99C22.47 17.918 20.585 10 12 10" }),
        React.createElement("ellipse", { cx: "12", cy: "7.5", fill: color2 ? color2 : '#61FFFF', opacity: ".5", rx: "7", ry: "6.5" })));
};

var IconUniversal = function (_a) {
    var name = _a.name, _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["name", "size", "color1", "color2", "className"]);
    var icons = { Apple: Apple, Backpack: Backpack, BadgeAlert: BadgeAlert, BadgeCheck: BadgeCheck, BadgeDollarSign: BadgeDollarSign, BadgeEuroSign: BadgeEuroSign, BadgeHelp: BadgeHelp, BadgeInfo: BadgeInfo, BadgeMinus: BadgeMinus, BadgePlus: BadgePlus, BadgeX: BadgeX, Badge: Badge, Bag: Bag, Banknote: Banknote, Boost: Boost, Contrast: Contrast, CreditCard2: CreditCard2, CreditCard3: CreditCard3, CreditCard: CreditCard, File2: File2, File: File, Forge: Forge, Grow: Grow, Home: Home, Intello: Intello, Layers: Layers, Mail: Mail, MapPin: MapPin, MessageCircleDots: MessageCircleDots, MessageCircle: MessageCircle, MessageSquareDots: MessageSquareDots, MessageSquare: MessageSquare, MessagesCircle: MessagesCircle, MessagesSquare: MessagesSquare, PillHorizontal2: PillHorizontal2, PillHorizontal: PillHorizontal, PillVertical2: PillVertical2, PillVertical: PillVertical, Pills2: Pills2, Pills: Pills, Search: Search, Squares2: Squares2, Squares3: Squares3, Squares4: Squares4, Squares: Squares, Studio: Studio, Tag: Tag, Tags: Tags, User: User };
    var IconComponent = icons[name];
    if (!IconComponent) {
        return null;
    }
    return React.createElement(IconComponent, __assign({ width: size, height: size, color1: color1, color2: color2, className: className }, props));
};

exports.Apple = Apple;
exports.Backpack = Backpack;
exports.Badge = Badge;
exports.BadgeAlert = BadgeAlert;
exports.BadgeCheck = BadgeCheck;
exports.BadgeDollarSign = BadgeDollarSign;
exports.BadgeEuroSign = BadgeEuroSign;
exports.BadgeHelp = BadgeHelp;
exports.BadgeInfo = BadgeInfo;
exports.BadgeMinus = BadgeMinus;
exports.BadgePlus = BadgePlus;
exports.BadgeX = BadgeX;
exports.Bag = Bag;
exports.Banknote = Banknote;
exports.Boost = Boost;
exports.Contrast = Contrast;
exports.CreditCard = CreditCard;
exports.CreditCard2 = CreditCard2;
exports.CreditCard3 = CreditCard3;
exports.File = File;
exports.File2 = File2;
exports.Forge = Forge;
exports.Grow = Grow;
exports.Home = Home;
exports.IconUniversal = IconUniversal;
exports.Intello = Intello;
exports.Layers = Layers;
exports.Mail = Mail;
exports.MapPin = MapPin;
exports.MessageCircle = MessageCircle;
exports.MessageCircleDots = MessageCircleDots;
exports.MessageSquare = MessageSquare;
exports.MessageSquareDots = MessageSquareDots;
exports.MessagesCircle = MessagesCircle;
exports.MessagesSquare = MessagesSquare;
exports.PillHorizontal = PillHorizontal;
exports.PillHorizontal2 = PillHorizontal2;
exports.PillVertical = PillVertical;
exports.PillVertical2 = PillVertical2;
exports.Pills = Pills;
exports.Pills2 = Pills2;
exports.Search = Search;
exports.Squares = Squares;
exports.Squares2 = Squares2;
exports.Squares3 = Squares3;
exports.Squares4 = Squares4;
exports.Studio = Studio;
exports.Tag = Tag;
exports.Tags = Tags;
exports.User = User;
//# sourceMappingURL=index.cjs.js.map
