/*박스 생성 함수*/

class Box extends GameObject{
	//나만의 생성자
	constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg,row,col){//행, 열
		super(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg);

		//박스 좌표를 알아내기 위한 변수
		this.col=col; //열(x좌표)
		this.row=row; //행(y좌표)
		//this.div.innerText=row+","+col;
	}

	/*-------------------------------------------
		새롭게 이동할 곳 : 이미 계산된 결과가 넘어온다.
	--------------------------------------------*/

	move(row, col){
		stageArray[currentStage][row][col]=2;
		this.x=col*50; //이동할 곳 x
		this.y=row*50; //이동할 곳 y
		this.col=col; //좌표 갱신
		this.row=row; //좌표 갱신
		this.tick();
		this.render();
	}

	/*-------------------------------------------
		박스가 원래 있었던 곳을 0으로(아무것도 없는 상태) 놓기
	--------------------------------------------*/

	swap(row, col){
		stageArray[currentStage][row][col]=0;
	}
}