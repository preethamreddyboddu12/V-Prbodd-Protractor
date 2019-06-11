const {SpecReporter} = require('jasmine-spec-reporter');

exports.config = {
    allScriptsTimeout: 300000,
    restartBrowserBetweenTests: true,
    suites: {
        default: './e2e/test-suites/*.e2e-spec.ts',
    },
    capabilities: {
        "browserName": "chrome",
         chromeOptions:{
            args: ['--start-maximized']
        }
    },
    params: {
        user1: {
            username: "azurebilltest3@outlook.com",
            password: "#Bugsfor$"
        },

        
    },
    directConnect: true,
    baseUrl: 'https://portal.azure.com',
    framework: 'jasmine',
    jasmineNodeOpts: {
        showColors: true,
        defaultTimeoutInterval: 200000,
        print: function () {
        }
    },
    onPrepare() {
        require('ts-node').register({
            project: 'e2e/tsconfig.e2e.json'
        });
        jasmine.getEnv().addReporter(new SpecReporter({
            spec: {
                displayStacktrace: false
            }
        }));
    }
};