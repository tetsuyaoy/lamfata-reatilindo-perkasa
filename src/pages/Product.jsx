import { motion } from "framer-motion";

export default function Product() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.25, ease: "easeOut" }}
      className="pt-24 max-w-7xl mx-auto px-6"
    >
      <h1 className="text-4xl font-bold text-blue-700 mb-10">Produk Kami</h1>

      <div className="grid md:grid-cols-3 gap-8">
        {/* contoh dummy card, tinggal ganti data real */}
        <div className="border rounded-xl shadow p-5 hover:scale-105 transition">
          <img src="/produk1.jpg" className="w-full h-44 object-cover rounded-md mb-3" />
          <h2 className="text-xl font-semibold mb-2">Nama Produk</h2>
          <p className="text-gray-600 mb-4">Deskripsi singkat produk.</p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Detail Produk
          </a>
        </div>

        <div className="border rounded-xl shadow p-5 hover:scale-105 transition">
          <img src="/produk2.jpg" className="w-full h-44 object-cover rounded-md mb-3" />
          <h2 className="text-xl font-semibold mb-2">Nama Produk</h2>
          <p className="text-gray-600 mb-4">Deskripsi singkat produk.</p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Detail Produk
          </a>
        </div>

        <div className="border rounded-xl shadow p-5 hover:scale-105 transition">
          <img src="/produk3.jpg" className="w-full h-44 object-cover rounded-md mb-3" />
          <h2 className="text-xl font-semibold mb-2">Nama Produk</h2>
          <p className="text-gray-600 mb-4">Deskripsi singkat produk.</p>
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            Detail Produk
          </a>
        </div>
      </div>
    </motion.div>
  );
}
