import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="bg-white rounded-2xl shadow-lg hover:shadow-2xl hover:-translate-y-2 transition duration-300 overflow-hidden group"
    >
      {/* IMAGE */}
      <div className="w-full h-64 bg-gray-100 flex items-center justify-center overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          className="w-48 group-hover:scale-110 transition duration-300 drop-shadow-xl"
        />
      </div>

      {/* CONTENT */}
      <div className="p-6">
        <h3 className="text-2xl font-bold text-green-800">{product.name}</h3>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed line-clamp-2">
          {product.description}
        </p>

        {/* CATEGORY TAG */}
        <span className="inline-block mt-3 px-3 py-1 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
          {product.category}
        </span>

        {/* VIEW DETAILS BUTTON */}
        <button className="w-full mt-6 py-3 rounded-xl bg-green-700 text-white font-semibold hover:bg-green-800 transition">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
