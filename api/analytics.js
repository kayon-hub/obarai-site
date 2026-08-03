export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const { pin } = req.body || {};
  if (!pin || pin !== process.env.ORBIT_ANALYTICS_PIN) {
    return res.status(401).json({ error: 'Invalid PIN' });
  }

  try {
    const response = await fetch(`${process.env.ORBIT_ANALYTICS_GAS_URL}?action=analytics`);
    if (!response.ok) {
      return res.status(502).json({ error: 'GAS 讀取失敗' });
    }
    const data = await response.json();
    return res.status(200).json(data);
  } catch (error) {
    console.error('Analytics proxy error:', error);
    return res.status(500).json({ error: 'Internal server error' });
  }
}
