module.exports = {
    firstLetterUpper: function(str){
        str = str.toLowerCase();
        
        var string = str.split(' ');
        
        for(var i = 0; i < string.length; i++){
            string[i] = string[i].charAt(0).toUpperCase() + string[i].slice(1);
        }
        
        return string.join(' ');
    }, 
    
    Repeat: function(str, numOfTimes){
        var string = "";
        
        while(numOfTimes > 0){
            string = string + str; //string += str
            numOfTimes--;
        }
        
        return string;
    },
    
    stringEnding: function(str, value){
        var string = str.substr(-value.length);
        
        if(string === value){
            return true;
        }else{
            return false;
        }
    },
    
    reverse: function(str) {
        var string = "";
        
        for (var i = str.length - 1; i >= 0; i--) {
            string += str[i];
        }
        return string;
    },
    
    longest: function(str) {
        var splitString = str.split(' ');
        
        var array = [];
        var longestWord = splitString.sort(function(a, b) { 
            return b.length - a.length; 
        });
        array.push(longestWord[0], longestWord[0].length)
        return array;
    }
}