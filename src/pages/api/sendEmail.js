import fetch from "node-fetch";

const SENDGRID_API = "https://api.sendgrid.com/v3/mail/send";
const SENDGRID_API_KEY = process.env.SENDGRID_API_KEY;

const sendEmail = async ({
  contactReason,
  email,
  firstName,
  lastName,
  message
}) => {
  await fetch(SENDGRID_API, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${SENDGRID_API_KEY}`
    },
    body: JSON.stringify({
      personalizations: [
        {
          to: {
            email: "lbernadel@ymail.com"
          },
          subject: `New ${contactReason} from creativelogic.dev!`
        }
      ],
      from: {
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
    })
  });
};

export { sendEmail };
