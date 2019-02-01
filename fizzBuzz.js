function fizzBuzz(num) {
    if(num <= 100){
        if(num%3 == 0 && num%5 == 0 ){
            return "FizzBuzz"
        }else if(`${num}`.substring(0,1) == "3" && `${num}`.substring(1,2) == "5" || 
        `${num}`.substring(0,1) == "5" && `${num}`.substring(1,2) == "3" ){
            return "FizzBuzz"
        }else if(num%3 == 0 ||  `${num}`.substring(0,1) == "3" || `${num}`.substring(1,2) == "3" ){
            if(`${num}`.substring(0,1)== "5" || `${num}`.substring(1,2)== "5"){
                return "FizzBuzz"
            }else{
                return "Fizz"
            }
        }else if(num%5 == 0 || `${num}`.substring(0,1)== "5"){
            return "Buzz"
        }else{
            return num
        }
    }
    
}
module.exports = fizzBuzz;