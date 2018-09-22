export function sleep(duration) {
    let ms1 = Date.now();

    while (true) {
        let ms2 = Date.now();
        if (ms2 - ms1 >= duration) break;
    }
}

export function executeAfterDelay(callback = () => { }, duration = 2000) {
    if(typeof callback != 'function') {
        throw Error('callback was not a function');
    }
    if(typeof duration != 'number') {
        throw Error('duration was not a number');
    }
    sleep(duration);
    callback();
}