let cars=["Mini_Cooper","Ford_Mustang"];


if(cars.indexOf("Mini_Cooper")!=-1){
    console.log('====================================');
    console.log( "Is in my favorite cars list");
    console.log('====================================');
}else{
    console.log('====================================');
    console.log( "Not in my favorite cars list");
    console.log('====================================');
}

if("mini_cooper"==cars[0].toLowerCase() || "MINI_COOPER"==cars[0].toUpperCase()){
    console.log("lower Or upper case condition matched");
}

if(cars[1].toUpperCase()=="FORD_MUSTANG" && cars[1].toLowerCase()=="ford_mustang"){
    console.log('====================================');
    console.log("And Condition Matched");
    console.log('====================================');
}