import { NextApiRequest, NextApiResponse } from 'next'
import { sendEmail } from './sendEmail'

export default async ( req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const {contactReason,
      email,
      firstName,
      lastName,
      message} = req.body;

      await sendEmail({contactReason,
        email,
        firstName,
        lastName,
        message})
      return res.status(200).end();
  }

  return res.status(404).json({
    error: {
      code: "Not Found",
      message: "The requested endpoint was not found or doesn't support this method"
    }
  });
}
