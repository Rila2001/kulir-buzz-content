const ContactSection = () => {
  return (
    <section className="py-20 gradient-hero">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Get in Touch
            </h2>
            <p className="text-xl text-white/90 max-w-2xl mx-auto">
              Let's make your next event extra fizzy! Whether it's a party, wedding, or just a hot afternoon, 
              Kulir has the flavors to match.
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-2xl font-bold text-white mb-6">Contact Details</h3>
                
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📞</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Phone</h4>
                      <p className="text-white/80">+91 73737 44438</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">✉️</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Email</h4>
                      <p className="text-white/80">info@kulirsoda.com</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">📍</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Address</h4>
                      <p className="text-white/80">No.2 Road, Mayiladuthurai,<br />Tamil Nadu, India</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-4">
                    <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <span className="text-xl">🕒</span>
                    </div>
                    <div>
                      <h4 className="font-semibold text-white">Working Hours</h4>
                      <p className="text-white/80">Monday - Saturday<br />9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Quick Order Info */}
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8">
                <h3 className="text-xl font-bold text-white mb-4">Bulk Orders Made Easy</h3>
                <p className="text-white/80 mb-4">
                  Need a custom quote for bulk orders? Drop us a message — tell us:
                </p>
                <ul className="text-white/80 space-y-2">
                  <li>• What flavors you want</li>
                  <li>• How many bottles</li>
                  <li>• Where to deliver</li>
                </ul>
                <p className="text-white/80 mt-4">
                  We'll respond ASAP with cheerful fizz! 🥤
                </p>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white rounded-3xl p-8 shadow-glow">
              <h3 className="text-2xl font-bold text-foreground mb-6">Send us a Message</h3>
              
              <form className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Name</label>
                  <input 
                    type="text" 
                    className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Phone</label>
                  <input 
                    type="tel" 
                    className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Your phone number"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Email</label>
                  <input 
                    type="email" 
                    className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth"
                    placeholder="Your email address"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Order Type</label>
                  <select className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth">
                    <option>Individual Purchase</option>
                    <option>Bulk Order (Events)</option>
                    <option>Wholesale Inquiry</option>
                    <option>General Question</option>
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">Message</label>
                  <textarea 
                    rows={4}
                    className="w-full px-4 py-3 rounded-xl border border-border focus:ring-2 focus:ring-primary focus:border-transparent transition-smooth resize-none"
                    placeholder="Tell us about your requirements..."
                  ></textarea>
                </div>

                <button 
                  type="submit"
                  className="w-full gradient-hero text-white py-4 rounded-xl font-semibold text-lg fizz-effect transition-smooth hover:shadow-glow"
                >
                  Send Message 💫
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;