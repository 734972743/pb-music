//常用的工具类

/**  时间戳转日期字符串 
 * @param {string} timestamp  时间戳
 * @param {boolean} isToTime 是否精确到时分秒： true: 是，false：否
 */
export function timestampToTime(timestamp, isToTime){
	let date = new Date(timestamp);
	var y = date.getFullYear(); 
	var m = date.getMonth() + 1;  
		m = m < 10 ? ('0' + m) : m;  
	var d = date.getDate();  
		d = d < 10 ? ('0' + d) : d;  
	var h = date.getHours();  
		h=h < 10 ? ('0' + h) : h;  
	var minute = date.getMinutes();  
		minute = minute < 10 ? ('0' + minute) : minute;  
	var second=date.getSeconds();  
		second=second < 10 ? ('0' + second) : second;  
	if(isToTime){
		return y + '-' + m + '-' + d+' '+h+':'+minute+':'+second;
	}else{
		return y + '-' + m + '-' + d;
	}
	 
}

/** 日期字符串转时间戳
 * @param {string} time  日期字符串
 * @param {boolean} isToMillisecond 是否精确到毫秒 
 */
export function timeToTimestamp(timeStr, isToMillisecond){
	let oldTime = (new Date(timeStr)).getTime();  //getTime()返回数值的单位是毫秒
	if(isToMillisecond){
		return oldTime;
	}else{
		return oldTime / 1000;
	}
}