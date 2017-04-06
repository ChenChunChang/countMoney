$(function() {

	loadingImgs = ["images/bg.jpg", "images/tiaozhan.png", "images/yinqu.png", "images/shou.png", "images/start_game.png", "images/ranking.png", "images/activity_rule.png", "images/prize.png", "images/shiyong.png", "images/p1_from.png", "images/ranking_bg.png", "images/close.png", "images/p1_sub.png", "images/bg2.png", "images/p2_txt1.png", "images/p2_txt2.png", "images/p2_txt3.png", "images/p2_kuang.png", "images/shizhong.png", "images/p2_scoring.png", "images/p2_shou.png", "images/p2_qian.jpg", "images/p2_zhuan.png", "images/p3_acquire.png","images/p3_again.png", "images/p3_share_btn.png", "images/p3_share.png", "images/p1_first.png", "images/p1_second.png", "images/p1_third.png","images/p1_btns_wrap.png","images/qian.png"] ;   

	var loadingedNum = 0;
	for(var i =0;i<loadingImgs.length;i++){
		var imgObj = new Image();
		imgObj.src = loadingImgs[i];
		imgObj.onload = function(){

			loadingedNum++;
			var scale = parseInt(loadingedNum/loadingImgs.length*100);
			$(".loading").text(scale+"%");
			$(".onload-wrap").hide();

		}

	}

	init();
    function init(){
    	
    	
    	touch.on('#rank', 'tap', function(e){
      		$(".messTwo").show();
      		$(".messTwo").addClass("mask");
			$(".messTwo").on("mousedown",function (e){
				e.preventDefault();//鼠标按下时阻止默认事件
			});
		});
		
    	touch.on('#rule', 'tap', function(e){
      		$(".messThree").show();
      		$(".messThree").addClass("mask");
		});
		touch.on('#prize', 'tap', function(e){
      		$(".messFour").show();
      		$(".messFour").addClass("mask");
		});
		touch.on('#state', 'tap', function(e){
      		$(".messFive").show();
      		$(".messFive").addClass("mask");
		});

// 		$(".closeX").on("touchstart",function(){
// 			$(this).parent().hide();
// 			$(this).parent().removeClass("mask");
// 		});
		
		touch.on('.closeX', 'tap', function(e){
      		$(this).parent().hide();
			$(this).parent().removeClass("mask");
		});
		
		
		

		touch.on('#start', 'tap', function(e){
      		$(".messOne").show();
      		$(".messOne").addClass("mask");
      		$("input[name=sub]").on("touchstart",function(){
      			submitData();
      			e.preventDefault();
      		});
			function submitData(){
				if($("input[name=name]").val()==""||$("input[name=tel]").val()==""){
					$(".textT").text("用户名和密码不能为空!");
					$("input[name=name]").prop("value","");
					$("input[name=tel]").prop("value","");

				}else{
					submitAccmess();
				}

				function submitAccmess(){
					$(".first").fadeOut();
					$(".two").fadeIn();
					var textIndex = 0;
					var downTimerBol = true;
					var downTimerNum = 60;
					var monNum = 0;
					var txtArr = ["images/p2_txt1.png","images/p2_txt2.png","images/p2_txt3.png"];
					txtTimer = setInterval(function(){
						textIndex++;
						if(textIndex>txtArr.length-1){
							textIndex = 0;
						}
						$(".boxmess").attr({src:txtArr[textIndex]});
					},2000);

					var $monS = $(".monS");
					touch.on(".mon","swipeup",function(e){
						monNum++;
						$("#hint").hide();

							var $monObj = $("<img src='images/p2_qian.jpg' class='monS'>");
							var $monS = $(".monS");
							$(".two .mon").prepend($monObj);
							$monS.addClass("small");
							$monS.animate("slow",800,function(){
								this.remove();
							});


						if(downTimerBol){
							downTimerBol = false;
							var scoreTimer = setInterval(function(){
									downTimerNum--;
									console.log(downTimerNum);
									$(".span4").text(downTimerNum);
									if(downTimerNum<0){
										clearInterval(scoreTimer);
										$(".two").hide();
										$(".three").show();
										$(".endMess h2").html("￥"+monNum);
										
										threeFn();
									}



							},1000);
						}
						

						var monnum = monNum.toString();
						if(monNum>0&&monNum<10){
							$(".span1").text(0);
							$(".span2").text(0);
							$(".span3").text(monNum);
						}
						if(monNum>=10&&monNum<100){
							monnum.split("");
							$(".span1").text(0);
							$(".span2").text(monnum[0]);
							$(".span3").text(monnum[1]);
						}
						if(monNum>=100){
							monnum.split("");
							$(".span1").text(monnum[0]);
							$(".span2").text(monnum[1]);
							$(".span3").text(monnum[2]);
						}

					});
				}

			}
		});
//		threeFn();
		function threeFn(){

			var resultTxt = Math.random()>0.5?"没办法！你已经强到没有对手了":"你太客气了，这不是你的挑战极限吧";
			$(".endMess p").text(resultTxt);
			touch.on("#again","tap",function(){
				window.location.href = "index.html";
			});
			
			touch.on("#share","tap",function(){
				$(".messSix").show();
      			$(".messSix").addClass("mask");
			});
			touch.on("#fenx","tap",function(){
				$(this).parent().hide();
      			$(this).parent().removeClass("mask");
			});
		}
    }

});
