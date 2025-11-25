import { motion } from "framer-motion";

export default function About() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="pt-24"
    >
    <section className="bg-[url('/lamfata-reatilindo-perkasa/bhawin-jagad-GQgnlIrMGII-unsplash.jpg')] bg-cover bg-center bg-fixed
                text-white h-screen flex items-end mt-[-80px]
            "
            style={{ backgroundAttachment: "fixed" }}>
      <div className="px-9 py-10 text-left ml-0 md:ml-30">
        <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.15 }}
        className="text-4xl md:text-5xl font-bold mb-40"
        >
        About Us
        </motion.h1>
      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-14">

        <div className="flex md:items-start items-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Company Overview
          </h2>
        </div>

        <div className="text-gray-700 space-y-5 leading-relaxed">
          <p>
            Founded in 2010, PT. Lamfata Retailindo Perkasa is a dynamic and
            innovative retail management company headquartered in Palangkaraya,
            Indonesia. As the Operating Management of Mega Town Square, the largest
            shopping center in Palangkaraya, the company manages a diverse
            portfolio of prominent tenants, including Hypermart, Matahari,
            Timezone, Fun City, KFC, and many more. Additionally, PT. Lamfata
            Retailindo Perkasa oversees operations for Megatop Supermarkets, with a
            robust presence across Palangkaraya.
          </p>

          <p>
            The company’s vision centers on delivering high-quality, affordable
            products and exceptional customer service, ensuring complete
            satisfaction for the local community. With a keen focus on growth and
            innovation, PT. Lamfata Retailindo Perkasa continuously adapts to meet
            the evolving needs of its customers by expanding outlets and enhancing
            the shopping experience.
          </p>
        </div>

      </div>
    </section>


    <section className="max-w-7xl mx-auto px-6 py-20">
      <div className="grid md:grid-cols-2 gap-14">

        <div className="flex md:items-start items-center">
          <h2 className="text-3xl md:text-4xl font-bold leading-snug">
            Parent Company<br />Background
          </h2>
        </div>

        <div className="text-gray-700 space-y-5 leading-relaxed">
          <p>
            PT. Tunas Artha Pratama has been a trailblazer in the technology and
            solutions industry since its establishment in 1996. With nearly three
            decades of experience, the company has earned a reputation as a reliable
            and innovative partner, delivering comprehensive IT solutions tailored to
            meet the diverse needs of clients across Indonesia.
          </p>

          <p>
            As a full-service provider, PT. Tunas Artha Pratama offers a wide range
            of services and products, including hardware procurement, software
            development, IT maintenance, and the supply of cutting-edge computer
            equipment. The company is committed to providing end-to-end solutions,
            ensuring that clients receive seamless support from initial consultation
            to implementation and ongoing maintenance.
          </p>
        </div>

      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-10 items-center">

        {/* <div className="relative w-full h-[400px] flex items-center justify-center">
          <motion.img
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            src="vision-about.png"
            className="w-[260px] h-[260px] object-contain md:w-[300px] md:h-[300px]"
          />
        </div> */}

        <div className="relative w-full h-[600px] sm:h-[550px] md:h-[500px] flex items-center justify-center">

          {/* IMAGE CENTER */}
          <motion.img
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            src="products-and-service-market.jpeg"
            className="
              absolute
              top-[55%] left-[50%]
              -translate-x-1/2 -translate-y-1/2
              w-36 h-36
              sm:w-44 sm:h-44
              md:w-50 md:h-50
              object-cover rounded-full shadow-lg
            "
          />

          {/* ORBIT CONTAINER */}
          <motion.div
            animate={{ rotate: 360 }}
            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
            className="
              absolute
              top-1/2 left-1/2
              -translate-x-1/2 -translate-y-1/2
              w-[250px] h-[250px]
              sm:w-[300px] sm:h-[300px]
              md:w-[350px] md:h-[350px]
              rounded-full
            "
          >
            {/* ORANGE CIRCLE */}
            <div
              className="
                absolute
                top-0 left-1/2
                -translate-x-1/2
                w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12
                bg-orange-500 rounded-full
              "
            ></div>

            {/* BLUE CIRCLE */}
            <div
              className="
                absolute
                bottom-0 left-1/2
                -translate-x-1/2
                w-10 h-10 sm:w-12 sm:h-12 md:w-12 md:h-12
                bg-blue-800 rounded-full
              "
            ></div>
          </motion.div>

        </div>


        <div className="md:col-span-2 flex flex-col justify-start">
          <h2 className="text-4xl font-bold leading-tight">
            Vision
          </h2>

          <p className="text-gray-600 mt-6 leading-relaxed text-lg">
            To be a catalyst for Indonesia's technological growth by delivering integrated, 
            innovative solutions that connect businesses, institutions, and communities. 
            We envision a future where technology fosters collaboration, drives innovation, 
            and empowers industries to achieve their full potential.
          </p>
        </div>

      </div>
    </section>

    <section className="max-w-7xl mx-auto px-6 py-16">
      <div className="grid md:grid-cols-3 gap-10 items-center">

        <div className="md:col-span-2 flex flex-col justify-start order-2 md:order-1">
          <h2 className="text-4xl font-bold leading-tight">
            Mission
          </h2>

          <ul className="text-gray-600 mt-6 leading-relaxed text-lg space-y-4 list-none">
            <li className="flex items-start gap-3">
              <span className="font-semibold text-black">1.</span>
              <span>
                <p className="font-semibold text-black">
                  Connecting industries Through Integrated Solutions.
                </p>
                <p>
                  To be catalystfor Indonesia's technological growth by delivering integrated, innovative solutions that connect businesses, institutions, and communities. We envision a future where technology fosters collaboration, drives innovation, and empowers industries to achieve their full potential.
                </p>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-semibold text-black">2.</span>
              <span>
                <p className="font-semibold text-black">
                  Driving innovation Across Sectors
                </p>
                <p>
                  Provide cutting-edge solutions in retail, IT infrastructure, software development, and cybersecurity to support the digital transformation of industries across Indonesia.
                </p>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-semibold text-black">3.</span>
              <span>
                <p className="font-semibold text-black">
                  Empowering Business Growth
                </p>
                <p>
                  Equip businesses with the tools and technologies they need to thrive in a digital-first world, offering scalable, flexible solutions that adapt to their evolving needs.
                </p>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-semibold text-black">4.</span>
              <span>
                <p className="font-semibold text-black">
                  Focusing on Customer-Driven Excellence
                </p>
                <p>
                  Deliver tailored solutions that prioritize quality, affordability, and user satisfaction, ensuring that every service adds real value to customers.
                </p>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-semibold text-black">5.</span>
              <span>
                <p className="font-semibold text-black">
                  Building Collaborative Partnerships
                </p>
                <p>
                  Forge strategic alliances with government bodies, financial institutions, and corporate leaders to co-create solutions that address national and regional challenges in technology adoption and digital growth.
                </p>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-semibold text-black">6.</span>
              <span>
                <p className="font-semibold text-black">
                  Enhancing Security and Reliability
                </p>
                <p>
                  Develop secure, resilient IT systems that safeguard critical data and infrastructure, ensuring trust and reliability in every solution delivered.
                </p>
              </span>
            </li>

            <li className="flex items-start gap-3">
              <span className="font-semibold text-black">7.</span>
              <span>
                <p className="font-semibold text-black">
                  Championing Sustainable Digital Solutions
                </p>
                <p>
                  Focus on sustainable, long-term solutions that drive economic growth while promoting responsible technology use and environmental stewardship.
                </p>
              </span>
            </li>
          </ul>
        </div>

        {/* Image */}
        <div className="relative w-full h-[400px] flex items-center justify-center order-1 md:order-2">
          <motion.img
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            src="mission-about.png"
            className="w-[360px] h-[360px] object-contain md:w-[600px] md:h-[600px]"
          />
        </div>

      </div>
    </section>



    </motion.div>
  );
}
