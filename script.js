var slider = document.getElementById('rate');
var output = document.getElementById('value');
var principal = document.getElementById('principal');
var years = document.getElementById('years');
var result = document.getElementById('result');



output.innerHTML = slider.value;             //Assigning the output to the range value of the slider

slider.oninput = function(){                //Function to get the slider input
    output.innerHTML = this.value;
}


function compute(){                                                      //Funtion to compute the interest

    var interest = principal.value*years.value*rate.value/100;           //Calculating the interest

    var actual_years = 2021 + parseInt(years.value);                      //Converting no. of years to actual year in the future    

    if(principal.value>0){                                                //validation for the principal value to be a positive number  

    result.innerHTML = `If you deposit ${principal.value}
                        at an interest rate of ${slider.value}
                         you will receive an amount of ${interest}
                         in the year ${actual_years}`;
    }
    else{
        alert("Enter a positive number");
        principal.focus();
    }
}
