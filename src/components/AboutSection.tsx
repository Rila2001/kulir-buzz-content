const AboutSection = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl lg:text-5xl font-bold text-foreground mb-8">
            About <span className="gradient-hero bg-clip-text text-transparent">Kulir</span>
          </h2>
          
          <p className="text-xl text-muted-foreground leading-relaxed mb-12">
            At Kulir Beverages, we believe every sip should burst with joy. Born in Mayiladuthurai, 
            Tamil Nadu, our mission is simple: to beat the heat with refreshing, flavor-packed soft 
            drinks and Gol-Isoda that bring together zest, fizz, and smiles. From sun-kissed citrus 
            to sweet grape, spice-tinged jaljeera to creamy fun delights, we pour love into every 
            bottle so you can enjoy pure refreshment — anytime, anywhere.
          </p>

          {/* Brand values */}
          <div className="grid md:grid-cols-3 gap-8 mt-16">
            <div className="p-8 rounded-2xl shadow-card hover-lift">
              <div className="w-16 h-16 gradient-hero rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🧊</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Refreshingly Cool</h3>
              <p className="text-muted-foreground">
                Every bottle delivers that perfect fizzy kick to beat Tamil Nadu's summer heat.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-card hover-lift">
              <div className="w-16 h-16 gradient-secondary rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">💚</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Quality Promise</h3>
              <p className="text-muted-foreground">
                From local ingredients to careful crafting, we deliver authentic taste in every sip.
              </p>
            </div>

            <div className="p-8 rounded-2xl shadow-card hover-lift">
              <div className="w-16 h-16 gradient-accent rounded-full flex items-center justify-center mb-6 mx-auto">
                <span className="text-2xl">🎉</span>
              </div>
              <h3 className="text-xl font-bold mb-4 text-foreground">Pure Joy</h3>
              <p className="text-muted-foreground">
                Made for all ages, bringing families together with flavors that spark smiles.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;