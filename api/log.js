const MAX_EMBEDS = 3;
const MAX_TEXT_LENGTH = 2000;

function json(res, status, payload) {
  res.status(status).setHeader("Content-Type", "application/json");
  res.setHeader("Cache-Control", "no-store");
  return res.end(JSON.stringify(payload));
}

function getPayload(req) {
  if (req.body && typeof req.body === "object") return req.body;
  if (typeof req.body === "string") {
    try {
      return JSON.parse(req.body);
    } catch {
      return null;
    }
  }
  return null;
}

function isAllowedWebhook(value) {
  try {
    const url = new URL(value);
    return (
      url.protocol === "https:" &&
      url.hostname === "discord.com" &&
      /^\/api\/webhooks\/\d+\/[^/]+$/.test(url.pathname)
    );
  } catch {
    return false;
  }
}

function trimText(value) {
  return typeof value === "string" ? value.slice(0, MAX_TEXT_LENGTH) : "";
}

function sanitizeEmbed(embed) {
  if (!embed || typeof embed !== "object") return null;

  const safe = {
    title: trimText(embed.title),
    color: Number.isFinite(embed.color) ? embed.color : 3447003,
    fields: Array.isArray(embed.fields)
      ? embed.fields.slice(0, 10).map((field) => ({
          name: trimText(field?.name),
          value: trimText(field?.value),
          inline: Boolean(field?.inline),
        }))
      : [],
    footer:
      embed.footer && typeof embed.footer === "object"
        ? { text: trimText(embed.footer.text) }
        : undefined,
    timestamp: typeof embed.timestamp === "string" ? embed.timestamp : undefined,
  };

  return safe;
}

export default async function handler(req, res) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return json(res, 405, { success: false, error: "Method not allowed" });
  }

  const webhookUrl = process.env.DISCORD_WEBHOOK_URL;
  if (!webhookUrl || !isAllowedWebhook(webhookUrl)) {
    return json(res, 500, { success: false, error: "Log destination is not configured" });
  }

  const payload = getPayload(req);
  const embeds = Array.isArray(payload?.embeds)
    ? payload.embeds.map(sanitizeEmbed).filter(Boolean).slice(0, MAX_EMBEDS)
    : [];

  if (embeds.length === 0) {
    return json(res, 400, { success: false, error: "At least one embed is required" });
  }

  try {
    const discordResponse = await fetch(webhookUrl, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ embeds }),
    });

    if (!discordResponse.ok) {
      return json(res, 502, { success: false, error: "Log destination rejected the request" });
    }

    res.status(204).setHeader("Cache-Control", "no-store");
    return res.end();
  } catch {
    return json(res, 502, { success: false, error: "Log destination unavailable" });
  }
}
