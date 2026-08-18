const prices= [100, 250, 500, 750, 1000];
let gst= prices.map((num)=>{
    return num*(18/100)
})
console.log(gst);