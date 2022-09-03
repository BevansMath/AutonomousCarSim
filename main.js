const canvas=document.getElementById("myCanvas");
canvas.height=window.innerHeight;
canvas.width=200;

const ctx = canvas.getContext("2d");
const car=new Car(100,100,30,50);
const road=new Road(canvas.width/2, canvas.width);
car.draw(ctx);

animate();

function animate(){
    car.update();

    canvas.height=window.innerHeight;
    road.draw(ctx);
    car.draw(ctx);
    requestAnimationFrame(animate); //calls the animate frame many times per second

    //if(car.update(this.controls.forward)=canvas.width){ //Constructing uncrossable borders
         
    
}
