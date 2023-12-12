import { NextRequest, NextResponse } from "next/server";
import sg from '@sendgrid/mail';
import { Contact } from "@/interfaces";
sg.setApiKey(process.env.SENDGRID_API_KEY!);

export async function POST(request: NextRequest) {
  const body: Contact = await request.json();

  const msg = {
    to: body.email,
    from: process.env.SENDGRID_SENDER!,
    subject: 'Appreciations',
    text: `Hi ${body.names}, \n Thank you for contacting CYUSA Alain Tresor. \nSoon you will get a reply from him.`,
    html: `<strong>Hi ${body.names}, </strong> <p>Thank you for contacting CYUSA Alain Tresor. <br> Soon you will get a reply from him.</p>`,
  }

  try {
    const res = await sg.send(msg)
    return NextResponse.json({ success: true, message: 'Your Email has been received!' }, { status: res[0].statusCode });
  } catch (error) {
    console.log(error);
    return NextResponse.json({ success: false, message: 'Failed to send your message, try again!', error }, { status: 500 })
  }
}