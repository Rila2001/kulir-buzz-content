const TestimonialsSection = () => {
  const testimonials = [
    {
      quote: "Kulir's drinks are a lifesaver in the summer — Fun-Up and Lemon-Up cool me down better than anything else.",
      name: "Rahul",
      location: "Chennai",
      avatar: "👨‍💼"
    },
    {
      quote: "I brought a crate of Grape-Up and Jaljeera for my daughter's birthday party — everyone loved the variety and the fizz!",
      name: "Meena", 
      location: "Mayiladuthurai",
      avatar: "👩‍🦱"
    },
    {
      quote: "That fizzy kick, the perfect flavor balance — this is what I reach for when the sun is blazing.",
      name: "Arun",
      location: "Trichy", 
      avatar: "👨‍🎓"
    },
    {
      quote: "The Jaljeera GolIsoda brings back childhood memories. Authentic taste with modern fizz!",
      name: "Priya",
      location: "Thanjavur",
      avatar: "👩‍💻"
    },
    {
      quote: "Perfect for our office parties. The variety pack keeps everyone happy and refreshed.",
      name: "Vikram",
      location: "Coimbatore",
      avatar: "👨‍💼"
    },
    {
      quote: "My kids love the premium flavors, especially the blueberry. Great quality and taste!",
      name: "Lakshmi",
      location: "Madurai",
      avatar: "👩‍🏫"
    }
  ];

  return (
    <section className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-6">
            What Our Customers Say
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Real people, real refreshment, real smiles. Here's what makes Kulir special across Tamil Nadu.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div 
              key={index}
              className="bg-card rounded-2xl p-8 shadow-card hover-lift transition-smooth"
            >
              {/* Quote */}
              <div className="text-4xl text-primary mb-4">"</div>
              <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                {testimonial.quote}
              </p>
              
              {/* Customer info */}
              <div className="flex items-center">
                <div className="w-12 h-12 gradient-hero rounded-full flex items-center justify-center text-xl mr-4">
                  {testimonial.avatar}
                </div>
                <div>
                  <h4 className="font-bold text-foreground">{testimonial.name}</h4>
                  <p className="text-muted-foreground text-sm">{testimonial.location}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to action */}
        <div className="text-center mt-16">
          <div className="gradient-hero rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Join the Fizzy Fun!</h3>
            <p className="text-white/90 text-lg mb-6">
              Become part of the Kulir family and share your own refreshing moments.
            </p>
            <button className="bg-white text-primary px-8 py-3 rounded-full font-semibold fizz-effect transition-smooth hover:shadow-glow">
              Share Your Story
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;