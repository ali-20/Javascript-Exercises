const guestList=["Farhan","Faizan","Fawad","Muhammad Ali"];
const notComingGuests=guestList.filter((guest)=>{
    return guest=="Fawad";
});

const newGuestList=guestList.filter((guest)=>{
    return guest != "Fawad";
})

newGuestList.push("Bilal");

inviteGuests(newGuestList);

for(let i=0; i<notComingGuests.length; i++){
    
    console.log('\n');
    console.log('====================================');
    console.log(`${notComingGuests[i]} can't make it to the dinner!`);
    console.log('====================================');
}


console.log("\n");
console.log("Hi! i have found a bigger dining table: So i am expanding my guests List.");
console.log("\n");
newGuestList.unshift("Fawad");
addGuestsInMiddle(newGuestList,"Hassan");
newGuestList.push("Osama")
inviteGuests(newGuestList);

console.log("\n");
console.log("Hi! The bigger table has been delayed, sadly i can only invite two guests for now,Accept My sincere appologies for that.");
console.log("\n");
removeGuestWithAppology(newGuestList);
removeGuestWithAppology(newGuestList);
removeGuestWithAppology(newGuestList);
removeGuestWithAppology(newGuestList);
removeGuestWithAppology(newGuestList);
removeGuestWithAppology(newGuestList);
removeGuestWithAppology(newGuestList);
removeGuestWithAppology(newGuestList);

console.log("\n");
console.log("New Guests List:\n");
inviteGuests(newGuestList)

console.log("\n");
removeGuestWithAppology(newGuestList,true);
removeGuestWithAppology(newGuestList,true);
console.log("\n");
console.log("Remaining Guests:",newGuestList);


// Helper Methods
function addGuestsInMiddle(guestsList,guest){
    let guestsMidPosition=Math.floor(guestsList.length/2);
    let currentGuestAtMidPosition=guestsList[guestsMidPosition];
    guestsList[guestsMidPosition]=guest;
    for(let i=guestsList.length-1; i>guestsMidPosition;i--){
        guestsList[i+1]=guestsList[i];
        if(i==guestsMidPosition+1){
            guestsList[i]=currentGuestAtMidPosition;
        }
    }
    return guestList;
}

function inviteGuests(guestList){
    console.log("Total Guests:",guestList.length)
    for(let i=0; i<guestList.length; i++){
        console.log('====================================');
        console.log("Dear",guestList[i],"I would like to invite you for a lunch, to honor you and to show my respect for you.");
        console.log('====================================');
    }
}

function removeGuestWithAppology(guestList,forceRemove){

    if(guestList.length>2 || (forceRemove && guestList.length>0)){
        const removedGuest=guestList.pop();
        console.log('====================================');
        console.log(`My deepest Appology dear ${removedGuest}`);
        console.log('====================================');
    }

}




