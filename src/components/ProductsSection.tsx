import productsImage from "../assets/products-showcase.jpg";

const ProductsSection = () => {
  const products = [
    {
      name: "Fun-Up",
      description: "A lively burst of orange brightness, with zesty citrus notes dancing over crisp bubbles — perfect for when you want that spark of sunshine.",
      price: "₹10",
      color: "from-orange-400 to-orange-600"
    },
    {
      name: "Grape-Up", 
      description: "Plump, juicy grapes ripened in the sun, wrapped in fizzy sweetness that makes every sip feel like a treat.",
      price: "₹10",
      color: "from-purple-400 to-purple-600"
    },
    {
      name: "Lemon-Up",
      description: "Sharp, zingy lemon meets just the right amount of sweetness — effervescent, cooling, and absolutely satisfying.",
      price: "₹10", 
      color: "from-yellow-400 to-yellow-600"
    },
    {
      name: "Cool-Up (Cola)",
      description: "A classic cola twist with rich depth, caramel undertones, and fizzy finish — comfort in every bottle.",
      price: "₹10",
      color: "from-amber-600 to-amber-800"
    },
    {
      name: "Chill-Up (Lemon-Lime)",
      description: "Crisp, cool, and clean — a dance of lemon and lime, bubbles that sparkle, and a flavor that cools you instantly.",
      price: "₹10",
      color: "from-lime-400 to-green-500"
    },
    {
      name: "Jaljeera GolIsoda",
      description: "Tang of tamarind, kick of cumin, hint of mint — all wrapped in fizzy fun. A local twist that tingles your taste buds.",
      price: "₹10",
      color: "from-emerald-400 to-teal-600"
    },
    {
      name: "Blueberry Premium",
      description: "Luscious, fruity blueberry sweetness — for those moments when you want something special.",
      price: "₹30",
      color: "from-blue-400 to-blue-600"
    },
    {
      name: "Strawberry Premium", 
      description: "Sweet, succulent strawberry flavor with just the right fizzy finish — premium taste in every sip.",
      price: "₹30",
      color: "from-pink-400 to-red-500"
    },
    {
      name: "Pineapple Premium",
      description: "Tropical pineapple paradise with bubbles that burst with sunshine — escape to the tropics.",
      price: "₹30", 
      color: "from-yellow-300 to-orange-400"
    }
  ];

  return (
    <section className="py-20 gradient-refreshing">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
            Our Refreshing Flavors
          </h2>
          <p className="text-xl text-white/90 max-w-2xl mx-auto">
            Each flavor crafted to refresh, delight, and invigorate you with the perfect fizzy experience.
          </p>
        </div>

        {/* Hero Products Image */}
        <div className="mb-16 flex justify-center">
          <img 
            src={productsImage} 
            alt="Kulir Beverages product range showing various flavors"
            className="max-w-4xl w-full h-auto rounded-3xl shadow-glow hover-lift"
          />
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div 
              key={index}
              className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-card hover-lift transition-smooth"
            >
              <div className={`w-full h-4 bg-gradient-to-r ${product.color} rounded-full mb-4`}></div>
              
              <div className="flex justify-between items-start mb-4">
                <h3 className="text-xl font-bold text-foreground">{product.name}</h3>
                <span className={`px-3 py-1 rounded-full text-sm font-bold ${
                  product.price === '₹30' ? 'bg-primary text-primary-foreground' : 'bg-secondary text-secondary-foreground'
                }`}>
                  {product.price}
                </span>
              </div>
              
              <p className="text-muted-foreground leading-relaxed">
                {product.description}
              </p>
              
              <button className="mt-6 w-full gradient-hero text-white py-3 rounded-xl font-semibold fizz-effect transition-smooth hover:shadow-glow">
                Order Now
              </button>
            </div>
          ))}
        </div>

        {/* Price info */}
        <div className="mt-16 text-center">
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-8 max-w-2xl mx-auto">
            <h3 className="text-2xl font-bold text-white mb-4">Perfect Pricing</h3>
            <p className="text-white/90 text-lg">
              Most drinks are <span className="font-bold">₹10</span> to bring you fast, fizzy refreshment without burning your wallet. 
              Signature and specialty flavors are <span className="font-bold">₹30</span>, delivering premium taste in every sip.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductsSection;