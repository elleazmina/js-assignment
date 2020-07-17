// Task 1 # feetToMile

function feetToMile(feet) {
    if(feet < 0) {
        console.log("Distance can't be negative. You MUST put a positive value");
    }
    else {
        var mile = (feet / 5280).toFixed(3);
        return mile;
    }
    
}

var distance = feetToMile(737689);
console.log('Converted value is: ',distance,'miles');



// Task 2 # woodCalculator

function woodCalculator(chair, table, bed) {
        var chairWood = Math.abs(chair * 1);
        var tableWood = Math.abs(table * 3);
        var bedWood = Math.abs(bed * 5);
        var totalWood = (chairWood + tableWood + bedWood);
        return totalWood;
}

var woodCount = woodCalculator(-12, 5, 3);
console.log('Number of Woods needed is: ', woodCount, 'pieces');



// Task 3 # brickCalculator

function brickCalculator(floorNumber) {
    if((floorNumber >= 1) && (floorNumber <= 10)) {
        var heightUpTo10 = floorNumber * 15;
        return (heightUpTo10 * 1000);
    } 

    else if( floorNumber >= 11 && floorNumber <= 20) {
        var heightUpTo20 = ((floorNumber - 10) * 12) + (10 * 15);
        return (heightUpTo20 * 1000);
    }
    else if( floorNumber >= 21) {
        var heightUpTo30 = ((floorNumber - 20) * 10) + (10 * 15) + (10 * 12);
        return (heightUpTo30 * 1000);
    }
    else {
        return 0;
    }
    
    
}

var bricksNeeded = brickCalculator(17);
console.log('Number of bricks Needed for this Building is: ', bricksNeeded);



// Task 4 # tinyFriend

function tinyFriend(allFriends) {
    if(allFriends == '') {
        return 'No Friends';
    }
    else{
        var tiniestFriend = allFriends[0];
     for(var i = 0; i<allFriends.length; i++) {
         var currentFriend = allFriends[i];
         if(currentFriend.length < tiniestFriend.length && currentFriend.length > '') {
            tiniestFriend = currentFriend;
                }
        
            }
        }
    
    return tiniestFriend;
}

var myFriends = ['Elle', 'Ria', 'Shuma', '', 'Azmina'];
var myTiniestFriend = tinyFriend(myFriends);
console.log('My Friend with Tiniest name is: ', myTiniestFriend);