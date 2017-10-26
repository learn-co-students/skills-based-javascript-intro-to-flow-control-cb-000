function between(age, lRange, uRange) {
  return age >= lRange && age <= uRange;
}

function basicTeenager(age) {
  if (between(age, 13, 19)) {
    return "You are a teenager!";
  }
  return undefined;
}

function teenager(age) {
  if (between(age, 13, 19)) {
    return "You are a teenager!";
  }
  return "You are not a teenager";
}

function ageChecker(age) {
  if (between(age, 13, 19)) {
    return "You are a teenager!";
  } else if (age >= 20) {
    return "You are a grownup";
  } else if (age <= 12) {
    return "You are a kid";
  }
}

function ternaryTeenager(age) {
  return between(age, 13, 19) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch (age) {
    case 15:
      return "You are a teenager";
      break;
    default:
      return "You have an age";
      break;
  }
}
