const sgMail = require('@sendgrid/mail')
// const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)

  const { firstName, lastName, email, contactReason, message } = req.body

  let msg = {
    personalizations: [
      {
        to: {
          email: "hello@creativelogic.dev"
        },
        subject: `New ${contactReason} message from creativelogic.dev!`
      }
    ],
    from: {
      email: email,
      name: `${firstName} ${lastName}`
    },
    reply_to: {
      email: email,
      name: `${firstName} ${lastName}`
    },
    content: [
      {
        type: "text/html",
        value: `A message from ${firstName} ${lastName}: \n
        ${message}`
      }
    ]
  }

  try {
    await sgMail.send(msg)
    res.status(202).send("Your note was sent successfully! Thank you!")
    
  } catch (error) {
    console.log("ERROR -------->", error)
    if (res.status() >= 400) {
      res.send("Sorry, your note didn't go through. Please try again or email me directly")
    }
  }
}
