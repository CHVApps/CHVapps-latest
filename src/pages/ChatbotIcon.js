import React, { useState } from 'react';
import { FaRobot } from 'react-icons/fa';
import './ChatbotIcon.css';

const staticAnswers = {
  'hi': 'Hello! How can I assist you today?',
  'hello': 'Hi there! How may I help you?',
  'hey': 'Hey! What can I do for you today?',
  'good morning': 'Good morning! Hope you’re having a great day.',
  'good evening': 'Good evening! How can I help you today?',
  'how are you': 'I’m doing great, thanks for asking! How about you?',
  'who are you': 'I’m Hapie AI, your virtual assistant here to help you with CHVApps services.',
  'what can you do': 'I can guide you through our services, courses, contact info, and projects!',
  'how can you help me': 'I can answer questions about our offerings or help you get in touch with the team.',
  'services': 'We offer web development, digital marketing, cloud support, mobile app development, and clean code practices.',
  'contact': 'You can reach us via the contact page for any service inquiries or partnerships.',
  'about': 'CHVApps provides perfect IT solutions for startups and businesses with a skilled and experienced team.',
  'projects': 'Some of our recent projects include KidZee Pre-school, Aaiswarya Lakshmi Boutique, and Living Lines e-commerce site.',
  'security': 'We ensure your web and data security with encryption and secure authentication practices.',
  'team': 'Our team is made of experienced developers focused on delivering satisfaction through communication and precision.',
  'learning': 'We offer scalable and innovative digital solutions with emphasis on clean code and object-oriented design.',
  'internship': 'Yes! We offer internships in Web, Android, AI/ML, and Digital Marketing.',
  'apply internship': 'Go to the Internship section and fill out the application form.',
  'certificate': 'Yes, we provide completion certificates for all our internships.',
  'courses': 'Android, Web Dev, Digital Marketing, UI/UX, AI/ML, and more.',
  'duration': 'Internships range from 4 to 8 weeks based on the domain.',
  'eligibility': 'Anyone interested in tech and learning is welcome!',
  'beginner': 'Yes! We have beginner-friendly courses for all.',
  'assessment': 'Some internships may include mini assessments.',
  'real projects': 'Yes, we assign real-world projects to all interns.',
  'web development': 'We build responsive and dynamic websites for businesses and startups.',
  'mobile apps': 'Yes, we develop Android mobile apps with modern tech.',
  'digital marketing': 'We offer SEO, Google Ads, Social Media Marketing and more.',
  'ecommerce': 'Yes, we specialize in building secure and scalable e-commerce sites.',
  'uiux': 'We create stunning UI and intuitive UX designs.',
  'seo': 'We help your business rank higher on search engines with best SEO practices.',
  'hosting': 'Yes, we assist with hosting and deployment too.',
  'tools': 'We use React, Node.js, Firebase, Figma, Git, and more.',
  'location': 'We are based in India and support clients worldwide.',
  'support': 'We offer 24/7 technical and customer support for our clients.',
  'contact page': 'You can find it in the main menu. Click Contact to reach us.',
  'enroll': 'Click the Enroll Now button on the Courses or Internship page.',
  'call': 'Leave your number in the contact form, and we’ll call you!',
  'team size': 'We are a small team of passionate professionals.',
  'collaboration': 'Yes, we collaborate remotely with tools like Zoom, Slack, and Figma.',
  'technologies': 'We work with HTML, CSS, JavaScript, React, Firebase, MongoDB, and more.',
  'git': 'Yes, we manage all code versions with Git and GitHub.',
  'cloud': 'We deploy on AWS, Firebase, and custom hosting solutions.',
  'firestore': 'Yes, we use Firestore and Realtime Database for scalable apps.',
  'database': 'We use MongoDB, MySQL, Firebase depending on project needs.',
  'payment': 'We integrate Razorpay, Stripe, and other secure payment gateways.',
  'ui sample': 'Please check our Gallery section for live screenshots and layouts.',
  'preschool project': 'KidZee Babametta was a clean, responsive site for a local preschool.',
  'boutique project': 'Aaiswarya Lakshmi Boutique was a women’s clothing store project.',
  'ecommerce project': 'Living Lines is a live shopping site with cart and checkout.',
  'how to start': 'You can start by contacting us with your idea or enrolling in a program.',
  'bug fixing': 'Yes, we help identify and fix bugs in existing websites.',
  'redesign': 'Yes, we modernize and revamp older websites.',
  'free consultation': 'Yes, contact us for a free project consultation!',
  'browser support': 'Our websites support Chrome, Firefox, Safari, and mobile browsers.',
  'custom domain': 'We assist in setting up custom domains for your business.',
  'login system': 'Yes, we implement secure login systems with email or OTP.',
  'loading speed': 'We optimize sites for speed and SEO performance.',
  'internship fee': 'Some internships are free, others may have a nominal fee.',
  'tools used': 'We use Figma for UI, React for frontend, and Firebase/Mongo for backend.',
  'deployment': 'We help deploy your website on cloud or VPS.',
  'source code': 'Yes, you’ll get the full source code at the end of the project.',
  'blog': 'We’ll soon be launching our blog for technical insights.',
  'testimonials': 'Clients love our commitment to quality and timely delivery.',
  'chatbot': 'Yes, I’m your friendly AI bot powered by CHVApps.',
  'ai features': 'We use AI to support auto-response and smart assistance.',
  'schedule demo': 'Drop us a message and we’ll schedule a live demo session.',
  'get started': 'Let’s get started! Head over to our Services or Contact page.',
  'hapie': 'Hapie is our AI-powered chatbot here to help!',
  'working hours': 'We work Monday to Saturday, 10 AM to 7 PM IST.',
  'timezone': 'Our base timezone is IST (Indian Standard Time).',
  'refunds': 'We follow a transparent refund policy based on scope and timeline.',
  'data privacy': 'Your data is encrypted and protected as per our policy.',
  'terms': 'Please review our Terms & Conditions page for legal info.',
  'thank you': 'You’re welcome! Happy to help 😊',
  'bye': 'Goodbye! Have a great day!',
  'see you': 'See you soon! We’ll be here when you need us.',
  'joke': 'Why do developers hate nature? Too many bugs! 😄',
  'funny': 'Debugging is like being the detective in a crime movie where you are also the murderer.',
  'you there': 'Always! Just type your question.',
  'you sure': 'Absolutely. 100% sure.',
  'you real': 'I’m real enough to help you with real stuff 😉',
  'is this free': 'Many resources and consultations are free. Some services are paid.',
  'partnership': 'Yes, we welcome collaborations and partnerships!',
  'freelance': 'We offer freelance-style project execution too.',
  'payment options': 'We accept UPI, cards, PayPal, and bank transfers.',
  'international clients': 'Yes, we work with clients globally.',
  'start a project': 'Click Contact and tell us about your idea — we’ll make it real!',
  'ai course': 'Yes! We offer AI and ML course content for learners and interns.',
  'whatsapp': 'You can also reach us via WhatsApp at +91 7075531402.'
};


