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
    console.log('====================================');
    console.log(`${notComingGuests[i]} can't make it to the dinner!`);
    console.log('====================================');
}



console.log("\n");
console.log("Hi! i have found a bigger dining table: So i am expanding my guests List.");

newGuestList.unshift("Fawad");
addGuestsInMiddle(newGuestList,"Hassan");
newGuestList.push("Osama")
inviteGuests(newGuestList);


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
    for(let i=0; i<guestList.length; i++){
        console.log('====================================');
        console.log("Dear",guestList[i],"I would like to invite you for a lunch, to honor you and to show my respect for you.");
        console.log('====================================');
    }
}



