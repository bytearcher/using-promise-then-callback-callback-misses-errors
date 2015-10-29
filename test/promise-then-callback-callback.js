var promise = Promise.resolve();

function throwError() {
    throw new Error();
}

describe('promise.then(callback).catch(callback)', () => {

    it('catches thrown error', (done) => {

        function passTest() {
            done();
        }

        function failTest() {
            done("failed");
        }

        promise
            .then(throwError)
            .catch(passTest);
    })
})

describe('promise.then(callback, callback)', () => {

    it('catches thrown error', (done) => {

        function passTest() {
            done();
        }

        function failTest() {
            done("failed");
        }

        promise
            .then(throwError, passTest);
    })
})
