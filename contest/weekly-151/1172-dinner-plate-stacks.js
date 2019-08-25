/**
 * @param {number} capacity
 */
var DinnerPlates = function(capacity) {
    this.stacks = [];

    this.capacity = capacity;

    this.full = true;
};

/**
 * @param {number} val
 * @return {void}
 */
DinnerPlates.prototype.push = function(val) {
    if (this.full) {
        if (this.stacks.length > 0 && this.stacks[this.stacks.length - 1].length < this.capacity) {
            this.stacks[this.stacks.length - 1].push(val);
        } else {
            this.stacks.push([val]);
        }
    } else {
        for (let i = 0; i < this.stacks.length; ++i) {
            if (this.stacks[i].length < this.capacity) {
                this.stacks[i].push(val);
                return;
            }
        }

        this.stacks.push([val]);
        this.full = true;
    }
};

/**
 * @return {number}
 */
DinnerPlates.prototype.pop = function() {
    if (this.stacks.length === 0) {
        return -1;
    }

    const last = this.stacks.length - 1;

    const val = this.stacks[this.stacks.length - 1].pop();

    while (this.stacks.length && this.stacks[this.stacks.length - 1].length === 0) {
        this.stacks.pop();
    }

    return val;
};

/**
 * @param {number} index
 * @return {number}
 */
DinnerPlates.prototype.popAtStack = function(index) {
    if (!this.stacks.hasOwnProperty(index)) {
        return -1;
    } else if (this.stacks[index].length === 0) {
        return -1;
    }

    this.full = false;

    return this.stacks[index].pop();
};

/**
 * Your DinnerPlates object will be instantiated and called as such:
 * var obj = new DinnerPlates(capacity)
 * obj.push(val)
 * var param_2 = obj.pop()
 * var param_3 = obj.popAtStack(index)
 */
