
const getCompletions = (requestBody) => {
  const data = {
    prompt: requestBody,
    temperature: 0.5,
    max_tokens: 64,
    top_p: 1.0,
    frequency_penalty: 0.0,
    presence_penalty: 0.0,
  };
  console.log("env process", process.env);

  return fetch("https://api.openai.com/v1/engines/text-curie-001/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer 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`,
    },
    body: JSON.stringify(data),
  }).then(res => res.json());
}

export default getCompletions;
