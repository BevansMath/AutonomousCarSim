const canvas=document.getElementById("myCanvas");

canvas.height=window.innerHeight;
canvas.width=200;

const ctx = canvas.getContext("2d");
const road=new Road(canvas.width/2, canvas.width*0.9);
const car=new Car(road.getLaneCenter(1),100,30,50, "AI");
const traffic=[
    new Car(road.getLaneCenter(1),-100,30,50,"DUMMY",2)
];

animate();

function animate(){
    for(let i=0;i<traffic.length;i++){
        traffic[i].update(road.border,[]);
    }
    car.update(road.border,traffic);

    canvas.height=window.innerHeight;
    ctx.save();
    ctx.translate(0, -car.y+canvas.height*0.5);

    road.draw(ctx);
    for(let i=0; i<traffic.length;i++){
        traffic[i].draw(ctx);
    }
    car.draw(ctx);
    ctx.restore();
    requestAnimationFrame(animate);
}
