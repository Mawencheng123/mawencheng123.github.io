function killErrors() {
    return true;
}
window.onerror = killErrors;


function changeImg(mypic){
var xw=600;
var xl=400;

var width = mypic.width;
var height = mypic.height;
var bili = width/height; 

var A=xw/width;
var B=xl/height;

if(!(A>1&&B>1))
{
if(A<B)
{
mypic.width=xw;
mypic.height=xw/bili;
}
if(A>B)
{
mypic.width=xl*bili;
mypic.height=xl;
}
}
}

function sub_tab(n,showid,hideid,m){
	for(var i=1;i<=m;i++){
		var curC=document.getElementById(hideid+i);
		var curB=document.getElementById(showid+i);
		if(n==i){
			curC.style.display="block";
			curB.className="active"
		}else{
			curC.style.display="none";
			curB.className="normal"
		}
	}
} 





function showsubmenu(sid){
	whichEl = eval("submenu" + sid);
	if (whichEl.style.display == "none"){
		eval("submenu" + sid + ".style.display=\"\";");
	    eval("menu" + sid + ".style.background=\"url(../images/class3.gif) no-repeat left 3px\";");
     	eval("menu" + sid + ".style.color=\"#115187\";");}
	else{
		eval("submenu" + sid + ".style.display=\"none\";");
		eval("menu" + sid + ".style.background=\"url(../images/class4.gif) no-repeat left 3px\";");
		eval("menu" + sid + ".style.color=\"#333333\";");
		}
	}


function changeInputlength(cursor) 
{ 
var getcount=document.getElementById("countFont"); 
var getText=document.getElementById("title"); 
getcount.innerHTML='<font>第'+(parseInt(getText.value.length)+1)+'个字符</font>'; 
cursor.size=getText.value.length+2; 
} 





function HS_DateAdd(interval,number,date){
	number = parseInt(number);
	if (typeof(date)=="string"){var date = new Date(date.split("-")[0],date.split("-")[1],date.split("-")[2])}
	if (typeof(date)=="object"){var date = date}
	switch(interval){
	case "y":return new Date(date.getFullYear()+number,date.getMonth(),date.getDate()); break;
	case "m":return new Date(date.getFullYear(),date.getMonth()+number,checkDate(date.getFullYear(),date.getMonth()+number,date.getDate())); break;
	case "d":return new Date(date.getFullYear(),date.getMonth(),date.getDate()+number); break;
	case "w":return new Date(date.getFullYear(),date.getMonth(),7*number+date.getDate()); break;
	}
}
function checkDate(year,month,date){
	var enddate = ["31","28","31","30","31","30","31","31","30","31","30","31"];
	var returnDate = "";
	if (year%4==0){enddate[1]="29"}
	if (date>enddate[month]){returnDate = enddate[month]}else{returnDate = date}
	return returnDate;
}

