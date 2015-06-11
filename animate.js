var clicks = 0;
var num = 1;

var au1 = new Audio('sounds/1.mp3');
var au2 = new Audio('sounds/2.mp3');
var au3 = new Audio('sounds/3.mp3');
var au4 = new Audio('sounds/4.mp3');
var au5 = new Audio('sounds/5.mp3');
var au6 = new Audio('sounds/6.mp3');
var au7 = new Audio('sounds/7.mp3');
var au8 = new Audio('sounds/8.mp3');
var au9 = new Audio('sounds/9.mp3');

function animate1(num) {
	$('.button1').removeClass("ani4");
	$('.button1').addClass("ani1").delay(50).queue(function(next){
		$('.button1').addClass("ani2");
		$('.button1').removeClass("ani1").delay(50).queue(function(next){
			$('.button1').addClass("ani3");
			$('.button1').removeClass("ani2").delay(50).queue(function(next){
				$('.button1').addClass("ani4")
				$('.button1').removeClass("ani3");
				next();
				});
			next();
			});
		next();
		});
	au1.play();
	clicks = clicks + 1;
	document.getElementById("count").innerHTML = clicks;
};

function animate2(num) {
	$('.button2').removeClass("ani4");
	$('.button2').addClass("ani1").delay(50).queue(function(next){
		$('.button2').addClass("ani2");
		$('.button2').removeClass("ani1").delay(50).queue(function(next){
			$('.button2').addClass("ani3");
			$('.button2').removeClass("ani2").delay(50).queue(function(next){
				$('.button2').addClass("ani4")
				$('.button2').removeClass("ani3");
				next();
				});
			next();
			});
		next();
		});
	au2.play();
	clicks = clicks + 1;
	document.getElementById("count").innerHTML = clicks;
};

function animate3(num) {
	$('.button3').removeClass("ani12");
	$('.button3').addClass("ani1").delay(50).queue(function(next){
		$('.button3').addClass("ani2");
		$('.button3').removeClass("ani1").delay(50).queue(function(next){
			$('.button3').addClass("ani3");
			$('.button3').removeClass("ani2").delay(50).queue(function(next){
				$('.button3').addClass("ani4")
				$('.button3').removeClass("ani3").delay(50).queue(function(next){
					$('.button3').addClass("ani5")
					$('.button3').removeClass("ani4").delay(50).queue(function(next){
						$('.button3').addClass("ani6")
						$('.button3').removeClass("ani5").delay(50).queue(function(next){
							$('.button3').addClass("ani7")
							$('.button3').removeClass("ani6").delay(50).queue(function(next){
								$('.button3').addClass("ani8")
								$('.button3').removeClass("ani7").delay(50).queue(function(next){
									$('.button3').addClass("ani9")
									$('.button3').removeClass("ani8").delay(50).queue(function(next){
										$('.button3').addClass("ani10")
										$('.button3').removeClass("ani9").delay(50).queue(function(next){
											$('.button3').addClass("ani11")
											$('.button3').removeClass("ani10").delay(50).queue(function(next){
												$('.button3').addClass("ani12")
												$('.button3').removeClass("ani11")
											next();
											});
										next();
										});
									next();
									});
								next();
								});
							next();
							});
						next();
						});
					next();
					});
				next();
				});
			next();
			});
		next();
		});
	next();
	});
	au3.play();
	clicks = clicks + 1;
	document.getElementById("count").innerHTML = clicks;
};

function animate4(num) {
	$('.button4').removeClass("ani7");
	$('.button4').addClass("ani1").delay(50).queue(function(next){
		$('.button4').addClass("ani2");
		$('.button4').removeClass("ani1").delay(50).queue(function(next){
			$('.button4').addClass("ani3");
			$('.button4').removeClass("ani2").delay(50).queue(function(next){
				$('.button4').addClass("ani4")
				$('.button4').removeClass("ani3").delay(50).queue(function(next){
					$('.button4').addClass("ani5")
					$('.button4').removeClass("ani4").delay(50).queue(function(next){
						$('.button4').addClass("ani6")
						$('.button4').removeClass("ani5").delay(50).queue(function(next){
							$('.button4').addClass("ani7")
							$('.button4').removeClass("ani6")
							next();
							});
						next();
						});
					next();
					});
				next();
				});
			next();
			});
		next();
		});
	au4.play();
	clicks = clicks + 1;
	document.getElementById("count").innerHTML = clicks;
};

