export const getAuthToken = (): object => {
  let token = JSON.parse(localStorage.getItem("token") || "{}");
  console.log(token, "Token");
  const headers = {
    "auth-token": token.token,
    "X-Requested-With": "XMLHttpRequest",
  };
  return headers;
};
