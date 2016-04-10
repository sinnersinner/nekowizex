//by telnet://ptt.cc ID:SINNERSINNER date:160411

// mrank
aM = {"C":1, "C+":0.7, "B":(19/30), "B+":0.6, "A":(29/50), "A+":(39/60), "S":(49/70), "S+":(59/80), "SS":(69/90), "L":(69/110)};

aLv = {"C":10, "C+":20, "B":30, "B+":40, "A":50, "A+":60, "S":70, "S+":80, "SS":90, "L":100};

blv =[10,30,50,60,70,780];

nextlist =[6,7,8,8,9,10,10,11,12,13,26,40,56,75,97,124,152,184,219,257,276,293,313,333,353,376,392,414,430,450,472,500,530,559,590,620,650,682,713,745,775,816,856,900,945,991,1040,1091,1137,1193,1244,1327,1419,1517,1625,1740,1863,1995,2133,2281,2372,2480,2589,2698,2809,2920,3032,3145,3258,3223,3387,3560,3742,3932,4133,4344,4565,4788,5053,5300,5570,5854,6153,6467,6797,7143,7507,7890,8293,8309];
totallist =[0,6,13,21,29,38,48,58,69,81,94,120,160,216,291,388,512,664,848,1067,1324,1600,1893,2206,2539,2892,3268,3660,4072,4502,4952,5424,5924,6454,7013,7603,8223,8873,9555,10268,11013,11788,12604,13460,14360,15305,16296,17336,18427,19564,20757,22001,23328,24747,26264,27889,29629,31492,33487,35620,37901,40273,42753,45342,48040,50849,53769,56801,59946,63204,66427,69814,73374,77116,81048,85181,89525,94090,98878,103931,109231,114801,120655,126808,133275,140072,147215,154722,162612,170905];

bm=0;
bn=0;
maxLv=0;
bsetmode=0;
calcmode=0;
sth=0;
lv1=0;


