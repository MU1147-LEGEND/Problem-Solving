var cancellable = function(fn, args, t) {
    let timerId = setTimeout(fn, 0, ...args);
    let intervalId = setInterval(fn, t, ...args);
    return ()=>{
        clearTimeout(timerId)
        clearInterval(intervalId)
    }
};


//leetcode:https://leetcode.com/problems/interval-cancellation/description/?envType=study-plan-v2&envId=30-days-of-javascript