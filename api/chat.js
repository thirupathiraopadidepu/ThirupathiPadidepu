export const config = {
  runtime: "nodejs",
};

export default async function handler(req, res) {
  try {
    return res.status(200).json({
      ok: true,
      hasKey: Boolean(process.env.GROQ_API_KEY),
      node: process.version,
    });
  } catch (err) {
    return res.status(500).json({
      error: "Debug failed",
      message: err?.message,
    });
  }
}
