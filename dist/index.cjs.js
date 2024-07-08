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

var Boost = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#FF51D9', d: "M14.646 10.251c1.35.78 1.35 2.728 0 3.508L4.057 19.872c-1.35.78-3.037-.195-3.037-1.754V5.892c0-1.56 1.687-2.533 3.037-1.754z" }),
        React.createElement("path", { fill: color2 ? color2 : '#CA35FF', d: "M17.952 10.244c1.35.78 1.35 2.728 0 3.507L7.364 19.865c-1.35.779-3.038-.195-3.038-1.754V5.885c0-1.56 1.688-2.533 3.038-1.754z", opacity: ".5" }),
        React.createElement("path", { fill: color1 ? color1 : '#A635FF', d: "M21.959 10.244c1.35.78 1.35 2.728 0 3.507l-10.588 6.114c-1.35.779-3.038-.195-3.038-1.754V5.885c0-1.56 1.688-2.533 3.038-1.754z", opacity: ".5" })));
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

var Intello = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#fff', d: "M5.335 23h1.572c.603 0 1.13-.473 1.288-1.153L11.88 6.002C12.465 3.482 10.846 1 8.617 1H5.335C4.598 1 4 1.7 4 2.564v18.872c0 .863.598 1.563 1.335 1.563z" }),
        React.createElement("path", { fill: color2 ? color2 : '#4690FF', d: "M16 23a4 4 0 1 0 0-8 4 4 0 0 0 0 8" })));
};

var Studio = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#00AA4E', "fill-rule": "evenodd", d: "M4 18.233C4 20.866 6.015 23 8.5 23s4.5-2.134 4.5-4.767V1.917C13 1.41 12.613 1 12.135 1h-7.27C4.387 1 4 1.41 4 1.917zm4.5 2.017c.956 0 1.73-.82 1.73-1.833s-.774-1.834-1.73-1.834-1.73.821-1.73 1.834c0 1.012.774 1.833 1.73 1.833", "clip-rule": "evenodd" }),
        React.createElement("path", { fill: color2 ? color2 : '#2CD7A4', "fill-rule": "evenodd", d: "M4.633 15.764c-1.303 2.307-.53 5.257 1.727 6.589 2.256 1.332 5.141.541 6.444-1.766l8.074-14.3a.94.94 0 0 0-.332-1.267l-6.6-3.896a.896.896 0 0 0-1.239.34zm3.087 4.179a1.793 1.793 0 0 0 2.479-.68c.501-.887.204-2.021-.664-2.533a1.793 1.793 0 0 0-2.479.678c-.5.888-.203 2.023.664 2.535", "clip-rule": "evenodd", opacity: ".5" })));
};

var User = function (_a) {
    var _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["size", "color1", "color2", "className"]);
    return (React.createElement("svg", __assign({ className: className, width: size, height: size }, props, { viewBox: "0 0 24 24", xmlns: "http://www.w3.org/2000/svg", fill: "none" }),
        React.createElement("path", { fill: color1 ? color1 : '#735CFF', d: "M12 10c-7.71 0-9.475 7.132-9.88 10.4-.06.493-.091.74.01.983.079.19.25.385.43.486.23.131.503.131 1.05.131h16.78c.547 0 .82 0 1.05-.13.18-.102.351-.297.43-.487.101-.244.07-.49.01-.983C21.475 17.132 19.71 10 12 10" }),
        React.createElement("circle", { cx: "12", cy: "8", r: "6", fill: color2 ? color2 : '#61FFFF', opacity: ".5" })));
};

var IconUniversal = function (_a) {
    var name = _a.name, _b = _a.size, size = _b === void 0 ? 24 : _b, color1 = _a.color1, color2 = _a.color2, className = _a.className, props = __rest(_a, ["name", "size", "color1", "color2", "className"]);
    var icons = { Apple: Apple, Boost: Boost, Forge: Forge, Grow: Grow, Intello: Intello, Studio: Studio, User: User };
    var IconComponent = icons[name];
    if (!IconComponent) {
        return null;
    }
    return React.createElement(IconComponent, __assign({ width: size, height: size, color1: color1, color2: color2, className: className }, props));
};

exports.Apple = Apple;
exports.Boost = Boost;
exports.Forge = Forge;
exports.Grow = Grow;
exports.IconUniversal = IconUniversal;
exports.Intello = Intello;
exports.Studio = Studio;
exports.User = User;
//# sourceMappingURL=index.cjs.js.map
