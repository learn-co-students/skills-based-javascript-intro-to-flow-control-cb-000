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

// ternaryTeenager should return "You are a teenager" if age is between 13-19
// ternaryTeenager should return "You are not a teenager" if age not between 13-19
function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager";
}

// switchAge should return "You are a teenager" if age is between 13-19
// switchAge should return "You have an age" if age not between 13-19
function switchAge(age) {
  switch(age) {
    case 13:
    case 14:
    case 15:
    case 16:
    case 17:
    case 18:
    case 19:
      return "You are a teenager";
    default:
      return "You have an age";
  }
}
