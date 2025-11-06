import React from "react";
import { X, Linkedin, Copy, Sparkles } from "lucide-react";
import Button from "../ui/button";
import { motion } from "framer-motion";

const DailyFlex = () => {
  const handleCopy = () => {
    const text = "🎯 Today I solved Two Sum and Pascal’s Triangle! Improving in arrays & patterns 🚀 #LeetCode #CodingJourney";
    navigator.clipboard.writeText(text);
    alert("Copied to clipboard 🚀");
  };

  const handleShare = (platform) => {
    const text = encodeURIComponent(
      "🎯 Today I solved Two Sum and Pascal’s Triangle! Improving in arrays & patterns 🚀 #LeetCode #CodingJourney"
    );
    const url = "https://leetcode.com"; // optional link to your LeetCode profile

    if (platform === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${text}`, "_blank");
    } else if (platform === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${url}&summary=${text}`,
        "_blank"
      );
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="mt-8 flex justify-center"
    >
      <div className="relative bg-gradient-to-br from-[#1e1f29] to-[#2c2e3e] border border-[var(--border)] shadow-xl shadow-black/30 rounded-2xl p-6 w-[420px] text-center hover:shadow-[0_0_20px_rgba(255,255,255,0.05)] transition-all">
        {/* Decorative sparkle icon */}
        <Sparkles className="absolute top-3 right-3 text-yellow-400 animate-pulse" size={20} />

        <h2 className="text-2xl font-bold mb-3 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
          ✨ Daily Flex
        </h2>

        <p className="text-base text-gray-200 mb-3">
          Today I crushed <b className="text-purple-400">Two Sum</b> and{" "}
          <b className="text-blue-400">Pascal’s Triangle</b> 💪
        </p>

        <p className="text-sm text-gray-400 italic mb-5">
          Slowly mastering <span className="text-teal-400">arrays</span> &{" "}
          <span className="text-indigo-400">patterns</span> 🚀
        </p>

        <div className="flex justify-center gap-3">
          <Button
            name="Copy"
            icon={Copy}
            onClick={handleCopy}
          />
          <Button
            name="Tweet"
            icon={X}
            onClick={() => handleShare("twitter")}
          />
          <Button
            name="LinkedIn"
            icon={Linkedin}
            onClick={() => handleShare("linkedin")}
          />
        </div>

        <p className="text-[11px] text-gray-500 mt-5">
          #100DaysOfCode #DevGrowth #BuildInPublic
        </p>
      </div>
    </motion.div>
  );
};

export default DailyFlex;
