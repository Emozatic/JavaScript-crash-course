//closures
function outer(){
    let count= 0;
    let inner= function(){
        count++;
        console.log(count)
    }
    return inner
}
let counter= outer();
counter();
counter();
counter();