const ChatbotIcon = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { role: 'ai', content: 'Hi there! Ask me about services, contact, about us, or projects.' }
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);

  const toggleChat = () => setIsOpen(!isOpen);

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = input.toLowerCase();
    const matchedKey = Object.keys(staticAnswers).find(key => userMessage.includes(key));
    const aiReply = matchedKey ? staticAnswers[matchedKey] : "Sorry, I couldn't understand that. Try asking about services, contact, or projects.";

    const newMessages = [...messages, { role: 'user', content: input }, { role: 'ai', content: aiReply }];
    setMessages(newMessages);
    setInput('');
    setLoading(false);
  };

  return (
    <>
      <div className="chatbot-float" onClick={toggleChat}>
        <FaRobot className="chatbot-icon" />
      </div>
      {isOpen && (
        <div className="chatbot-popup">
          <div className="chatbot-header">
            <span>CHVAPPS AI</span>
            <button className="chatbot-close" onClick={toggleChat}>×</button>
          </div>
          <div className="chatbot-body">
            <div className="chatbot-messages">
              {messages.map((msg, i) => (
                <div key={i} className={`chatbot-message ${msg.role}`}>{msg.content}</div>
              ))}
              {loading && <div className="chatbot-message ai">Typing...</div>}
            </div>
            <div className="chatbot-input">
              <input
                type="text"
                value={input}
                placeholder="Ask something..."
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              />
              <button onClick={handleSend}>Send</button>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default ChatbotIcon;
