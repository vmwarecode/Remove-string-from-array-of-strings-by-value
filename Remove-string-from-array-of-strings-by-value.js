// VMware vRealize Orchestrator action sample
// 
// Removes a string from an array of strings by value.
// Does not account for duplicate values in the array.
//
//Action Inputs:
// aStrings  -  Array/String
// toRemove  -  String
//
//Return type: Array/String


//find and remove 'toRemove' in the 'aStrings' array
var foundAt = null;
for (var i = 0; i < aStrings.length; i++) {
    if (aStrings[i] == toRemove) {
        foundAt = i;
        break;
    }
}

if (foundAt != null) {
    aStrings.splice(foundAt,1);
}
return aStrings;