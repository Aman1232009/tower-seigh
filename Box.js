class Box{
    constructor(x, y, width, height) {
        var options = {
          
            'restitution':1,
            'friction':0,
            'density':0.1,
            isStatic:false
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        this.visiblity=255;
        World.add(world, this.body);
      }
      display(){
        if(this.body.velocity < 3){
          
         }
         else{
           World.remove(world, this.body);
           push();
           this.visiblity = this.visiblity - 5;
           tint(255,this.visiblity);
           rect( this.body.position.x, this.body.position.y, this.width,this.height);
           pop();
         }
        }
};
      
