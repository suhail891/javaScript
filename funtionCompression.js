

/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    
    return function(x) {
        let result=x;
        if(functions.length===0){
            return x;
        }
        for(let i=functions.length-1;i>=0;i--){
            //here we are passing the result of previous function
            result=functions[i](result);
        }
        return result;
    }
};


 const fn = compose([x => x + 1, x => 2 * x])
 //fn(4) 
 console.log(fn(4)) // 9
 