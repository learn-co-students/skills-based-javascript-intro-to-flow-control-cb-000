function basicTeenager(age) {
  if(age > 12 && age < 20) { return("You are a teenager!") ; }
}

function teenager(age) {
if(age > 12 && age < 20) { return("You are a teenager!") ; } ;
else {return ("You are not a teenger.")} ;
}

function ageChecker(age) {
  if(age > 12 && age < 20) { return("You are a teenager!") ; } ;
  else if(age < 12) { return ("You are a kid") } ;
  else {return ("You are a grownup.")} ;
}

function ternaryTeenager(age) {
return age > 12 && age < 20 ? "You are a teenager" : "You are not a teenger" ;
}

function switchAge(age) {
  mess = "You are a teenger"
switch(age) {
  case 13:
    return mess
    break
  case 14:
    return mess
    break
  case 15:
    return mess
    break
  case 16:
    return mess
    break
  case 17:
    return mess
    break
  case 18:
    return mess
    break
  case 19:
    return mess
    break
  default:
    return "You have an age"

}
}
