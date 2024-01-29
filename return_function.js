//new bake function that takes temperature in degrees from oven
function bake(degrees){
    var message;

    if (degrees>500){
        message="I'm not a nuclear reactor"
    }else if(degrees <100){
        message = "I'm not a refrigerator!";
    } else {
        message = "That's a very comfortable temperature for me.";
        setMode("bake");
        setTemp(degrees);

    }
    return message;
}
//Now, when the function is called and returns, the string that is returned as a result will be assigned to the status variable.

var status=bake(350);
