/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */
var uniquePathsWithObstacles = function(obstacleGrid) {
    if (obstacleGrid[0][0] === 1 || obstacleGrid[obstacleGrid.length-1][obstacleGrid[0].length-1] === 1) {
        return 0;
    }

    let rows = obstacleGrid.length, columns = obstacleGrid[0].length, flag = false, m, n;

    for (m = 1; m < rows; ++m) {
        if (flag || obstacleGrid[m][0] === 1) {
            obstacleGrid[m][0] = 0;
            flag = true;
        } else {
            obstacleGrid[m][0] = 1;
        }
    }

    flag = false;

    for (n = 0; n < columns; ++n) {
        if (flag || obstacleGrid[0][n] === 1) {
            obstacleGrid[0][n] = 0;
            flag = true;
        } else {
            obstacleGrid[0][n] = 1;
        }
    }

    for (m = 1; m < rows; ++m) {
        for (n = 1; n < columns; ++n) {
            obstacleGrid[m][n] = obstacleGrid[m][n] === 1 ? 0 : obstacleGrid[m][n-1] + obstacleGrid[m-1][n];
        }    
    }

    return obstacleGrid[rows-1][columns-1];
};
