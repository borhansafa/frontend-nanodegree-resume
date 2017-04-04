/**
 * Created by mdborhan on 04.04.17.
 */

/**Problem number One
 *
 * @param x is supposed to be a numbered value.
 * @param y is supposed to be a numbered value.
 * @returns {If both are numbers then they will be compared with '<','>' and '===' operators and return the result.
 *          If any of them or both of them is not a number then it will return with a string mentioning the parameter(s)
 *          which is not a number.}
 */
function getRelationship(x, y) {
    var result;
    var valueResult = [];
    // Your code goes here!
    if(!isNaN(x) && !isNaN(y)){
        if(x === y){
            result = "=";
            return result;
        }else if(x > y){
            result =">";
            return result;
        }else if(x < y){
            result = "<";
            return result;
        }
    }else{
        if(isNaN(x)){
            valueResult.push(x);
        }if(isNaN(y)){
            valueResult.push(y);
        }if(valueResult.length === 2){
            var result = "Can't compare relationships because " + valueResult[0] + " and " + valueResult[1] +" are not numbers";
            return result;
        }else{
            var result = "Can't compare relationships because " + valueResult[0] + " is not a number";
            return result;
        }
    }
};

// Try logging these functions to test your code!
console.log(getRelationship(1,4));
console.log(getRelationship(1,1));
console.log(getRelationship("that",2));
console.log(getRelationship("this","something else"));
console.log(getRelationship(3));
console.log(getRelationship("hi"));
console.log(getRelationship(NaN));
console.log(getRelationship(NaN, undefined));


/**Problem number two
 *
 * You'll notice that these names are listed in the order that they first stepped on the Moon,
 * not alphabetical order. To alphabetize them, it would make sense to write their names as
 * lastname, firstname. For example: Neil Armstrong becomes Armstrong, Neil.
 *
 * Finish the alphabetizer(_names) function, which takes in a names array (of length N)
 * containing strings of names and returns an alphabetized array of names in lastname, firstname format.
 *
 */

var moonWalkers = [
    "Neil Armstrong",
    "Buzz Aldrin",
    "Pete Conrad",
    "Alan Bean",
    "Alan Shepard",
    "Edgar Mitchell",
    "David Scott",
    "James Irwin",
    "John Young",
    "Charles Duke",
    "Eugene Cernan",
    "Harrison Schmitt"
];

function alphabetizer(names) {
    var name = [];
    for(i=0;i<names.length;i++){
        var temp;
        var temp2 = [];
        temp2 = names[i].split(" ");
        if(temp2.length > 2){
            temp = temp2[2] + ", " + temp2[0] + " " + temp2[1];
            name.push(temp);
        }
        temp = temp2[1] + ", " + temp2[0];
        name.push(temp);
    }
    return name.sort();
}

console.log(alphabetizer(moonWalkers));


/**Problem number Three
 *
 * Create a totalBytes(psiResults) function that iterates through pageStats in the psiResults
 * object and returns the total number of bytes to load the website.
 *
 * Then, create a ruleList(psiResults) function that iterates through the localizedRuleNames
 * in ruleResults and returns an array of their strings.
 *
 */

// Iterate through the localizedRuleNames in ruleResults and
// return an array of their strings.
function ruleList(results) {
    // Your code goes here!
    var item = results.formattedResults.ruleResults;
    var array = [];
    var val;
    for (var i in item) {
        val = item[i].localizedRuleName;
        array.push(val);
    }
    return array;
}

// Iterate through pageStats in the psiResults object and
// return the total number of bytes to load the website.
function totalBytes(results) {
    // Your code goes here!
    var sum = 0; var parskey = 0;
    for (var key in results.pageStats) {
        if (key.search("Bytes") !== -1) {	//or use indexOf
            parskey = parseInt(results.pageStats[key]);
            sum += parskey;
        }
    }
    return(sum);
}


// Below, you'll find a sample PS Insights JSON
// and two console.log statements to help you test your code!

psinsights = {
    "kind": "pagespeedonline#result",
    "id": "/speed/pagespeed",
    "responseCode": 200,
    "title": "PageSpeed Home",
    "score": 90,
    "pageStats": {
        "numberResources": 22,
        "numberHosts": 7,
        "totalRequestBytes": "2761",
        "numberStaticResources": 16,
        "htmlResponseBytes": "91981",
        "cssResponseBytes": "37728",
        "imageResponseBytes": "13909",
        "javascriptResponseBytes": "247214",
        "otherResponseBytes": "8804",
        "numberJsResources": 6,
        "numberCssResources": 2
    },
    "formattedResults": {
        "locale": "en_US",
        "ruleResults": {
            "AvoidBadRequests": {
                "localizedRuleName": "Avoid bad requests",
                "ruleImpact": 0.0
            },
            "MinifyJavaScript": {
                "localizedRuleName": "Minify JavaScript",
                "ruleImpact": 0.1417,
                "urlBlocks": [{
                    "header": {
                        "format": "Minifying the following JavaScript resources could reduce their size by $1 ($2% reduction).",
                        "args": [{
                            "type": "BYTES",
                            "value": "1.3KiB"
                        }, {
                            "type": "INT_LITERAL",
                            "value": "0"
                        }]
                    },
                    "urls": [{
                        "result": {
                            "format": "Minifying $1 could save $2 ($3% reduction).",
                            "args": [{
                                "type": "URL",
                                "value": "http://code.google.com/js/codesite_tail.pack.04102009.js"
                            }, {
                                "type": "BYTES",
                                "value": "717B"
                            }, {
                                "type": "INT_LITERAL",
                                "value": "1"
                            }]
                        }
                    }, {
                        "result": {
                            "format": "Minifying $1 could save $2 ($3% reduction).",
                            "args": [{
                                "type": "URL",
                                "value": "http://www.gmodules.com/ig/proxy?url\u003dhttp%3A%2F%2Fjqueryjs.googlecode.com%2Ffiles%2Fjquery-1.2.6.min.js"
                            }, {
                                "type": "BYTES",
                                "value": "258B"
                            }, {
                                "type": "INT_LITERAL",
                                "value": "0"
                            }]
                        }
                    }]
                }]
            },
            "SpriteImages": {
                "localizedRuleName": "Combine images into CSS sprites",
                "ruleImpact": 0.0
            }
        }
    },
    "version": {
        "major": 1,
        "minor": 11
    }
}

// Try logging the outputs below to test your code!
console.log(ruleList(psinsights));
console.log(totalBytes(psinsights));
