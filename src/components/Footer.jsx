import React, { useState, useEffect } from 'react';

function Footer() {
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentYear(new Date().getFullYear());
    }, 60000); // Update every minute

    // Clear the interval on component unmount
    return () => clearInterval(interval);
  }, []); // Empty dependency array means this effect runs once after the initial render

  return (
    <p className="dark:text-gray-200 text-gray-700 text-center m-20">
      © {currentYear} All rights reserved by Aspasija.
    </p>
  );
}

export default Footer;
