import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="pt-20"
    >
        <section className="bg-[url('/lamfata-reatilindo-perkasa/marcin-jozwiak-oh0DITWoHi4-unsplash.jpg')] bg-cover bg-center text-white h-screen flex items-end mt-[-80px]">
            <div className="px-9 py-10 text-left ml-0 md:ml-30">
                
                <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15 }}
                className="text-4xl md:text-5xl font-bold mb-4"
                >
                Transforming Challenges into Opportunity
                </motion.h1>

                <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.27 }}
                className="text-4xl md:text-5xl font-bold mb-4"
                >
                Every Step of The Way
                </motion.p>
                
            </div>
        </section>


        <section className="bg-gray-100 py-10">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-wrap items-center justify-center gap-8">

                {/* Gambar 1 */}
                <img
                    src="Logo_Bank_Kalteng(2025).png"
                    alt="produk"
                    className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
                />

                {/* Gambar 2 */}
                <img
                    src="Bank_Mandiri_logo_2016.svg.webp"
                    alt="produk"
                    className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
                />

                {/* Gambar 3 */}
                <img
                    src="Logo-BCA-PNG.png"
                    alt="produk"
                    className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
                />

                {/* Gambar 4 */}
                <img
                    src="Logo-lippo.svg.png"
                    alt="produk"
                    className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
                />

                {/* Gambar 5 */}
                <img
                    src="Logo_PLN.png"
                    alt="produk"
                    className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
                />

                {/* Gambar 6 */}
                <img
                    src="McDonald's_1968_logo.png"
                    alt="produk"
                    className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
                />

                {/* Gambar 7 */}
                <img
                    src="pngimg.com - kfc_PNG53.png"
                    alt="produk"
                    className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
                />

                {/* Gambar 8 */}
                <img
                    src="Telkom_Indonesia_2013.svg.png"
                    alt="produk"
                    className="w-30 h-20 object-contain rounded-lg hover:grayscale-0 transition-all duration-300"
                />

                </div>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">

                {/* <div className="relative w-full h-[500px] flex items-center justify-center">

                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="alex-hudson-m3I92SgM3Mk-unsplash.jpg"
                        className="absolute top-5 left-10 w-48 h-48 object-cover rounded-full shadow-lg"
                    />
                    <div className="absolute top-10 left-5 w-10 h-10 bg-blue-700 rounded-full"></div>

                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="heidi-fin-2TLREZi7BUg-unsplash.jpg"
                        className="absolute top-10 right-60 w-26 h-26 object-cover rounded-full shadow-lg"
                    />
                    <div className="absolute top-30 right-50 w-10 h-10 bg-blue-700 rounded-full"></div>

                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="dominik-vanyi-1HEDPbH6HIE-unsplash.jpg"
                        className="absolute top-40 right-50 w-42 h-42 object-cover rounded-full shadow-lg"
                    />

                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="chuttersnap-BNBA1h-NgdY-unsplash.jpg"
                        className="absolute bottom-5 left-8 w-55 h-55 object-cover rounded-full shadow-lg"
                    />
                    <div className="absolute top-48 left-38 w-25 h-25 bg-orange-500 rounded-full"></div>

                    <div className="absolute bottom-10 right-130 w-10 h-10 bg-orange-500 rounded-full"></div>

                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="adi-goldstein-EUsVwEOsblE-unsplash.jpg"
                        className="absolute bottom-45 left-10 w-23 h-23 object-cover rounded-full shadow-lg"
                    />

                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="ian-battaglia-9drS5E_Rguc-unsplash.jpg"
                        className="absolute bottom-25 right-58 w-23 h-23 object-cover rounded-full shadow-lg"
                    />
                    <div className="absolute bottom-10 left-55 w-22 h-22 bg-blue-800 rounded-full"></div>
                </div> */}
                <div className="relative w-full h-[500px] flex items-center justify-center">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="home-totol.png"
                        className="absolute top-10 w-[500px] h-[500px] object-contain "
                    />
                </div>

                <div>
                    <h2 className="text-4xl font-bold leading-tight">
                        Bringing <span className="text-blue-700">Retail</span> to{" "}
                        <span className="text-orange-500">Life</span>
                    </h2>

                    <p className="text-gray-600 mt-6 leading-relaxed">
                        Established in 2010, PT. Lamfata Retailindo Perkasa is a leading
                        retail management company in Palangkaraya, Indonesia, dedicated to
                        creating vibrant shopping destinations and delivering exceptional
                        customer experiences.
                    </p>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        As the Operating Management of Mega Town Square—the city’s premier
                        shopping center—the company brings together top national and
                        international brands to ensure a complete and engaging retail
                        experience for visitors.
                    </p>

                    <p className="text-gray-600 mt-4 leading-relaxed">
                        Through strategic expansion and a strong focus on innovation,
                        service excellence, and community impact, the company continues to shape
                        the future of retail in Palangkaraya.
                    </p>
                </div>
            </div>
        </section>

        <section className="max-w-7xl mx-auto px-6 py-20">
      
            {/* Title */}
            <h2 className="text-4xl font-bold text-left mb-16">
                <span className="text-blue-700">Products</span>{" "}
                <span className="text-orange-500">and Services</span>
            </h2>

            <div className="grid md:grid-cols-2 gap-14">
                
                <div className="text-center flex flex-col items-center">
                    <div className="relative w-full h-[600px] flex justify-center">

                        {/* <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="/mnt/data/bc85470a-2a00-487d-8f77-f589a5f94ca2.png"
                        className="absolute top-0 w-[260px] h-[260px] rounded-full object-cover shadow-lg"
                        />

                        <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="/img/retail-2.jpg"
                        className="absolute bottom-2 left-20 w-32 h-32 rounded-full object-cover shadow-lg"
                        />

                        <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="/img/retail-3.jpg"
                        className="absolute top-24 -left-5 w-28 h-28 rounded-full object-cover shadow-lg"
                        />

                        <div className="absolute top-36 right-14 w-8 h-8 bg-blue-700 rounded-full"></div>
                        <div className="absolute bottom-6 left-36 w-6 h-6 bg-orange-500 rounded-full"></div> */}
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            src="products-and-service1.png"
                            className="absolute top-10 w-[500px] h-[500px] object-contain "
                        />
                    </div>

                    <h3 className="text-xl font-bold mt-6">
                        Retail Management & Operations
                    </h3>
                    <p className="text-gray-600 mt-3 max-w-sm text-center">
                        We are leader in retail management, overseeing key shopping
                        destinations in Palangkaraya.
                    </p>
                </div>

                <div className="text-center flex flex-col items-center">

                    <div className="relative w-full h-[600px] flex justify-center">

                        {/* <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="/img/tech-main.jpg"
                        className="absolute top-0 w-[260px] h-[260px] rounded-full object-cover shadow-lg"
                        />

                        <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="/img/tech-2.jpg"
                        className="absolute bottom-2 right-20 w-32 h-32 rounded-full object-cover shadow-lg"
                        />

                        <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="/img/tech-3.jpg"
                        className="absolute top-24 -right-5 w-28 h-28 rounded-full object-cover shadow-lg"
                        />

                        <div className="absolute top-36 left-14 w-8 h-8 bg-blue-700 rounded-full"></div>
                        <div className="absolute bottom-6 right-36 w-6 h-6 bg-orange-500 rounded-full"></div> */}
                        
                        <motion.img
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            src="products-and-service2.png"
                            className="absolute top-10 w-[500px] h-[500px] object-contain "
                        />
                    </div>

                    <h3 className="text-xl font-bold mt-6">
                        Technology Solutions
                    </h3>
                    <p className="text-gray-600 mt-3 max-w-sm text-center">
                        We provide technology solutions including Hardware & Software,
                        IT Maintenance & Support, and Custom Solutions.
                    </p>
                </div>

            </div>
        </section>


        {/* <section className="max-w-7xl mx-auto px-6 py-16">
            <div className="grid md:grid-cols-2 gap-10 items-center">
            <motion.img
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                src="/logo.png"
                className="w-full"
            />
            <div>
                <h2 className="text-3xl font-bold mb-4 text-blue-700">
                Tentang Kami
                </h2>
                <p className="text-gray-600 leading-relaxed">
                PT Lamfata Reatilindo Perkasa adalah perusahaan distributor berbagai
                produk kebutuhan industri dan rumah tangga dengan kualitas terbaik.
                </p>
                <a
                href="/about"
                className="inline-block mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                Selengkapnya
                </a>
            </div>
            </div>
        </section> */}
    </motion.div>
  );
}