function WeekDay(date){
	var theDate;
	if (typeof(date)=="string"){theDate = new Date(date.split("-")[0],date.split("-")[1],date.split("-")[2]);}
	if (typeof(date)=="object"){theDate = date}
	return theDate.getDay();
}
function HS_calender(){
	var lis = "";
	var style = "";
	/*可以把下面的css剪切出去独立一个css文件*/
	style +="<style type='text/css'>";
	style +=".calender { width:220px; height:auto; font-size:12px; margin-right:14px; background:url(calenderbg.gif) no-repeat right center #fff; border:1px solid #397EAE; padding:1px}";
	style +=".calender ul {list-style-type:none; margin:0; padding:0;}";
	style +=".calender .day { background-color:#EDF5FF; height:20px;padding:0;margin:0;}";
	style +=".calender .day li,.calender .date li{ float:left; width:14%; height:15px; line-height:15px; text-align:center;width:20px;padding:0;margin:0;}";
	style +=".calender li a { text-decoration:none; font-family:Tahoma; font-size:11px; color:#333}";
	style +=".calender li a:hover { color:#f30; text-decoration:underline}";
	style +=".calender li a.hasArticle {font-weight:bold; color:#f60 !important}";
	style +=".lastMonthDate, .nextMonthDate {color:#bbb;font-size:11px}";
	style +=".selectThisYear a, .selectThisMonth a{text-decoration:none; margin:0 2px; color:#000; font-weight:bold}";
	style +=".calender .LastMonth, .calender .NextMonth{ text-decoration:none; color:#000; font-size:18px; font-weight:bold; line-height:16px;}";
	style +=".calender .LastMonth { float:left;}";
	style +=".calender .NextMonth { float:right;}";
	style +=".calenderBody {clear:both}";
	style +=".calenderTitle {text-align:center;height:20px; line-height:20px; clear:both}";
	style +=".today { background-color:#ffffaa;border:1px solid #f60; padding:2px 5px}";
	style +=".today a { color:#f30; }";
	style +=".calenderBottom {clear:both; border-top:1px solid #ddd; padding: 3px 0; text-align:left}";
	style +=".calenderBottom a {text-decoration:none; margin:2px !important; font-weight:bold; color:#000}";
	style +=".calenderBottom a.closeCalender{float:right}";
	style +=".closeCalenderBox {float:right; border:1px solid #000; background:#fff; font-size:9px; width:11px; height:11px; line-height:11px; text-align:center;overflow:hidden; font-weight:normal !important}";
	style +="</style>";

	var now;
	if (typeof(arguments[0])=="string"){
		selectDate = arguments[0].split("-");
		var year = selectDate[0];
		var month = parseInt(selectDate[1])-1+"";
		var date = selectDate[2];
		now = new Date(year,month,date);
	}else if (typeof(arguments[0])=="object"){
		now = arguments[0];
	}
	var lastMonthEndDate = HS_DateAdd("d","-1",now.getFullYear()+"-"+now.getMonth()+"-01").getDate();
	var lastMonthDate = WeekDay(now.getFullYear()+"-"+now.getMonth()+"-01");
	var thisMonthLastDate = HS_DateAdd("d","-1",now.getFullYear()+"-"+(parseInt(now.getMonth())+1).toString()+"-01");
	var thisMonthEndDate = thisMonthLastDate.getDate();
	var thisMonthEndDay = thisMonthLastDate.getDay();
	var todayObj = new Date();
	today = todayObj.getFullYear()+"-"+todayObj.getMonth()+"-"+todayObj.getDate();
	
	for (i=0; i<lastMonthDate; i++){  // Last Month's Date
		lis = "<li class='lastMonthDate'>"+lastMonthEndDate+"</li>" + lis;
		lastMonthEndDate--;
	}
	for (i=1; i<=thisMonthEndDate; i++){ // Current Month's Date

		if(today == now.getFullYear()+"-"+now.getMonth()+"-"+i){
			var todayString = now.getFullYear()+"-"+(parseInt(now.getMonth())+1).toString()+"-"+i;
			lis += "<li><a href=javascript:void(0) class='today' onclick='_selectThisDay(this)' title='"+now.getFullYear()+"-"+(parseInt(now.getMonth())+1)+"-"+i+"'>"+i+"</a></li>";
		}else{
			lis += "<li><a href=javascript:void(0) onclick='_selectThisDay(this)' title='"+now.getFullYear()+"-"+(parseInt(now.getMonth())+1)+"-"+i+"'>"+i+"</a></li>";
		}
		
	}
	var j=1;
	for (i=thisMonthEndDay; i<6; i++){  // Next Month's Date
		lis += "<li class='nextMonthDate'>"+j+"</li>";
		j++;
	}
	lis += style;

	var CalenderTitle = "<a href='javascript:void(0)' class='NextMonth' onclick=HS_calender(HS_DateAdd('m',1,'"+now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate()+"'),this) title='Next Month'>&raquo;</a>";
	CalenderTitle += "<a href='javascript:void(0)' class='LastMonth' onclick=HS_calender(HS_DateAdd('m',-1,'"+now.getFullYear()+"-"+now.getMonth()+"-"+now.getDate()+"'),this) title='Previous Month'>&laquo;</a>";
	CalenderTitle += "<span class='selectThisYear'><a href='javascript:void(0)' onclick='CalenderselectYear(this)' title='Click here to select other year' >"+now.getFullYear()+"</a></span>年<span class='selectThisMonth'><a href='javascript:void(0)' onclick='CalenderselectMonth(this)' title='Click here to select other month'>"+(parseInt(now.getMonth())+1).toString()+"</a></span>月"; 

	if (arguments.length>1){
		arguments[1].parentNode.parentNode.getElementsByTagName("ul")[1].innerHTML = lis;
		arguments[1].parentNode.innerHTML = CalenderTitle;

	}else{
		var CalenderBox = style+"<div class='calender'><div class='calenderTitle'>"+CalenderTitle+"</div><div class='calenderBody'><ul class='day'><li>日</li><li>一</li><li>二</li><li>三</li><li>四</li><li>五</li><li>六</li></ul><ul class='date' id='thisMonthDate'>"+lis+"</ul></div><div class='calenderBottom'><a href='javascript:void(0)' class='closeCalender' onclick='closeCalender(this)'>&times;</a><span><span><a href=javascript:void(0) onclick='_selectThisDay(this)' title='"+todayString+"'>Today</a></span></span></div></div>";
		return CalenderBox;
	}
}
function _selectThisDay(d){
	var boxObj = d.parentNode.parentNode.parentNode.parentNode.parentNode;
		boxObj.targetObj.value = d.title;
		boxObj.parentNode.removeChild(boxObj);
}
function closeCalender(d){
	var boxObj = d.parentNode.parentNode.parentNode;
		boxObj.parentNode.removeChild(boxObj);
}

