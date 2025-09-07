import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

export default function Contact() {
  return (
    <>
      <Navbar />
      <section style={{maxWidth:720, margin:"2rem auto", padding:"0 1rem"}}>
        <h1>Contact</h1>
        <p>Besoin d'un développeur ? Envoie-moi un message :</p>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            alert("Merci ! Le formulaire est local — configure un service d'envoi pour le rendre réel.");
          }}
        >
          <div style={{marginBottom:12}}>
            <label>Nom</label><br />
            <input name="name" required style={{width:"100%", padding:8}}/>
          </div>
          <div style={{marginBottom:12}}>
            <label>Email</label><br />
            <input name="email" type="email" required style={{width:"100%", padding:8}}/>
          </div>
          <div style={{marginBottom:12}}>
            <label>Message</label><br />
            <textarea name="message" rows="6" required style={{width:"100%", padding:8}}/>
          </div>
          <button type="submit" style={{padding:"10px 16px", background:"#0070f3", color:"#fff", border:"none", borderRadius:6}}>
            Envoyer
          </button>
        </form>
      </section>
      <Footer />
    </>
  );
}
