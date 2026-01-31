import React, { useMemo, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "./PrivacyPolicy.css";
import {
  FaShieldAlt,
  FaUserLock,
  FaDatabase,
  FaCookieBite,
  FaShareAlt,
  FaClock,
  FaLock,
  FaUserCheck,
  FaChild,
  FaGlobe,
  FaEnvelope,
  FaFileAlt,
  FaChevronDown,
} from "react-icons/fa";

const PrivacyPolicy = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const lastUpdated = useMemo(() => {
    const d = new Date();
    const opts = { year: "numeric", month: "long", day: "numeric" };
    return d.toLocaleDateString(undefined, opts);
  }, []);

  const toc = [
    { id: "overview", label: "Overview" },
    { id: "collect", label: "Information We Collect" },
    { id: "use", label: "How We Use Information" },
    { id: "cookies", label: "Cookies and Tracking" },
    { id: "share", label: "Sharing and Disclosure" },
    { id: "retention", label: "Retention" },
    { id: "security", label: "Security" },
    { id: "rights", label: "Your Rights" },
    { id: "children", label: "Children’s Privacy" },
    { id: "international", label: "International Transfers" },
    { id: "contact", label: "Contact Us" },
  ];

  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  };

  const highlights = [
    {
      icon: <FaUserLock />,
      title: "Respect for your data",
      desc: "We collect only what’s needed to deliver our services and support.",
    },
    {
      icon: <FaDatabase />,
      title: "Clear purpose",
      desc: "Your information is used for communication, delivery, and improvements.",
    },
    {
      icon: <FaLock />,
      title: "Security focused",
      desc: "We apply reasonable safeguards to protect your data from misuse.",
    },
    {
      icon: <FaUserCheck />,
      title: "Control",
      desc: "You can request access, correction, or deletion of your information.",
    },
  ];

  const sections = [
    {
      id: "overview",
      icon: <FaShieldAlt />,
      title: "Overview",
      body: (
        <>
          <p>
            This Privacy Policy explains how CHV Apps collects, uses, shares, and protects your information
            when you visit our website or contact us for services like web development, Android and iOS app
            development, AI and machine learning solutions, UI/UX design, and digital marketing.
          </p>
          <p>
            By using our website or submitting a form, you agree to the practices described here. If you do not
            agree, please stop using the website and do not submit your information.
          </p>
        </>
      ),
    },
    {
      id: "collect",
      icon: <FaDatabase />,
      title: "Information We Collect",
      body: (
        <>
          <div className="pp-list">
            <div className="pp-list-item">
              <div className="pp-badge">Contact form details</div>
              <p>
                When you submit a form (for example, internship applications or inquiries), we may collect your
                name, email, mobile number, selected subject (such as an internship domain), and your message.
              </p>
            </div>
            <div className="pp-list-item">
              <div className="pp-badge">Service inquiries</div>
              <p>
                If you contact us about services, we may store the details you share so we can respond,
                estimate, and deliver the requested work.
              </p>
            </div>
            <div className="pp-list-item">
              <div className="pp-badge">Technical data</div>
              <p>
                Like most sites, we may receive basic technical data such as device type, browser type, pages
                visited, and approximate location based on IP. This helps with security and performance.
              </p>
            </div>
          </div>

          <div className="pp-note">
            <FaFileAlt className="pp-note-icon" />
            <div>
              <div className="pp-note-title">No sensitive data needed</div>
              <div className="pp-note-text">
                Please do not send sensitive personal information through the forms (for example, passwords,
                banking details, or government IDs).
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "use",
      icon: <FaUserCheck />,
      title: "How We Use Information",
      body: (
        <>
          <div className="pp-grid">
            <div className="pp-mini-card">
              <h4>Respond and support</h4>
              <p>To reply to your messages, provide updates, and solve issues quickly.</p>
            </div>
            <div className="pp-mini-card">
              <h4>Deliver services</h4>
              <p>To plan, build, test, and deliver web, mobile, and digital solutions you request.</p>
            </div>
            <div className="pp-mini-card">
              <h4>Improve experience</h4>
              <p>To understand what’s working and make the website more helpful and reliable.</p>
            </div>
            <div className="pp-mini-card">
              <h4>Security and compliance</h4>
              <p>To prevent abuse, protect our systems, and meet legal obligations when needed.</p>
            </div>
          </div>

          <div className="pp-soft">
            <div className="pp-soft-title">Typical examples</div>
            <ul className="pp-bullets">
              <li>Following up on a contact request about web development or app development.</li>
              <li>Processing internship applications and reaching out to shortlisted candidates.</li>
              <li>Fixing bugs, preventing spam submissions, and improving performance.</li>
            </ul>
          </div>
        </>
      ),
    },
    {
      id: "cookies",
      icon: <FaCookieBite />,
      title: "Cookies and Tracking",
      body: (
        <>
          <p>
            Cookies are small files that help a website remember preferences and understand usage. We may use
            cookies and similar technologies to keep the website secure, improve performance, and understand
            how visitors use the site.
          </p>
          <div className="pp-split">
            <div className="pp-split-card">
              <h4>What we may use</h4>
              <ul className="pp-bullets">
                <li>Essential cookies for basic site functionality</li>
                <li>Performance cookies to understand usage patterns</li>
                <li>Security signals to help prevent abuse</li>
              </ul>
            </div>
            <div className="pp-split-card">
              <h4>Your controls</h4>
              <ul className="pp-bullets">
                <li>Disable cookies in your browser settings</li>
                <li>Clear existing cookies anytime</li>
                <li>Use private browsing if you prefer minimal storage</li>
              </ul>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "share",
      icon: <FaShareAlt />,
      title: "Sharing and Disclosure",
      body: (
        <>
          <p>
            We do not sell your personal information. We share information only when it’s needed to run the
            website, deliver services, or comply with law.
          </p>
          <div className="pp-list">
            <div className="pp-list-item">
              <div className="pp-badge">Service providers</div>
              <p>
                We may use trusted providers for hosting, analytics, and form processing. They can access
                information only to perform their tasks for us.
              </p>
            </div>
            <div className="pp-list-item">
              <div className="pp-badge">Legal requirements</div>
              <p>
                We may disclose information if required by law, court orders, or to protect the rights and
                safety of our users and systems.
              </p>
            </div>
            <div className="pp-list-item">
              <div className="pp-badge">Business communication</div>
              <p>
                If you request a proposal or project delivery, we may use your details to coordinate timelines,
                documentation, and support.
              </p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "retention",
      icon: <FaClock />,
      title: "Retention",
      body: (
        <>
          <p>
            We keep personal information only as long as it’s needed for the purposes described in this policy,
            or as required by law.
          </p>
          <div className="pp-timeline">
            <div className="pp-step">
              <div className="pp-step-dot" />
              <div className="pp-step-body">
                <div className="pp-step-title">Inquiries</div>
                <div className="pp-step-text">
                  Stored long enough to respond and close the request, plus a reasonable period for follow-ups.
                </div>
              </div>
            </div>
            <div className="pp-step">
              <div className="pp-step-dot" />
              <div className="pp-step-body">
                <div className="pp-step-title">Internship applications</div>
                <div className="pp-step-text">
                  Stored to review applications and contact candidates. If not selected, we retain it for a limited
                  time for future openings unless you ask us to delete it.
                </div>
              </div>
            </div>
            <div className="pp-step">
              <div className="pp-step-dot" />
              <div className="pp-step-body">
                <div className="pp-step-title">Projects and support</div>
                <div className="pp-step-text">
                  Project communication may be retained for continuity, billing, and support history.
                </div>
              </div>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "security",
      icon: <FaLock />,
      title: "Security",
      body: (
        <>
          <p>
            We take reasonable steps to protect your information from unauthorized access, loss, misuse, or
            alteration. No method of transmission or storage is fully secure, but we work to keep data safe.
          </p>
          <div className="pp-grid">
            <div className="pp-mini-card">
              <h4>Access control</h4>
              <p>We limit access to information to people who need it for work.</p>
            </div>
            <div className="pp-mini-card">
              <h4>Monitoring</h4>
              <p>We watch for suspicious activity and take action to reduce risk.</p>
            </div>
            <div className="pp-mini-card">
              <h4>Safe handling</h4>
              <p>We avoid collecting unnecessary data and encourage safe sharing practices.</p>
            </div>
            <div className="pp-mini-card">
              <h4>Updates</h4>
              <p>We regularly improve code and configurations to reduce vulnerabilities.</p>
            </div>
          </div>
        </>
      ),
    },
    {
      id: "rights",
      icon: <FaUserCheck />,
      title: "Your Rights and Choices",
      body: (
        <>
          <p>
            Depending on your location, you may have certain rights over your personal information. We aim to
            honor these requests fairly and quickly.
          </p>
          <div className="pp-split">
            <div className="pp-split-card">
              <h4>You can request</h4>
              <ul className="pp-bullets">
                <li>Access to the data we hold about you</li>
                <li>Corrections if something is wrong</li>
                <li>Deletion of your data, where applicable</li>
                <li>Withdrawal of consent for optional processing</li>
              </ul>
            </div>
            <div className="pp-split-card">
              <h4>How to request</h4>
              <ul className="pp-bullets">
                <li>Send us an email with your request</li>
                <li>Include the email or number used in your form</li>
                <li>We may verify your request to protect your data</li>
              </ul>
            </div>
          </div>

          <div className="pp-faq">
            <div className="pp-faq-title">Quick FAQs</div>

            {[
              {
                q: "Can I delete my internship application?",
                a: "Yes. Email us from the same address you used, and mention the internship domain you selected. We will remove it unless we need to keep it for legal reasons.",
              },
              {
                q: "Do you send marketing messages?",
                a: "We may contact you about your inquiry or service request. We do not send unwanted spam. If you prefer no promotional updates, tell us and we will respect that.",
              },
              {
                q: "Do you sell my data?",
                a: "No. We do not sell personal information.",
              },
            ].map((item, idx) => (
              <button
                key={idx}
                className={`pp-faq-item ${openFaq === idx ? "open" : ""}`}
                onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                type="button"
              >
                <div className="pp-faq-q">
                  <span>{item.q}</span>
                  <FaChevronDown className="pp-faq-chevron" />
                </div>
                <div className="pp-faq-a">{item.a}</div>
              </button>
            ))}
          </div>
        </>
      ),
    },
    {
      id: "children",
      icon: <FaChild />,
      title: "Children’s Privacy",
      body: (
        <>
          <p>
            Our services and internships are not intended for children under 13. We do not knowingly collect
            personal information from children under 13. If you believe a child has submitted data to us, contact
            us and we will take steps to delete it.
          </p>
        </>
      ),
    },
    {
      id: "international",
      icon: <FaGlobe />,
      title: "International Transfers",
      body: (
        <>
          <p>
            If you access our website from outside our operating region, your information may be processed in
            countries where our hosting or service providers operate. We take reasonable steps to ensure your
            data is handled with appropriate safeguards.
          </p>
        </>
      ),
    },
    {
      id: "contact",
      icon: <FaEnvelope />,
      title: "Contact Us",
      body: (
        <>
          <p>
            If you have questions about this Privacy Policy or want to make a request about your data, contact us
            using the email address below. Please include the details of your request and the contact information
            you used on the form.
          </p>

          <div className="pp-contact">
            <div className="pp-contact-card">
              <div className="pp-contact-icon">
                <FaEnvelope />
              </div>
              <div className="pp-contact-body">
                <div className="pp-contact-title">Email</div>
                <div className="pp-contact-value">chvapps@gmail.com</div>
              </div>
            </div>
            <div className="pp-contact-card">
              <div className="pp-contact-icon">
                <FaShieldAlt />
              </div>
              <div className="pp-contact-body">
                <div className="pp-contact-title">Response time</div>
                <div className="pp-contact-value">We usually reply within 24 to 48 hours.</div>
              </div>
            </div>
          </div>
        </>
      ),
    },
  ];

  return (
    <div className="pp-page">
      <Navbar />

      <section className="pp-hero">
        <div className="pp-hero-inner">
          <div className="pp-hero-badge">
            <FaShieldAlt />
            <span>Privacy Policy</span>
          </div>

          <h1 className="pp-hero-title">Your privacy matters to us</h1>

          <p className="pp-hero-desc">
            We build digital products with a security-first mindset. This page explains what we collect, why we collect it,
            and how you can control your information.
          </p>

          <div className="pp-hero-meta">
            <div className="pp-meta-pill">
              <span className="pp-meta-label">Last updated</span>
              <span className="pp-meta-value">{lastUpdated}</span>
            </div>
            <div className="pp-meta-pill">
              <span className="pp-meta-label">Applies to</span>
              <span className="pp-meta-value">Website, contact forms, internship forms</span>
            </div>
          </div>

          <div className="pp-hero-highlights">
            {highlights.map((h, i) => (
              <div key={i} className="pp-highlight">
                <div className="pp-highlight-icon">{h.icon}</div>
                <div className="pp-highlight-body">
                  <div className="pp-highlight-title">{h.title}</div>
                  <div className="pp-highlight-desc">{h.desc}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="pp-shell">
        <div className="pp-layout">
          <aside className="pp-toc">
            <div className="pp-toc-title">On this page</div>
            <div className="pp-toc-list">
              {toc.map((t) => (
                <button key={t.id} className="pp-toc-link" onClick={() => scrollTo(t.id)} type="button">
                  {t.label}
                </button>
              ))}
            </div>
            <div className="pp-toc-card">
              <div className="pp-toc-card-title">Quick note</div>
              <div className="pp-toc-card-text">
                For faster help, mention the email or mobile number you used in the form.
              </div>
            </div>
          </aside>

          <main className="pp-content">
            {sections.map((s) => (
              <section key={s.id} id={s.id} className="pp-section">
                <div className="pp-section-head">
                  <div className="pp-section-icon">{s.icon}</div>
                  <div>
                    <h2 className="pp-section-title">{s.title}</h2>
                    <div className="pp-divider" />
                  </div>
                </div>
                <div className="pp-section-body">{s.body}</div>
              </section>
            ))}
          </main>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default PrivacyPolicy;