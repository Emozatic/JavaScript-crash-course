//closures
// function outer(){
//     let count= 0;
//     let inner= function(){
//         count++;
//         console.log(count)
//     }
//     return inner
// }
// let counter= outer();
// counter();
// counter();
// counter();


//activity
function createCounter(){
    let count=0;
    return{
        increament: function(){
            count= count+1;
        },
        descreament: function(){
            count= count-1;
        },
        getCount:function (){
            return count
        }
    }
}

let counter= createCounter();
counter.increament();
counter.increament();
counter.increament();

console.log(counter.getCount());

counter.descreament();
console.log(counter.getCount())