import React, { useState } from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight, BookOpen, CheckCircle2, ChevronDown, GraduationCap,
  Laptop, MapPin, Menu, MessageCircle, Phone, Send, UserRound,
  Users, X, Sparkles, Download, Clock3
} from "lucide-react";
import "./styles.css";

const courses = [
  { title: "Classes 1 – 5", subtitle: "Strong foundations", icon: "01", text: "Mathematics, Science, English and Telugu with clear concepts and regular practice." },
  { title: "Classes 6 – 10", subtitle: "Build confidence", icon: "02", text: "Mathematics, Physics, Chemistry and English with structured academic support." },
  { title: "Intermediate 1st Year", subtitle: "Start strong", icon: "03", text: "Mathematics, Physics and Chemistry with concept clarity and consistent preparation." },
  { title: "Intermediate 2nd Year", subtitle: "Finish stronger", icon: "04", text: "Mathematics, Physics and Chemistry with focused revision and exam preparation." }
];

const modes = [
  { icon: <MapPin />, title: "Offline Tuition", text: "Learn in a focused, comfortable classroom environment with personal attention." },
  { icon: <Laptop />, title: "Online Tuition", text: "Attend classes from home with convenient online learning and guidance." },
  { icon: <UserRound />, title: "One-to-One Tuition", text: "Personalized sessions designed around the student's pace and learning needs." },
  { icon: <MapPin />, title: "Home Tuition", text: "Get personalized academic support at home with a convenient learning setup." }
];

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const go = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  const submit = (e) => {
  e.preventDefault();

  const form = e.currentTarget;
  const formData = new FormData(form);

  const data = new URLSearchParams();

  data.append("studentName", formData.get("studentName") || "");
  data.append("parentName", formData.get("parentName") || "");
  data.append("classYear", formData.get("classYear") || "");
  data.append("phone", formData.get("phone") || "");
  data.append("subjects", formData.get("subjects") || "");
  data.append("tuitionMode", formData.get("tuitionMode") || "");
  data.append("message", formData.get("message") || "");

  const GOOGLE_SCRIPT_URL =
    "https://script.google.com/macros/s/AKfycbz0pQrlHD2AdLgdvlnYSUmpqPH7PRDjlleTx8XOg0kXZnnzC5T4HNtZateX09vDTAhYtQ/exec";

  const iframe = document.createElement("iframe");
  iframe.name = "google-registration-frame";
  iframe.style.display = "none";
  document.body.appendChild(iframe);

  const hiddenForm = document.createElement("form");
  hiddenForm.method = "POST";
  hiddenForm.action = GOOGLE_SCRIPT_URL;
  hiddenForm.target = "google-registration-frame";
  hiddenForm.style.display = "none";

  data.forEach((value, key) => {
    const input = document.createElement("input");
    input.type = "hidden";
    input.name = key;
    input.value = value;
    hiddenForm.appendChild(input);
  });

  document.body.appendChild(hiddenForm);
  hiddenForm.submit();

  setSubmitted(true);

  setTimeout(() => {
    hiddenForm.remove();
    iframe.remove();
  }, 3000);
};

  return (
    <div className="site">
      <header className="nav">
        <div className="container nav-inner">
          <button className="brand" onClick={() => go("home")} aria-label="Subhashini Tuitions home">
            <span className="brand-mark"><GraduationCap size={24}/></span>
            <span>
              <strong>Subhashini</strong>
              <small>TUITIONS</small>
            </span>
          </button>

          <nav className={menuOpen ? "nav-links open" : "nav-links"}>
            <button onClick={() => go("home")}>Home</button>
            <button onClick={() => go("courses")}>Courses</button>
            <button onClick={() => go("why-us")}>Why Us</button>
            <button onClick={() => go("registration")}>Registration</button>
            <button onClick={() => go("contact")}>Contact</button>
          </nav>

          <button className="nav-cta" onClick={() => go("registration")}>Join Now <ArrowRight size={17}/></button>
          <button className="menu-btn" onClick={() => setMenuOpen(!menuOpen)} aria-label="Toggle menu">
            {menuOpen ? <X/> : <Menu/>}
          </button>
        </div>
      </header>

      <main>
        <section id="home" className="hero">
          <div className="hero-glow glow-one"></div>
          <div className="hero-glow glow-two"></div>
          <div className="container hero-grid">
            <div className="hero-copy">
              <div className="eyebrow"><Sparkles size={16}/> QUALITY EDUCATION • PERSONAL ATTENTION</div>
              <h1>Learn Better.<br/><span>Score Better.</span><br/>Grow Better.</h1>
              <p className="hero-lead">
                Welcome to <b>Subhashini Tuitions</b> — quality education and personal attention for students from school to Intermediate level, with flexible learning options for every student.
              </p>
              <div className="hero-actions">
                <button className="primary-btn" onClick={() => go("registration")}>Register for Tuition <ArrowRight size={18}/></button>
                <button className="secondary-btn" onClick={() => go("courses")}>Explore Courses</button>
              </div>
              <div className="hero-trust">
                <span><CheckCircle2 size={17}/> Classes 1–10</span>
                <span><CheckCircle2 size={17}/> Inter 1st & 2nd Year</span>
                <span><CheckCircle2 size={17}/> Online + Offline</span>
              </div>
            </div>

            <div className="hero-card-wrap">
              <div className="floating-tag tag-top"><GraduationCap size={17}/> Personal Attention</div>
              <div className="hero-card">
                <div className="card-top">
                  <div className="mini-logo"><BookOpen size={25}/></div>
                  <div><span>SUBHASHINI</span><b>ACADEMIC HUB</b></div>
                </div>
                <div className="card-title">Education that<br/><span>builds confidence.</span></div>
                <div className="card-list">
                  <div><span className="num">01</span><span>Concept clarity</span><CheckCircle2 size={18}/></div>
                  <div><span className="num">02</span><span>Regular practice</span><CheckCircle2 size={18}/></div>
                  <div><span className="num">03</span><span>Exam preparation</span><CheckCircle2 size={18}/></div>
                </div>
                <div className="progress-box">
                  <div><span>Student Growth</span><b>Focused</b></div>
                  <div className="progress"><i></i></div>
                </div>
              </div>
              <div className="floating-tag tag-bottom"><Users size={17}/> Small Batches Available</div>
            </div>
          </div>
          <div className="scroll-hint"><span></span> Scroll to explore</div>
        </section>

        <section className="quick-strip">
          <div className="container quick-grid">
            <div><GraduationCap/><span><b>1st – 10th</b><small>School Classes</small></span></div>
            <div><BookOpen/><span><b>Inter 1st & 2nd</b><small>Intermediate</small></span></div>
            <div><Users/><span><b>One-to-One</b><small>Personalized Tuition</small></span></div>
            <div><Clock3/><span><b>Flexible</b><small>Online & Offline</small></span></div>
          </div>
        </section>

        <section id="courses" className="section">
          <div className="container">
            <div className="section-head">
              <div><div className="section-kicker">OUR PROGRAMS</div><h2>Tuition for every <em>learning stage.</em></h2></div>
              <p>From building fundamentals to preparing for important exams, our programs are designed to make learning clear, consistent and confident.</p>
            </div>
            <div className="course-grid">
              {courses.map(c => (
                <article className="course-card" key={c.title}>
                  <div className="course-number">{c.icon}</div>
                  <div className="course-sub">{c.subtitle}</div>
                  <h3>{c.title}</h3>
                  <p>{c.text}</p>
                  <button onClick={() => go("registration")}>Enquire now <ArrowRight size={16}/></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="mode-section">
          <div className="container">
            <div className="center-head"><div className="section-kicker">LEARN YOUR WAY</div><h2>Choose the learning mode<br/><em>that suits you.</em></h2></div>
            <div className="mode-grid">
              {modes.map(m => (
                <article className="mode-card" key={m.title}>
                  <div className="mode-icon">{m.icon}</div>
                  <h3>{m.title}</h3><p>{m.text}</p>
                  <button onClick={() => go("registration")}>Get started <ArrowRight size={16}/></button>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="why-us" className="why-section">
          <div className="container why-grid">
            <div className="why-visual">
              <div className="quote-card">
                <span className="quote-mark">“</span>
                <p>Every student can learn. The right guidance can make the difference.</p>
                <div className="quote-line"></div>
                <b>Subhashini Tuitions</b>
              </div>
              <div className="circle-note"><span>01</span><small>Personal<br/>attention</small></div>
            </div>
            <div className="why-copy">
              <div className="section-kicker">WHY SUBHASHINI?</div>
              <h2>More than tuition.<br/><em>A learning partner.</em></h2>
              <p>Subhashini Tuitions was established with the goal of providing quality education and personal attention to students from school to Intermediate level. We focus on understanding first, followed by practice, revision and exam preparation.</p>
              <div className="benefits">
                <div><CheckCircle2/><span><b>Concept-first teaching</b><small>Make difficult topics simple and understandable.</small></span></div>
                <div><CheckCircle2/><span><b>Regular practice & revision</b><small>Build consistency instead of last-minute preparation.</small></span></div>
                <div><CheckCircle2/><span><b>Personal attention</b><small>Support based on each student's learning pace.</small></span></div>
              </div>
            </div>
          </div>
        </section>

        <section id="registration" className="register-section">
          <div className="container register-grid">
            <div className="register-copy">
              <div className="section-kicker">ADMISSIONS OPEN</div>
              <h2>Ready to start<br/><em>learning better?</em></h2>
              <p>Send your details and we'll get in touch with you about the right course and tuition mode for the student.</p>
              <div className="register-points"><span><CheckCircle2/> Online & Offline</span><span><CheckCircle2/> One-to-One available</span><span><CheckCircle2/> Classes 1–10 & Intermediate</span></div>
            </div>
            <form className="register-form" onSubmit={submit}>
              {submitted ? (
                <div className="success">
                  <CheckCircle2 size={54}/>
                  <h3>Registration request received!</h3>
                  <p>Thank you. Please contact us directly to confirm the next steps.</p>
                  <button type="button" className="primary-btn" onClick={() => setSubmitted(false)}>Submit another request</button>
                </div>
              ) : <>
                <h3>Student Registration</h3>
                <p>Fill in the details below.</p>
                <div className="form-row">
                  <label>Student Name<input name="studentName" required placeholder="Enter student name"/></label>
                  <label>Parent / Guardian<input name="parentName" required placeholder="Enter parent name"/></label>
                </div>
                <div className="form-row">
                  <label>Class / Year
                    <select name="classYear" required defaultValue=""><option value="" disabled>Select class</option><option>1st – 5th Class</option><option>6th – 8th Class</option><option>9th – 10th Class</option><option>Intermediate 1st Year</option><option>Intermediate 2nd Year</option></select>
                  </label>
                  <label>Phone Number<input  name="phone" required type="tel" placeholder="Enter phone number"/></label>
                </div>
                <label>Subjects Required
                  <input name="subjects" required placeholder="Example: Mathematics, Physics"/>
                </label>
                <label>Preferred Tuition Mode
                  <select name="tuitionMode" defaultValue="Offline Tuition"><option>Offline Tuition</option><option>Online Tuition</option><option>One-to-One Tuition</option><option>Home Tuition</option></select>
                </label>
                <label>Message <textarea name="message" rows="3" placeholder="Any questions or requirements?"></textarea></label>
                <button className="primary-btn full" type="submit"><Send size={17}/> Send Registration</button>
              </>}
            </form>
          </div>
        </section>

        <section className="brochure-section">
          <div className="container brochure-card">
            <div className="brochure-icon"><BookOpen/></div>
            <div><div className="section-kicker">COURSE BROCHURE</div><h2>Want to know more?</h2><p>Download our course brochure for a quick overview of classes, learning modes and programs.</p></div>
            <button className="secondary-btn" onClick={() => alert("Brochure PDF can be added here once your course details and contact information are finalized.")}><Download size={18}/> Download Brochure</button>
          </div>
        </section>

        <section id="contact" className="contact-section">
          <div className="container contact-grid">
            <div><div className="section-kicker">GET IN TOUCH</div><h2>Let's talk about<br/><em>your child's learning.</em></h2><p>Have a question about classes, timings or tuition modes? Contact us and we'll be happy to help.</p></div>
            <div className="contact-items">
              <a href="tel:+917075640528"><span><Phone/></span><div><small>CALL US</small><b>+91 70756 40528</b></div></a>
              <a href="https://wa.me/917075640528" target="_blank" rel="noreferrer"><span><MessageCircle/></span><div><small>WHATSAPP</small><b>+91 70756 40528</b></div></a>
              <div><span><MapPin/></span><div><small>LOCATION</small><b>Hyderabad, Telangana</b></div></div>
              <a href="mailto:sujithmanelli5657@gmail.com"><span><Send/></span><div><small>EMAIL</small><b>sujithmanelli5657@gmail.com</b></div></a>
            </div>
          </div>
        </section>
      </main>

      <footer>
        <div className="container footer-inner">
          <div className="brand footer-brand"><span className="brand-mark"><GraduationCap size={22}/></span><span><strong>Subhashini</strong><small>TUITIONS</small></span></div>
          <p>© 2026 Subhashini Tuitions, Hyderabad. All rights reserved.</p>
          <button onClick={() => go("home")}>Back to top ↑</button>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);