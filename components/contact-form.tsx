"use client"

import { useState, FormEvent } from "react"
import { Send } from "lucide-react"
import { BUSINESS } from "@/constants/business"

interface ContactFormProps {
  t: {
    formName: string
    formPhone: string
    formMessage: string
    formNamePlaceholder: string
    formPhonePlaceholder: string
    formMessagePlaceholder: string
    formSend: string
    formSent: string
    formNote: string
  }
}

export function ContactForm({ t }: ContactFormProps) {
  const [name, setName]       = useState("")
  const [phone, setPhone]     = useState("")
  const [message, setMessage] = useState("")
  const [sent, setSent]       = useState(false)

  function handleSubmit(e: FormEvent) {
    e.preventDefault()
    const text = encodeURIComponent(
      `Hola! Soy ${name}${phone ? `, mi teléfono es ${phone}` : ""}.\n\n${message}`
    )
    window.open(`${BUSINESS.whatsapp}?text=${text}`, "_blank", "noopener,noreferrer")
    setSent(true)
    setTimeout(() => setSent(false), 4000)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-5" noValidate>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <div className="space-y-2">
          <label htmlFor="form-name" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t.formName}
          </label>
          <input
            id="form-name"
            type="text"
            required
            value={name}
            onChange={e => setName(e.target.value)}
            placeholder={t.formNamePlaceholder}
            className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
        <div className="space-y-2">
          <label htmlFor="form-phone" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
            {t.formPhone}
          </label>
          <input
            id="form-phone"
            type="tel"
            value={phone}
            onChange={e => setPhone(e.target.value)}
            placeholder={t.formPhonePlaceholder}
            className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors"
          />
        </div>
      </div>

      <div className="space-y-2">
        <label htmlFor="form-message" className="text-xs font-semibold uppercase tracking-[0.2em] text-muted-foreground">
          {t.formMessage}
        </label>
        <textarea
          id="form-message"
          required
          rows={4}
          value={message}
          onChange={e => setMessage(e.target.value)}
          placeholder={t.formMessagePlaceholder}
          className="w-full bg-background border border-border px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground/50 focus:outline-none focus:border-primary transition-colors resize-none"
        />
      </div>

      <button type="submit" className="btn-disco w-full justify-center" disabled={!name || !message}>
        {sent ? (
          t.formSent
        ) : (
          <>
            <Send className="w-3 h-3" />
            {t.formSend}
          </>
        )}
      </button>

      <p className="text-[10px] text-muted-foreground/60 text-center">
        {t.formNote}
        {/* TODO: conectar a email cuando esté disponible */}
      </p>
    </form>
  )
}
