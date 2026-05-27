
export const validateForm = (email, password) => {
  let errors = {}
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  if (!email) {
    errors.email = "Email is required"
  } else if (!emailPattern.test(email)) {
    errors.email = "Invalid email format"
  }
  const passwordPattern = /^(?=.*[0-9])(?=.*[!@#$%^&*]).{6,}$/
  if (!password) {
    errors.password = "Password is required"
  } else if (!passwordPattern.test(password)) {
    errors.password =
      "Password must be 6+ chars, include number & special character"
  }

  return errors
}