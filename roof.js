class Roof{
    constructor(){
        var options={
            'isStatic':true
        }
        this.image=loadImage("roof.png");
        this.body=Bodies.rectangle(585,155,254,150,options);
        this.width=254;
        this.height=150;
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