/** Default inbox for FormSubmit (override with `VITE_CONTACT_EMAIL` in `.env`). */
const DEFAULT_CONTACT_EMAIL = "absamaard@gmail.com"

/**
 * Sends the contact form via [FormSubmit](https://formsubmit.co/) so messages reach
 * the inbox without a custom backend. First use may require confirming the address
 * in an email from FormSubmit.
 *
 * @param {FormData} formData
 * @param {{ interest: string }} extra
 * @returns {Promise<{ ok: boolean, message: string }>}
 */
export async function submitTellzContactForm(formData, { interest }) {
  const to =
    import.meta.env.VITE_CONTACT_EMAIL?.trim() || DEFAULT_CONTACT_EMAIL
  const endpoint = `https://formsubmit.co/ajax/${encodeURIComponent(to)}`

  formData.set("interest", interest)
  formData.append(
    "_subject",
    `Tellz contact — ${interest || "Inquiry"}`,
  )
  formData.append("_captcha", "false")
  formData.append("_template", "table")

  try {
    const res = await fetch(endpoint, {
      method: "POST",
      body: formData,
      headers: { Accept: "application/json" },
    })

    let data = {}
    try {
      data = await res.json()
    } catch {
      // ignore non-JSON bodies
    }

    const successFlag = data.success
    const ok =
      res.ok &&
      (successFlag === true ||
        successFlag === "true" ||
        successFlag === "OK")

    if (ok) {
      return { ok: true, message: "Message sent successfully." }
    }

    const errMsg =
      typeof data.message === "string"
        ? data.message
        : "We could not send your message. Please try again or email us directly."
    return { ok: false, message: errMsg }
  } catch {
    return {
      ok: false,
      message:
        "Network error. Check your connection and try again, or email absamaard@gmail.com directly.",
    }
  }
}
