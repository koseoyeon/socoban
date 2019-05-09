//cell 생성 클래스

class Cell extends GameObject{
	constructor(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg,row,col){
		super(type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg);
		
		this.objType;
		this.answer;
		this.row=row;
		this.col=col;

		this.div.addEventListener("click",()=>{ //this를 사용하는 경우 화살표함수 유의!!!
			if(selectedObjType == undefined){
				alert("생성할 요소의 버튼을 선택하세요");
				return;
			}
			//alert(selectedColor);
			this.div.style.background=selectedColor;
			if(this.objType==9){
				this.answer=selectedObjType; //타입이 9라면 정답 인정!!
			}else{
				this.objType=selectedObjType;
			}
			if(this.objType==7){
				alert("주인공은 한 명만 선택 가능합니다.")
				//버튼 못 선택하게 막기
			}
		});
	}
}
