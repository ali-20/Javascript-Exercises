const guestList=["Farhan","Faizan","Fawad","Muhammad Ali"];
const notComingGuests=guestList.filter((guest)=>{
    return guest=="Fawad";
});
console.log("notComingGuests:",notComingGuests);
const newGuestList=guestList.filter((guest)=>{
    return guest != "Fawad";
})

newGuestList.push("Bilal");

for(let i=0; i<newGuestList.length; i++){
    console.log('====================================');
    console.log("Dear",newGuestList[i],"I would like to invite you for a lunch, to honor you and to show my respect for you.");
    console.log('====================================');
}

for(let i=0; i<notComingGuests.length; i++){

    console.log('====================================');
    console.log(`${notComingGuests[i]} can't make it to the dinner!`);
    console.log('====================================');
    
}

