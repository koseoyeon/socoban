
/*Array=[
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	]
];*/

/*------------------------------------------------------------
	stage 배열(3차원 배열)
	0 : 빈화면
	1 : block(벽 : 주인공과 박스는 지나갈 수 없음)
	2 : box(box : 회색박스 / changeBox : 갈색박스)
		 > 박스는 주인공에 의해 제어되며, 
		 	정답 위에 있는 박스는 갈색박스로 변함
	7 : hero(주인공)

	stage는 총 10단계로 구성
------------------------------------------------------------*/
var stageArray=[
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,1,0,7,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,1,0,2,0,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,0,1,0,1,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,1,0,1,0,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,2,0,0,1,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,0,0,2,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage1
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0],
		[0,0,0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,2,2,2,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,7,0,2,0,0,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,2,0,0,0,1,1,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,1,0,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage2
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,0,0,7,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,2,0,0,1,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,0,2,0,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,0,2,2,0,1,0,0,0,0,0],
		[0,0,0,0,0,0,0,1,0,0,0,1,1,0,0,0,0,0],
		[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage3
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,1,1,1,1,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,1,0,0,1,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,1,1,0,0,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,1,0,0,2,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,1,0,2,0,0,1,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,1,2,2,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,7,0,0,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage4
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,2,0,0,2,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,7,2,0,2,0,1,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,2,0,0,2,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,1,0,0,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage5
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,1,1,1,0,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,0,0,1,0,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,2,2,2,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,1,0,0,1,1,1,0,0,0,0],
		[0,0,0,0,0,1,1,0,0,0,0,2,0,1,0,0,0,0],
		[0,0,0,0,0,0,1,0,0,7,0,0,0,1,0,0,0,0],
		[0,0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage6
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,2,0,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,1,0,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,2,2,2,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,2,0,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,2,2,2,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,1,7,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage7
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,0,0,0,1,0,0,0,0,0,0],
		[0,0,0,0,1,1,1,0,0,0,2,1,1,1,0,0,0,0],
		[0,0,0,0,1,0,0,2,1,2,0,2,0,1,0,0,0,0],
		[0,0,0,0,1,0,2,2,0,0,1,2,0,1,0,0,0,0],
		[0,0,0,0,1,0,0,0,0,1,0,0,0,1,0,0,0,0],
		[0,0,0,0,1,1,1,1,0,7,0,1,1,1,0,0,0,0],
		[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage8
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,1,1,1,1,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,0,0,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,7,2,0,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,0,2,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,1,1,2,0,1,0,0,0,0,0,0],
		[0,0,0,0,0,1,0,1,0,0,0,1,1,0,0,0,0,0],
		[0,0,0,0,0,1,2,0,2,2,2,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,0,0,0,0,0,0,1,0,0,0,0,0],
		[0,0,0,0,0,1,1,1,1,1,1,1,1,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	], //stage9

	[
		[0,0,0,0,0,0,0,0,0,0,0,0,1,1,1,1,0,0],
		[0,0,0,1,1,1,1,1,1,1,1,1,1,0,0,1,0,0],
		[0,0,0,1,0,0,0,0,0,0,0,0,0,0,0,1,0,0],
		[0,0,0,1,0,2,1,1,1,1,1,1,1,0,0,1,0,0],
		[0,1,1,1,1,7,1,1,1,1,1,1,1,0,1,1,1,1],
		[0,1,0,0,0,2,0,0,0,1,0,0,0,2,0,0,0,1],
		[0,1,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,1],
		[0,1,0,2,0,2,0,2,0,1,0,2,0,2,0,2,0,1],
		[0,1,2,0,0,0,0,0,2,1,2,0,2,0,2,0,2,1],
		[0,1,0,2,0,0,0,2,0,1,0,2,0,2,0,2,0,1],
		[0,1,0,0,2,0,2,0,0,1,0,0,2,0,2,0,0,1],
		[0,1,0,0,0,2,0,0,0,1,1,0,0,2,0,0,1,1],
		[1,1,1,1,1,0,1,1,1,1,1,1,1,0,1,1,1,0],
		[1,0,0,0,1,0,1,0,0,2,0,0,1,0,0,0,1,0],
		[1,0,0,0,2,0,0,2,0,2,0,0,1,0,1,0,1,0],
		[1,1,1,1,1,1,1,0,0,2,0,2,0,0,0,0,1,0],
		[0,0,0,0,0,0,1,0,0,2,0,0,1,1,1,1,1,0],
		[0,0,0,0,0,0,1,1,1,1,1,1,1,0,0,0,0,0]
	] //stage10
];
/*------------------------------------------------------------
	pointer(정답) 배열(3차원 배열)
	0 : 빈화면
	9 : 정답표시(파란 동그라미)
------------------------------------------------------------*/
var pointerArray=[
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage1
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,9,9,9,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage2
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,9,0,9,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage3
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage4
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage5
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,9,9,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage6
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,9,9,0,9,9,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,9,9,0,9,9,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage7
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,9,9,9,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,9,9,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
	], //stage8
	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,9,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,9,0,0,9,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	], //stage9

	[
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,9,0,0,0,0,0,0,0,9,0,0,0,0],
		[0,0,0,0,9,0,9,0,0,0,0,0,9,0,9,0,0,0],
		[0,0,0,9,0,0,0,9,0,0,0,9,0,9,0,9,0,0],
		[0,0,9,0,0,9,0,0,9,0,9,0,9,9,9,0,9,0],
		[0,0,0,9,0,0,0,9,0,0,0,9,0,9,0,9,0,0],
		[0,0,0,0,9,0,9,0,0,0,0,0,9,0,9,0,0,0],
		[0,0,0,0,0,9,0,0,0,0,0,0,0,9,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,9,0,0,9,0,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,9,0,9,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,9,0,0,0,0,0,0,0,0],
		[0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
	] //stage10
];