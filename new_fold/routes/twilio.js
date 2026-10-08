const twilio = require("twilio");

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const from = process.env.TWILIO_PHONE_NUMBER;
const to = process.env.TWILIO_TEST_PHONE_NUMBER;

if (!accountSid || !authToken || !from || !to) {
  throw new Error(
    "TWILIO_ACCOUNT_SID, TWILIO_AUTH_TOKEN, TWILIO_PHONE_NUMBER, and TWILIO_TEST_PHONE_NUMBER must be set",
  );
}

const client = twilio(accountSid, authToken);

async function createMessage() {
  const message = await client.messages.create({
    body: "sms_2fa",
    from,
    to,
  });

  console.log(message.sid);
}

createMessage();
