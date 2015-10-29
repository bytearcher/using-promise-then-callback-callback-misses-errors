// var deferredRead = require('../naive-deferredRead');

// var assert = require('assert');
// var fs = require('fs');

// describe('deferredRead', () => {
//     it('reads words file correctly', () => {
//         return deferredRead(fs, "words.txt").then((words) => {
//             assert.equal(words, "word\n");
//         });
//     });
// });


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