// 回傳
function DisplayFunc() {

	arank = document.getElementById("a").value;	 
	bs = document.getElementById("b").value;	//選擇
	lv1= bs;
	cs = document.getElementById("c").value;
	csforcalc = document.getElementById("c").value;
	calcmode = document.getElementById("calc").value; 
	maxlv = aLv[arank];
	var needexp = aM[arank];
	ncolor=0; //異色

	
	if(calcmode == 1){

		lv= (csforcalc-1);
		if (lv > aLv[arank]){
			lv =aLv[arank];
			sth=1;
		}
		cs=1;
		normalmode();

	}

	else{
	if(cs == 1)
		normalmode();
			
	else
		if(cs > maxlv)
		{
			inputerror();
			document.getElementById("state").value = " 等級輸入超過該卡上限，請重新輸入";
			return;
		}
		setlvmode();

	
	var lv =fact(bm);
	
	}
	
	if(lv <2 ){
	
		inputerror();
		document.getElementById("state").value = " 推薦最佳等級小於2，請重新輸入";

	}
	else{


	var vga =egain(lv-2);
	var xga =egain(lv-1);
	var yga =egain(lv);
	var zga =egain(lv+1);
	if ( cs==1 ){
	document.getElementById("veat").value =  " "+totallist[lv-2]+" exp";
	document.getElementById("xeat").value =  " "+totallist[lv-1]+" exp";
	document.getElementById("yeat").value =  " "+totallist[lv]+" exp";

	}
	else{
	document.getElementById("veat").value =  " "+(totallist[lv-2] - totallist[cs-1])+" exp";
	document.getElementById("xeat").value =  " "+(totallist[lv-1] - totallist[cs-1])+" exp";
	document.getElementById("yeat").value =  " "+(totallist[lv] - totallist[cs-1])+" exp";



	}

	document.getElementById("vrank").value = " Lv. "+ (lv-1);
	document.getElementById("vexp").value = " "+vga+" exp";
	document.getElementById("vcp").value = vga-totallist[lv-2];
	document.getElementById("vcostm").value =parseFloat(Math.round(vga/(totallist[lv-2]+lv1)*1000))/1000;


	document.getElementById("xrank").value = " Lv. "+ lv;
	document.getElementById("xexp").value = " "+ xga+" exp";
	document.getElementById("xcp").value = xga-totallist[lv-1];
	document.getElementById("xcostm").value =parseFloat(Math.round(xga/(totallist[lv-1]+lv1)*1000))/1000;

	document.getElementById("yrank").value = " Lv. "+ (lv+1);
	document.getElementById("yexp").value = " "+ yga+" exp";
	document.getElementById("ycp").value = yga-totallist[lv];
	document.getElementById("ycostm").value =parseFloat(Math.round(yga/(totallist[lv]+lv1)*1000))/1000;

	if(sth==1){
		document.getElementById("zeat").value =  " ";
		document.getElementById("zrank").value = "";
		document.getElementById("zexp").value = "";

		document.getElementById("zcp").value = " Lv.MAX!! ";

		document.getElementById("state").value = " 已達強化上限! ";
		document.getElementById("state").style.color = "red";

	}
	else{
		if(cs == 1)
		document.getElementById("state").value = " 似乎正常運轉中...";
			
		else
		document.getElementById("state").value = " 需餵食經驗已扣掉該卡輸入等級,詳閱說明..."+"該卡初級提供同色卡經驗 "+bsetmode +" exp";
	
		document.getElementById("state").style.color = "blue";
		document.getElementById("zeat").value =  " "+totallist[lv+1]+" exp";
		document.getElementById("zrank").value = " Lv. "+ (lv+2);
		document.getElementById("zexp").value = " "+ zga+" exp";
		document.getElementById("zcp").value = zga-totallist[lv+1];
		document.getElementById("zcostm").value =parseFloat(Math.round(zga/(totallist[lv+1]+lv1)*1000))/1000;
	
	}

	if(lv<=2){
		document.getElementById("state").value = " 出了點問題，建議確認輸入數值";
		document.getElementById("state").style.color = "red";
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

	i=bs*aM[arank]*n;
	return i;

}

function egain(n){    //同色提供exp

	i=0;
	i= bn + bn*aM[arank]*n;	

	j= Math.ceil(i*1.25);
	return j;
}
function normalmode(){


	if ( document.getElementById("non1").checked ) {
		ncolor = 1;
		bn=(Math.round(bs));
		bm (bs*1.25*aM[arank]) ;
		lv1=Math.ceil(bs*1.25);
	}
	else{
		
		bn=(Math.floor(bs/1.25));	//轉為初始值lv
		bm =(bs*aM[arank]) ;
		lv1=Math.ceil(bs);
	}


}
function setlvmode(){
	if ( document.getElementById("non1").checked ) {
		ncolor = 1;
		bn =Math.floor(bs/(((cs-1)*aM[arank])+1));
		bm =(bn*1.25*aM[arank]) ;		
		bsetmode= bn;
		lv1=Math.ceil(bn*1.25);

	}
	else{
		
		bn=Math.floor(bs/1.25/ (((cs-1)*aM[arank])+1));	//異色
		bm =(bn*1.25*aM[arank]) ;	
		bsetmode=Math.ceil(bn*1.25);
		lv1=Math.ceil(bn*1.25);
		
	}



}
function clear(){

		document.getElementById("veat").value = "";
		document.getElementById("vrank").value = "";
		document.getElementById("vexp").value = "";
		document.getElementById("vcp").value ="";
		document.getElementById("vcostm").value ="";

		document.getElementById("xeat").value = "";
		document.getElementById("xrank").value = "";
		document.getElementById("xexp").value = "";
		document.getElementById("xcp").value ="";
		document.getElementById("xcostm").value ="";

		document.getElementById("yeat").value = "";
		document.getElementById("yrank").value = "";
		document.getElementById("yexp").value = "";
		document.getElementById("ycp").value ="";
		document.getElementById("ycostm").value ="";

		document.getElementById("zeat").value = "";
		document.getElementById("zrank").value = "";
		document.getElementById("zexp").value = "";
		document.getElementById("zcp").value ="";
		document.getElementById("zcostm").value ="";

}
function inputerror(){

		clear();
		document.getElementById("state").style.color = "red";

		document.getElementById("veat").value = "Error!";
		document.getElementById("xeat").value = "Error!";
		document.getElementById("yeat").value = "Error!";
		document.getElementById("zeat").value = "Error!";
		


}
