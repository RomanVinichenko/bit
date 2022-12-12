export function
capitalizeFirstLetter(string) {
 return string.charAt(0).toUpperCase() + string.slice(1);
}
export function rootDomain(url) {
    var rightPeriodIndex;
    for (var i = url.length - 1; i >= 0; i--) {
        if(url[i] == '.') {
            //console.log("rightPeriodIndex", i);
            rightPeriodIndex = i;
            var noExtension = url.substr(0,i);
            console.log("this is noExtension", noExtension);
            break;
        }
    }
    if(noExtension !== undefined){
        var result = noExtension.substring(noExtension.lastIndexOf(".") + 1);
        return result
    }else{
        return url
    }
}
