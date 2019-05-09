/*주인공 생성 클래스*/

class Hero extends GameObject{
	constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg){
		super(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg);
		this.div.zIndex=100;

		//나의 이미지 테두리 보기 
		//this.img.style.border="1px solid red";

		this.sensorArray=[];
																					//type, container,json,velX,velY,targetX,targetY,src,bg
		this.leftSensor=new Sensor("SENSOR", stage, getSensorSize("LEFT",x,y,width,height) ,0,0,0,0,"","");
		this.rightSensor=new Sensor("SENSOR", stage,getSensorSize("RIGHT",x,y,width,height),0,0,0,0,"","");
		this.upSensor=new Sensor("SENSOR", stage,getSensorSize("UP",x,y,width,height),0,0,0,0,"","");
		this.downSensor=new Sensor("SENSOR", stage,getSensorSize("DOWN",x,y,width,height),0,0,0,0,"","");
		
		this.sensorArray.push(this.leftSensor);
		this.sensorArray.push(this.rightSensor);
		this.sensorArray.push(this.upSensor);
		this.sensorArray.push(this.downSensor);
	}
	/*------------------------------------------------------------
		맵체크 : 이미 2(box)가 존재하는경우 이동 금지
	------------------------------------------------------------*/
	checkStep(row,col){
		console.log(row,col);
		if(stageArray[currentStage][row][col] == 2 || stageArray[currentStage][row][col] == 1){ //박스이거나, 벽이면
			return false; //움직이지 않고
		}else{
			return true; //움직이고
		}
	}

	//예측된 위치가 아니라, 이미 옮겨진 박스에 대한 row, col
	showResult(row,col){
		//앞으로 내가 갈곳에 정답이 있냐? 없냐?
		var n=pointerArray[currentStage][row][col];
		console.log("이동할 곳의 들어있는값은 ",n);
		var box;
		//박스를 갈색으로!
		for(var i=0; i<objectManager.objectArray.length; i++){
			var obj = objectManager.objectArray[i];
			if(obj.type=="BOX"){
				if(obj.row==row && obj.col==col){
					box=obj;
				}
			}
		}

		if(n==9){
			box.img.src="./res/changeBox.png"; //갈색
		}else{
			box.img.src="./res/Box.png"; //회색
		}
		//this.countBox(row,col);
	}
	sensorStop(){
		for(var k=0; k<this.sensorArray.length; k++){
			var s = this.sensorArray[k];e
			console.log("센서 스탑 가동중");
			s.tick(s.x+this.velX , s.y+this.vel);
			s.render();
		}
		//console.log("센서 스탑 가동중");
	}

	sensorMove(){
		for(var i=0;i<this.sensorArray.length;i++){
			var s=this.sensorArray[i];
			s.tick(s.x + this.velX , s.y+this.velY);
			s.render();
		}
	}

	tick(){
		/*------------------------------------------------------------
			벽과의 충돌처리
		------------------------------------------------------------*/
		var blockCount=[0,0,0,0];
		for(var i=0; i<objectManager.objectArray.length; i++){
			var obj = objectManager.objectArray[i];
			if(obj.type=="BLOCK"){
				for(var a=0; a<this.sensorArray.length; a++){ //센서 4곳을 반복문을 통해 검사
					var result = hitTest(this.sensorArray[a], obj, this.velX, this.velY);
					if(result){
						blockCount[a]++;
						console.log("block닿았다");
						//this.sensorStop();
					}
				}
			}
		}

		/*------------------------------------------------------------
			벽에 닿았을때 알맞는처리
		------------------------------------------------------------*/
		if(blockCount[0]>0 && key == 37){
			console.log("block닿았다 좌");
			this.velX=0;
		}
		if(blockCount[1]>0 && key == 38){
			console.log("block닿았다 위");
			this.velY=0;
		}
		if(blockCount[2]>0 && key == 39){
			console.log("block닿았다 오른쪽");
			this.velX=0;
		}else{
		}
		if(blockCount[3]>0 && key == 40){
			console.log("block닿았다 아래");
			this.velY=0;
		}/*
		if(blockCount[0] > 0 || blockCount[1] > 0 || blockCount[2] > 0 || blockCount[3] > 0){
			isWalk=false;
		}else{
			isWalk=true;
		}
		console.log(isWalk);*/

		/*------------------------------------------------------------
			박스와의 충돌처리
		------------------------------------------------------------*/
		var boxCount=[0,0,0,0];
		var currentBox; //현재 박스

		for(var i=0; i<objectManager.objectArray.length; i++){
			var obj = objectManager.objectArray[i];
			if(obj.type=="BOX"){
				for(var a=0; a<this.sensorArray.length; a++){ //센서 4곳을 반복문을 통해 검사
					var result = hitTest(this.sensorArray[a], obj, this.velX, this.velY);
					if(result){
						boxCount[a]++;
						//console.log(boxCount);
						currentBox=obj;
					}
				}
			}
		}
		/*------------------------------------------------------------
			박스에 닿았을때 알맞는 처리 row : y, col : x
		------------------------------------------------------------*/
		if(boxCount[0]>0 && key==37){ //좌
			//console.log("박스 닿았구나");
			this.velX=0;
			//this.sensorStop();
			console.log(currentBox.col, currentBox.row, "박스를 좌측으로 밀고있구나");
			if(this.checkStep(currentBox.row, currentBox.col-1)){
				currentBox.swap(currentBox.row, currentBox.col); //원래있었던 자리로
				currentBox.move(currentBox.row, currentBox.col-1); //박스는 기존 위치에서 좌측으로 1간 감소
				this.showResult(currentBox.row, currentBox.col);
				remainBox();
			}else{
				currentBox.move(currentBox.row, currentBox.col);
			}
		}
		
		if(boxCount[2]>0 && key==39){ //우
			this.velX=0;
			//this.sensorStop();
			console.log(currentBox.col, currentBox.row, "박스를 우측으로 밀고있구나");
			if(this.checkStep(currentBox.row, currentBox.col+1)){
				currentBox.swap(currentBox.row, currentBox.col); //원래있었던 자리로
				currentBox.move(currentBox.row, currentBox.col+1); //박스는 기존 위치에서 좌측으로 1간 감소
				this.showResult(currentBox.row, currentBox.col);
				remainBox();
			}else{
				currentBox.move(currentBox.row, currentBox.col);
			}
			
		}
		if(boxCount[1]>0 && key==38){ //상
			this.velY=0;
			//this.sensorStop();
			console.log(currentBox.col, currentBox.row, "박스를 위쪽으로 밀고있구나");
			if(this.checkStep(currentBox.row-1, currentBox.col)){
				currentBox.swap(currentBox.row, currentBox.col); //원래있었던 자리로
				currentBox.move(currentBox.row-1, currentBox.col); //박스는 기존 위치에서 좌측으로 1간 감소
				this.showResult(currentBox.row, currentBox.col);
				remainBox();
			}else{
				currentBox.move(currentBox.row, currentBox.col);
			}
			
		}
		if(boxCount[3]>0 && key==40){ //하
			this.velY=0;
			//this.sensorStop();
			console.log(currentBox.col, currentBox.row, "박스를 아래쪽으로 밀고있구나");
			if(this.checkStep(currentBox.row+1, currentBox.col)){
				currentBox.swap(currentBox.row, currentBox.col); //원래있었던 자리로
				currentBox.move(currentBox.row+1, currentBox.col); //박스는 기존 위치에서 좌측으로 1간 감소	 
				this.showResult(currentBox.row, currentBox.col);
				remainBox();
			}else{
				currentBox.move(currentBox.row, currentBox.col);
			}
			
		}

		//결국 boxCount 배열안에 0이 아닌 숫자가 들어있다면, 어딘가에 충돌을 하고 있는 상태이므로
		//isWalk 를 false 로 둔다 
		if(boxCount[0] > 0 || boxCount[1] > 0 || boxCount[2] > 0 || boxCount[3] > 0 ||
			blockCount[0] > 0 || blockCount[1] > 0 || blockCount[2] > 0 || blockCount[3] > 0){
			isWalk=false;
		}else{
			isWalk=true;
		}
	

		this.x=this.x+this.velX;
		this.y=this.y+this.velY;
		this.sensorMove();
	}
}

