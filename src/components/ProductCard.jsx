import { motion } from "framer-motion";

export default function ProductCard({ product }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.35 }}
      className="bg-white rounded-lg shadow-md hover:shadow-lg hover:-translate-y-1 transition-transform duration-300 overflow-hidden group"
    >
      {/* IMAGE */}
      <div className="w-full h-48 bg-gray-100 overflow-hidden">
        <img
          src={product.image}
          alt={product.name}
          loading="lazy"
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
        />
      </div>

      {/* CONTENT */}
      <div className="p-4 sm:p-5">
        <h3 className="text-lg font-semibold text-green-800">{product.name}</h3>
        <p className="text-gray-600 mt-2 text-sm leading-relaxed max-h-12 overflow-hidden">
          {product.description}
        </p>

        {/* CATEGORY TAG */}
        <span className="inline-block mt-3 px-2 py-0.5 text-xs font-semibold bg-green-100 text-green-700 rounded-full">
          {product.category}
        </span>

        {/* VIEW DETAILS BUTTON */}
        <button className="w-full mt-4 py-2.5 rounded-md bg-green-700 text-white font-medium hover:bg-green-800 transition">
          View Details
        </button>
      </div>
    </motion.div>
  );
}
