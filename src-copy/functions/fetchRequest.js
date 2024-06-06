export async function fetchReq(conversationArr) {
  console.log(process.env.VITE_APP_OPENAI_API_KEY);
  const requestOptions = {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${process.env.VITE_APP_OPENAI_API_KEY}`,
    },
    body: JSON.stringify({
      messages: conversationArr,
      model: "gpt-3.5-turbo",
      presence_penalty: 0,
      frequency_penalty: 0.3,
    }),
  };

  try {
    const response = await fetch(
      "https://api.openai.com/v1/chat/completions",
      requestOptions
    );
    const data = await response.json();

    return data.choices[0].message;
  } catch (error) {
    console.log(error);
    throw error;
  }
}
