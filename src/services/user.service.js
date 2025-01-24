
export const loginUserService = async (loginData) => {
    console.log(loginData)
  const email = loginData.email;
  const password = loginData.password;
  console.log("Checking database for login");

  if (email == "hari@gmail.com") {
    return { message: "Login successful" };
  } else {
    return { message: "Login failed" };
  }
};
