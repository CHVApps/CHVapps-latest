import React from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import './WhatsappIcon.css';

const WhatsappIcon = () => {
  const handleClick = () => {
    window.open('https://wa.me/917075531402', '_blank');
  };

  return (
    <div className="whatsapp-float" onClick={handleClick}>
      <FaWhatsapp className="whatsapp-icon" />
    </div>
  );
};

export default WhatsappIcon;
