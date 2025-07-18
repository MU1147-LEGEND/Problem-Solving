var maxArea = function (height) {
    let max = 0;

    const ln = height.length;
    let front = 0;
    let back = ln - 1;

    while(front < back){
        let w = back - front;
        let h = Math.min(height[front], height[back]);

        let area = w * h;
        max = Math.max(max, area);

        if(height[front] < height[back]) front++;
        else back--
    }


    // for (i = 0; i < height.length; i++) {
    //     for (j = i + 1; j < height.length; j++) {
    //         let w = j - i;
    //         let h = Math.min(height[i], height[j]);

    //         let area = w * h;
    //         max = Math.max(max, area);
    //     }
    // }
    return max;
};

const res = maxArea([1, 8, 6, 2, 5, 4, 8, 3, 7]);
console.log(res)