class Car{
    constructor(x,y,width,height){
        this.x=x;
        this.y=y;
        this.width=width;
        this.height=height;

        this.velocity=0;
        this.acceleration=0.2;
        this.maxVelocity=3;
        this.friction=0.05;

        this.controls=new Controls();
    }

    update(){
        if(this.controls.forward){
            this.y-=2;
        }
        if(this.controls.reverse){
            this.y+=2;
        }
        if(this.controls.left){
            this.x-=2;
        }
        if(this.controls.right){
            this.x+=2;
        }
        if(this.controls.forward){
            this.velocity+=this.acceleration;
        }
        if(this.controls.reverse){
            this.velocity-=this.acceleration;
        }
        
        if(this.velocity>this.maxVelocity){
            this.velocity=this.maxVelocity;
        }
        if(this.velocity<-this.maxVelocity/2){
            this.velocity=-this.maxVelocity/2;
        }
        if(this.velocity>0){
            this.velocity-=this.friction;
        }
        if(this.velocity<0){
            this.velocity+=this.friction;
        }
        if(Math.abs(this.velocity)<this.friction){
            this.velocity=0;
        }
        
        this.y-=this.velocity;
        //this.y+=this.acceleration;
    }

    draw(ctx){
        ctx.beginPath();
        ctx.rect(
            this.x-this.width/2,
            this.y-this.height/2,
            this.width,
            this.height
        );
        ctx.fill();
    }
}
