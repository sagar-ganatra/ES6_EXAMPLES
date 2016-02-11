exports.fn1 = function(){
    'use strict';
    
    console.log('Example 1 - use of let in blocks');
    
    let a = 10;
    
    function test() { //new scope, TDZ
        
        //console.log(a); //throws reference error
        
        let a = 20;
        
        console.log(a); // prints 20
        
        {
            console.log(a); // prints 20
            
            a = 40; //change in assignment
            
            console.log(a); // prints 40
            
        }
        
        console.log(a); //prints 40, the value of the variable is changed in the block
    }
    
    test();
    
    console.log(a); //prints 10
    
};

exports.fn2 = function () {
    'use strict';
    
    console.log('Example 2 - using let in a for loop')
    
    for (let i=0; i<3; i++) {
        console.log(i);
    }
    
    console.log(i); //Reference error - i is not defined
};

exports.fn3 = function () {
    console.log('Example 3 - use of const');
    
    const a = 10;
    
    {
        //console.log (a); //Reference error
        
        const a = 20;
        
        console.log(a);
        
    }
    
    console.log(a);
};

exports.fn4 = function () {
    'use strict';
    
    console.log('Example 4 - using let in a for loop')
    
    for (const i of [0, 1, 2]) {
        const x = i + 1;
        console.log(x);
    }
    
    console.log(i); //Reference error - i is not defined
};

exports.fn5 = function () {
    'use strict';
    
    let a = 1, b = 2;
    
    const foo = function (a = 10, b = 20) {
        console.log(a);
        console.log(b);
    };
    
    foo(100, 200);
    
};