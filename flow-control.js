function basicTeenager(age) {
  if (age >= 13 && age <= 19) return "You are a teenager!";
}

function teenager(age) {
  if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are not a teenager";
  }
}

function ageChecker(age) {
  if (age < 13) {
    return "You are a kid";
  } else if (age >= 13 && age <= 19) {
    return "You are a teenager!";
  } else {
    return "You are a grownup";
  }
}

function ternaryTeenager(age) {
  return (age >= 13 && age <= 19) ? "You are a teenager" : "You are not a teenager";
}

function switchAge(age) {
  var text = "";
  switch (age) {
    case 13:
      text = "You are a teenager";
      break;
    case 14:
      text = "You are a teenager";
      break;
    case 15:
      text = "You are a teenager";
      break;
    case 16:
      text = "You are a teenager";
      break;
    case 17:
      text = "You are a teenager";
      break;
    case 18:
      text = "You are a teenager";
      break;
    case 19:
      text = "You are a teenager";
      break;
    default:
      text = "You have an age";
  }
  return text;
}
