/**
 * Initialize your data structure here.
 */
var Twitter = function() {
    this.posts = []
    this.follows = {}
};

/**
 * Compose a new tweet.
 * @param {number} userId
 * @param {number} tweetId
 * @return {void}
 */
Twitter.prototype.postTweet = function(userId, tweetId) {
    this.posts.unshift([tweetId, userId])
};

/**
 * Retrieve the 10 most recent tweet ids in the user's news feed. Each item in the news feed must be posted by users who the user followed or by the user herself. Tweets must be ordered from most recent to least recent.
 * @param {number} userId
 * @return {number[]}
 */
Twitter.prototype.getNewsFeed = function(userId) {
    let result = []

    for (let [tweetId, posterId] of this.posts) {
        if (userId === posterId) {
            result.push(tweetId)
        } else if (this.follows.hasOwnProperty(userId)) {
            if (this.follows[userId].includes(posterId)) {
                result.push(tweetId)
            }
        }

        if (result.length >= 10) {
            break
        }
    }

    return result
};

/**
 * Follower follows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.follow = function(followerId, followeeId) {
    if (!this.follows.hasOwnProperty(followerId)) {
        this.follows[followerId] = []
    }

    if (!this.follows[followerId].includes(followeeId)) {
        this.follows[followerId].push(followeeId)
    }
};

/**
 * Follower unfollows a followee. If the operation is invalid, it should be a no-op.
 * @param {number} followerId
 * @param {number} followeeId
 * @return {void}
 */
Twitter.prototype.unfollow = function(followerId, followeeId) {
    if (this.follows.hasOwnProperty(followerId)) {
        const index = this.follows[followerId].indexOf(followeeId)

        if (index > -1) {
            this.follows[followerId].splice(index, 1)
        }
    }
};

/**
 * Your Twitter object will be instantiated and called as such:
 * var obj = Object.create(Twitter).createNew()
 * obj.postTweet(userId,tweetId)
 * var param_2 = obj.getNewsFeed(userId)
 * obj.follow(followerId,followeeId)
 * obj.unfollow(followerId,followeeId)
 */