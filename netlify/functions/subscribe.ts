// src/pages/api/subscribe.ts

export const handler = async (event, context) => {
    // Basic API key check
    if (!process.env.BREVO_API_KEY) {
        return {
            statusCode: 500,
            body: JSON.stringify({
                error: 'Server configuration error'
            })
        }
    }

    try {
        const { email } = JSON.parse(event.body || '{}')

        if (!email || !email.includes('@')) {
            return {
                statusCode: 400,
                body: JSON.stringify({ error: 'Invalid email' })
            }
        }

        const response = await fetch('https://api.brevo.com/v3/contacts', {
            method: 'POST',
            headers: {
                'api-key': process.env.BREVO_API_KEY,
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
            return {
                statusCode: 500,
                body: JSON.stringify({ error: error.message })
            }
        }

        return {
            statusCode: 200,
            body: JSON.stringify({ success: true })
        }
    } catch (error) {
        return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Failed to subscribe' })
        }
    }
}
