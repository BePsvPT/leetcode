/**
 * @param {number} length
 */
var SnapshotArray = function(length) {
    this.snap_id = 0;
    this.arr = new Array(length);

    for (let i = 0; i < length; ++i) {
        this.arr[i] = { '0': 0 };
    }
};

/** 
 * @param {number} index 
 * @param {number} val
 * @return {void}
 */
SnapshotArray.prototype.set = function(index, val) {
    this.arr[index][this.snap_id] = val;
};

/**
 * @return {number}
 */
SnapshotArray.prototype.snap = function() {
    return this.snap_id++;
};

/** 
 * @param {number} index 
 * @param {number} snap_id
 * @return {number}
 */
SnapshotArray.prototype.get = function(index, snap_id) {
    while (!this.arr[index].hasOwnProperty(snap_id)) {
        --snap_id;
    }

    return this.arr[index][snap_id];
};

/** 
 * Your SnapshotArray object will be instantiated and called as such:
 * var obj = new SnapshotArray(length)
 * obj.set(index,val)
 * var param_2 = obj.snap()
 * var param_3 = obj.get(index,snap_id)
 */
