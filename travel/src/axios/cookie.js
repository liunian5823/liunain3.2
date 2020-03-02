//当用户访问该网站时，他的用户信息可以记录在cookie中  
//在用户下一次访问该网站时，可以在cookie中取到用户信息  不必再次登录  除非token失效
//tooken一般由后端设置失效时间
//Cookie的名称 c_name 值 value 过期时间 :expiredays
//getCookie获取用户信息
//delCookie清除用户信息
var cookie={
    setCookie(c_name,value,expiredays){
        var esdate=new Date();
        exdate.setTime(exdate.getTime()+expiredays);
        exdate.setDate(esdate.getDate()+ expiredays);
        document.cookie=c_name+'='+escape(value)+((expiredays==null)? "": ";expires="+ exdate)
    },
    getCookie(name){
        var arr,reg=new RegExp("(^|)"+name+"=([^;]*)(;|$)");
        if(arr=document.cookie.match(reg))
        return (arr[2])
        else
        return null
    },
    delCookie(name){
        var exp = new Date();
        exp.setTime(exp.getTime()-1);
        var cval=cookie.getCookie(name);
        if(cval!=null){
            document.cookie=name+'=; expires=Thu, 01 Jan 1970 00:00:01 GMT'
        }
    }
}
export default cookie

