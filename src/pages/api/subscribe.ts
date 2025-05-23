// src/pages/api/subscribe.ts
import type { APIRoute } from 'astro'

export const POST: APIRoute = async ({ request }) => {
    // Basic API key check
    if (!import.meta.env.BREVO_API_KEY) {
        return new Response(JSON.stringify({
            error: 'Server configuration error'
        }), { status: 500 })
    }

    try {
        const { email } = await request.json()

        if (!email || !email.includes('@')) {
            return new Response(JSON.stringify({ error: 'Invalid email' }), { status: 400 })
        }

        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'api-key': import.meta.env.BREVO_API_KEY,
                'Content-Type': 'application/json',
                'Accept': 'application/json'
            },
            body: JSON.stringify({
                email,
                listIds: [2],
                updateEnabled: true
            })
        })

        if (!response.ok) {
            const error = await response.json()
            return new Response(JSON.stringify({ error: error.message }), { status: 500 })
        }

        return new Response(JSON.stringify({ success: true }), { status: 200 })
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to subscribe' }), { status: 500 })
    }
}
