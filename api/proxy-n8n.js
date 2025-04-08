export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).send("Method not allowed");
  }

  const webhookURL = "https://TON_WEBHOOK.n8n.cloud/webhook/TON_ENDPOINT"; // Remplace par ton lien réel

  try {
    const response = await fetch(webhookURL, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(req.body),
    });

    const data = await response.text();
    res.status(200).send(data);
  } catch (error) {
    res.status(500).send("Proxy error");
  }
}
