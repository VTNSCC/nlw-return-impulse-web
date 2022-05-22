import nodemailer from 'nodemailer';
import { MailAdapter, SendMailData } from "../mail-adapter";

const transport = nodemailer.createTransport({
    host: "smtp.mailtrap.io",
    port: 2525,
    auth: {
      user: "30d2695199ca44",
      pass: "f035f46e66d32f"
    }
  });

export class NodemailerMailAdapter implements MailAdapter{
   async sendMail({subject, body}: SendMailData) {
       await transport.sendMail({
           from: 'Equipe Feedget <oi@feedget.com>',
           to: 'Victor Trarbach <victor.vtns@gmail.com>',
           subject,
           html: body,
       });
    }
};