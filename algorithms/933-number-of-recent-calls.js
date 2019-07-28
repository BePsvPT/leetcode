var RecentCounter = function() {
    this.queue = []
};

/**
 * @param {number} t
 * @return {number}
 */
RecentCounter.prototype.ping = function(t) {
    this.queue.push(t)

    let dequeue = 0

    for (let i = 0; i < this.queue.length - 1; ++i) {
        if (t - this.queue[i] > 3000) {
            ++dequeue
        } else {
            break
        }
    }

    if (dequeue > 0) {
        this.queue.splice(0, dequeue)
    }

    return this.queue.length
};
