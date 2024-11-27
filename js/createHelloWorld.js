/*
Write a function createHelloWorld. It should return a new function that always returns "Hello World".

Runtime 51 ms
Beats 53.38%

Analyze Complexity
Memory 48.61 MB
Beats 63.21%

*/

var createHelloWorld = function() {    
    return () => "Hello World"    
};
