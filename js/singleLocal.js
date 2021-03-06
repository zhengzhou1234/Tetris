var Local=function(){
	//游戏对象
	var game;
	//时间间隔
	var INTERVAL=500;
	//定时器
	var timer=null;
	//时间计时器
	var timeCount=0;
	//时间
	var time=0;
	//绑定键盘事件
	var bindKeyEvent=function(){
		document.onkeydown=function(e){
			if(e.keyCode==38){//up-用作旋转
				game.rotate();
			}else if(e.keyCode==39){//right
				game.right();
			}else if(e.keyCode==40){//down
				game.down();
			}else if(e.keyCode==37){//left
				game.left();
			}else if(e.keyCode==32){//space-用作坠落
				game.fall();
			}else if(e.keyCode==16){//shift-用作置换
				game.shift();
			}
		}
	}
	//移动
	var move=function(){
		timeFunc();
		if(!game.down()){
			game.fixed();
			var line=game.checkClear();
			if(line){
				game.addScore(line);
				if(line > 1){
					var bottomLines = generataBottomLine(line);
				}
			}
			var gameOver=game.chenckGameOver();
			if(gameOver){
				game.singleGameOver();
				stop();
			}else{
				var t = generateType();
				var d = generateDir();
				game.performNext(t,d);
			}
		}else{
			game.down();
		}
	}
	//随机生成干扰函数
	var generataBottomLine=function(lineNum){
		var lines=[];
		for(var i=0;i<lineNum;i++){
			var line=[];
			for(var j=0;j<10;j++){
				line.push(Math.ceil(Math.random()*2)-1);
			}
			lines.push(line);
		}
		return lines;
	}
	//计时函数
	var timeFunc=function(){
		timeCount=timeCount+1;
		if(timeCount==2){
			timeCount=0;
			time=time+1;
			game.setTime(time);
		}
	}
	//随机生成一个方块种类
	var generateType=function(){
		return Math.ceil(Math.random()*7)-1;
	}
	//随机生成旋转次数（决定方块方向）
	var generateDir=function(){
		return Math.ceil(Math.random()*4)-1;
	}
	//游戏开始
	var start=function(){
		var doms={
			gameDiv:document.getElementById('local_game'),
			nextDiv:document.getElementById('local_next'),
			timeDiv:document.getElementById('local_time'),
			scoreDiv:document.getElementById('local_score'),
			resultDiv:document.getElementById('local_gameover')
		}
		game=new Game();
		
		var type = generateType();
		var dir = generateDir();
		game.init(doms,type,dir);
		
		bindKeyEvent();
		
		var t = generateType();
		var d = generateDir();
		game.performNext(t,d);
		
		timer=setInterval(move,INTERVAL);
	}
	//游戏结束
	var stop=function(){
		if(timer){
			clearInterval(timer);
			timer=null;
		}
		document.onkeydown=null;
	}

		start();
}
