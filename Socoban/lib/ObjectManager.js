
class ObjectManager{
	constructor(){
		this.objectArray=[];
		//게임에 등장할 모든 종류의 오브젝트들을 모아놓은 배열
	}
	addObject(obj){
		this.objectArray.push(obj);
	}
	removeChild(obj){
		stage.removeChild(obj.div);
		this.objectArray.splice(this.objectArray.indexOf(obj),1);
	}

	//모든 객체 제거하기
	removeAll(){
		//화면제거
		for(var i=0;i<this.objectArray.length;i++){
			stage.removeChild(this.objectArray[i].div);

			//주인공의 경우 오브젝트 매니저에 sensor가 등록되어 있지 않기 때문에, 별도로 지워야 함
			if(this.objectArray[i].type=="HERO"){
				var hero=this.objectArray[i];
				var len=hero.sensorArray.length;
				for(var a=0; a<len;a++){
					stage.removeChild(hero.sensorArray[a].div);
				}
				for(var a=0; a<len;a++){
					hero.sensorArray.splice(0,1);
				}
			}
		}

		//배열에서 제거
		var len=this.objectArray.length;
		for(var i=0;i<len;i++){		
			this.objectArray.splice(0, 1);
		}

	}


	tick(){
		for(var i=0; i<this.objectArray.length; i++){
			this.objectArray[i].tick();
		}
	}
	render(){
		for(var i=0; i<this.objectArray.length; i++){
			this.objectArray[i].render();
		}
	}
}

/*
class ObjectManager{
	constructor(){
		this.objectArray=[];
		//게임에 등장할 모든 종류의 오브젝트들을 모아놓은 배열
	}
	addObject(obj){
		this.objectArray.push(obj);
	}
	removeChild(obj){
		stage.removeChild(obj.div);
		this.objectArray.splice(this.objectArray.indexOf(obj),1);
	}
	removeAll(){ //objectArray의 모든 값을 삭제
		//1) 화면에서 제거
		for(var i=0; i<this.objectArray.length; i++){
			stage.removeChild(this.objectArray[i].div);
			
				//화면에서 지워진다고해도 아직 배열에서는 완벽하게 지워진게 아니기 때문에
				//남겨진 배열요소들을 게임루프에서 계속 tick(), render()가 호출되고 있어서
				//배열요소가 완벽하게 지워지기 전까지는 화면에는 찌꺼기가 남은 것처럼 보여질거임!
			
			if(this.objectArray[i].type=="HERO"){ //주인공인 경우에는 objectManager에 등록이 되어있지 않기 때문에 별도로 삭제
				var hero = this.objectArray[i];
				for(var a=0; a<hero.sensorArray.length; a++){
					stage.removeChild(hero.sensorArray[a].div); //화면에서 지우고
				}
				for(var a=0; a<hero.sensorArray.length; a++){
					hero.sensorArray.splice(0,1); //배열에서도 지운다.
				}
			}
		}
		//2) 배열에서 제거
		for(var i=0; i<this.objectArray.length; i++){
			this.objectArray.splice(0,1); //계속해서 배열의 길이가 달라지기 때문에 다 지울거라면 첫번째꺼부터 계속 지워준다.
		}
	}
	tick(){
		for(var i=0; i<this.objectArray.length; i++){
			this.objectArray[i].tick();
		}
	}
	render(){
		for(var i=0; i<this.objectArray.length; i++){
			this.objectArray[i].render();
		}
	}
}
*/