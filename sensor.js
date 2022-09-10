class Sensor{
    constructor(car){
        this.car=car;
        this.rayCount=3; // casts rays in different directions
        this.rayLength=100;
        this.raySpread=Math.PI/4; // 45 degrees

        this.rays=[]; // Keeps individual array after we make them

    }

    update(){
        this.rays=[]; // Set rays to an empty array
            for(let i=0; i<this.rayCount;i++){
                const rayAngle=lerp(
                    this.raySpread/2,
                    -this.raySpread/2,
                    i/(this.rayCount-1)
            );

            const start={x:this.car.x, y:this.car.y};
            const end={
                x:this.car.x-
                    Math.sin(rayAngle)*this.rayLength,
                y:this.car.y-
                    Math.cos(rayAngle)*this.rayLength
            };
            this.rays.push([start,end]);
            //console.log(this.rays.push())

        }
    
        
    }
    
    draw(ctx){
        try {
        for(let i=0;i<this.rayCount;i++){
            ctx.beginPath();
            ctx.lineWidth=2;
            ctx.strokeStyle="red";
            ctx.moveTo(
                this.rays[i][0].x,
                this.rays[i][0].y,
            
            );
            if (this.rays[i][0]=0){
                console.log(this.rays)
            } else {
                console.log(`The current value for rays is ${this.rays}`);
            }
            ctx.lineTo(
                this.rays[i][1].x,
                this.rays[i][1].y,
            )
            ctx.stroke();
            }
        } catch (e) {
            console.error(e);
        }
    }
}