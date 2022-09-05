function hello(){
    console.log("hello");
}

let test1 = 1;

// export { hello, test1 }
// export default hello;
function cordsInCanvas(canvas, ctx, e){
    const rect = canvas.getBoundingClientRect()
    let posX = e.clientX - rect.left;
    let posY = e.clientY - rect.top;
    console.log(posX, posY, posX + 50, posY + 50);
    ctx.rect(posX, posY, posX + 50, posY + 50)
    ctx.stroke()
}
    

export default cordsInCanvas 
