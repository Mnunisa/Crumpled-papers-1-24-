class Dustbin{
   constructor(x,y,width,height){
          this.dustbin=Bodies.rectangle(x,y,width,height,{isStatic:true});
          this.width=width;
          this.height=height;
          World.add(world,this.dustbin);
   }
     display(){
        var dpos=this.dustbin.position;
        rectMode(CENTER)
        fill("white");
        rect(dpos.x,dpos.y,this.width,this.height);
 }

}