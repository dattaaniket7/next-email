import { NextRequest, NextResponse } from "next/server"
import Welcome from "../../emails/Welcome"
import { Resend } from "resend"

const resend = new Resend(process.env.EMAIL_KEY)

export async function GET (req: NextRequest) {
    try {
        const data = await resend.sendEmail({
            from: "onboarding@resend.dev",
            to: "datta.aniket7@gmail.com",
            subject: "Thanks for reaching out 👋",
            react: Welcome(),
        })

        return NextResponse.json(data)
    } catch (error) {
        console.error(error)
        return NextResponse.json({ error })
    }
}
