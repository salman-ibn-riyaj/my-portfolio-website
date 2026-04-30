'use client'
import Aos from 'aos';
import React, { useEffect } from 'react';

const AOSInit = () => {
    useEffect(() => {
    Aos.init({
      duration: 2000,      // animation speed (ms)
      easing: "ease-in-ease-out",
      once: true,         // শুধু একবার animate হবে
      offset: 50,        // কতটুকু scroll করলে trigger হবে
    });
  }, []);

  return null;
};

export default AOSInit;