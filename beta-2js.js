//by telnet://ptt.cc ID:SINNERSINNER

// mrank
aM = {"C":1, "C+":0.7, "B":0.63, "B+":0.6, "A":0.58, "A+":0.65, "S":0.7, "S+":0.7371, "SS":0.7667};

aLv = {"C":10, "C+":20, "B":30, "B+":40, "A":50, "A+":60, "S":70, "S+":80, "SS":90};

blv =[10,30,50,60,70,780];

nextlist =[6,7,8,8,9,10,10,11,12,13,26,40,56,75,97,124,152,184,219,257,276,293,313,333,353,376,392,414,430,450,472,500,530,559,590,620,650,682,713,745,775,816,856,900,945,991,1040,1091,1137,1193,1244,1327,1419,1517,1625,1740,1863,1995,2133,2281,2372,2480,2589,2698,2809,2920,3032,3145,3258,3223,3387,3560,3742,3932,4133,4344,4565,4788,5053,5300,5570,5854,6153,6467,6797,7143,7507,7890,8293,8309];
totallist =[0,6,13,21,29,38,48,58,69,81,94,120,160,216,291,388,512,664,848,1067,1324,1600,1893,2206,2539,2892,3268,3660,4072,4502,4952,5424,5924,6454,7013,7603,8223,8873,9555,10268,11013,11788,12604,13460,14360,15305,16296,17336,18427,19564,20757,22001,23328,24747,26264,27889,29629,31492,33487,35620,37901,40273,42753,45342,48040,50849,53769,56801,59946,63204,66427,69814,73374,77116,81048,85181,89525,94090,98878,103931,109231,114801,120655,126808,133275,140072,147215,154722,162612,170905];

mb=0;
nb=0;
maxLv=0;


// 回傳
function DisplayFunc() {

	arank = document.getElementById("a").value;	 
	sb = document.getElementById("b").value;	//選擇
	nb=(Math.round(sb/1.25));	//異色
	mb =Math.ceil(sb*aM[arank]) ;
	maxlv = aLv[arank];


	var needexp = aM[arank];

	var lv =fact(mb);
	if(lv ==0 ){


		document.getElementById("state").value = "推薦最佳等級為0，請重新輸入";
		document.getElementById("state").style.color = "red";

		document.getElementById("veat").value = "Error!";
		document.getElementById("vrank").value = "";
		document.getElementById("vexp").value = "";
		document.getElementById("vcp").value ="";

		document.getElementById("xeat").value = "Error!";
		document.getElementById("xrank").value = "";
		document.getElementById("xexp").value = "";
		document.getElementById("xcp").value ="";

		document.getElementById("yeat").value = "Error!";
		document.getElementById("yrank").value = "";
		document.getElementById("yexp").value = "";
		document.getElementById("ycp").value ="";

		document.getElementById("zeat").value = "Error!";
		document.getElementById("zrank").value = "";
		document.getElementById("zexp").value = "";
		document.getElementById("zcp").value ="";
		

	}
	else{

	var vga =egain(lv-2);
	var xga =egain(lv-1);
	var yga =egain(lv);
	var zga =egain(lv+1);

	document.getElementById("vrank").value = " Lv. "+ (lv-1);
	document.getElementById("veat").value =  " "+totallist[lv-2]+" exp";
	document.getElementById("vexp").value = " "+vga+" exp";
	document.getElementById("vcp").value = vga-totallist[lv-2];

	document.getElementById("xeat").value =  " "+totallist[lv-1]+" exp";
	document.getElementById("xrank").value = " Lv. "+ lv;
	document.getElementById("xexp").value = " "+ xga+" exp";
	document.getElementById("xcp").value = xga-totallist[lv-1];

	document.getElementById("yeat").value =  " "+totallist[lv]+" exp";
	document.getElementById("yrank").value = " Lv. "+ (lv+1);
	document.getElementById("yexp").value = " "+ yga+" exp";
	document.getElementById("ycp").value = yga-totallist[lv];

	if(sth==1){
		document.getElementById("zeat").value =  " ";
		document.getElementById("zrank").value = "";
		document.getElementById("zexp").value = "";

		document.getElementById("zcp").value = " Lv.MAX!! ";

		document.getElementById("state").value = " 已達強化上限! ";
		document.getElementById("state").style.color = "red";

	}
	else{

		document.getElementById("state").value = "正常運轉中";
		document.getElementById("state").style.color = "blue";

		document.getElementById("zeat").value =  " "+totallist[lv+1]+" exp";
		document.getElementById("zrank").value = " Lv. "+ (lv+2);
		document.getElementById("zexp").value = " "+ zga+" exp";
		document.getElementById("zcp").value = zga-totallist[lv+1];
	
	}

}
}
function fact(n){

	var i=0;

	for (i=0; i<maxlv; i++) {

		if (n<=nextlist[i])
		{
		 sth=0;
		 return i;
		 break;
		}
	}
	sth=1;
	return (i-1);


}
function pay(n){

	i=sb*aM[arank]*n;
	return i;

}

function egain(n){    //同色提供exp

	i=0;
	i= nb + nb*aM[arank]*n;	
	j= Math.ceil(i*1.25);
	return j;

}
