import { Link } from "react-router-dom";
import { motion } from "framer-motion";

export default function NotFound() {
  return (
    <div className="mt-30 flex flex-col items-center justify-center text-center text-gray-200">
      <motion.h1
        className="text-9xl font-extrabold text-gray-200"
        initial={{ opacity: 0, y: -100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
      >
        404
      </motion.h1>
      <motion.p
        className="text-3xl font-arabic mt-4 font-medium"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
      >
        عذرًا! الصفحة التي تبحث عنها غير موجودة.
      </motion.p>
      <Link
        to="/"
        className="w-full sm:w-auto px-8 py-3 cursor-pointer 
            bg-linear-to-tl from-green-800 to-green-500 
            hover:from-green-700 hover:to-green-400 
            text-white font-semibold rounded-md 
            transition-all duration-300 shadow-md hover:shadow-lg mt-10"
      >
        العودة إلى الصفحة الرئيسية
      </Link>
    </div>
  );
}
