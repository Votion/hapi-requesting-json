'use strict';

/**
 * @returns {boolean}
 */
function isRequestingJson() {
    if (this._isRequestingJson != null) {
        return this._isRequestingJson;
    }

    this._isRequestingJson = this.headers.accept.match(/\bapplication\/json\b/) !== null;
    return this._isRequestingJson;
}

function hapiRequestingJson(server, options, next) {
    server.decorate('request', 'isRequestingJson', isRequestingJson);
    next();
}

hapiRequestingJson.attributes = {
    pkg: require('./package.json')
};

module.exports = hapiRequestingJson;