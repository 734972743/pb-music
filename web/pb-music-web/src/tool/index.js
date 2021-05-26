// 全局过滤器

export default {
  /**
   * 时间戳转换成日期
   * @param time 时间戳（单位：微秒）
   * @returns {*} 格式化后日期
   */
  prettyDate: function(time) {
    // 日期
  
    var date = new Date(time);
    // 年
    var y = date.getFullYear();
    // 月
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    // 日
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;

    // 年-月-日
    return y + "-" + m + "-" + d;
  },

  /**
   * 秒转换成 分  时
   * @param time （单位：秒）
   * @returns {*} 格式化为 小时  / 分 / 秒
   */
  prettyTime: function(time) {
    let result = "";
    // 时
    let h = time / 3600;
    result = h ? h + "时" : "";
    // 分
    let m = (time - h * 3600) / 60;
    result += m ? m + "分" : "";
    // 秒
    let s = time - h * 3600 - 60 * m;
    result += s + "秒";

    return result;
  },

  /**
   * 刚刚、几分钟前、几小时前、几天前
   * @param timestamp  时间2019-03-28 16:60
   * @returns {string}
   */
  timestampFormat(timestamp) {
    function zeroize(num) {
      return (String(num).length == 1 ? "0" : "") + num;
    }

    var curTimestamp = parseInt(new Date().getTime() / 1000); //当前时间戳
    var timestampDiff = curTimestamp - timestamp / 1000; // 参数时间戳与当前时间戳相差秒数
    var curDate = new Date(curTimestamp * 1000); // 当前时间日期对象
    var tmDate = new Date(timestamp * 1000); // 参数时间戳转换成的日期对象

    var Y = tmDate.getFullYear(),
      m = tmDate.getMonth() + 1,
      d = tmDate.getDate();
    var H = tmDate.getHours(),
      i = tmDate.getMinutes(),
      s = tmDate.getSeconds();

    if (timestampDiff < 60) {
      // 一分钟以内
      return "刚刚";
    } else if (timestampDiff < 3600) {
      // 一小时前之内
      return Math.floor(timestampDiff / 60) + "分钟前";
    } else if (
      curDate.getFullYear() == Y &&
      curDate.getMonth() + 1 == m &&
      curDate.getDate() == d
    ) {
      return "今天" + zeroize(H) + ":" + zeroize(i);
    } else {
      var newDate = new Date((curTimestamp - 86400) * 1000); // 参数中的时间戳加一天转换成的日期对象
      if (
        newDate.getFullYear() == Y &&
        newDate.getMonth() + 1 == m &&
        newDate.getDate() == d
      ) {
        return "昨天" + zeroize(H) + ":" + zeroize(i);
      } else if (curDate.getFullYear() == Y) {
        return zeroize(m) + "月" + zeroize(d) + "日 ";
      } else {
        return Y + "年" + zeroize(m) + "月" + zeroize(d) + "日 ";
      }
    }
  },

  /**
   * 时间戳转换成日期
   * @param time 时间戳（单位：秒）
   * @returns {*} 格式化后日期
   */
  timestampToDate(time) {
    var date = new Date(time); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
    var Y = date.getFullYear() + "-";
    var M =
      (date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1) + "-";
    var D = date.getDate();
    return Y + M + D;
  },

  /**
   * 时间戳转换成日期时间
   * @param time 时间戳（单位：秒）
   * @returns {*} 格式化后日期时间
   */
  prettyDateTime(time, type = 0) {
    // 日期
    var date = new Date(time * 1000);
    // 年
    var y = date.getFullYear();
    // 月
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    // 日
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;
    // 时
    var h = date.getHours();
    h = h < 10 ? "0" + h : h;
    // 分
    var minute = date.getMinutes();
    minute = minute < 10 ? "0" + minute : minute;
    // 秒
    var second = date.getSeconds();
    second = second < 10 ? "0" + second : second;

    // 年-月-日 时:分:秒
    if (type == 1) {
      return m + "月" + d + "日 " + h + ":" + minute;
    } else {
      return y + "-" + m + "-" + d + " " + h + ":" + minute + ":" + second;
    }
  },
  /**
   * 时间秒数格式化
   * @param s 时间戳（单位：秒）
   * @returns {*} 格式化后的时分秒
   */
  secToTime: function(s) {
    var t = "";
    if (s > -1) {
      var hour = Math.floor(s / 3600);
      var min = Math.floor(s / 60) % 60;
      var sec = s % 60;

      if (hour > 10) {
        t = hour + ":";
      } else {
        t = "0" + hour + ":";
      }

      if (min < 10) {
        t += "0";
      }
      t += min + ":";
      if (sec < 10) {
        t += "0";
      }
      t += sec;
    }

    return t;
  },
  /**
   * 时间秒数格式化2 不显示小时
   * @param s 时间戳（单位：秒）
   * @returns {*} 格式化后的分秒
   */
  secToTime2: function(s) {
    var t = "";
    if (s > -1) {
      var min = Math.floor(s / 60);
      var sec = s % 60;

      if (min < 10) {
        t += "0";
      }
      t += min + ":";
      if (sec < 10) {
        t += "0";
      }
      t += sec;
    }
    return t;
  },
  /**
   * 时间秒数格式化3 显示小时,分钟,秒
   * 考试专用格式化
   * @param s 时间戳（单位：秒）
   * @returns {*} 格式化后的分秒
   */
  secToTime3: function(s) {
    let t = "";
    if (s > -1) {
      let hour = Math.floor(s / 3600);
      let min = Math.floor((s - hour * 3600) / 60);
      let sec = s % 60;

      if (hour < 10) {
        t += "0";
      }
      t += hour + ":";
      if (min < 10) {
        t += "0";
      }
      t += min + ":";
      if (sec < 10) {
        t += "0";
      }
      t += sec;
    }
    return t;
  },

  /**
   * 时间转换成秒数
   * @param time hh:mm:ss|h:m:s 或 mm:ss|m:s
   * @returns {number}
   */
  timeToSec: function(time) {
    time = time.split(":");
    if (time.length == 3) {
      // hh:mm:ss|h:m:s
      let [hour, minute, second] = time;
      return 3600 * parseInt(hour) + 60 * parseInt(minute) + parseInt(second);
    } else if (time.length == 2) {
      // mm:ss|m:s
      let [minute, second] = time;
      return 60 * parseInt(minute) + parseInt(second);
    }
  },

  /**
   * 阿拉伯数字转中文数字
   * @param num
   * @returns {string}
   */
  numberToChinese: function(num) {
    var chnNumChar = [
      "零",
      "一",
      "二",
      "三",
      "四",
      "五",
      "六",
      "七",
      "八",
      "九"
    ];
    var chnUnitChar = ["", "十", "百", "千", "万"];
    var strIns = "",
      chnStr = "";
    var unitPos = 0;
    var zero = true;
    while (num > 0) {
      var v = num % 10;
      if (v === 0) {
        if (!zero) {
          zero = true;
          chnStr = chnNumChar[v] + chnStr;
        }
      } else {
        zero = false;
        strIns = chnNumChar[v];
        strIns += chnUnitChar[unitPos];
        chnStr = strIns + chnStr;
      }
      unitPos++;
      num = Math.floor(num / 10);
    }

    return chnStr;
  },

  /**
   * 格式化文件大小
   * @returns {*}
   */
  renderSize: function(value) {
    if (null == value || value == "") {
      return "0 Bytes";
    }
    var unitArr = new Array(
      "Bytes",
      "KB",
      "MB",
      "GB",
      "TB",
      "PB",
      "EB",
      "ZB",
      "YB"
    );
    var index = 0,
      srcsize = parseFloat(value);
    index = Math.floor(Math.log(srcsize) / Math.log(1024));
    var size = srcsize / Math.pow(1024, index);
    //  保留的小数位数
    size = size.toFixed(2);
    return size + unitArr[index];
  },

  /**
   * 保留两位小数
   * @returns {*}
   */
  toPrice: function(price) {
    var f_x = parseFloat(price);
    if (isNaN(f_x)) {
      return 0;
    }
    var f_x = Math.round(price * 100) / 100;
    var s_x = f_x.toString();
    var pos_decimal = s_x.indexOf(".");
    if (pos_decimal < 0) {
      pos_decimal = s_x.length;
      s_x += ".";
    }
    while (s_x.length <= pos_decimal + 2) {
      s_x += "0";
    }
    return s_x;
  },

  /**
   * 时间戳转换成日期
   * @param time 时间戳（单位：秒）
   * @param type 时间格式（默认：y-m-d）
   * @returns {*} 格式化后日期
   */
  parseToDate(time, type = 0) {
    time = time + "000";
    // 日期
    var date = new Date(parseInt(time));
    // 年
    var y = date.getFullYear();
    // 月
    var m = date.getMonth() + 1;
    m = m < 10 ? "0" + m : m;
    // 日
    var d = date.getDate();
    d = d < 10 ? "0" + d : d;

    // 年-月-日
    if (type == "1") {
      return y + "年" + m + "月" + d + "日";
    } else if (type == "2") {
      return y + "." + m + "." + d;
    } else if (type == "3") {
      return m + "." + d;
    } else {
      return y + "-" + m + "-" + d;
    }
  },

  /**
   * 格式化时间戳
   * @param time 时间戳（单位：秒）
   * @param type 时间格式（默认：y-m-d）
   * @returns {*} 格式化后日期
   */
  formatDate(time, type = 0) {
    time = time + "000";

    var date = new Date().getTime();

    var remain_time = date - time;

    if (remain_time < 60 * 1000) {
      return "刚刚";
    } else if (remain_time < 60 * 60 * 1000) {
      return Math.floor(remain_time / (60 * 1000)) + "分钟前";
    } else if (remain_time < 60 * 60 * 24 * 1000) {
      return Math.floor(remain_time / (60 * 60 * 1000)) + "小时前 ";
    } else {
      // 日期
      var date = new Date(parseInt(time));
      // 年
      var y = date.getFullYear();
      // 月
      var m = date.getMonth() + 1;
      m = m < 10 ? "0" + m : m;
      // 日
      var d = date.getDate();
      d = d < 10 ? "0" + d : d;

      // 年-月-日
      if (type == "1") {
        return y + "年" + m + "月" + d + "日";
      } else if (type == "2") {
        return y + "." + m + "." + d;
      } else {
        return y + "-" + m + "-" + d;
      }
    }
  },
  /**
   * 聊天格式化时间戳
   * @param time 时间戳（单位：秒）
   * @param type 时间格式（默认：y-m-d）
   * @returns {*} 格式化后日期
   */
  chartFormatDate(nowTime, newTime) {
    let time = nowTime + "000";
    let currentTime = Number(new Date());
    if (Math.abs(nowTime - newTime) < 120) {
      return "";
    }
    // 日期
    let date = new Date(parseInt(time));
    let y = "",
      m = "",
      d = "",
      h = "",
      M = "",
      s = "";
    if (currentTime - time > 86400000) {
      // 年
      y = date.getFullYear() + "-";
      // 月
      m = date.getMonth() + 1;
      m = (m < 10 ? "0" + m : m) + "-";
      // 日
      d = date.getDate();
      d = d < 10 ? "0" + d : d + "  ";
    }
    //时
    h = (date.getHours() >= 10 ? date.getHours() : "0" + date.getHours()) + ":";
    //分
    M =
      (date.getMinutes() >= 10 ? date.getMinutes() : "0" + date.getMinutes()) +
      ":";
    //秒
    s = date.getSeconds() >= 10 ? date.getSeconds() : "0" + date.getSeconds();
    // 年-月-日 时:分:秒
    return y + m + d + h + M + s;
  },

  /**
   * 过滤富文本内容
   * @param str 富文本内容
   */
  delHtmlTag(str) {
    return (str || "").replace(/<[^>]+>|&[^>]+;/g, "").trim() || "暂无内容";
  },
  /*展开收起   部分展示*/
  introduceFilter: function(value, bol, length) {
    length = length || 49;
    if ((value || "").length > length && !bol) {
      return value.substring(0, length) + "...";
    } else {
      return value;
    }
  }
};
