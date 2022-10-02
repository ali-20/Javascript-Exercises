let alien_color="green";
printAlienStatus(alien_color);
alien_color="red";
printAlienStatus(alien_color);
alien_color="yellow";
printAlienStatus(alien_color);

function printAlienStatus(alien_color){

    if(alien_color=='green'){
        console.log("You just earned 5 points");
    }
    else if(alien_color=='red'){
        console.log("You just earned 15 points");
    }
    else if(alien_color=='yellow'){
        
        console.log("You just earned 10 points");
    }


}