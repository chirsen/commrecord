/*不用循环的格式化代码*/

function formateNum(num){
    var len = (num+"").length;
    var str = "000000";
    var reg = new RegExp("0{"+len+"}$", "g");/*用到变量正则*/
    console.log(reg);
    if((num+"").length < 6){
        return str.replace(reg, ""+num);
    }else{
        return num+"";
    }
}

console.log(formateNum(10));