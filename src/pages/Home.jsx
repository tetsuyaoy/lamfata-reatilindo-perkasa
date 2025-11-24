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
        <section
            className="
                bg-[url('/lamfata-reatilindo-perkasa/marcin-jozwiak-oh0DITWoHi4-unsplash.jpg')] 
                bg-cover bg-center bg-fixed
                text-white h-screen flex items-end mt-[-80px]
            "
            style={{ backgroundAttachment: "fixed" }}
        >
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

                <div className="relative w-full h-[600px] sm:h-[550px] md:h-[500px] flex items-center justify-center">

                    {/* IMAGE 1 */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ y: [0, -15, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        viewport={{ once: true }}
                        src="alex-hudson-m3I92SgM3Mk-unsplash.jpg"
                        className="
                            absolute 
                            top-8 left-6 
                            w-24 h-24 
                            sm:w-32 sm:h-32
                            md:w-48 md:h-48
                            object-cover rounded-full shadow-lg
                        "
                    />

                    {/* BLUE CIRCLE 1 */}
                    <motion.div
                        animate={{ y: [0, -12, 0], rotate: [0, 360] }}
                        transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
                        className="
                            absolute 
                            top-10 left-10 
                            w-6 h-6 
                            sm:w-8 sm:h-8 
                            md:w-10 md:h-10
                            bg-blue-700 rounded-full
                        "
                    />

                    {/* loby kanan atas */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        viewport={{ once: true }}
                        src="heidi-fin-2TLREZi7BUg-unsplash.jpg"
                        className="
                            absolute 
                            top-10 right-50 
                            w-20 h-20
                            sm:w-24 sm:h-24
                            md:w-28 md:h-28
                            object-cover rounded-full shadow-lg
                        "
                    />

                    {/* BLUE CIRCLE 2 */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [-10, 10, -10] }}
                        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                        className="
                            absolute
                            top-36 right-40
                            w-6 h-6
                            sm:w-8 sm:h-8
                            md:w-10 md:h-10
                            bg-blue-700 rounded-full
                        "
                    />

                    {/* truck */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ y: [0, -65, 0], rotate: [0, 2, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.2 }}
                        src="dominik-vanyi-1HEDPbH6HIE-unsplash.jpg"
                        className="
                            absolute 
                            top-40 right-40
                            w-28 h-28 
                            sm:w-32 sm:h-32
                            md:w-40 md:h-40
                            object-cover rounded-full shadow-lg
                        "
                    />

                    {/* gudang */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ y: [0, -25, 0], rotate: [0, -5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.3 }}
                        viewport={{ once: true }}
                        src="chuttersnap-BNBA1h-NgdY-unsplash.jpg"
                        className="
                            absolute 
                            bottom-10 left-10
                            w-36 h-36
                            sm:w-44 sm:h-44
                            md:w-52 md:h-52
                            object-cover rounded-full shadow-lg
                        "
                    />

                    {/* ORANGE CIRCLE 1 */}
                    <motion.div
                        animate={{ y: [0, -18, 0], rotate: [0, -360] }}
                        transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
                        className="
                            absolute 
                            top-[240px] left-20
                            w-14 h-14
                            sm:w-16 sm:h-16
                            md:w-20 md:h-20
                            bg-orange-500 rounded-full
                        "
                    />

                    {/* ORANGE CIRCLE 2 */}
                    <motion.div
                        animate={{ y: [0, -10, 0], rotate: [0, 360] }}
                        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
                        className="
                            absolute 
                            bottom-20 right-42
                            w-6 h-6
                            sm:w-8 sm:h-8
                            md:w-10 md:h-10
                            bg-orange-500 rounded-full
                        "
                    />

                    {/* gambar cip */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ y: [0, -25, 0], rotate: [0, -2, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 0.8 }}
                        viewport={{ once: true }}
                        src="adi-goldstein-EUsVwEOsblE-unsplash.jpg"
                        className="
                            absolute 
                            bottom-60 left-43
                            w-20 h-20
                            sm:w-24 sm:h-24
                            md:w-24 md:h-24
                            object-cover rounded-full shadow-lg
                        "
                    />

                    {/* gambar kanan bawah */}
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        animate={{ y: [0, -65, 0], rotate: [0, 5, 0] }}
                        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut", delay: 2 }}
                        src="ian-battaglia-9drS5E_Rguc-unsplash.jpg"
                        className="
                            absolute 
                            bottom-16 right-50
                            w-20 h-20
                            sm:w-24 sm:h-24
                            md:w-24 md:h-24
                            object-cover rounded-full shadow-lg
                        "
                    />

                    {/* BLUE CIRCLE 3 */}
                    <motion.div
                        animate={{ y: [0, -15, 0], rotate: [10, -10, 10] }}
                        transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
                        className="
                            absolute 
                            bottom-8 left-56
                            w-14 h-14
                            sm:w-16 sm:h-16
                            md:w-20 md:h-20
                            bg-blue-800 rounded-full
                        "
                    />

                </div>


                {/* <div className="relative w-full h-[500px] flex items-center justify-center">
                    <motion.img
                        initial={{ opacity: 0, scale: 0.9 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        src="home-totol.png"
                        className="absolute top-10 w-[500px] h-[500px] object-contain "
                    />
                </div> */}

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
    </motion.div>
  );
}
