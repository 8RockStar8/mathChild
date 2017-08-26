$(document).ready(function(){

	$(".numbers_block_child").css({
		"visibility":"visible",
		"opacity":"1",
		"left":"0px",
	})
	
	$(".img_puzzle").addClass("img1");
	
	var bg = 0;
	
	var bac = false;
	var nkar = false;
	
	var audio = new Audio("audio/time_music_2.ogg");
	
	var tiv = false;
	var time = 10;
	$(".time_content").text(time);
	
	$(".click").click(function(){
		
		if(bg == 4){
			$(".img_puzzle").removeClass("img1");
			$(".img_puzzle").addClass("img2");
		}else if(bg == 8){
			$(".img_puzzle").removeClass("img2");
			$(".img_puzzle").addClass("img3");
		}else if(bg == 12){
			$(".img_puzzle").removeClass("img3");
			$(".img_puzzle").addClass("img4");
		}else if(bg == 16){
			$(".img_puzzle").removeClass("img4");
			$(".img_puzzle").addClass("img5");
		}else if(bg == 20){
			$(".img_puzzle").removeClass("img5");
			$(".img_puzzle").addClass("img6");
		}else if(bg == 24){
			$(".img_puzzle").removeClass("img6");
			$(".img_puzzle").addClass("img7");
		}else if(bg == 28){
			$(".img_puzzle").removeClass("img7");
			$(".img_puzzle").addClass("img8");
		}else if(bg == 32){
			$(".img_puzzle").removeClass("img8");
			$(".img_puzzle").addClass("img9");
		}else if(bg == 36){
			$(".img_puzzle").removeClass("img9");
			$(".img_puzzle").addClass("img10");
		}else if(bg == 40){
			$(".img_puzzle").removeClass("img10");
			$(".img_puzzle").addClass("img11");
		}else if(bg == 44){
			$(".img_puzzle").removeClass("img11");
			$(".img_puzzle").addClass("img12");
		}else if(bg == 48){
			$(".img_puzzle").removeClass("img12");
			$(".img_puzzle").addClass("img13");
		}else if(bg == 52){
			$(".img_puzzle").removeClass("img13");
			$(".img_puzzle").addClass("img14");
		}else if(bg == 56){
			$(".img_puzzle").removeClass("img14");
			$(".img_puzzle").addClass("img15");
		}else if(bg == 60){
			$(".img_puzzle").removeClass("img15");
			$(".img_puzzle").addClass("img16");
		}else if(bg == 64){
			$(".img_puzzle").removeClass("img16");
			$(".img_puzzle").addClass("img17");
		}else if(bg == 68){
			$(".img_puzzle").removeClass("img17");
			$(".img_puzzle").addClass("img18");
		}else if(bg == 72){
			$(".img_puzzle").removeClass("img18");
			$(".img_puzzle").addClass("img19");
		}else if(bg == 76){
			$(".img_puzzle").removeClass("img19");
			$(".img_puzzle").addClass("img20");
		}else if(bg == 80){
			$(".img_puzzle").removeClass("img20");
			$(".img_puzzle").addClass("img21");
		}else if(bg == 84){
			$(".img_puzzle").removeClass("img21");
			$(".img_puzzle").addClass("img22");
		}else if(bg == 88){
			$(".img_puzzle").removeClass("img22");
			$(".img_puzzle").addClass("img23");
		}else if(bg == 92){
			$(".img_puzzle").removeClass("img23");
			$(".img_puzzle").addClass("img24");
		}else if(bg == 96){
			$(".img_puzzle").removeClass("img24");
			$(".img_puzzle").addClass("img25");
		}else if(bg == 100){
			$(".img_puzzle").removeClass("img25");
			$(".img_puzzle").addClass("img26");
		}else if(bg == 104){
			$(".img_puzzle").removeClass("img26");
			$(".img_puzzle").addClass("img27");
		}else if(bg == 108){
			$(".img_puzzle").removeClass("img27");
			$(".img_puzzle").addClass("img28");
		}else if(bg == 112){
			$(".img_puzzle").removeClass("img28");
			$(".img_puzzle").addClass("img29");
		}else if(bg == 116){
			$(".img_puzzle").removeClass("img29");
			$(".img_puzzle").addClass("img30");
		}else if(bg == 120){
			$(".img_puzzle").removeClass("img30");
			$(".img_puzzle").addClass("img31");
		}else if(bg == 124){
			$(".img_puzzle").removeClass("img31");
			$(".img_puzzle").addClass("img32");
		}else if(bg == 128){
			$(".img_puzzle").removeClass("img32");
			$(".img_puzzle").addClass("img33");
		}else if(bg == 132){
			$(".img_puzzle").removeClass("img33");
			$(".img_puzzle").addClass("img34");
		}else if(bg == 136){
			$(".img_puzzle").removeClass("img34");
			$(".img_puzzle").addClass("img35");
		}else if(bg == 140){
			$(".img_puzzle").removeClass("img35");
			$(".img_puzzle").addClass("img36");
		}else if(bg == 144){
			$(".img_puzzle").removeClass("img36");
			$(".img_puzzle").addClass("img37");
		}else if(bg == 148){
			$(".img_puzzle").removeClass("img37");
			$(".img_puzzle").addClass("img38");
		}else if(bg == 152){
			$(".img_puzzle").removeClass("img38");
			$(".img_puzzle").addClass("img39");
		}else if(bg == 156){
			$(".img_puzzle").removeClass("img39");
			$(".img_puzzle").addClass("img40");
		}else if(bg == 160){
			$(".img_puzzle").removeClass("img40");
			$(".img_puzzle").addClass("img41");
		}else if(bg == 164){
			$(".img_puzzle").removeClass("img41");
			$(".img_puzzle").addClass("img42");
		}else if(bg == 168){
			$(".img_puzzle").removeClass("img42");
			$(".img_puzzle").addClass("img43");
		}else if(bg == 172){
			$(".img_puzzle").removeClass("img43");
			$(".img_puzzle").addClass("img44");
		}else if(bg == 176){
			$(".img_puzzle").removeClass("img44");
			$(".img_puzzle").addClass("img45");
		}else if(bg == 180){
			$(".img_puzzle").removeClass("img45");
			$(".img_puzzle").addClass("img46");
		}else if(bg == 184){
			$(".img_puzzle").removeClass("img46");
			$(".img_puzzle").addClass("img47");
		}else if(bg == 188){
			$(".img_puzzle").removeClass("img47");
			$(".img_puzzle").addClass("img48");
		}else if(bg == 192){
			$(".img_puzzle").removeClass("img48");
			$(".img_puzzle").addClass("img49");
		}else if(bg == 196){
			$(".img_puzzle").removeClass("img49");
			$(".img_puzzle").addClass("img50");
		}else if(bg == 200){
			$(".img_puzzle").removeClass("img50");
			$(".img_puzzle").addClass("img51");
		}else if(bg == 204){
			$(".img_puzzle").removeClass("img51");
			$(".img_puzzle").addClass("img52");
		}else if(bg == 208){
			$(".img_puzzle").removeClass("img52");
			$(".img_puzzle").addClass("img53");
		}else if(bg == 212){
			$(".img_puzzle").removeClass("img53");
			$(".img_puzzle").addClass("img54");
		}else if(bg == 216){
			$(".img_puzzle").removeClass("img54");
			$(".img_puzzle").addClass("img55");
		}else if(bg == 220){
			$(".img_puzzle").removeClass("img55");
			$(".img_puzzle").addClass("img56");
		}else if(bg == 224){
			$(".img_puzzle").removeClass("img56");
			$(".img_puzzle").addClass("img57");
		}else if(bg == 228){
			$(".img_puzzle").removeClass("img57");
			$(".img_puzzle").addClass("img58");
		}else if(bg == 232){
			$(".img_puzzle").removeClass("img58");
			$(".img_puzzle").addClass("img59");
		}else if(bg == 236){
			$(".img_puzzle").removeClass("img59");
			$(".img_puzzle").addClass("img60");
		}else if(bg == 240){
			$(".img_puzzle").removeClass("img60");
			$(".img_puzzle").addClass("img61");
		}else if(bg == 244){
			$(".img_puzzle").removeClass("img61");
			$(".img_puzzle").addClass("img62");
		}else if(bg == 248){
			$(".img_puzzle").removeClass("img62");
			$(".img_puzzle").addClass("img63");
		}else if(bg == 252){
			$(".img_puzzle").removeClass("img63");
			$(".img_puzzle").addClass("img64");
		}else if(bg == 256){
			$(".img_puzzle").removeClass("img64");
			$(".img_puzzle").addClass("img65");
		}else if(bg == 260){
			$(".img_puzzle").removeClass("img65");
			$(".img_puzzle").addClass("img66");
		}else if(bg == 264){
			$(".img_puzzle").removeClass("img66");
			$(".img_puzzle").addClass("img67");
		}else if(bg == 268){
			$(".img_puzzle").removeClass("img67");
			$(".img_puzzle").addClass("img68");
		}else if(bg == 272){
			$(".img_puzzle").removeClass("img68");
			$(".img_puzzle").addClass("img69");
		}else if(bg == 276){
			$(".img_puzzle").removeClass("img69");
			$(".img_puzzle").addClass("img70");
		}else if(bg == 280){
			$(".img_puzzle").removeClass("img70");
			$(".img_puzzle").addClass("img71");
		}else if(bg == 284){
			$(".img_puzzle").removeClass("img71");
			$(".img_puzzle").addClass("img72");
		}else if(bg == 288){
			$(".img_puzzle").removeClass("img72");
			$(".img_puzzle").addClass("img73");
		}else if(bg == 292){
			$(".img_puzzle").removeClass("img73");
			$(".img_puzzle").addClass("img74");
		}else if(bg == 296){
			$(".img_puzzle").removeClass("img74");
			$(".img_puzzle").addClass("img75");
		}else if(bg == 300){
			$(".img_puzzle").removeClass("img75");
			$(".img_puzzle").addClass("img1");
			bg = 0;
		}
		
		$(".answer_content_absolute").css({
			"zIndex":"3",
		})
		
		$(".question_content_child").css({
			"zIndex":"3",
		})
		
		var numbers = $(this).find(".childtext").text();
		
		if(tiv == false){
			$("#answer_content_center").text(numbers + "?");
		}
		
		
		$(".height").animate({
			"height":"0px",
		},1000)
		
		$(".height_1").animate({
			"height":"330px",
		},1200 ,function(){
			$(".answer_content_absolute").css({
				"zIndex":"-1",
			})
			if(document.getElementById("answer_content_center").innerText == ("1 x 1 = ?")){
				$("#first_answer").text("2");
				$("#second_answer").text("1");
				$("#third_answer").text("3");
				$("#fourth_answer").text("4");
			}else if(document.getElementById("answer_content_center").innerText == ("1 x 2 = ?")){
				$("#first_answer").text("1");
				$("#second_answer").text("3");
				$("#third_answer").text("5");
				$("#fourth_answer").text("2");
			}else if(document.getElementById("answer_content_center").innerText == ("1 x 3 = ?")){
				$("#first_answer").text("4");
				$("#second_answer").text("6");
				$("#third_answer").text("3");
				$("#fourth_answer").text("1");
			}else if(document.getElementById("answer_content_center").innerText == ("1 x 4 = ?")){
				$("#first_answer").text("4");
				$("#second_answer").text("2");
				$("#third_answer").text("7");
				$("#fourth_answer").text("8");
			}else if(document.getElementById("answer_content_center").innerText == ("1 x 5 = ?")){
				$("#first_answer").text("7");
				$("#second_answer").text("6");
				$("#third_answer").text("5");
				$("#fourth_answer").text("8");
			}else if(document.getElementById("answer_content_center").innerText == ("1 x 6 = ?")){
				$("#first_answer").text("8");
				$("#second_answer").text("9");
				$("#third_answer").text("2");
				$("#fourth_answer").text("6");
			}else if(document.getElementById("answer_content_center").innerText == ("1 x 7 = ?")){
				$("#first_answer").text("7");
				$("#second_answer").text("8");
				$("#third_answer").text("1");
				$("#fourth_answer").text("9");
			}else if(document.getElementById("answer_content_center").innerText == ("1 x 8 = ?")){
				$("#first_answer").text("9");
				$("#second_answer").text("7");
				$("#third_answer").text("8");
				$("#fourth_answer").text("10");
			}else if(document.getElementById("answer_content_center").innerText == ("1 x 9 = ?")){
				$("#first_answer").text("11");
				$("#second_answer").text("9");
				$("#third_answer").text("7");
				$("#fourth_answer").text("8");
			}else if(document.getElementById("answer_content_center").innerText == ("1 x 10 = ?")){
				$("#first_answer").text("11");
				$("#second_answer").text("9");
				$("#third_answer").text("1");
				$("#fourth_answer").text("10");
			}else if(document.getElementById("answer_content_center").innerText == ("2 x 1 = ?")){
				$("#first_answer").text("4");
				$("#second_answer").text("3");
				$("#third_answer").text("2");
				$("#fourth_answer").text("1");
			}else if(document.getElementById("answer_content_center").innerText == ("2 x 2 = ?")){
				$("#first_answer").text("6");
				$("#second_answer").text("5");
				$("#third_answer").text("2");
				$("#fourth_answer").text("4");
			}else if(document.getElementById("answer_content_center").innerText == ("2 x 3 = ?")){
				$("#first_answer").text("5");
				$("#second_answer").text("7");
				$("#third_answer").text("6");
				$("#fourth_answer").text("3");
			}else if(document.getElementById("answer_content_center").innerText == ("2 x 4 = ?")){
				$("#first_answer").text("6");
				$("#second_answer").text("7");
				$("#third_answer").text("8");
				$("#fourth_answer").text("5");
			}else if(document.getElementById("answer_content_center").innerText == ("2 x 5 = ?")){
				$("#first_answer").text("9");
				$("#second_answer").text("11");
				$("#third_answer").text("10");
				$("#fourth_answer").text("12");
			}else if(document.getElementById("answer_content_center").innerText == ("2 x 6 = ?")){
				$("#first_answer").text("12");
				$("#second_answer").text("13");
				$("#third_answer").text("10");
				$("#fourth_answer").text("11");
			}else if(document.getElementById("answer_content_center").innerText == ("2 x 7 = ?")){
				$("#first_answer").text("15");
				$("#second_answer").text("13");
				$("#third_answer").text("12");
				$("#fourth_answer").text("14");
			}else if(document.getElementById("answer_content_center").innerText == ("2 x 8 = ?")){
				$("#first_answer").text("19");
				$("#second_answer").text("18");
				$("#third_answer").text("16");
				$("#fourth_answer").text("17");
			}else if(document.getElementById("answer_content_center").innerText == ("2 x 9 = ?")){
				$("#first_answer").text("19");
				$("#second_answer").text("20");
				$("#third_answer").text("17");
				$("#fourth_answer").text("18");
			}else if(document.getElementById("answer_content_center").innerText == ("2 x 10 = ?")){
				$("#first_answer").text("22");
				$("#second_answer").text("19");
				$("#third_answer").text("20");
				$("#fourth_answer").text("21");
			}else if(document.getElementById("answer_content_center").innerText == ("3 x 1 = ?")){
				$("#first_answer").text("5");
				$("#second_answer").text("2");
				$("#third_answer").text("3");
				$("#fourth_answer").text("4");
			}else if(document.getElementById("answer_content_center").innerText == ("3 x 2 = ?")){
				$("#first_answer").text("6");
				$("#second_answer").text("7");
				$("#third_answer").text("8");
				$("#fourth_answer").text("5");
			}else if(document.getElementById("answer_content_center").innerText == ("3 x 3 = ?")){
				$("#first_answer").text("10");
				$("#second_answer").text("8");
				$("#third_answer").text("11");
				$("#fourth_answer").text("9");
			}else if(document.getElementById("answer_content_center").innerText == ("3 x 4 = ?")){
				$("#first_answer").text("12");
				$("#second_answer").text("13");
				$("#third_answer").text("11");
				$("#fourth_answer").text("10");
			}else if(document.getElementById("answer_content_center").innerText == ("3 x 5 = ?")){
				$("#first_answer").text("17");
				$("#second_answer").text("14");
				$("#third_answer").text("15");
				$("#fourth_answer").text("16");
			}else if(document.getElementById("answer_content_center").innerText == ("3 x 6 = ?")){
				$("#first_answer").text("20");
				$("#second_answer").text("17");
				$("#third_answer").text("19");
				$("#fourth_answer").text("18");
			}else if(document.getElementById("answer_content_center").innerText == ("3 x 7 = ?")){
				$("#first_answer").text("22");
				$("#second_answer").text("21");
				$("#third_answer").text("20");
				$("#fourth_answer").text("19");
			}else if(document.getElementById("answer_content_center").innerText == ("3 x 8 = ?")){
				$("#first_answer").text("24");
				$("#second_answer").text("23");
				$("#third_answer").text("25");
				$("#fourth_answer").text("21");
			}else if(document.getElementById("answer_content_center").innerText == ("3 x 9 = ?")){
				$("#first_answer").text("25");
				$("#second_answer").text("26");
				$("#third_answer").text("28");
				$("#fourth_answer").text("27");
			}else if(document.getElementById("answer_content_center").innerText == ("3 x 10 = ?")){
				$("#first_answer").text("30");
				$("#second_answer").text("29");
				$("#third_answer").text("31");
				$("#fourth_answer").text("27");
			}else if(document.getElementById("answer_content_center").innerText == ("4 x 1 = ?")){
				$("#first_answer").text("4");
				$("#second_answer").text("3");
				$("#third_answer").text("5");
				$("#fourth_answer").text("6");
			}else if(document.getElementById("answer_content_center").innerText == ("4 x 2 = ?")){
				$("#first_answer").text("6");
				$("#second_answer").text("7");
				$("#third_answer").text("8");
				$("#fourth_answer").text("9");
			}else if(document.getElementById("answer_content_center").innerText == ("4 x 3 = ?")){
				$("#first_answer").text("10");
				$("#second_answer").text("14");
				$("#third_answer").text("13");
				$("#fourth_answer").text("12");
			}else if(document.getElementById("answer_content_center").innerText == ("4 x 4 = ?")){
				$("#first_answer").text("13");
				$("#second_answer").text("15");
				$("#third_answer").text("14");
				$("#fourth_answer").text("16");
			}else if(document.getElementById("answer_content_center").innerText == ("4 x 5 = ?")){
				$("#first_answer").text("19");
				$("#second_answer").text("20");
				$("#third_answer").text("18");
				$("#fourth_answer").text("22");
			}else if(document.getElementById("answer_content_center").innerText == ("4 x 6 = ?")){
				$("#first_answer").text("24");
				$("#second_answer").text("26");
				$("#third_answer").text("22");
				$("#fourth_answer").text("25");
			}else if(document.getElementById("answer_content_center").innerText == ("4 x 7 = ?")){
				$("#first_answer").text("27");
				$("#second_answer").text("26");
				$("#third_answer").text("29");
				$("#fourth_answer").text("28");
			}else if(document.getElementById("answer_content_center").innerText == ("4 x 8 = ?")){
				$("#first_answer").text("30");
				$("#second_answer").text("32");
				$("#third_answer").text("33");
				$("#fourth_answer").text("34");
			}else if(document.getElementById("answer_content_center").innerText == ("4 x 9 = ?")){
				$("#first_answer").text("32");
				$("#second_answer").text("34");
				$("#third_answer").text("38");
				$("#fourth_answer").text("36");
			}else if(document.getElementById("answer_content_center").innerText == ("4 x 10 = ?")){
				$("#first_answer").text("42");
				$("#second_answer").text("40");
				$("#third_answer").text("38");
				$("#fourth_answer").text("41");
			}else if(document.getElementById("answer_content_center").innerText == ("5 x 1 = ?")){
				$("#first_answer").text("5");
				$("#second_answer").text("7");
				$("#third_answer").text("6");
				$("#fourth_answer").text("4");
			}else if(document.getElementById("answer_content_center").innerText == ("5 x 2 = ?")){
				$("#first_answer").text("12");
				$("#second_answer").text("11");
				$("#third_answer").text("9");
				$("#fourth_answer").text("10");
			}else if(document.getElementById("answer_content_center").innerText == ("5 x 3 = ?")){
				$("#first_answer").text("17");
				$("#second_answer").text("15");
				$("#third_answer").text("16");
				$("#fourth_answer").text("14");
			}else if(document.getElementById("answer_content_center").innerText == ("5 x 4 = ?")){
				$("#first_answer").text("20");
				$("#second_answer").text("22");
				$("#third_answer").text("18");
				$("#fourth_answer").text("19");
			}else if(document.getElementById("answer_content_center").innerText == ("5 x 5 = ?")){
				$("#first_answer").text("25");
				$("#second_answer").text("26");
				$("#third_answer").text("23");
				$("#fourth_answer").text("24");
			}else if(document.getElementById("answer_content_center").innerText == ("5 x 6 = ?")){
				$("#first_answer").text("29");
				$("#second_answer").text("27");
				$("#third_answer").text("28");
				$("#fourth_answer").text("30");
			}else if(document.getElementById("answer_content_center").innerText == ("5 x 7 = ?")){
				$("#first_answer").text("37");
				$("#second_answer").text("35");
				$("#third_answer").text("36");
				$("#fourth_answer").text("34");
			}else if(document.getElementById("answer_content_center").innerText == ("5 x 8 = ?")){
				$("#first_answer").text("40");
				$("#second_answer").text("38");
				$("#third_answer").text("39");
				$("#fourth_answer").text("42");
			}else if(document.getElementById("answer_content_center").innerText == ("5 x 9 = ?")){
				$("#first_answer").text("44");
				$("#second_answer").text("46");
				$("#third_answer").text("45");
				$("#fourth_answer").text("47");
			}else if(document.getElementById("answer_content_center").innerText == ("5 x 10 = ?")){
				$("#first_answer").text("51");
				$("#second_answer").text("52");
				$("#third_answer").text("49");
				$("#fourth_answer").text("50");
			}else if(document.getElementById("answer_content_center").innerText == ("6 x 1 = ?")){
				$("#first_answer").text("8");
				$("#second_answer").text("6");
				$("#third_answer").text("7");
				$("#fourth_answer").text("5");
			}else if(document.getElementById("answer_content_center").innerText == ("6 x 2 = ?")){
				$("#first_answer").text("11");
				$("#second_answer").text("13");
				$("#third_answer").text("14");
				$("#fourth_answer").text("12");
			}else if(document.getElementById("answer_content_center").innerText == ("6 x 3 = ?")){
				$("#first_answer").text("19");
				$("#second_answer").text("16");
				$("#third_answer").text("18");
				$("#fourth_answer").text("17");
			}else if(document.getElementById("answer_content_center").innerText == ("6 x 4 = ?")){
				$("#first_answer").text("22");
				$("#second_answer").text("24");
				$("#third_answer").text("23");
				$("#fourth_answer").text("25");
			}else if(document.getElementById("answer_content_center").innerText == ("6 x 5 = ?")){
				$("#first_answer").text("30");
				$("#second_answer").text("38");
				$("#third_answer").text("32");
				$("#fourth_answer").text("34");
			}else if(document.getElementById("answer_content_center").innerText == ("6 x 6 = ?")){
				$("#first_answer").text("36");
				$("#second_answer").text("34");
				$("#third_answer").text("32");
				$("#fourth_answer").text("38");
			}else if(document.getElementById("answer_content_center").innerText == ("6 x 7 = ?")){
				$("#first_answer").text("43");
				$("#second_answer").text("40");
				$("#third_answer").text("42");
				$("#fourth_answer").text("44");
			}else if(document.getElementById("answer_content_center").innerText == ("6 x 8 = ?")){
				$("#first_answer").text("48");
				$("#second_answer").text("46");
				$("#third_answer").text("44");
				$("#fourth_answer").text("49");
			}else if(document.getElementById("answer_content_center").innerText == ("6 x 9 = ?")){
				$("#first_answer").text("50");
				$("#second_answer").text("52");
				$("#third_answer").text("56");
				$("#fourth_answer").text("54");
			}else if(document.getElementById("answer_content_center").innerText == ("6 x 10 = ?")){
				$("#first_answer").text("60");
				$("#second_answer").text("59");
				$("#third_answer").text("58");
				$("#fourth_answer").text("62");
			}else if(document.getElementById("answer_content_center").innerText == ("7 x 1 = ?")){
				$("#first_answer").text("9");
				$("#second_answer").text("7");
				$("#third_answer").text("8");
				$("#fourth_answer").text("6");
			}else if(document.getElementById("answer_content_center").innerText == ("7 x 2 = ?")){
				$("#first_answer").text("13");
				$("#second_answer").text("16");
				$("#third_answer").text("15");
				$("#fourth_answer").text("14");
			}else if(document.getElementById("answer_content_center").innerText == ("7 x 3 = ?")){
				$("#first_answer").text("20");
				$("#second_answer").text("21");
				$("#third_answer").text("19");
				$("#fourth_answer").text("18");
			}else if(document.getElementById("answer_content_center").innerText == ("7 x 4 = ?")){
				$("#first_answer").text("26");
				$("#second_answer").text("25");
				$("#third_answer").text("27");
				$("#fourth_answer").text("28");
			}else if(document.getElementById("answer_content_center").innerText == ("7 x 5 = ?")){
				$("#first_answer").text("34");
				$("#second_answer").text("35");
				$("#third_answer").text("36");
				$("#fourth_answer").text("37");
			}else if(document.getElementById("answer_content_center").innerText == ("7 x 6 = ?")){
				$("#first_answer").text("40");
				$("#second_answer").text("43");
				$("#third_answer").text("44");
				$("#fourth_answer").text("42");
			}else if(document.getElementById("answer_content_center").innerText == ("7 x 7 = ?")){
				$("#first_answer").text("50");
				$("#second_answer").text("47");
				$("#third_answer").text("49");
				$("#fourth_answer").text("48");
			}else if(document.getElementById("answer_content_center").innerText == ("7 x 8 = ?")){
				$("#first_answer").text("55");
				$("#second_answer").text("57");
				$("#third_answer").text("56");
				$("#fourth_answer").text("54");
			}else if(document.getElementById("answer_content_center").innerText == ("7 x 9 = ?")){
				$("#first_answer").text("63");
				$("#second_answer").text("64");
				$("#third_answer").text("62");
				$("#fourth_answer").text("65");
			}else if(document.getElementById("answer_content_center").innerText == ("7 x 10 = ?")){
				$("#first_answer").text("70");
				$("#second_answer").text("68");
				$("#third_answer").text("69");
				$("#fourth_answer").text("71");
			}else if(document.getElementById("answer_content_center").innerText == ("8 x 1 = ?")){
				$("#first_answer").text("10");
				$("#second_answer").text("7");
				$("#third_answer").text("9");
				$("#fourth_answer").text("8");
			}else if(document.getElementById("answer_content_center").innerText == ("8 x 2 = ?")){
				$("#first_answer").text("16");
				$("#second_answer").text("15");
				$("#third_answer").text("13");
				$("#fourth_answer").text("14");
			}else if(document.getElementById("answer_content_center").innerText == ("8 x 3 = ?")){
				$("#first_answer").text("23");
				$("#second_answer").text("25");
				$("#third_answer").text("24");
				$("#fourth_answer").text("22");
			}else if(document.getElementById("answer_content_center").innerText == ("8 x 4 = ?")){
				$("#first_answer").text("32");
				$("#second_answer").text("34");
				$("#third_answer").text("36");
				$("#fourth_answer").text("30");
			}else if(document.getElementById("answer_content_center").innerText == ("8 x 5 = ?")){
				$("#first_answer").text("39");
				$("#second_answer").text("42");
				$("#third_answer").text("38");
				$("#fourth_answer").text("40");
			}else if(document.getElementById("answer_content_center").innerText == ("8 x 6 = ?")){
				$("#first_answer").text("44");
				$("#second_answer").text("48");
				$("#third_answer").text("46");
				$("#fourth_answer").text("49");
			}else if(document.getElementById("answer_content_center").innerText == ("8 x 7 = ?")){
				$("#first_answer").text("56");
				$("#second_answer").text("55");
				$("#third_answer").text("57");
				$("#fourth_answer").text("54");
			}else if(document.getElementById("answer_content_center").innerText == ("8 x 8 = ?")){
				$("#first_answer").text("65");
				$("#second_answer").text("66");
				$("#third_answer").text("64");
				$("#fourth_answer").text("67");
			}else if(document.getElementById("answer_content_center").innerText == ("8 x 9 = ?")){
				$("#first_answer").text("73");
				$("#second_answer").text("72");
				$("#third_answer").text("74");
				$("#fourth_answer").text("71");
			}else if(document.getElementById("answer_content_center").innerText == ("8 x 10 = ?")){
				$("#first_answer").text("82");
				$("#second_answer").text("78");
				$("#third_answer").text("80");
				$("#fourth_answer").text("79");
			}else if(document.getElementById("answer_content_center").innerText == ("9 x 1 = ?")){
				$("#first_answer").text("11");
				$("#second_answer").text("10");
				$("#third_answer").text("9");
				$("#fourth_answer").text("8");
			}else if(document.getElementById("answer_content_center").innerText == ("9 x 2 = ?")){
				$("#first_answer").text("16");
				$("#second_answer").text("19");
				$("#third_answer").text("17");
				$("#fourth_answer").text("18");
			}else if(document.getElementById("answer_content_center").innerText == ("9 x 3 = ?")){
				$("#first_answer").text("29");
				$("#second_answer").text("27");
				$("#third_answer").text("28");
				$("#fourth_answer").text("26");
			}else if(document.getElementById("answer_content_center").innerText == ("9 x 4 = ?")){
				$("#first_answer").text("38");
				$("#second_answer").text("37");
				$("#third_answer").text("35");
				$("#fourth_answer").text("36");
			}else if(document.getElementById("answer_content_center").innerText == ("9 x 5 = ?")){
				$("#first_answer").text("43");
				$("#second_answer").text("46");
				$("#third_answer").text("45");
				$("#fourth_answer").text("44");
			}else if(document.getElementById("answer_content_center").innerText == ("9 x 6 = ?")){
				$("#first_answer").text("54");
				$("#second_answer").text("55");
				$("#third_answer").text("57");
				$("#fourth_answer").text("56");
			}else if(document.getElementById("answer_content_center").innerText == ("9 x 7 = ?")){
				$("#first_answer").text("64");
				$("#second_answer").text("66");
				$("#third_answer").text("65");
				$("#fourth_answer").text("63");
			}else if(document.getElementById("answer_content_center").innerText == ("9 x 8 = ?")){
				$("#first_answer").text("74");
				$("#second_answer").text("72");
				$("#third_answer").text("73");
				$("#fourth_answer").text("71");
			}else if(document.getElementById("answer_content_center").innerText == ("9 x 9 = ?")){
				$("#first_answer").text("80");
				$("#second_answer").text("82");
				$("#third_answer").text("81");
				$("#fourth_answer").text("83");
			}else if(document.getElementById("answer_content_center").innerText == ("9 x 10 = ?")){
				$("#first_answer").text("90");
				$("#second_answer").text("91");
				$("#third_answer").text("93");
				$("#fourth_answer").text("89");
			}else if(document.getElementById("answer_content_center").innerText == ("10 x 1 = ?")){
				$("#first_answer").text("11");
				$("#second_answer").text("9");
				$("#third_answer").text("10");
				$("#fourth_answer").text("12");
			}else if(document.getElementById("answer_content_center").innerText == ("10 x 2 = ?")){
				$("#first_answer").text("20");
				$("#second_answer").text("21");
				$("#third_answer").text("22");
				$("#fourth_answer").text("19");
			}else if(document.getElementById("answer_content_center").innerText == ("10 x 3 = ?")){
				$("#first_answer").text("33");
				$("#second_answer").text("32");
				$("#third_answer").text("30");
				$("#fourth_answer").text("31");
			}else if(document.getElementById("answer_content_center").innerText == ("10 x 4 = ?")){
				$("#first_answer").text("42");
				$("#second_answer").text("40");
				$("#third_answer").text("41");
				$("#fourth_answer").text("43");
			}else if(document.getElementById("answer_content_center").innerText == ("10 x 5 = ?")){
				$("#first_answer").text("52");
				$("#second_answer").text("50");
				$("#third_answer").text("51");
				$("#fourth_answer").text("54");
			}else if(document.getElementById("answer_content_center").innerText == ("10 x 6 = ?")){
				$("#first_answer").text("63");
				$("#second_answer").text("62");
				$("#third_answer").text("60");
				$("#fourth_answer").text("24");
			}else if(document.getElementById("answer_content_center").innerText == ("10 x 7 = ?")){
				$("#first_answer").text("70");
				$("#second_answer").text("72");
				$("#third_answer").text("73");
				$("#fourth_answer").text("71");
			}else if(document.getElementById("answer_content_center").innerText == ("10 x 8 = ?")){
				$("#first_answer").text("83");
				$("#second_answer").text("82");
				$("#third_answer").text("80");
				$("#fourth_answer").text("84");
			}else if(document.getElementById("answer_content_center").innerText == ("10 x 9 = ?")){
				$("#first_answer").text("94");
				$("#second_answer").text("93");
				$("#third_answer").text("92");
				$("#fourth_answer").text("90");
			}else if(document.getElementById("answer_content_center").innerText == ("10 x 10 = ?")){
				$("#first_answer").text("110");
				$("#second_answer").text("111");
				$("#third_answer").text("101");
				$("#fourth_answer").text("100");
			}
		})
		
		$(".time_content").css({
			"border":"5px solid #000",
		})
			
		$(".time_content").animate({
			"height":"230px",
		},1200 ,function(){
			audio.play();
			second = setInterval(function(){

				if(time == 0){
					$(".answer_content_absolute").css({
						"zIndex":"3",
					})
					
					$(".height").animate({
						"height":"100%",
					},1200 ,function(){
						$(".question_content_child").css({
							"zIndex":"-1",
						})
						
						$(".answer_content_absolute").css({
							"zIndex":"-1",
						})
					})
					
					$(".time_content").animate({
						"height":"0px",
					},1000 ,function(){
						$(".time_content").css({
							"border":"0px solid #000",
						})
					})
					
					$(".height_1").animate({
						"height":"0px",
					},1000 ,function(){
						$("#answer_content_center").text("");
						$("#first_answer").text("");
						$("#second_answer").text("");
						$("#third_answer").text("");
						$("#fourth_answer").text("");
					})
					
					
					
					time = 10;
					$(".time_content").text(time);
					clearInterval(second);
					return false;
				}
				time--;
				$(".time_content").text(time);
			},1000)
		})
	})
	
	$(".cursor_hover").click(function(){
		
		if(document.getElementById("answer_content_center").innerText == ("1 x 1 = ?") && $(this).text() == 1){
			
			bg++;

			$(".first_answer1").text("1");
			
			$(".first_answer1").parent().css({
				"zIndex":"-1",
			})
			
			$(".first_answer1").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("1 x 2 = ?") && $(this).text() == 2){
			bg++;

			$(".first_answer2").text("2");
			
			$(".first_answer2").parent().css({
				"zIndex":"-1",
			})
			
			$(".first_answer2").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("1 x 3 = ?") && $(this).text() == 3){
			bg++;

			$(".first_answer3").text("3");
			
			$(".first_answer3").parent().css({
				"zIndex":"-1",
			})
			
			$(".first_answer3").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("1 x 4 = ?") && $(this).text() == 4){
			bg++;

			$(".first_answer4").text("4");
			
			$(".first_answer4").parent().css({
				"zIndex":"-1",
			})
			
			$(".first_answer4").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("1 x 5 = ?") && $(this).text() == 5){
			bg++;

			$(".first_answer5").text("5");
			
			$(".first_answer5").parent().css({
				"zIndex":"-1",
			})
			
			$(".first_answer5").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("1 x 6 = ?") && $(this).text() == 6){
			bg++;

			$(".first_answer6").text("6");
			
			$(".first_answer6").parent().css({
				"zIndex":"-1",
			})
			
			$(".first_answer6").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("1 x 7 = ?") && $(this).text() == 7){
			bg++;

			$(".first_answer7").text("7");
			
			$(".first_answer7").parent().css({
				"zIndex":"-1",
			})
			
			$(".first_answer7").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("1 x 8 = ?") && $(this).text() == 8){
			bg++;
			
			$(".first_answer8").text("8");
			
			$(".first_answer8").parent().css({
				"zIndex":"-1",
			})
			
			$(".first_answer8").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("1 x 9 = ?") && $(this).text() == 9){
			bg++;
			
			$(".first_answer9").text("9");
			
			$(".first_answer9").parent().css({
				"zIndex":"-1",
			})
			
			$(".first_answer9").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("1 x 10 = ?") && $(this).text() == 10){
			bg++;
			
			$(".first_answer10").text("10");
			
			$(".first_answer10").parent().css({
				"zIndex":"-1",
			})
			
			$(".first_answer10").parent().prev().css({
				"zIndex":"3",
			})
			
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("2 x 1 = ?") && $(this).text() == 2){
			bg++;
			
			$(".second_answer1").text("2");
			
			$(".second_answer1").parent().css({
				"zIndex":"-1",
			})
			
			$(".second_answer1").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("2 x 2 = ?") && $(this).text() == 4){
			bg++;
			
			$(".second_answer2").text("4");
			
			$(".second_answer2").parent().css({
				"zIndex":"-1",
			})
			
			$(".second_answer2").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("2 x 3 = ?") && $(this).text() == 6){
			bg++;
			
			$(".second_answer3").text("6");
			
			$(".second_answer3").parent().css({
				"zIndex":"-1",
			})
			
			$(".second_answer3").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("2 x 4 = ?") && $(this).text() == 8){
			bg++;
			
			$(".second_answer4").text("8");
			
			$(".second_answer4").parent().css({
				"zIndex":"-1",
			})
			
			$(".second_answer4").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("2 x 5 = ?") && $(this).text() == 10){
			bg++;
			
			$(".second_answer5").text("10");
			
			$(".second_answer5").parent().css({
				"zIndex":"-1",
			})
			
			$(".second_answer5").parent().prev().css({
				"zIndex":"3",
			})
		
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("2 x 6 = ?") && $(this).text() == 12){
			bg++;
			
			$(".second_answer6").text("12");
			
			$(".second_answer6").parent().css({
				"zIndex":"-1",
			})
			
			$(".second_answer6").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("2 x 7 = ?") && $(this).text() == 14){
			bg++;
			
			$(".second_answer7").text("14");
			
			$(".second_answer7").parent().css({
				"zIndex":"-1",
			})
			
			$(".second_answer7").parent().prev().css({
				"zIndex":"3",
			})
	
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("2 x 8 = ?") && $(this).text() == 16){
			bg++;
			
			$(".second_answer8").text("16");
			
			$(".second_answer8").parent().css({
				"zIndex":"-1",
			})
			
			$(".second_answer8").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("2 x 9 = ?") && $(this).text() == 18){
			bg++;
			
			$(".second_answer9").text("18");
			
			$(".second_answer9").parent().css({
				"zIndex":"-1",
			})
			
			$(".second_answer9").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("2 x 10 = ?") && $(this).text() == 20){
			bg++;
			
			$(".second_answer10").text("20");
			
			$(".second_answer10").parent().css({
				"zIndex":"-1",
			})
			
			$(".second_answer10").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("3 x 1 = ?") && $(this).text() == 3){
			bg++;

			$(".third_answer1").text("3");
			
			$(".third_answer1").parent().css({
				"zIndex":"-1",
			})
			
			$(".third_answer1").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("3 x 2 = ?") && $(this).text() == 6){
			bg++;
			
			$(".third_answer2").text("6");
			
			$(".third_answer2").parent().css({
				"zIndex":"-1",
			})
			
			$(".third_answer2").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("3 x 3 = ?") && $(this).text() == 9){
			bg++;
			
			$(".third_answer3").text("9");
			
			$(".third_answer3").parent().css({
				"zIndex":"-1",
			})
			
			$(".third_answer3").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("3 x 4 = ?") && $(this).text() == 12){
			bg++;
			
			$(".third_answer4").text("12");
			
			$(".third_answer4").parent().css({
				"zIndex":"-1",
			})
			
			$(".third_answer4").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("3 x 5 = ?") && $(this).text() == 15){
			bg++;
			
			$(".third_answer5").text("15");
			
			$(".third_answer5").parent().css({
				"zIndex":"-1",
			})
			
			$(".third_answer5").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("3 x 6 = ?") && $(this).text() == 18){
			bg++;
			
			$(".third_answer6").text("18");
			
			$(".third_answer6").parent().css({
				"zIndex":"-1",
			})
			
			$(".third_answer6").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("3 x 7 = ?") && $(this).text() == 21){
			bg++;
			
			$(".third_answer7").text("21");
			
			$(".third_answer7").parent().css({
				"zIndex":"-1",
			})
			
			$(".third_answer7").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("3 x 8 = ?") && $(this).text() == 24){
			bg++;
			
			$(".third_answer8").text("24");
			
			$(".third_answer8").parent().css({
				"zIndex":"-1",
			})
			
			$(".third_answer8").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("3 x 9 = ?") && $(this).text() == 27){
			bg++;
			
			$(".third_answer9").text("27");
			
			$(".third_answer9").parent().css({
				"zIndex":"-1",
			})
			
			$(".third_answer9").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("3 x 10 = ?") && $(this).text() == 30){
			bg++;
			
			$(".third_answer10").text("30");
			
			$(".third_answer10").parent().css({
				"zIndex":"-1",
			})
			
			$(".third_answer10").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("4 x 1 = ?") && $(this).text() == 4){
			bg++;

			$(".fourth_answer1").text("4");
			
			$(".fourth_answer1").parent().css({
				"zIndex":"-1",
			})
			
			$(".fourth_answer1").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("4 x 2 = ?") && $(this).text() == 8){
			bg++;
			
			$(".fourth_answer2").text("8");
			
			$(".fourth_answer2").parent().css({
				"zIndex":"-1",
			})
			
			$(".fourth_answer2").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("4 x 3 = ?") && $(this).text() == 12){
			bg++;
			
			$(".fourth_answer3").text("12");
			
			$(".fourth_answer3").parent().css({
				"zIndex":"-1",
			})
			
			$(".fourth_answer3").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("4 x 4 = ?") && $(this).text() == 16){
			bg++;
			
			$(".fourth_answer4").text("16");
			
			$(".fourth_answer4").parent().css({
				"zIndex":"-1",
			})
			
			$(".fourth_answer4").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("4 x 5 = ?") && $(this).text() == 20){
			bg++;
			
			$(".fourth_answer5").text("20");
			
			$(".fourth_answer5").parent().css({
				"zIndex":"-1",
			})
			
			$(".fourth_answer5").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("4 x 6 = ?") && $(this).text() == 24){
			bg++;
			
			$(".fourth_answer6").text("24");
			
			$(".fourth_answer6").parent().css({
				"zIndex":"-1",
			})
			
			$(".fourth_answer6").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("4 x 7 = ?") && $(this).text() == 28){
			bg++;
			
			$(".fourth_answer7").text("28");
			
			$(".fourth_answer7").parent().css({
				"zIndex":"-1",
			})
			
			$(".fourth_answer7").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("4 x 8 = ?") && $(this).text() == 32){
			bg++;
			
			$(".fourth_answer8").text("32");
			
			$(".fourth_answer8").parent().css({
				"zIndex":"-1",
			})
			
			$(".fourth_answer8").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("4 x 9 = ?") && $(this).text() == 36){
			bg++;
			
			$(".fourth_answer9").text("36");
			
			$(".fourth_answer9").parent().css({
				"zIndex":"-1",
			})
			
			$(".fourth_answer9").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("4 x 10 = ?") && $(this).text() == 40){
			bg++;
			
			$(".fourth_answer10").text("40");
			
			$(".fourth_answer10").parent().css({
				"zIndex":"-1",
			})
			
			$(".fourth_answer10").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("5 x 1 = ?") && $(this).text() == 5){
			bg++;

			$(".fifth_answer1").text("5");
			
			$(".fifth_answer1").parent().css({
				"zIndex":"-1",
			})
			
			$(".fifth_answer1").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("5 x 2 = ?") && $(this).text() == 10){
			bg++;
			
			$(".fifth_answer2").text("10");
			
			$(".fifth_answer2").parent().css({
				"zIndex":"-1",
			})
			
			$(".fifth_answer2").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("5 x 3 = ?") && $(this).text() == 15){
			bg++;
			
			$(".fifth_answer3").text("15");
			
			$(".fifth_answer3").parent().css({
				"zIndex":"-1",
			})
			
			$(".fifth_answer3").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("5 x 4 = ?") && $(this).text() == 20){
			bg++;
			
			$(".fifth_answer4").text("20");
			
			$(".fifth_answer4").parent().css({
				"zIndex":"-1",
			})
			
			$(".fifth_answer4").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("5 x 5 = ?") && $(this).text() == 25){
			bg++;
			
			$(".fifth_answer5").text("25");
			
			$(".fifth_answer5").parent().css({
				"zIndex":"-1",
			})
			
			$(".fifth_answer5").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("5 x 6 = ?") && $(this).text() == 30){
			bg++;
			
			$(".fifth_answer6").text("30");
			
			$(".fifth_answer6").parent().css({
				"zIndex":"-1",
			})
			
			$(".fifth_answer6").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("5 x 7 = ?") && $(this).text() == 35){
			bg++;
			
			$(".fifth_answer7").text("35");
			
			$(".fifth_answer7").parent().css({
				"zIndex":"-1",
			})
			
			$(".fifth_answer7").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("5 x 8 = ?") && $(this).text() == 40){
			bg++;
			
			$(".fifth_answer8").text("40");
			
			$(".fifth_answer8").parent().css({
				"zIndex":"-1",
			})
			
			$(".fifth_answer8").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("5 x 9 = ?") && $(this).text() == 45){
			bg++;
			
			$(".fifth_answer9").text("45");
			
			$(".fifth_answer9").parent().css({
				"zIndex":"-1",
			})
			
			$(".fifth_answer9").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("5 x 10 = ?") && $(this).text() == 50){
			bg++;
			
			$(".fifth_answer10").text("50");
			
			$(".fifth_answer10").parent().css({
				"zIndex":"-1",
			})
			
			$(".fifth_answer10").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("6 x 1 = ?") && $(this).text() == 6){
			bg++;

			$(".sixth_answer1").text("6");
			
			$(".sixth_answer1").parent().css({
				"zIndex":"-1",
			})
			
			$(".sixth_answer1").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("6 x 2 = ?") && $(this).text() == 12){
			bg++;
			
			$(".sixth_answer2").text("12");
			
			$(".sixth_answer2").parent().css({
				"zIndex":"-1",
			})
			
			$(".sixth_answer2").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("6 x 3 = ?") && $(this).text() == 18){
			bg++;
			
			$(".sixth_answer3").text("18");
			
			$(".sixth_answer3").parent().css({
				"zIndex":"-1",
			})
			
			$(".sixth_answer3").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("6 x 4 = ?") && $(this).text() == 24){
			bg++;
			
			$(".sixth_answer4").text("24");
			
			$(".sixth_answer4").parent().css({
				"zIndex":"-1",
			})
			
			$(".sixth_answer4").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("6 x 5 = ?") && $(this).text() == 30){
			bg++;
			
			$(".sixth_answer5").text("30");
			
			$(".sixth_answer5").parent().css({
				"zIndex":"-1",
			})
			
			$(".sixth_answer5").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("6 x 6 = ?") && $(this).text() == 36){
			bg++;
			
			$(".sixth_answer6").text("36");
			
			$(".sixth_answer6").parent().css({
				"zIndex":"-1",
			})
			
			$(".sixth_answer6").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("6 x 7 = ?") && $(this).text() == 42){
			bg++;
			
			$(".sixth_answer7").text("42");
			
			$(".sixth_answer7").parent().css({
				"zIndex":"-1",
			})
			
			$(".sixth_answer7").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("6 x 8 = ?") && $(this).text() == 48){
			bg++;
			
			$(".sixth_answer8").text("48");
			
			$(".sixth_answer8").parent().css({
				"zIndex":"-1",
			})
			
			$(".sixth_answer8").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("6 x 9 = ?") && $(this).text() == 54){
			bg++;
			
			$(".sixth_answer9").text("54");
			
			$(".sixth_answer9").parent().css({
				"zIndex":"-1",
			})
			
			$(".sixth_answer9").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("6 x 10 = ?") && $(this).text() == 60){
			bg++;
			
			$(".sixth_answer10").text("60");
			
			$(".sixth_answer10").parent().css({
				"zIndex":"-1",
			})
			
			$(".sixth_answer10").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("7 x 1 = ?") && $(this).text() == 7){
			bg++;

			$(".seventh_answer1").text("7");
			
			$(".seventh_answer1").parent().css({
				"zIndex":"-1",
			})
			
			$(".seventh_answer1").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("7 x 2 = ?") && $(this).text() == 14){
			bg++;
			
			$(".seventh_answer2").text("14");
			
			$(".seventh_answer2").parent().css({
				"zIndex":"-1",
			})
			
			$(".seventh_answer2").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("7 x 3 = ?") && $(this).text() == 21){
			bg++;
			
			$(".seventh_answer3").text("21");
			
			$(".seventh_answer3").parent().css({
				"zIndex":"-1",
			})
			
			$(".seventh_answer3").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("7 x 4 = ?") && $(this).text() == 28){
			bg++;
			
			$(".seventh_answer4").text("28");
			
			$(".seventh_answer4").parent().css({
				"zIndex":"-1",
			})
			
			$(".seventh_answer4").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("7 x 5 = ?") && $(this).text() == 35){
			bg++;
			
			$(".seventh_answer5").text("35");
			
			$(".seventh_answer5").parent().css({
				"zIndex":"-1",
			})
			
			$(".seventh_answer5").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("7 x 6 = ?") && $(this).text() == 42){
			bg++;
			
			$(".seventh_answer6").text("42");
			
			$(".seventh_answer6").parent().css({
				"zIndex":"-1",
			})
			
			$(".seventh_answer6").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("7 x 7 = ?") && $(this).text() == 49){
			bg++;
			
			$(".seventh_answer7").text("49");
			
			$(".seventh_answer7").parent().css({
				"zIndex":"-1",
			})
			
			$(".seventh_answer7").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("7 x 8 = ?") && $(this).text() == 56){
			bg++;
			
			$(".seventh_answer8").text("56");
			
			$(".seventh_answer8").parent().css({
				"zIndex":"-1",
			})
			
			$(".seventh_answer8").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("7 x 9 = ?") && $(this).text() == 63){
			bg++;
			
			$(".seventh_answer9").text("63");
			
			$(".seventh_answer9").parent().css({
				"zIndex":"-1",
			})
			
			$(".seventh_answer9").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("7 x 10 = ?") && $(this).text() == 70){
			bg++;
			
			$(".seventh_answer10").text("70");
			
			$(".seventh_answer10").parent().css({
				"zIndex":"-1",
			})
			
			$(".seventh_answer10").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("8 x 1 = ?") && $(this).text() == 8){
			bg++;

			$(".eighth_answer1").text("8");
			
			$(".eighth_answer1").parent().css({
				"zIndex":"-1",
			})
			
			$(".eighth_answer1").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("8 x 2 = ?") && $(this).text() == 16){
			bg++;
			
			$(".eighth_answer2").text("16");
			
			$(".eighth_answer2").parent().css({
				"zIndex":"-1",
			})
			
			$(".eighth_answer2").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("8 x 3 = ?") && $(this).text() == 24){
			bg++;
			
			$(".eighth_answer3").text("24");
			
			$(".eighth_answer3").parent().css({
				"zIndex":"-1",
			})
			
			$(".eighth_answer3").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("8 x 4 = ?") && $(this).text() == 32){
			bg++;
			
			$(".eighth_answer4").text("32");
			
			$(".eighth_answer4").parent().css({
				"zIndex":"-1",
			})
			
			$(".eighth_answer4").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("8 x 5 = ?") && $(this).text() == 40){
			bg++;
			
			$(".eighth_answer5").text("40");
			
			$(".eighth_answer5").parent().css({
				"zIndex":"-1",
			})
			
			$(".eighth_answer5").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("8 x 6 = ?") && $(this).text() == 48){
			bg++;
			
			$(".eighth_answer6").text("48");
			
			$(".eighth_answer6").parent().css({
				"zIndex":"-1",
			})
			
			$(".eighth_answer6").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("8 x 7 = ?") && $(this).text() == 56){
			bg++;
			
			$(".eighth_answer7").text("56");
			
			$(".eighth_answer7").parent().css({
				"zIndex":"-1",
			})
			
			$(".eighth_answer7").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("8 x 8 = ?") && $(this).text() == 64){
			bg++;
			
			$(".eighth_answer8").text("64");
			
			$(".eighth_answer8").parent().css({
				"zIndex":"-1",
			})
			
			$(".eighth_answer8").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("8 x 9 = ?") && $(this).text() == 72){
			bg++;
			
			$(".eighth_answer9").text("72");
			
			$(".eighth_answer9").parent().css({
				"zIndex":"-1",
			})
			
			$(".eighth_answer9").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("8 x 10 = ?") && $(this).text() == 80){
			bg++;
			
			$(".eighth_answer10").text("80");
			
			$(".eighth_answer10").parent().css({
				"zIndex":"-1",
			})
			
			$(".eighth_answer10").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("9 x 1 = ?") && $(this).text() == 9){
			bg++;

			$(".ninth_answer1").text("9");
			
			$(".ninth_answer1").parent().css({
				"zIndex":"-1",
			})
			
			$(".ninth_answer1").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("9 x 2 = ?") && $(this).text() == 18){
			bg++;
			
			$(".ninth_answer2").text("18");
			
			$(".ninth_answer2").parent().css({
				"zIndex":"-1",
			})
			
			$(".ninth_answer2").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("9 x 3 = ?") && $(this).text() == 27){
			bg++;
			
			$(".ninth_answer3").text("27");
			
			$(".ninth_answer3").parent().css({
				"zIndex":"-1",
			})
			
			$(".ninth_answer3").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("9 x 4 = ?") && $(this).text() == 36){
			bg++;
			
			$(".ninth_answer4").text("36");
			
			$(".ninth_answer4").parent().css({
				"zIndex":"-1",
			})
			
			$(".ninth_answer4").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("9 x 5 = ?") && $(this).text() == 45){
			bg++;
			
			$(".ninth_answer5").text("45");
			
			$(".ninth_answer5").parent().css({
				"zIndex":"-1",
			})
			
			$(".ninth_answer5").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("9 x 6 = ?") && $(this).text() == 54){
			bg++;
			
			$(".ninth_answer6").text("54");
			
			$(".ninth_answer6").parent().css({
				"zIndex":"-1",
			})
			
			$(".ninth_answer6").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("9 x 7 = ?") && $(this).text() == 63){
			bg++;
			
			$(".ninth_answer7").text("63");
			
			$(".ninth_answer7").parent().css({
				"zIndex":"-1",
			})
			
			$(".ninth_answer7").parent().prev().css({
				"zIndex":"3",
			})
		
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("9 x 8 = ?") && $(this).text() == 72){
			bg++;
			
			$(".ninth_answer8").text("72");
			
			$(".ninth_answer8").parent().css({
				"zIndex":"-1",
			})
			
			$(".ninth_answer8").parent().prev().css({
				"zIndex":"3",
			})
		
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("9 x 9 = ?") && $(this).text() == 81){
			bg++;
			
			$(".ninth_answer9").text("81");
			
			$(".ninth_answer9").parent().css({
				"zIndex":"-1",
			})
			
			$(".ninth_answer9").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("9 x 10 = ?") && $(this).text() == 90){
			bg++;
			
			$(".ninth_answer10").text("90");
			
			$(".ninth_answer10").parent().css({
				"zIndex":"-1",
			})
			
			$(".ninth_answer10").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("10 x 1 = ?") && $(this).text() == 10){
			bg++;

			$(".tenth_answer1").text("10");
			
			$(".tenth_answer1").parent().css({
				"zIndex":"-1",
			})
			
			$(".tenth_answer1").parent().prev().css({
				"zIndex":"3",
			})
		
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("10 x 2 = ?") && $(this).text() == 20){
			bg++;
			
			$(".tenth_answer2").text("20");
			
			$(".tenth_answer2").parent().css({
				"zIndex":"-1",
			})
			
			$(".tenth_answer2").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("10 x 3 = ?") && $(this).text() == 30){
			bg++;
			
			$(".tenth_answer3").text("30");
			
			$(".tenth_answer3").parent().css({
				"zIndex":"-1",
			})
			
			$(".tenth_answer3").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("10 x 4 = ?") && $(this).text() == 40){
			bg++;
			
			$(".tenth_answer4").text("40");
			
			$(".tenth_answer4").parent().css({
				"zIndex":"-1",
			})
			
			$(".tenth_answer4").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("10 x 5 = ?") && $(this).text() == 50){
			bg++;
			
			$(".tenth_answer5").text("50");
			
			$(".tenth_answer5").parent().css({
				"zIndex":"-1",
			})
			
			$(".tenth_answer5").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("10 x 6 = ?") && $(this).text() == 60){
			bg++;
			
			$(".tenth_answer6").text("60");
			
			$(".tenth_answer6").parent().css({
				"zIndex":"-1",
			})
			
			$(".tenth_answer6").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("10 x 7 = ?") && $(this).text() == 70){
			bg++;
			
			$(".tenth_answer7").text("70");
			
			$(".tenth_answer7").parent().css({
				"zIndex":"-1",
			})
			
			$(".tenth_answer7").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("10 x 8 = ?") && $(this).text() == 80){
			bg++;
			
			$(".tenth_answer8").text("80");
			
			$(".tenth_answer8").parent().css({
				"zIndex":"-1",
			})
			
			$(".tenth_answer8").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("10 x 9 = ?") && $(this).text() == 90){
			bg++;
			
			$(".tenth_answer9").text("90");
			
			$(".tenth_answer9").parent().css({
				"zIndex":"-1",
			})
			
			$(".tenth_answer9").parent().prev().css({
				"zIndex":"3",
			})
		
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}else if(document.getElementById("answer_content_center").innerText == ("10 x 10 = ?") && $(this).text() == 100){
			bg++;
			
			$(".tenth_answer10").text("100");
			
			$(".tenth_answer10").parent().css({
				"zIndex":"-1",
			})
			
			$(".tenth_answer10").parent().prev().css({
				"zIndex":"3",
			})
			
			if(bac == false && nkar == false){
				$(".img_puzzle_1").css("opacity","1");
				$(".img_puzzle_2").css("opacity","1");
				$(".img_puzzle_3").css("opacity","1");
				$(".img_puzzle_4").css("opacity","1");
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_1").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == false){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_4").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = true;
			}else if(bac == false && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_2").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = true;
			}else if(bac == true && nkar == true){
				$(".height").animate({
					"height":"100%",
				},1000 ,function(){
					$(".img_puzzle").animate({
						"top":"0px",
						"height":"100%",
					},800 ,function(){
						$(".img_puzzle_3").animate({
							"opacity":"0",
						},1000 ,function(){
							$(".img_puzzle").animate({
								"top":"50%",
								"height":"0px",
							},800)
						})
					})
				})
				bac = false;
				nkar = false;
			}
		}
		
		var hashiv = parseInt($(this).text(),10);
		
		if(time > 0){
			time = 10;
			$(".time_content").text(time);
			clearInterval(second);
		}
		
		audio.pause();
		audio = new Audio("audio/time_music_2.ogg");
		
		$(".answer_content_absolute").css({
			"zIndex":"3",
		})
		
		$(".height").animate({
			"height":"100%",
		},1000 ,function(){
			
					if(bg == 100){
						$(".first_answer1").text("");
						
						$(".first_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer2").text("");
						
						$(".first_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer3").text("");
						
						$(".first_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer4").text("");
						
						$(".first_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer5").text("");
						
						$(".first_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer6").text("");
						
						$(".first_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer7").text("");
						
						$(".first_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer8").text("");
						
						$(".first_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer9").text("");
						
						$(".first_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer10").text("");
						
						$(".first_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer1").text("");
						
						$(".second_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer2").text("");
						
						$(".second_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer3").text("");
						
						$(".second_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer4").text("");
						
						$(".second_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer5").text("");
						
						$(".second_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer6").text("");
						
						$(".second_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer7").text("");
						
						$(".second_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer8").text("");
						
						$(".second_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer9").text("");
						
						$(".second_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer10").text("");
						
						$(".second_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer1").text("");
						
						$(".third_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer2").text("");
						
						$(".third_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer3").text("");
						
						$(".third_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer4").text("");
						
						$(".third_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer5").text("");
						
						$(".third_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer6").text("");
						
						$(".third_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer7").text("");
						
						$(".third_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer8").text("");
						
						$(".third_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer9").text("");
						
						$(".third_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer10").text("");
						
						$(".third_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer1").text("");
						
						$(".fourth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer2").text("");
						
						$(".fourth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer3").text("");
						
						$(".fourth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer4").text("");
						
						$(".fourth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer5").text("");
						
						$(".fourth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer6").text("");
						
						$(".fourth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer7").text("");
						
						$(".fourth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer8").text("");
						
						$(".fourth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer9").text("");
						
						$(".fourth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer10").text("");
						
						$(".fourth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer1").text("");
						
						$(".fifth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer2").text("");
						
						$(".fifth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer3").text("");
						
						$(".fifth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer4").text("");
						
						$(".fifth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer5").text("");
						
						$(".fifth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer6").text("");
						
						$(".fifth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer7").text("");
						
						$(".fifth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer8").text("");
						
						$(".fifth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer9").text("");
						
						$(".fifth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer10").text("");
						
						$(".fifth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer1").text("");
						
						$(".sixth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer2").text("");
						
						$(".sixth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer3").text("");
						
						$(".sixth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer4").text("");
						
						$(".sixth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer5").text("");
						
						$(".sixth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer6").text("");
						
						$(".sixth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer7").text("");
						
						$(".sixth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer8").text("");
						
						$(".sixth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer9").text("");
						
						$(".sixth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer10").text("");
						
						$(".sixth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer1").text("");
						
						$(".seventh_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer2").text("");
						
						$(".seventh_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer3").text("");
						
						$(".seventh_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer4").text("");
						
						$(".seventh_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer5").text("");
						
						$(".seventh_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer6").text("");
						
						$(".seventh_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer7").text("");
						
						$(".seventh_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer8").text("");
						
						$(".seventh_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer9").text("");
						
						$(".seventh_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer10").text("");
						
						$(".seventh_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer1").text("");
						
						$(".eighth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer2").text("");
						
						$(".eighth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer3").text("");
						
						$(".eighth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer4").text("");
						
						$(".eighth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer5").text("");
						
						$(".eighth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer6").text("");
						
						$(".eighth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer7").text("");
						
						$(".eighth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer8").text("");
						
						$(".eighth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer9").text("");
						
						$(".eighth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer10").text("");
						
						$(".eighth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer1").text("");
						
						$(".ninth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer2").text("");
						
						$(".ninth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer3").text("");
						
						$(".ninth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer4").text("");
						
						$(".ninth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer5").text("");
						
						$(".ninth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer6").text("");
						
						$(".ninth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer7").text("");
						
						$(".ninth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer8").text("");
						
						$(".ninth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer9").text("");
						
						$(".ninth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer10").text("");
						
						$(".ninth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer1").text("");
						
						$(".tenth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer2").text("");
						
						$(".tenth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer3").text("");
						
						$(".tenth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer4").text("");
						
						$(".tenth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer5").text("");
						
						$(".tenth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer6").text("");
						
						$(".tenth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer7").text("");
						
						$(".tenth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer8").text("");
						
						$(".tenth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer9").text("");
						
						$(".tenth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer10").text("");
						
						$(".tenth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
					}else if(bg == 200){
						$(".first_answer1").text("");
						
						$(".first_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer2").text("");
						
						$(".first_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer3").text("");
						
						$(".first_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer4").text("");
						
						$(".first_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer5").text("");
						
						$(".first_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer6").text("");
						
						$(".first_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer7").text("");
						
						$(".first_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer8").text("");
						
						$(".first_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer9").text("");
						
						$(".first_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer10").text("");
						
						$(".first_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer1").text("");
						
						$(".second_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer2").text("");
						
						$(".second_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer3").text("");
						
						$(".second_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer4").text("");
						
						$(".second_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer5").text("");
						
						$(".second_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer6").text("");
						
						$(".second_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer7").text("");
						
						$(".second_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer8").text("");
						
						$(".second_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer9").text("");
						
						$(".second_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer10").text("");
						
						$(".second_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer1").text("");
						
						$(".third_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer2").text("");
						
						$(".third_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer3").text("");
						
						$(".third_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer4").text("");
						
						$(".third_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer5").text("");
						
						$(".third_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer6").text("");
						
						$(".third_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer7").text("");
						
						$(".third_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer8").text("");
						
						$(".third_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer9").text("");
						
						$(".third_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer10").text("");
						
						$(".third_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer1").text("");
						
						$(".fourth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer2").text("");
						
						$(".fourth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer3").text("");
						
						$(".fourth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer4").text("");
						
						$(".fourth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer5").text("");
						
						$(".fourth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer6").text("");
						
						$(".fourth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer7").text("");
						
						$(".fourth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer8").text("");
						
						$(".fourth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer9").text("");
						
						$(".fourth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer10").text("");
						
						$(".fourth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer1").text("");
						
						$(".fifth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer2").text("");
						
						$(".fifth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer3").text("");
						
						$(".fifth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer4").text("");
						
						$(".fifth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer5").text("");
						
						$(".fifth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer6").text("");
						
						$(".fifth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer7").text("");
						
						$(".fifth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer8").text("");
						
						$(".fifth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer9").text("");
						
						$(".fifth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer10").text("");
						
						$(".fifth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer1").text("");
						
						$(".sixth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer2").text("");
						
						$(".sixth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer3").text("");
						
						$(".sixth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer4").text("");
						
						$(".sixth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer5").text("");
						
						$(".sixth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer6").text("");
						
						$(".sixth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer7").text("");
						
						$(".sixth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer8").text("");
						
						$(".sixth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer9").text("");
						
						$(".sixth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer10").text("");
						
						$(".sixth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer1").text("");
						
						$(".seventh_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer2").text("");
						
						$(".seventh_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer3").text("");
						
						$(".seventh_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer4").text("");
						
						$(".seventh_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer5").text("");
						
						$(".seventh_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer6").text("");
						
						$(".seventh_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer7").text("");
						
						$(".seventh_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer8").text("");
						
						$(".seventh_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer9").text("");
						
						$(".seventh_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer10").text("");
						
						$(".seventh_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer1").text("");
						
						$(".eighth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer2").text("");
						
						$(".eighth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer3").text("");
						
						$(".eighth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer4").text("");
						
						$(".eighth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer5").text("");
						
						$(".eighth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer6").text("");
						
						$(".eighth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer7").text("");
						
						$(".eighth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer8").text("");
						
						$(".eighth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer9").text("");
						
						$(".eighth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer10").text("");
						
						$(".eighth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer1").text("");
						
						$(".ninth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer2").text("");
						
						$(".ninth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer3").text("");
						
						$(".ninth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer4").text("");
						
						$(".ninth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer5").text("");
						
						$(".ninth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer6").text("");
						
						$(".ninth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer7").text("");
						
						$(".ninth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer8").text("");
						
						$(".ninth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer9").text("");
						
						$(".ninth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer10").text("");
						
						$(".ninth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer1").text("");
						
						$(".tenth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer2").text("");
						
						$(".tenth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer3").text("");
						
						$(".tenth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer4").text("");
						
						$(".tenth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer5").text("");
						
						$(".tenth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer6").text("");
						
						$(".tenth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer7").text("");
						
						$(".tenth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer8").text("");
						
						$(".tenth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer9").text("");
						
						$(".tenth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer10").text("");
						
						$(".tenth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
					}else if(bg == 300){
						$(".first_answer1").text("");
						
						$(".first_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer2").text("");
						
						$(".first_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer3").text("");
						
						$(".first_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer4").text("");
						
						$(".first_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer5").text("");
						
						$(".first_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer6").text("");
						
						$(".first_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer7").text("");
						
						$(".first_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer8").text("");
						
						$(".first_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer9").text("");
						
						$(".first_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".first_answer10").text("");
						
						$(".first_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".first_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer1").text("");
						
						$(".second_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer2").text("");
						
						$(".second_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer3").text("");
						
						$(".second_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer4").text("");
						
						$(".second_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer5").text("");
						
						$(".second_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer6").text("");
						
						$(".second_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer7").text("");
						
						$(".second_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer8").text("");
						
						$(".second_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer9").text("");
						
						$(".second_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".second_answer10").text("");
						
						$(".second_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".second_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer1").text("");
						
						$(".third_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer2").text("");
						
						$(".third_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer3").text("");
						
						$(".third_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer4").text("");
						
						$(".third_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer5").text("");
						
						$(".third_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer6").text("");
						
						$(".third_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer7").text("");
						
						$(".third_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer8").text("");
						
						$(".third_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer9").text("");
						
						$(".third_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".third_answer10").text("");
						
						$(".third_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".third_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer1").text("");
						
						$(".fourth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer2").text("");
						
						$(".fourth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer3").text("");
						
						$(".fourth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer4").text("");
						
						$(".fourth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer5").text("");
						
						$(".fourth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer6").text("");
						
						$(".fourth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer7").text("");
						
						$(".fourth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer8").text("");
						
						$(".fourth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer9").text("");
						
						$(".fourth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fourth_answer10").text("");
						
						$(".fourth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".fourth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer1").text("");
						
						$(".fifth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer2").text("");
						
						$(".fifth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer3").text("");
						
						$(".fifth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer4").text("");
						
						$(".fifth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer5").text("");
						
						$(".fifth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer6").text("");
						
						$(".fifth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer7").text("");
						
						$(".fifth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer8").text("");
						
						$(".fifth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer9").text("");
						
						$(".fifth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".fifth_answer10").text("");
						
						$(".fifth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".fifth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer1").text("");
						
						$(".sixth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer2").text("");
						
						$(".sixth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer3").text("");
						
						$(".sixth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer4").text("");
						
						$(".sixth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer5").text("");
						
						$(".sixth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer6").text("");
						
						$(".sixth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer7").text("");
						
						$(".sixth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer8").text("");
						
						$(".sixth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer9").text("");
						
						$(".sixth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".sixth_answer10").text("");
						
						$(".sixth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".sixth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer1").text("");
						
						$(".seventh_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer2").text("");
						
						$(".seventh_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer3").text("");
						
						$(".seventh_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer4").text("");
						
						$(".seventh_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer5").text("");
						
						$(".seventh_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer6").text("");
						
						$(".seventh_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer7").text("");
						
						$(".seventh_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer8").text("");
						
						$(".seventh_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer9").text("");
						
						$(".seventh_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".seventh_answer10").text("");
						
						$(".seventh_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".seventh_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer1").text("");
						
						$(".eighth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer2").text("");
						
						$(".eighth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer3").text("");
						
						$(".eighth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer4").text("");
						
						$(".eighth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer5").text("");
						
						$(".eighth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer6").text("");
						
						$(".eighth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer7").text("");
						
						$(".eighth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer8").text("");
						
						$(".eighth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer9").text("");
						
						$(".eighth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".eighth_answer10").text("");
						
						$(".eighth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".eighth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer1").text("");
						
						$(".ninth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer2").text("");
						
						$(".ninth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer3").text("");
						
						$(".ninth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer4").text("");
						
						$(".ninth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer5").text("");
						
						$(".ninth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer6").text("");
						
						$(".ninth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer7").text("");
						
						$(".ninth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer8").text("");
						
						$(".ninth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer9").text("");
						
						$(".ninth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".ninth_answer10").text("");
						
						$(".ninth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".ninth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer1").text("");
						
						$(".tenth_answer1").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer1").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer2").text("");
						
						$(".tenth_answer2").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer2").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer3").text("");
						
						$(".tenth_answer3").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer3").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer4").text("");
						
						$(".tenth_answer4").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer4").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer5").text("");
						
						$(".tenth_answer5").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer5").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer6").text("");
						
						$(".tenth_answer6").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer6").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer7").text("");
						
						$(".tenth_answer7").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer7").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer8").text("");
						
						$(".tenth_answer8").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer8").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer9").text("");
						
						$(".tenth_answer9").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer9").parent().prev().css({
							"zIndex":"-1",
						})
						
						$(".tenth_answer10").text("");
						
						$(".tenth_answer10").parent().css({
							"zIndex":"3",
						})
						
						$(".tenth_answer10").parent().prev().css({
							"zIndex":"-1",
						})
					}
			
			$(".answer_content_absolute").css({
				"zIndex":"-1",
			})
			
			$(".question_content_child").css({
				"zIndex":"-1",
			})
		})
	
		$(".time_content").animate({
			"height":"0px",
		},800 ,function(){
			$(".time_content").css({
				"border":"0px solid #000",
			})
		})
		
		$(".height_1").animate({
			"height":"0px",
		},800 ,function(){
			$("#answer_content_center").text("");
			$("#first_answer").text("");
			$("#second_answer").text("");
			$("#third_answer").text("");
			$("#fourth_answer").text("");
		})
	})
})