function CalenderselectYear(obj){
		var opt = "";
		var thisYear = obj.innerHTML;
		for (i=1970; i<=2020; i++){
			if (i==thisYear){
				opt += "<option value="+i+" selected>"+i+"</option>";
			}else{
				opt += "<option value="+i+">"+i+"</option>";
			}
		}
		opt = "<select onblur='selectThisYear(this)' onchange='selectThisYear(this)' style='font-size:11px'>"+opt+"</select>";
		obj.parentNode.innerHTML = opt;
}

function selectThisYear(obj){
	HS_calender(obj.value+"-"+obj.parentNode.parentNode.getElementsByTagName("span")[1].getElementsByTagName("a")[0].innerHTML+"-1",obj.parentNode);
}

function CalenderselectMonth(obj){
		var opt = "";
		var thisMonth = obj.innerHTML;
		for (i=1; i<=12; i++){
			if (i==thisMonth){
				opt += "<option value="+i+" selected>"+i+"</option>";
			}else{
				opt += "<option value="+i+">"+i+"</option>";
			}
		}
		opt = "<select onblur='selectThisMonth(this)' onchange='selectThisMonth(this)' style='font-size:11px'>"+opt+"</select>";
		obj.parentNode.innerHTML = opt;
}
function selectThisMonth(obj){
	HS_calender(obj.parentNode.parentNode.getElementsByTagName("span")[0].getElementsByTagName("a")[0].innerHTML+"-"+obj.value+"-1",obj.parentNode);
}
function HS_setDate(inputObj){
	var calenderObj = document.createElement("span");
	calenderObj.innerHTML = HS_calender(new Date());
	calenderObj.style.position = "absolute";
	calenderObj.targetObj = inputObj;
	inputObj.parentNode.insertBefore(calenderObj,inputObj.nextSibling);
}











function check_form2() 
{ 

if(document.form2.jobname.value.length==0)
{alert("提示：请输入应聘职位");
document.form2.jobname.focus();
return false;
 }
if(document.form2.username.value.length==0)
{alert("提示：请输入姓名");
document.form2.username.focus();
return false;
 }
if(document.form2.sex.value.length==0)
{alert("提示：请选择性别");
document.form2.sex.focus();
return false;
 }
 
 
if(document.form2.where.value.length==0)
{alert("提示：请输入您的户籍");
document.form2.where.focus();
return false;
 }
if(document.form2.edu.value.length==0)
{alert("提示：请输入您的最高学历");
document.form2.edu.focus();
return false;
 }
if(document.form2.tel.value.length==0)
{alert("提示：请输入联系电话");
document.form2.tel.focus();
return false;
 }

	  
  if (document.form2.mail.value.length <10 || document.form2.mail.value.length >=100) { 
       alert("提示：请输入有效的电子邮箱"); 
       document.form2.mail.focus(); 
       return false; 
      } 
  if (document.form2.mail.value.length > 0 && !document.form2.mail.value.match( /^.+@.+$/ ) ) { 
      alert("提示：请输入有效的电子信箱"); 
      document.form2.mail.focus(); 
      return false; 
      } 
	  
if(document.form2.mobile.value.length==0)
{alert("提示：请输入联系手机");
document.form2.mobile.focus();
return false;
 }
  	  	  
}



