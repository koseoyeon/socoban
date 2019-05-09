class Sensor extends GameObject{
					//type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg
	constructor(type, container,json,velX,velY,targetX,targetY,src,bg){
		super(type, container,json.x,json.y,json.width,json.height,velX,velY,targetX,targetY,src,bg);
	}
	//주인님을 따라가야 함..
	tick(x,y){ //센서가 따라다닐 
		this.x=x;
		this.y=y;
	}
}