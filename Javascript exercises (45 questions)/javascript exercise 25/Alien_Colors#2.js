let alien_color="green";
printAlienStatus(alien_color);
alien_color="red";
printAlienStatus(alien_color);



function printAlienStatus(alien_color){

    if(alien_color=='green'){
        console.log("You just earned 5 points for shooting the alien");
    }
    else{
        console.log("You just earned 10 points");
    }


}