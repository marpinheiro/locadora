import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

import './erro.css';

function Erro() {
  return (
    <motion.div
      className="not-found-container"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.8 }}
      transition={{ duration: 0.5 }}
    >
      <h1 className="not-found-title">404</h1>
      <p className="not-found-message">Pagina não encontrada.</p>
      <motion.div
        className="not-found-link-container"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        <Link to="/" className="back-home-link">
          Voltar pagina inicial
        </Link>
      </motion.div>
    </motion.div>
  );
}

export default Erro;
