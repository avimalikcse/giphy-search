
import { throttle } from "./common";

// Tell Jest to mock all timeout functions
jest.useFakeTimers();

describe('check if throttle works as expected', () => {

    let func: jest.Mock;
    let throttledFunc: Function;

    beforeEach(() => {
        func = jest.fn();
        throttledFunc = throttle(func, 100);
    });

    test('execute just once', () => {
        for (let i = 0; i < 100; i++) {
            throttledFunc();
        }
        // Fast-forward time
        jest.runAllTimers();

        expect(func).toBeCalledTimes(2);
    });
});