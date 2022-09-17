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

        this.angle=0;
        
        this.sensor=new Sensor(this);
        this.controls=new Controls();
    }

    update(){
        this.#move();
        this.sensor.update();
    }

    #move(){
        
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
        if(this.velocity!=0){
            const flip = this.velocity>0?1:-1;
            if(this.controls.left){
                this.angle-=0.03*flip;
            }
            if(this.controls.right){
                this.angle-=0.03*flip;
            }

        }
        
        
        this.x-=Math.sin(this.angle)*this.velocity;
        this.y-=Math.cos(this.angle)*this.velocity;
        
    }
    

    draw(ctx){
        ctx.save();
        ctx.translate(this.x,this.y);
        ctx.rotate(-this.angle);

        ctx.beginPath();
        ctx.rect(
            -this.width/2,
            -this.height/2,
            this.width,
            this.height
        );
        ctx.fill();

        ctx.restore();               //Prevents infinite series of translations and rotations
        
        this.sensor.draw(ctx)
    }
}
