function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  }
}

function teenager(age) {
  return basicTeenager(age) ||  "You are not a teenager";
}

function ageChecker(age) {
  var NotTeenagerMsg;

  if (age <= 12) {
    NotTeenagerMsg = "You are a kid";
  } else if (age >= 20) {
    NotTeenagerMsg = "You are a grownup";
  }

  return NotTeenagerMsg || "You are a teenager!";
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  switch (age) {
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
