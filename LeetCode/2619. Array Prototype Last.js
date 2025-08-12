Array.prototype.last = function (defaultValue = -1) {
    // if (this.length !== 0) return this[this.length - 1];
    // return -1;

    // another aproach
    const lastElement = this.at(-1);
    return lastElement === undefined ? defaultValue : lastElement;
};

const arr = [1, 2, 3];
console.log(arr.last()); // 3
