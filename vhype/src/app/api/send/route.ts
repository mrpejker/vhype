import { EmailTemplate } from "templates/email";
import { NextResponse } from "next/server";
import { Resend } from "resend";
import type { CreateEmailOptions } from "resend/build/src/emails/interfaces";

const resend = new Resend(process.env.RESEND_API_KEY); // re_724eaQXf_KT3XJt1rGPE98WoCyowUHtpL

export async function GET() {
  try {
    console.log("Sending email...");
    const data = await resend.emails.send({
      from: "vSelf Team <prize@send.vself.app>",
      to: ["ie@vself.app", "ty@vself.app"],
      subject: "vHype marketing campaign",
      react: EmailTemplate({ firstName: "John" }),
    });
    console.log("Email sent!");
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
