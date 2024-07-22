function getBaseName(strPath){
	let strA = strPath.split("/");
	let strB = strA[strA.length -1].split(".")[0]
	return strB
}
function getLevelName(strCheck){
    if(strCheck==="aa"){
		return "AA";
	}else if(strCheck==="bb"){
	    return "BB";
	}else{
		return "N";
	}
}
function getRealCount(strCheck){
    if(strCheck==="aa"){
		return 400;
	}else if(strCheck==="bb"){
	    return 345;
	}else{
		return -1;
	}
}
function getImagePath(){
	return "https://yuezhuxue.github.io/ham/images/pic/";
}
