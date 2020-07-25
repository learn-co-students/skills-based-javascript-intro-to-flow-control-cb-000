function basicTeenager(age) {
  if (age >= 13 && age <= 19) {
    return 'You are a teenager!'
  }
}

function kid(age) {
  if (age <= 12) {
    return 'You are a kid'
  }
}

function adult(age) {
  if (age > 19) {
    return 'You are a grownup'
  }
}

function teenager(age) {
  return basicTeenager(age) || 'You are not a teenager'
}

function ageChecker(age) {
  return basicTeenager(age) || kid(age) || adult(age)
}

function ternaryTeenager(age) {
  return age >= 13 && age <= 19 ? 'You are a teenager' : 'You are not a teenager'
}

function switchAge(age) {
  switch(age) {
    case 13:
      return message()
    case 14:
      return message()
    case 15:
      return message()
    default:
      return 'You have an age'
  }
}

function message() {
  return "You are a teenager"
}
