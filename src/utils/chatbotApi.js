export const sendMessageToChatbot = async (message) => {
  const response = await fetch("https://api.openrouter.ai/v1/chat/completions", {
    method: "POST",
    headers: {
      Authorization: "Bearer YOUR_OPENROUTER_API_KEY",
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      model: "google/gemini-pro-1.5",
      messages: [
        { role: "system", content: "You are a helpful AI assistant." },
        { role: "user", content: message }
      ]
    })
  });

  const data = await response.json();
  return data.choices[0].message.content;
};
