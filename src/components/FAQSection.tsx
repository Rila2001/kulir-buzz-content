import { useState } from "react";

const FAQSection = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "What flavors do you offer?",
      answer: "We offer a wide range, from citrusy classics like Orange, Lemon-Up, Chill-Up, to fruity favorites like Grape-Up, Blueberry, Strawberry, and special twists like Jaljeera and Cool-Up cola. There's something for everyone!"
    },
    {
      question: "Are your drinks carbonated?", 
      answer: "Yes! All our soft drinks and golisodas are lightly carbonated — that fizzy sparkle is part of what makes Kulir special and refreshing."
    },
    {
      question: "Can I place a bulk order for parties or events?",
      answer: "Absolutely! We cater to events, weddings, parties, and retailer bulk orders. Reach out via phone or email, and let us know your flavor mix, quantity, and delivery location so we can give you the best deal."
    },
    {
      question: "Where can I buy Kulir drinks?",
      answer: "Kulir drinks are available at supermarkets, local shops, and convenience stores across Tamil Nadu. For wholesale or bulk purchases, contact us directly."
    },
    {
      question: "Are Kulir drinks suitable for all ages?",
      answer: "Yes — our drinks are made with ingredients that are safe and enjoyable for everyone (kids, adults, and everyone in between). Perfect for family gatherings!"
    },
    {
      question: "What's the difference between ₹10 and ₹30 drinks?",
      answer: "Our ₹10 drinks are our classic, everyday refreshers with amazing taste. The ₹30 premium flavors like Blueberry, Strawberry, and Pineapple offer more complex, luxurious taste profiles for special occasions."
    },
    {
      question: "Do you deliver across Tamil Nadu?",
      answer: "Yes, we deliver across Tamil Nadu for bulk orders. For individual purchases, visit your nearest retailer or contact us for specific delivery arrangements."
    },
    {
      question: "What makes Kulir different from other soft drinks?",
      answer: "We're born in Mayiladuthurai with deep Tamil Nadu roots, offering authentic local flavors like Jaljeera alongside international favorites. Every bottle captures the essence of beating the summer heat with genuine refreshment."
    }
  ];

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-xl text-muted-foreground">
              Got questions? We've got the fizzy answers! Here's everything you need to know about Kulir.
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div 
                key={index}
                className="bg-card rounded-2xl shadow-card overflow-hidden transition-smooth hover:shadow-glow"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full p-6 text-left flex justify-between items-center hover:bg-muted/50 transition-smooth"
                >
                  <h3 className="text-lg font-semibold text-foreground pr-4">
                    {faq.question}
                  </h3>
                  <div className={`transform transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : 'rotate-0'
                  }`}>
                    <svg 
                      className="w-6 h-6 text-primary" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                
                <div className={`transition-all duration-300 overflow-hidden ${
                  openIndex === index ? 'max-h-96 pb-6' : 'max-h-0'
                }`}>
                  <div className="px-6">
                    <p className="text-muted-foreground leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Still have questions CTA */}
          <div className="text-center mt-16">
            <div className="gradient-accent rounded-2xl p-8">
              <h3 className="text-2xl font-bold text-accent-foreground mb-4">
                Still have questions?
              </h3>
              <p className="text-accent-foreground/80 mb-6">
                We're here to help! Reach out to us and we'll get back to you with a smile.
              </p>
              <button className="bg-white text-accent px-8 py-3 rounded-full font-semibold fizz-effect transition-smooth hover:shadow-glow">
                Contact Us
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;