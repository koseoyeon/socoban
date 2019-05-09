/*------------------------------------------------------------
	전역변수 정의
------------------------------------------------------------*/
var cell;
var tempStageArray=[]; //임시 스테이지 빈 배열
var tempPointerArray=[]; //임시 정답 빈 배열
var selectedObjType; //사용자가 선택한 objTpye
var selectedColor; //사용자가 선택한color
var cellArray=[]; // 층을 담을 배열
var customFlag=true; //커스텀맵을 보여줄지 말지를 결정짓는 변수
/*------------------------------------------------------------
	커스텀맵 구현 함수

	1. 맵만들기 버튼을 누르면 커스텀맵을 구현할 div가 보여진다.
	2. tempStageArray[], tempPointerArray[] 두 배열을 생성
		임시적으로 맵들의 요소들을 담을 공간들임.
		추후 여기에 있던 요소들은 '적용'버튼을 누르면,
		objectManager에 등록될 예정
	3. custom(부모) div에 가로x세로 총 18x18개의 셀들을
		이차원배열로 생성
		>> 이차원 배열로 생성시에 각 셀들을 이차원형식으로
		배열에 담아둔다.
		rowCellArray[],collCellArray[] 배열 활용
------------------------------------------------------------*/
function createCellForCustomMap(){
	var custom = document.getElementById("custom");
		//type,container,x,y,width,height,velX,velY,targetX,targetY,src,bg,row,col
	
	//a : 층, row, y
	//i : 호수, col, x
	var size=15; //셀 크기
	for(var a=0; a<18; a++){ //층, y, row
		var cellBox=[]; //호수를 담을 배열
		for(var i=0; i<18; i++){ //호수, x, col
			cell = new Cell("CELL",custom,(size+1)*i,(size+1)*a,size,size,0,0,0,0,0,"#ffffcc",a,i);
			cell.div.style.border="1px solid black";
			//cell.div.innerText=[i,a];
			cellBox.push(cell);
		}
		cellArray.push(cellBox);
	}
	//console.log(rowCellArray);
	//console.log(colCellArray);
}

/*------------------------------------------------------------
	임시기억장소 배열 두개를 생성한다.
	tempStageArray, tempPointerArray
	> 2차원 배열로 만든 뒤, 0으로 값들을 초기화 해 놓는다.
	> 최초 한번만 만들어주면 됨!!
------------------------------------------------------------*/
function createTempMap(){
	if(tempStageArray.length<=0){ //아직 임시기억장소 생성 정이라면
		var stageBox=[];
		for(var a=0; a<cellArray.length; a++){
			var collStage=[];
			for(var i=0; i<cellArray.length; i++){
				collStage[i]=0; //1차원 배열에 모두 0의 값을 넣는다.
			}
			stageBox.push(collStage); //2차원 배열에 추가
		}
		var pointerBox=[];
		for(var a=0; a<cellArray.length; a++){
			var collPointer=[];
			for(var i=0; i<cellArray.length; i++){
				collPointer[i]=0; //1차원 배열에 모두 0의 값을 넣는다.
			}
			pointerBox.push(collPointer); //2차원 배열에 추가
		}
		tempStageArray=stageBox;
		tempPointerArray=pointerBox;
	}
}

/*------------------------------------------------------------
	사용자가 선택한 objTpye과 objColor를 받아서 저장해놓는 함수
------------------------------------------------------------*/
function setObjType(t,c){
	selectedObjType=t;
	selectedColor=c;
	//alert(c);
}

/*------------------------------------------------------------
	'맵 만들기' 버튼 클릭시 호출되는 곳으로,
	커스텀 맵을 생성하는 공간이 보여짐
------------------------------------------------------------*/
function showCustomMap(){
	if(customFlag){
		custom_area.style.display="block";
	}else{
	
	custom_area.style.display="none";
	}
	customFlag =! customFlag;
}

/*------------------------------------------------------------
	'적용'버튼을 누르면 호출되는 곳으로,
	사용자가 만들어낸 map을 stageArray[], pointerArray[]에
	반영하는 함수
------------------------------------------------------------*/
function applyMap(){
	createTempMap();
	stageArray.push(tempStageArray);
	pointerArray.push(tempPointerArray);
	//cellArray와 pointerArray 3차원 배열에
	//2차원 배열인 tempStageArray,tempPointerArray를 추가

	for(var a=0; a<cellArray.length; a++){
		for(var i=0; i<cellArray[a].length; i++){
			var cell = cellArray[a][i];
			if(cell.objType==1){
				console.log("블럭 발견",a,i);
				stageArray[stageArray.length-1][cell.row][cell.col]=1;
								//배열은 0부터 시작이므로
			}else if(cell.objType==2){
				console.log("박스 발견",a,i);
				stageArray[stageArray.length-1][cell.row][cell.col]=2;
			}else if(cell.objType==7){
				console.log("주인공 발견",a,i);
				stageArray[stageArray.length-1][cell.row][cell.col]=7;
			}else if(cell.objType==9){
				console.log("정답 발견",a,i);
				pointerArray[stageArray.length-1][cell.row][cell.col]=9;
			}
		}
	}
	//사용자가 생성한 맵을 stageArray와 pointerArray에 담고 난 뒤,
	//objectManager.objectArray의 모든값을 삭제하고 난 뒤, 다시 소환
	for(var a=0; a<cellArray.length; a++){
		for(var i=0; i<cellArray.length; i++){
			cellArray[a][i].div.style.background="#ffffcc";
		}
	}
	objectManager.removeAll();
	stepCount=0;
	currentStage=stageArray.length-1;
	//currentStgae는 0부터 시작이므로
	createPointer(); //stage생성을 위한 객체생성 초기화 1
	createStage(); //stage생성을 위한 객체생성 초기화 2
	setBoxColor(); //stage생성을 위한 객체생성 초기화 3
	createHero(); //stage생성을 위한 객체생성 초기화 4
	remainBox(); //stage생성을 위한 객체생성 초기화 5

	showScore();
}

/*------------------------------------------------------------
	사용자가 다음 단계로 넘어가고자 할 때,
	실행되는 함수
------------------------------------------------------------*/
function moveStage(){
	if((currentStage+1)>=stageArray.length){
		if(!(stageArray.length>10)){
			alert("마지막 stage입니다.");
		}
	}else{
		objectManager.removeAll();
		currentStage++; //다음 단계로 넘어가기 위해 증가
		stepCount=0;
		createPointer(); //stage생성을 위한 객체생성 초기화 1
		createStage(); //stage생성을 위한 객체생성 초기화 2
		setBoxColor(); //stage생성을 위한 객체생성 초기화 3
		createHero(); //stage생성을 위한 객체생성 초기화 4
		remainBox(); //stage생성을 위한 객체생성 초기화 5
		showScore();
	}
}

/*------------------------------------------------------------
	사용자가 이전 단계로 돌아가고자 할 때,
	실행되는 함수
------------------------------------------------------------*/
function prevStage(){
	if((currentStage+1)<=1){
		alert("처음 stage입니다.");
	}else{
		objectManager.removeAll();
		currentStage--; //다음 단계로 넘어가기 위해 감소
		stepCount=0;
		createPointer(); //stage생성을 위한 객체생성 초기화 1
		createStage(); //stage생성을 위한 객체생성 초기화 2
		setBoxColor(); //stage생성을 위한 객체생성 초기화 3
		createHero(); //stage생성을 위한 객체생성 초기화 4
		remainBox(); //stage생성을 위한 객체생성 초기화 5
		showScore();
	}
}


