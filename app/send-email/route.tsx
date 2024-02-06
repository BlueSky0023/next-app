import { NextResponse } from "next/server";
import WelcomeTemplate from "../../emails/WelcomeTemplate";
import { Resend } from "resend";

const resendApiKey = process.env.RESEND_API_KEY;

if (!resendApiKey) {
  throw new Error("Missing RESEND_API_KEY. Please set the environment variable.");
}

const resend = new Resend(resendApiKey);

export async function POST() {
  await resend.emails.send({
    from: '...',
    to: 'programmingwithdennis01@gmail.com',
    subject: '...',
    react: <WelcomeTemplate name="Dennis" />,
  });

  return NextResponse.json({});
}
