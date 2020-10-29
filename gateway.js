class Gate{
    constructor(){
        var options={
            'isStatic':true
        }
        this.image=loadImage("gateway.png");
        this.body=Bodies.rectangle(580,340,274,350,options);
        this.width=274;
        this.height=350;
        World.add(world,this.body);
    }
    display(){
        if(this.body.speed<3){
            var pos=this.body.position;
            var angle=this.body.angle;
            push();
            translate(pos.x,pos.y);
            rotate(angle);
            imageMode(CENTER);
            image(this.image,0,0,this.width,this.height);
            pop();
      
        }
        else{
          World.remove(world,this.body);
          push();
          this.visibility=this.visibility-5;
          tint(255,this.visibility);
          image(this.image,this.body.position.x,this.body.position.y,this.width,this.height);
          pop();
        }
      }
    }