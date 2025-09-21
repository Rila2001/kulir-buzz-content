import HeroSection from "../components/HeroSection";
import AboutSection from "../components/AboutSection";
import ProductsSection from "../components/ProductsSection";
import TestimonialsSection from "../components/TestimonialsSection";
import FAQSection from "../components/FAQSection";
import ContactSection from "../components/ContactSection";

const Index = () => {
  return (
    <main className="min-h-screen">
      <HeroSection />
      <AboutSection />
      <ProductsSection />
      <TestimonialsSection />
      <FAQSection />
      <ContactSection />
      
      {/* Footer */}
      <footer className="bg-foreground text-background py-8">
        <div className="container mx-auto px-6 text-center">
          <div className="mb-4">
            <h3 className="text-2xl font-bold gradient-hero bg-clip-text text-transparent">Kulir Beverages</h3>
            <p className="text-background/80 mt-2">Fizz up your life. Cool down your day.</p>
          </div>
          
          <div className="flex flex-col md:flex-row justify-center items-center space-y-2 md:space-y-0 md:space-x-8 text-background/80">
            <p>📞 +91 73737 44438</p>
            <p>✉️ info@kulirsoda.com</p>
            <p>📍 Mayiladuthurai, Tamil Nadu</p>
          </div>
          
          <div className="mt-6 pt-6 border-t border-background/20">
            <p className="text-background/60">© 2024 Kulir Beverages. All rights reserved. Made with ❤️ in Tamil Nadu.</p>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