function check_login()
{
if (document.form1.UserName.value==0){
	alert("代理帐号不能为空！");
	document.form1.UserName.focus();
	return false;
}
																																																																																																																																																																																																																																																																																										
if(document.form1.Password.value.length==0){
	alert("代理密码不能为空");
	document.form1.Password.focus();
	return false;
}
																																																																																																																																																																																																																																																																																										}


function check_userpwd() 
{ 

if(document.form2.oldpassword.value.length==0)
{alert("提示：请输入原密码");
document.form2.oldpassword.focus();
return false;
 }
if(document.form2.password.value.length==0)
{alert("提示：请输入新密码");
document.form2.password.focus();
return false;
 }
if(document.form2.PwdConfirm.value.length==0)
{alert("提示：请确认新密码");
document.form2.PwdConfirm.focus();
return false;
 }
}


function CheckForm() 
{ 

if(document.UserLogin.UserName.value.length==0)
{alert("提示：请输入用户名");
document.UserLogin.UserName.focus();
return false;
 }
if(document.UserLogin.Password.value.length==0)
{alert("提示：请输入密码");
document.UserLogin.Password.focus();
return false;
 }
}





//去空格
String.prototype.Trim = function() { 
var m = this.match(/^\s*(\S+(\s+\S+)*)\s*$/); 
return (m == null) ? "" : m[1]; 
}

//验证手机号
String.prototype.isMobile = function() { 
return (/^(?:13\d|15[89])-?\d{5}(\d{3}|\*{3})$/.test(this.Trim())); 
}

//验证电话
String.prototype.isTel = function()
{
    //"兼容格式: 国家代码(2到3位)-区号(2到3位)-电话号码(7到8位)-分机号(3位)"
    //return (/^(([0\+]\d{2,3}-)?(0\d{2,3})-)?(\d{7,8})(-(\d{3,}))?$/.test(this.Trim()));
    return (/^(([0\+]\d{2,3}-)?(0\d{2,3})-)(\d{7,8})(-(\d{3,}))?$/.test(this.Trim()));
}






function CheckOrder(form) 
{ 

if(document.userorder.product.value.length==0)
{alert("提示：订购产品不能为空!");
document.userorder.product.focus();
return false;
 }
if(document.userorder.pro_num.value.length==0)
{alert("提示：产品订购数量不能为空！");
document.userorder.pro_num.focus();
return false;
 }

if(document.userorder.pro_num.value.length==0)
{alert("提示：产品订购数量不能为空！");
document.userorder.pro_num.focus();
return false;
 }
 
if(document.userorder.name.value.length==0)
{alert("提示：收货人不能为空！");
document.userorder.name.focus();
return false;
 }
 
if(document.userorder.address.value.length==0)
{alert("提示：联系地址不能为空！");
document.userorder.address.focus();
return false;
 }
 
if(document.userorder.tel.value.length==0)
{alert("提示：联系方式不能为空，请输入手机或固定电话！");
document.userorder.tel.focus();
return false;
 }
 
if (userorder.tel.value.isMobile()||userorder.tel.value.isTel()) { 
    userorder.tel.value = userorder.tel.value.Trim(); 
   //alert("您的电话/手机号码是:" + form.tel.value);
            //return true; 
} 
 else { 
    alert("请输入正确的手机号码或电话号码\n\n例如:15957338816或0573-88888888"); 
    document.userorder.tel.focus();
    return false;        
 }   
 


 
 
if(document.userorder.email.value.length==0)
{alert("提示：email不能为空！");
document.userorder.email.focus();
return false;
 }
 

  if (document.userorder.email.value.length <10 || document.userorder.email.value.length >=100) { 
       alert("提示：请输入有效的电子邮箱"); 
       document.userorder.email.focus(); 
       return false; 
      } 
  if (document.userorder.email.value.length > 0 && !document.userorder.email.value.match( /^.+@.+$/ ) ) { 
      alert("提示：请输入有效的电子信箱"); 
      document.userorder.email.focus(); 
      return false; 
      } 

if(document.userorder.yanzhen.value.length==0)
{alert("提示：验证码不能为空！");
document.userorder.yanzhen.focus();
return false;
 }

 
}






