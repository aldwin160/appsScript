sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();

// MODULE 1 - HOW getValues() WORK! | asumsi A1 = 'a' | A2 = 'b' | B1 = 'c' | B2 = 'd'
function getValues(){
  let range1 = sheet.getRange('A1:B2').getValues(); // OUTPUT: [['a','c'],['b','d']]
  let range2 = sheet.getRange('A1:A2').getValues(); // OUTPUT: [['a'],['b']]
  let range3 = sheet.getRange('A1').getValues(); //OUTPUT: [['a]]
  //NOTE: Jika ingin setValues(), format array-subarray harus sesuai dengan getRange() yg ingin di getValue()
}

//MODULE 2 - IF YOU USE .flat(), REMOVE ALL level 2 [square bracket] (a level below outermost)
function (){
  let array2 = [['a'], ['b']]; //2 row, makanya perlu 2 subarray
  array2.flat() = ['a','b']
  let array3 = [ [1,2] ,[ 3,[4,5] ]]
  array3.flat() = [1,2,3,[4,5]]
  Logger.log(dCell.flat())
}

//MODULE 3 - BASIC GET VALUES
function test3(){
  var range = sheet.getRange("A1:A5");
  var values = range.getValues();
  Logger.log(values); //OUTPUT - [[a], [b], [c], [], [e]]
}

//MODULE 4 - BASIC LOOP
function test4(){
  var range = sheet.getRange("A1:A5");
  var values = range.getValues();
  var ranges = []
  
  for (var i = 0; i < 5; i++) {
    ranges.push('a');
  }

  Logger.log(ranges) //OUTPUT - ['a','a','a','a','a'];
}

//MODULE 5 - PROTECT WHOLE SHEET EXCEPT SEVERAL RANGES
function test5(){
  var range1 = sheet.getRange("A1:B1");
  var range2 = sheet.getRange("A2:B2");
  let excludedRanges = [range1, range2];
  var protection = sheet.protect(); // Protect the sheet

  protection.removeEditors(protection.getEditors()); // All editor become view only
  protection.setUnprotectedRanges(excludedRanges); // Protected that are view only stay view only. excludedRange can be edited for certain range
}
