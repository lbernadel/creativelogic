const sgMail = require("@sendgrid/mail");

export default async function(req, res) {
  sgMail.setApiKey(process.env.SENDGRID_API_KEY);

  const { firstName, lastName, email, contactReason, message } = req.body;
  // console.log(req.body)
  const note = {
    personalizations: [
      {
        to: {
          email: "hello@creativelogic.dev",
          name: "Laurie Bernadel"
        },
        subject: "New message via creativelogic.dev!",
        preheader: `Someone sent you a ${contactReason.toLowercase()} note...`,
        dynamic_template_data: {
          name: `${firstName} ${lastName}`,
          reason: contactReason,
          message: message
        }
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
    // custom_args: { topic: contactReason },
    // content: [
    //   {
    //     type: "text/html",
    //     value: message
    //   }
    // ]
    template_id: "d-c6535418cfb34d7798280f1642247430"
  };

  try {
    await sgMail.send(note);
    res.status(202).send("Your note was sent successfully! Thank you!");
  } catch (error) {
    console.log("AN ERROR HAPPENED HERE ------>", error);
    if (error) {
      // console.log(note)
      res.send(
        "Unfortunately, your note didn't go through. Please try again or send it to me directly at"
      );
    }
  }
}
