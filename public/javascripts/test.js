function saveform(form){
	var check=true;
	var info=doucument.getElementById("save_info");
	var usename=form_
}
function checkname(name){
	var name=document.getElementById("name");
	if(name==""){
		alert("名字不能为空");
		return;
	}
	else if(!/^[u4E00-\u9FA5a-zA-Z0-9_]{4,16}$/.test(name.value)){
		alert("用户名输入格式错误");
		return;
	}
}
function checkpassword(password,checkpassword){
	var pwd1=document.getElementById("password").value;
	var pwd2=document.getElementById("checkpassword").value;
	if(password=""||checkpassword=""){
		alert("密码或确认密码不能为空");
		return;
	}
	else if(checkpassword!=checkpassword){
		alert("两次密码不一致");
		return;
	}
}
function checkage(age){
	var age=document.getElementById("age");
	if(age==""){
		alert("年龄不能为空");
		return;
	}
	else if(!^[0-9]*$){
		alert("年龄格式不正确");
		return;
	}
}
function checktelphone(telphone){
	var tel="/^[1][0-9]{10}$/";
	if(!myreg.test($poneInput.val())){
		return false;
	}
	else{
		return true ;
	}
}
function checkemail(){
	var email="^([\.a-zA-Z0-9_-])+@([\.a-zA-Z0-9_-])+([\.a-zA-Z0-9_-])+";
	var re=new RegExp(email);
	return re.test(email);
}
