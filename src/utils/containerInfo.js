const os = require('os');

function getContainerInfo() {
    return {
        containerId: os.hostname()
    };
}

module.exports = {
    getContainerInfo
};