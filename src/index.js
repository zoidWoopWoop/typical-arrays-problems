exports.min = function min(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }
    arr.sort((a, b) => a - b);
    return arr[0];
}

exports.max = function max(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }
    arr.sort((a, b) => b - a);
    return arr[0];
}

exports.avg = function avg(arr) {
    if (!arr || arr.length === 0) {
        return 0;
    }
    let result = 0;
    for (const num of arr) {
        result += num;
    }
    return result / (arr.length);
}
