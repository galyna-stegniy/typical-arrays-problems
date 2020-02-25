exports.min = function min(array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    }
    return Math.min(...array);
};

exports.max = function max(array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    }
    return Math.max(...array);
};

exports.avg = function avg(array) {
    if (arguments.length === 0 || array.length === 0) {
        return 0;
    }
    return array.reduce((acc, current, index, array) => {
        if (index === array.length - 1) {
            return (acc + current) / array.length;
        } else {
            return acc + current;
        }
    });
};
