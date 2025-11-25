import { motion } from "framer-motion";

export default function Product() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="pt-24"
    >
    <section className="bg-[url('/lamfata-reatilindo-perkasa/carl-raw-s9rsYu-BYNo-unsplash.jpg')] bg-cover bg-center bg-fixed text-white h-screen flex items-end mt-[-80px]"
      style={{ backgroundAttachment: "fixed" }}
    >
      <div className="px-9 py-10 text-left ml-0 md:ml-30">
        <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-4xl md:text-5xl font-bold mb-40"
        >
        Products
        </motion.h1>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-10 items-center">

        {/* <div className="relative w-full h-[300px] flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            src="retail-management-product.png"
            className="w-[200px] h-[200px] object-contain md:w-[400px] md:h-[400px]"
          />
        </div> */}

        <div className="relative w-full h-[600px] sm:h-[550px] md:h-[500px] flex items-center justify-center">

          {/* MARKET */}
          <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -65, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              src="products-and-service-market.jpeg"
              className="
              absolute 
              top-[10%] right-[20%]
              w-28 h-28
              sm:w-40 sm:h-40
              md:w-52 md:h-52
              object-cover rounded-full shadow-lg
              "
          />

          {/* MALL */}
          <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              src="products-and-service-mall.jpeg"
              className="
              absolute 
              bottom-[25%] left-[5%]
              w-16 h-16
              sm:w-24 sm:h-24
              md:w-32 md:h-32
              object-cover rounded-full shadow-lg
              "
          />

          {/* ORANGE CIRCLE */}
          <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, -360] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="
              absolute 
              top-[80%] left-[15%]
              w-10 h-10
              sm:w-14 sm:h-14
              md:w-10 md:h-10
              bg-orange-500 rounded-full
              "
          />

          {/* pasar */}
          <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -35, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              src="products-and-service-pasar.jpeg"
              className="
              absolute 
              bottom-[0%] right-[30%]
              w-16 h-16
              sm:w-24 sm:h-24
              md:w-32 md:h-32
              object-cover rounded-full shadow-lg
              "
          />

          {/* BLUE CIRCLE */}
          <motion.div
              animate={{ y: [0, -15, 0], rotate: [10, -10, 10] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="
              absolute 
              bottom-[30%] right-[25%]
              w-8 h-8
              sm:w-12 sm:h-12
              md:w-12 md:h-12
              bg-blue-800 rounded-full
              "
          />

        </div>

        <div className="md:col-span-2 flex flex-col justify-start">
          <h2 className="text-4xl font-bold leading-tight">
            Retail Management & Operations
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            PT. Lamfata Retailindo Perkasa is a leader in retail management, overseeing key shopping destinations in Palangkaraya. We specialize in managing and optimizing retail spaces, ensuring a seamless shopping experience for customers and maximizing the potential of retail tenants.
          </p>
        </div>

      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-10 items-center">

        {/* Text Section */}
        <div className="md:col-span-2 flex flex-col justify-start">
          <h2 className="text-4xl font-bold leading-tight">
            Technology Solutions
          </h2>
          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            PT. Lamfata Retailindo Perkasa also provides a range of advanced technology solutions.
          </p>

          <ul className="text-gray-600 mt-6 leading-relaxed text-lg space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="font-semibold text-black">1.</span>
              <span>
                <p className="font-semibold text-black">
                  Hardware & Software Solutions
                </p>
                <p>
                  Supplying high-quality IT hardware and customized software to meet business needs.
                </p>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-semibold text-black">2.</span>
              <span>
                <p className="font-semibold text-black">
                  IT Maintenance & Support
                </p>
                <p>
                  Offering proactive maintenance and support to ensure the continuous performance of IT systems.
                </p>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-semibold text-black">3.</span>
              <span>
                <p className="font-semibold text-black">
                  Computer Equipment & Accessories
                </p>
                <p>
                  Providing essential IT products for businesses, including corporate and government clients.
                </p>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-semibold text-black">4.</span>
              <span>
                <p className="font-semibold text-black">
                  Customized Solutions
                </p>
                <p>
                  Creating tailored technology solutions for various sectors, including government, banking, and corporate enterprises.
                </p>
              </span>
            </li>
          </ul>
        </div>

        {/* Image */}
        {/* <div className="relative w-full h-[500px] flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            src="technology-solutions-product.png"
            className="w-[560px] h-[560px] object-contain md:w-[560px] md:h-[560px]"
          />
        </div> */}
        <div className="relative w-full h-[600px] sm:h-[550px] md:h-[500px] flex items-center justify-center">

          {/* MOTHERBOARD */}
          <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -35, 0], rotate: [0, 5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
              src="products-and-service-motherboard.jpeg"
              className="
              absolute 
              bottom-[0%] right-[5%]
              w-36 h-36
              sm:w-44 sm:h-44
              md:w-52 md:h-52
              object-cover rounded-full shadow-lg
              "
          />

          {/* CODE */}
          <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
              src="products-and-service-code.jpeg"
              className="
              absolute 
              bottom-[30%] left-[10%]
              w-16 h-16
              sm:w-24 sm:h-24
              md:w-32 md:h-32
              object-cover rounded-full shadow-lg
              "
          />

          {/* ORANGE CIRCLE */}
          <motion.div
              animate={{ y: [0, -18, 0], rotate: [0, -360] }}
              transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
              className="
              absolute 
              top-[75%] left-[25%]
              w-12 h-12
              sm:w-14 sm:h-14
              md:w-10 md:h-10
              bg-orange-500 rounded-full
              "
          />

          {/* FAN CPU */}
          <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              animate={{ y: [0, -35, 0], rotate: [0, 2, 0] }}
              transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
              src="products-and-service-fan-cpu.jpeg"
              className="
              absolute 
              top-[20%] right-[30%]
              w-16 h-16
              sm:w-24 sm:h-24
              md:w-32 md:h-32
              object-cover rounded-full shadow-lg
              "
          />

          {/* BLUE CIRCLE */}
          <motion.div
              animate={{ y: [0, -15, 0], rotate: [10, -10, 10] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
              className="
              absolute 
              bottom-[45%] right-[18%]
              w-8 h-8
              sm:w-12 sm:h-12
              md:w-12 md:h-12
              bg-blue-800 rounded-full
              "
          />

      </div>

      </div>
    </section>

    <section className="py-10">
      <div className="max-w-7xl mx-auto px-6">
          
          <h2 className="text-4xl font-bold leading-tight">
            Trusted By
          </h2>
        <div className="flex flex-wrap items-center justify-center gap-8">
          <img
              src="Logo_Bank_Kalteng(2025).png"
              alt="produk"
              className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
          />

          <img
              src="Bank_Mandiri_logo_2016.svg.webp"
              alt="produk"
              className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
          />

          <img
              src="Logo-BCA-PNG.png"
              alt="produk"
              className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
          />

          <img
              src="Logo-lippo.svg.png"
              alt="produk"
              className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
          />

          <img
              src="Logo_PLN.png"
              alt="produk"
              className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
          />

          <img
              src="McDonald's_1968_logo.png"
              alt="produk"
              className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
          />

          <img
              src="pngimg.com - kfc_PNG53.png"
              alt="produk"
              className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
          />

          <img
              src="Telkom_Indonesia_2013.svg.png"
              alt="produk"
              className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
          />

        </div>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-20">
    
      <div className="grid md:grid-cols-2 gap-10 items-center">
        <div className="md:col-span-2 flex flex-col justify-start">
          <h2 className="text-4xl font-bold leading-tight">
            Trusted Solution, Proven Results
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            At PT. Lamfata Retailindo Perkasa, we are committed to delivering integrated solutions that empower businesses, enhance customer experiences, and drive operational success. With years of experience across both the retail and technology sectors, our portfolio showcases a diverse range of successful projects that demonstrate our expertise, reliability, and innovation.
          </p>
        </div>
      </div>

      <div className="grid md:grid-cols-3 gap-14">

        <div className="text-center flex flex-col items-center">
          <div className="relative w-full h-[320px] flex justify-center">
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="mega-town-square.jpg"
              className="absolute top-5 w-70 h-70 object-cover rounded-full shadow-lg"
            />
          </div>

          <h3 className="text-xl font-bold mt-6">
            Mega Town Square
          </h3>
          <p className="text-gray-600 mt-3 max-w-sm text-center">
            As the largest shopping center in Palangkaraya, Mega Town Square is a central hub for shopping, dining, and entertainment. We ensure smooth operations for over [X] tenants, providing both a premium experience for shoppers and a profitable environment for businesses.
          </p>
        </div>

        <div className="text-center flex flex-col items-center">

          <div className="relative w-full h-[320px] flex justify-center">
              
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="new-megatop.jpg"
              className="absolute top-5 w-70 h-70 object-cover rounded-full shadow-lg"
            />
          </div>

            <h3 className="text-xl font-bold mt-6">
              New Megatop
            </h3>
          <p className="text-gray-600 max-w-sm text-center">
            (Formerly Megatop Supermarkets)
          </p>
            <p className="text-gray-600 mt-3 max-w-sm text-center">
              Our management of New Megatop has made it a go-to supermarket chain for the Palangkaraya community, offering a wide range of products, from FMCG to food & beverage and lifestyle items.
            </p>
        </div>

        <div className="text-center flex flex-col items-center">

          <div className="relative w-full h-[320px] flex justify-center">
              
            <motion.img
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              src="Mal-Palma-Palangkaraya.jpg"
              className="absolute top-5 w-70 h-70 object-cover rounded-full shadow-lg"
            />
          </div>

          <h3 className="text-xl font-bold mt-6">
            Retail Tenant Management
          </h3>
          <p className="text-gray-600 mt-3 max-w-sm text-center">
            We oversee a variety of retail tenants in sectors such as FMCG, food & beverage, fashion, and lifestyle brands, ensuring that each business thrives in an optimized retail space. Our expertise in tenant relationships, operational efficiency, and customer satisfaction drives success for every partner.
          </p>
        </div>

      </div>
    </section>
    </motion.div>
  );
}
