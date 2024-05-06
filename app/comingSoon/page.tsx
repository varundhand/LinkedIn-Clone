// pages/comingSoon/index.tsx

import React from 'react';
import Layout from '../layout';
import { motion } from 'framer-motion';

const ComingSoon = () => {
  return (
    <div>
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h1 className="text-4xl font-bold text-center mt-8">Coming Soon</h1>
      </motion.div>
    </div>

  );
};

export default ComingSoon;
