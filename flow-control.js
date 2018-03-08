// basicTeenager should return "You are a teenager!" if the age is between 13-19
function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
}

// teenager should return "You are a teenager!" if the age is between 13-19
// teenager should return "You are not a teenager" if the age is not between 13-19
function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

// ageChecker should return "You are a teenager!" if the age is between 13-19
// ageChecker should return "You are a kid" if the age is 12 or below
// ageChecker should return "You are a grownup" if the age is 20 or above
function ageChecker(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else if (age <= 12) {
    return "You are a kid";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {

}

function switchAge(age) {

}
