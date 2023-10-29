import { EmailTemplate } from '/Users/yakushkina/vhype/vhype/templates/email';
import { NextResponse } from 'next/server';
import { Resend } from 'resend';
import * as React from 'react';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST() {
  try {
    const data = await resend.emails.send({
      from: 'vSelf <send.vself.app>',
      to: ['ty@vself.app'],
      subject: 'vHype marketing campaign',
      react: EmailTemplate({ firstName: 'John' }),
      text: 'This is the plain text version of the email',
    });

    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error });
  }
}
import type { NextApiRequest, NextApiResponse } from 'next';

