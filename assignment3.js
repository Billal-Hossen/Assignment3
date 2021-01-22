
//problem-1: Convert kilometter to metter
function kilometterToMetter(kilo){
    if(kilo < 0){
        return 'Value is not valid';
    }
    else{
        var metter =  kilo * 1000 ;
        return metter;
    }
}



//problem-2: Budget Calculator
function budgetCalculator(watch,mobile,laptop){
    var total= (watch * 50) + (mobile * 100) + (laptop * 500);
    return  total ;
}




//problem-3: Hotel Cost
function hotelCost(days){
    var firstTenDays,secondTenDays,moreTwentyDays,remaining,totalCost;
    if(days<=10){
        firstTenDays = days * 100;
        totalCost=firstTenDays;

    }
    else if(days<=20){
        firstTenDays=10 * 100;
    remaining = days - 10;
    secondTenDays = remaining * 80;
    totalCost= firstTenDays + secondTenDays;

    }
    else{
        firstTenDays= 10 * 100;
        secondTenDays= 10 * 80;
        remaining = days - 20;
        moreTwentyDays= remaining * 50
        totalCost = firstTenDays + secondTenDays + moreTwentyDays;

    }
    return totalCost ;
    
}




//problem-4:Mega Friend
function megaFriend(arr){
    var large= arr[0].length;
    var longName;
    for(var i=1;i<arr.length;i++){
       
        var len=arr[i].length;
        if(large<len){
            large=len;
           
            
        }  
        longName=arr[i];     
    }
    //console.log(large,longName);
    return longName;
}

