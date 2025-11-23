import { NavLink } from "react-router-dom";

export default function Footer({ isHome }) {
  return (
    <footer className="w-full mt-20 bg-white">

      <div className="grid md:grid-cols-[2fr_1fr]">

        <div className="bg-blue-800 text-white p-10 ">
          <h3 className="text-2xl font-semibold mb-3 ml-30">
            Ready to bring your retail vision to life?
          </h3>
          <p className="text-gray-200 ml-30">
            Join us in creating vibrant, customer-focused spaces that deliver real results.
          </p>
        </div>

        <div className="bg-orange-500 text-white p-10">
          <h3 className="text-2xl font-semibold mb-4">Call Us!</h3>

          <div className="space-y-3">
            <p className="flex items-center gap-3">
              <span className="text-xl">📞</span> +6293804938209
            </p>
            <p className="flex items-center gap-3">
              <span className="text-xl">📧</span> hello@lamfata.co.id
            </p>
          </div>
        </div>
      </div>

      <div className="w-full px-10 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-start">

          <div>
            <h2 className="text-3xl font-bold leading-snug">
              Transforming <br />
              <span className="text-blue-700">Challenges</span> <br />
              into <br />
              <span className="text-orange-500">Opportunity</span>
            </h2>
          </div>

          <div className="text-gray-700 text-sm leading-relaxed">
            <img
              src="LRP-Logo.png"
              alt="Logo"
              className="h-16 object-contain"
            />
            PT. Lamfata Retailindo Perkasa is a leading retail management company in Palangkaraya,
            managing major shopping centers and supermarkets while delivering quality service and
            innovative customer experiences.

            <div className="flex gap-6 mt-5 font-medium">

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? isHome
                        ? "bg-white/20 text-blue-700 font-semibold"
                        : "bg-blue-100 text-blue-700 font-semibold"
                      : isHome
                      ? "text-blue-700 hover:bg-white/10"
                      : "text-blue-700 hover:bg-blue-50"
                  }`
                }
              >
                About Us
              </NavLink>

              <NavLink
                to="/product"
                className={({ isActive }) =>
                  `px-4 py-2 rounded-full transition-all duration-300 ${
                    isActive
                      ? isHome
                        ? "bg-white/20 text-blue-700 font-semibold"
                        : "bg-blue-100 text-blue-700 font-semibold"
                      : isHome
                      ? "text-blue-700 hover:bg-white/10"
                      : "text-blue-700 hover:bg-blue-50"
                  }`
                }
              >
                Product
              </NavLink>

            </div>
          </div>
        </div>

        {/* DIVIDER */}
        <div className="w-full border-t mt-10"></div>

        {/* COPYRIGHT */}
        <p className="text-center text-sm text-gray-500 mt-6">
          © 2025 Lamfata Retailindo Perkasa. All Right Reserved
        </p>
      </div>

    </footer>
  );
}
