"use client";
import { motion } from "framer-motion";
export default function FloatingShapes() {
  return (
    <>
      <motion.div
        className="absolute left-[6%] top-[16%] h-[72px] w-[72px] rounded-[22px] pointer-events-none"
        style={{ background: "rgba(11,60,93,0.10)" }}
        aria-hidden
      />
      <motion.div
        className="absolute right-[10%] top-[14%] h-16 w-16 rounded-full pointer-events-none"
        style={{ background: "rgba(46,204,113,0.14)" }}
        aria-hidden
      />
      <motion.div
        className="absolute left-[15%] bottom-[22%] h-12 w-12 rounded-full pointer-events-none"
        style={{ background: "rgba(243,156,18,0.14)" }}
        aria-hidden
      />
      <motion.div
        className="absolute left-[40%] top-[10%] h-32 w-32 rounded-full blur-2xl pointer-events-none"
        style={{ background: "rgba(11,60,93,0.06)" }}
        aria-hidden
      />
      <motion.div
        animate={{ y: [0, -8, 0], opacity: [0.4, 0.7, 0.4] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
        className="absolute right-[20%] bottom-[28%] h-5 w-5 rounded-full pointer-events-none"
        style={{ background: "rgba(243,156,18,0.30)" }}
        aria-hidden
      />
    </>
  );
}
