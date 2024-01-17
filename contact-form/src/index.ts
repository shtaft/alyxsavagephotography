export default {
  async fetch(request: Request) {
    const { searchParams } = new URL(request.url);
    const name = searchParams.get("name");
    const email = searchParams.get("email");
    const message = searchParams.get("message");
    const business = searchParams.get("business");
    if (!email) {
      return new Response("Email is required", { status: 400 });
    }
    console.log("Sending mail", name, email);
    const emailRequest = new Request(
      "https://api.mailchannels.net/tx/v1/send",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify({
          personalizations: [
            {
              to: [{ email: "taft.simon@gmail.com", name: "Alyx Savage" }],
            },
          ],
          from: {
            email: "no-reply@alyxsavagephotography.com",
            name: "Inquiry",
          },
          subject: "New inquiry from your website",
          content: [
            {
              type: "text/plain",
              value: `
            Hey Alyx!

            You have a new inquiry from your website.
            Name: ${name}
            Email: ${email}
            Business: ${business}

            ${message}

            ___________________________

            Best wishes,

            Your Website.
            Working as hard you do.

            `,
            },
          ],
        }),
      }
    );

    const emailResponse = await fetch(emailRequest);

    if (!emailResponse.ok) {
      console.error("Error sending email");
      const body = await emailResponse.text();
      console.log(JSON.stringify(emailResponse));
      console.log(JSON.stringify(body));
    }
    return new Response(null, {
      status: 302,
      headers: {
        Location: "https://www.alyxsavagephotography.com/thank-you",
      },
    });
  },
};
