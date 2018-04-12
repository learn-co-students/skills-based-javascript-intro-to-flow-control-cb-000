function basicTeenager(age) {
  if ((age >= 13) && (age <= 19)){
    return "You are a teenager!"
  }
}

function teenager(age) {
  if (age >= 13 && age <= 19){
    return "You are a teenager!"
  }
  else {
    return "You are not a teenager"
  }

}

function ageChecker(age) {
// age between 13-19 return teenager, less than 12 return "you are a kid", above 19 return "you are a grownup"
if (age >= 13 && age <= 19) {
  return "You are a teenager!"
}
else if(age <= 12) {
  return "You are a kid"
}
else {
  return "You are a grownup"
}
}

function ternaryTeenager(age) {
  // age is parameter, return teenager if age 13-19, return not a teenager if age is anything else
  // condition to test ? value returned if true : value returned if false
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager"

}

function switchAge(age) {
  // age is a parameter, return teenager if 13 - 19, and return "you have an age" as a default
  switch(age){
    case (13):
    case (14):
    case (15):
    case (16):
    case (17):
    case (18):
    case (19):
        return "You are a teenager";
        break;
    default:
        return "You have an age";
  }


}
