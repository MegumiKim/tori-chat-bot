export async function fetchReq(userObj) {
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      userId: userObj.userId,
      message: userObj.message,
    }),
  };

  const response = await fetch(
    "https://chat-service.svc.beta.tori.fi/chatbot",
    requestOptions
  );

  return await response.json();
}
