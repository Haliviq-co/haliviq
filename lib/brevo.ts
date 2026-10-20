/**
 * Brevo CRM sync. Optional: does nothing unless BREVO_API_KEY is set.
 *   BREVO_API_KEY  - Brevo > SMTP & API > API keys (v3)
 *   BREVO_LIST_ID  - numeric id of the contact list to add people to (optional)
 * Only standard attributes are sent (FIRSTNAME) so it works without custom attributes in Brevo.
 * Never throws: a Brevo outage must not break the contact form.
 */
export async function brevoUpsert(opts: { email: string; name?: string; newsletter?: boolean }): Promise<boolean> {
  const key = process.env.BREVO_API_KEY
  if (!key) return false
  const email = opts.email.trim().toLowerCase()
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) return false
  const list = Number(process.env.BREVO_LIST_ID)
  try {
    const r = await fetch('https://api.brevo.com/v3/contacts', {
      method: 'POST',
      headers: { 'api-key': key, 'Content-Type': 'application/json', accept: 'application/json' },
      body: JSON.stringify({
        email,
        attributes: opts.name ? { FIRSTNAME: opts.name.slice(0, 100) } : undefined,
        listIds: Number.isFinite(list) && list > 0 ? [list] : undefined,
        updateEnabled: true,
      }),
    })
    if (!r.ok) console.error('brevo upsert failed', r.status, (await r.text().catch(() => '')).slice(0, 200))
    return r.ok
  } catch (e) {
    console.error('brevo upsert error', e)
    return false
  }
}