function animate5(num) {
	$('.button5').removeClass("ani7");
	$('.button5').addClass("ani1").delay(50).queue(function(next){
		$('.button5').addClass("ani2");
		$('.button5').removeClass("ani1").delay(50).queue(function(next){
			$('.button5').addClass("ani3");
			$('.button5').removeClass("ani2").delay(50).queue(function(next){
				$('.button5').addClass("ani4")
				$('.button5').removeClass("ani3").delay(50).queue(function(next){
					$('.button5').addClass("ani5")
					$('.button5').removeClass("ani4").delay(50).queue(function(next){
						$('.button5').addClass("ani6")
						$('.button5').removeClass("ani5").delay(50).queue(function(next){
							$('.button5').addClass("ani7")
							$('.button5').removeClass("ani6")
							next();
							});
						next();
						});
					next();
					});
				next();
				});
			next();
			});
		next();
		});
	au5.play();
	clicks = clicks + 1;
	document.getElementById("count").innerHTML = clicks;
};

function animate6(num) {
	$('.button6').removeClass("ani5");
	$('.button6').addClass("ani1").delay(50).queue(function(next){
		$('.button6').addClass("ani2");
		$('.button6').removeClass("ani1").delay(50).queue(function(next){
			$('.button6').addClass("ani3");
			$('.button6').removeClass("ani2").delay(50).queue(function(next){
				$('.button6').addClass("ani4")
				$('.button6').removeClass("ani3").delay(50).queue(function(next){
					$('.button6').addClass("ani5")
					$('.button6').removeClass("ani4")
					next();
					});
				next();
				});
			next();
			});
		next();
		});
	au6.play();
	clicks = clicks + 1;
	document.getElementById("count").innerHTML = clicks;
};

function animate7(num) {
	$('.button7').removeClass("ani7");
	$('.button7').addClass("ani1").delay(50).queue(function(next){
		$('.button7').addClass("ani2");
		$('.button7').removeClass("ani1").delay(50).queue(function(next){
			$('.button7').addClass("ani3");
			$('.button7').removeClass("ani2").delay(50).queue(function(next){
				$('.button7').addClass("ani4")
				$('.button7').removeClass("ani3").delay(50).queue(function(next){
					$('.button7').addClass("ani5")
					$('.button7').removeClass("ani4").delay(50).queue(function(next){
						$('.button7').addClass("ani6")
						$('.button7').removeClass("ani5").delay(50).queue(function(next){
							$('.button7').addClass("ani7")
							$('.button7').removeClass("ani6")
							next();
							});
						next();
						});
					next();
					});
				next();
				});
			next();
			});
		next();
		});
	au7.play();
	clicks = clicks + 1;
	document.getElementById("count").innerHTML = clicks;
};

function animate8(num) {
	$('.button8').removeClass("ani4");
	$('.button8').addClass("ani1").delay(50).queue(function(next){
		$('.button8').addClass("ani2");
		$('.button8').removeClass("ani1").delay(50).queue(function(next){
			$('.button8').addClass("ani3");
			$('.button8').removeClass("ani2").delay(50).queue(function(next){
				$('.button8').addClass("ani4")
				$('.button8').removeClass("ani3");
				next();
				});
			next();
			});
		next();
		});
	au8.play();
	clicks = clicks + 1;
	document.getElementById("count").innerHTML = clicks;
};

function animate9(num) {
	$('.button9').removeClass("ani5");
	$('.button9').addClass("ani1").delay(50).queue(function(next){
		$('.button9').addClass("ani2");
		$('.button9').removeClass("ani1").delay(50).queue(function(next){
			$('.button9').addClass("ani3");
			$('.button9').removeClass("ani2").delay(50).queue(function(next){
				$('.button9').addClass("ani4")
				$('.button9').removeClass("ani3").delay(50).queue(function(next){
					$('.button9').addClass("ani5")
					$('.button9').removeClass("ani4")
					next();
					});
				next();
				});
			next();
			});
		next();
		});
	au9.play();
	clicks = clicks + 1;
	document.getElementById("count").innerHTML = clicks;
};
