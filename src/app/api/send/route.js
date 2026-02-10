// Importez la classe Response de next/server
import { Response } from "next";
//import { Resend } from "resend";

//const resend = new Resend(process.env.RESEND_API_KEY);
//const fromEmail = process.env.FROM_EMAIL;

export async function POST(req, res) {
  const { email, subject, message } = await req.json();
  console.log(email, subject, message);
  
  try {
   // const data = await resend.emails.send({
//   from: fromEmail,
//   to: ["mouhsine.m@hotmail.fr"],
//   subject: subject || "Nouveau message",
//   react: (
//     <>
//       <h1>{subject}</h1>
//       <p>Merci de me contacter</p>
//       <p>Nouveau message envoyé</p>
//       <p>{message}</p>
//     </>
//   ),
// });

    
    // Utilisez la classe Response pour renvoyer la réponse JSON
    return new Response(JSON.stringify({ success: true }), {
      status: 200,
      headers: { "Content-Type": "application/json" },
    });
  } catch (error) {
    // Renvoyez également une réponse JSON en cas d'erreur
    return new Response(JSON.stringify({ error: error.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}
