//读Cookie
export const getCookie = name => {
    var arrStr = document.cookie.split("; ");
    for (var i = 0; i < arrStr.length; i++) {
        var temp = arrStr[i].split("=");
        if (temp[0] == name) {
            return unescape(temp[1]);
        }
    }
    return "";
}

//写cookie
export const setCookie = (name, value, time) => {
    var date = new Date();
    date.setTime(date.getTime() + (time || 24 * 60 * 60 * 1000));
    var expires = "expires=" + date.toGMTString();
    document.cookie = name + "=" + escape(value) + "; " + expires;
}