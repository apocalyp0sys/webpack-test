console.log('Index entry loaded');

load("C");

function load(chunk) {
    switch (chunk) {
        case "A":
            require.ensure([], () => {
                require('./A');
            }, "A");
        case "B":
            require.ensure([], () => {
                require('./B');
            }, "B");
        case "C":
            require.ensure([], () => {
                require('./A');
                require.ensure([], () => {
                    require('./B');
                    require.ensure([], () => {
                        let C = require('./C');
                        C.C();
                    }, "C")
                }, "B");
            }, "A");
    }
}
