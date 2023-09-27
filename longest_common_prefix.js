/* 
Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".
*/

function longestCommonPrefix (strs) {
    var longestPrefix = "";
    var biggestString = 1;
    var gotBiggestString = false;
    var currentLetter = "";

    for (let letter = 0; letter < biggestString; letter++) {
        currentLetter = strs[0][letter];

        for (let string = 0; string < strs.length; string++) {
            if (gotBiggestString == false && strs[string].length > biggestString)
                biggestString = strs[string].length
            // this if checks (only in the first iteration of the for loop), the biggest string in the array

            if (strs[string][letter] == undefined)
                return longestPrefix;
            //this if returns the current longest prefix everytime it becomes bigger than any string in the array
            
            if (strs[string][letter] == currentLetter)
                continue
            else
                return longestPrefix;    
        }

        gotBiggestString = true;

        longestPrefix += currentLetter;
    }
}

/* 
Literally one of the worst algorithms I have ever done. I don't know what I'm doing. My mind is a pudim right now.
*/