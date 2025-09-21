import heroImage from "../assets/hero-kulir.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden gradient-hero">
      {/* Background bubbles for fizzy effect */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="bubble absolute top-20 left-10 w-4 h-4 bg-white/20 rounded-full"></div>
        <div className="bubble absolute top-32 right-20 w-6 h-6 bg-white/15 rounded-full"></div>
        <div className="bubble absolute bottom-40 left-1/4 w-3 h-3 bg-white/25 rounded-full"></div>
        <div className="bubble absolute bottom-20 right-1/3 w-5 h-5 bg-white/20 rounded-full"></div>
      </div>

      <div className="container mx-auto px-6 py-20 grid lg:grid-cols-2 gap-12 items-center relative z-10">
        {/* Text Content */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl lg:text-7xl font-bold text-white mb-6 leading-tight">
            Fizz up your life.
            <br />
            <span className="text-yellow-200">Cool down your day.</span>
          </h1>
          <p className="text-xl lg:text-2xl text-white/90 mb-8 leading-relaxed">
            Born in Mayiladuthurai, Tamil Nadu, our mission is simple: to beat the heat with refreshing, 
            flavor-packed soft drinks that bring together zest, fizz, and smiles.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
            <button className="gradient-secondary text-white px-8 py-4 rounded-full text-lg font-semibold fizz-effect hover-lift shadow-soft">
              Explore Flavors
            </button>
            <button className="bg-white/20 backdrop-blur-sm border-2 border-white/30 text-white px-8 py-4 rounded-full text-lg font-semibold transition-smooth hover:bg-white/30">
              Bulk Orders
            </button>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative">
          <img 
            src={heroImage} 
            alt="Kulir Beverages - Refreshing soft drinks and golisoda" 
            className="w-full h-auto rounded-3xl shadow-glow transition-smooth hover:scale-105"
          />
          <div className="absolute -top-4 -right-4 gradient-accent text-foreground px-6 py-3 rounded-full font-bold shadow-soft">
            From ₹10 only!
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;