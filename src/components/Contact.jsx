import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaMapMarkerAlt, FaPaperPlane, FaCheckCircle, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [formState, setFormState] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const contactDetails = [
    {
      name: 'Email',
      value: 'gaurishbangera8970@gmail.com',
      icon: FaEnvelope,
      url: 'mailto:gaurishbangera8970@gmail.com',
      color: 'text-[#00b8d4]'
    },
    {
      name: 'LinkedIn',
      value: 'linkedin.com/in/gaurish-bangera-191a8831b/',
      icon: FaLinkedin,
      url: 'https://linkedin.com/in/gaurish-bangera-191a8831b/',
      color: 'text-[#3b82f6]'
    },
    {
      name: 'GitHub',
      value: 'github.com/gaurish676',
      icon: FaGithub,
      url: 'https://github.com/gaurish676',
      color: 'text-[#00df9a]'
    },
    {
      name: 'Phone',
      value: '+91 72043 48970',
      icon: FaPhone,
      url: 'tel:+917204348970',
      color: 'text-amber-500'
    },
    {
      name: 'Location',
      value: 'Mangalore, Karnataka',
      icon: FaMapMarkerAlt,
      url: null,
      color: 'text-rose-500'
    }
  ];

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormState(prev => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateForm = () => {
    const tempErrors = {};
    if (!formState.name.trim()) tempErrors.name = 'Name is required';
    if (!formState.email.trim()) {
      tempErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(formState.email)) {
      tempErrors.email = 'Invalid email address';
    }
    if (!formState.message.trim()) tempErrors.message = 'Message is required';
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    // Simulate API request delay
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormState({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
      <div className="max-w-6xl mx-auto">
        
        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-4">
            Get In <span className="gradient-text font-extrabold">Touch</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-xl mx-auto font-light">
            Let's discuss opportunities, collaborations, or simply connect.
          </p>
        </motion.div>

        {/* Contact Dashboard Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Info Details Cards (Left) */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-5 space-y-4"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Contact Channels</h3>
            
            {contactDetails.map((contact, index) => {
              const Icon = contact.icon;
              const cardContent = (
                <div className="flex items-center gap-4">
                  <div className={`p-3.5 bg-white/5 rounded-xl text-xl ${contact.color}`}>
                    <Icon />
                  </div>
                  <div>
                    <h4 className="text-sm text-gray-500 font-semibold uppercase tracking-wider">{contact.name}</h4>
                    <p className="text-gray-300 font-medium break-all">{contact.value}</p>
                  </div>
                </div>
              );

              return contact.url ? (
                <motion.a
                  key={contact.name}
                  href={contact.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 4, border: '1px solid rgba(0, 223, 154, 0.2)' }}
                  className="glass-panel p-5 rounded-2xl border border-white/5 block hover:shadow-[0_4px_25px_rgba(0,223,154,0.04)] transition-all duration-300"
                >
                  {cardContent}
                </motion.a>
              ) : (
                <div
                  key={contact.name}
                  className="glass-panel p-5 rounded-2xl border border-white/5"
                >
                  {cardContent}
                </div>
              );
            })}
          </motion.div>

          {/* Form Card (Right) */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-7"
          >
            <div className="glass-panel p-8 rounded-2xl border border-white/5 shadow-2xl relative overflow-hidden">
              <AnimatePresence mode="wait">
                {!isSubmitted ? (
                  <motion.form
                    key="form"
                    onSubmit={handleFormSubmit}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <h3 className="text-2xl font-bold text-white mb-4">Send a Message</h3>
                    
                    {/* Name field */}
                    <div className="space-y-1">
                      <label htmlFor="name" className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                        Your Name
                      </label>
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formState.name}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-[#0a0a0d] border ${
                          errors.name ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#00df9a]/40'
                        } rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00df9a]/10 transition-colors duration-300`}
                        placeholder="John Doe"
                      />
                      {errors.name && <span className="text-xs text-red-500 font-medium">{errors.name}</span>}
                    </div>

                    {/* Email field */}
                    <div className="space-y-1">
                      <label htmlFor="email" className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                        Your Email
                      </label>
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formState.email}
                        onChange={handleInputChange}
                        className={`w-full px-4 py-3 bg-[#0a0a0d] border ${
                          errors.email ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#00df9a]/40'
                        } rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00df9a]/10 transition-colors duration-300`}
                        placeholder="john@example.com"
                      />
                      {errors.email && <span className="text-xs text-red-500 font-medium">{errors.email}</span>}
                    </div>

                    {/* Message field */}
                    <div className="space-y-1">
                      <label htmlFor="message" className="text-xs text-gray-400 font-bold uppercase tracking-wider">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formState.message}
                        onChange={handleInputChange}
                        rows={4}
                        className={`w-full px-4 py-3 bg-[#0a0a0d] border ${
                          errors.message ? 'border-red-500/50 focus:border-red-500' : 'border-white/5 focus:border-[#00df9a]/40'
                        } rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-[#00df9a]/10 transition-colors duration-300 resize-none`}
                        placeholder="Write your message here..."
                      />
                      {errors.message && <span className="text-xs text-red-500 font-medium">{errors.message}</span>}
                    </div>

                    {/* Submit button */}
                    <motion.button
                      type="submit"
                      disabled={isSubmitting}
                      whileHover={{ scale: 1.02 }}
                      whileTap={{ scale: 0.98 }}
                      className="w-full py-3.5 bg-gradient-to-r from-[#00df9a] to-[#00b8d4] text-black font-extrabold rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-all duration-300 hover:shadow-[0_0_20px_rgba(0,223,154,0.3)] disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {isSubmitting ? (
                        <div className="w-5 h-5 border-2 border-black border-t-transparent rounded-full animate-spin" />
                      ) : (
                        <>
                          <FaPaperPlane size={14} />
                          Send Message
                        </>
                      )}
                    </motion.button>
                  </motion.form>
                ) : (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex flex-col items-center justify-center text-center py-12"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: 'spring', stiffness: 200, damping: 10 }}
                      className="text-[#00df9a] text-6xl mb-4"
                    >
                      <FaCheckCircle />
                    </motion.div>
                    <h3 className="text-2xl font-bold text-white mb-2">Message Sent!</h3>
                    <p className="text-gray-400 font-light mb-6">
                      Thank you for reaching out. I'll get back to you as soon as possible.
                    </p>
                    <button
                      onClick={() => setIsSubmitted(false)}
                      className="px-6 py-2.5 bg-white/5 border border-white/5 hover:border-white/10 text-white rounded-xl text-sm font-semibold transition-all duration-300 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </motion.div>
        </div>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, duration: 0.8 }}
          className="text-center mt-20 pt-8 border-t border-white/5"
        >
          <p className="text-gray-500 text-sm">
            © {new Date().getFullYear()} Gaurish Bangera. Built with React & Tailwind CSS.
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default Contact;

