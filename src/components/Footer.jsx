import React from "react";

const Footer = () => {
  return (
    <footer className="flex flex-col items-center bg-primary py-4">
      <div className="flex flex-col md:flex-row md:gap-8 mb-4">
        <div class="flex gap-2 mx-auto">
          <p>Challenge by</p>
          <a
            href="https://www.frontendmentor.io?ref=challenge"
            target="_blank"
            className="text-blue-400"
          >
            Frontend Mentor
          </a>
        </div>
        <div class="flex gap-2 mx-auto">
          <p>Coded by</p>
          <a
            href="https://twitter.com/GAMEL06"
            target="_blank"
            className="text-blue-400"
          >
            Gamel Ayodele
          </a>
        </div>
      </div>

      <div class="flex gap-1 m-auto mx-auto">
        <p>Powered by</p>
        <a
          href="https://restcountries.com/"
          target="_blank"
          className="text-blue-400"
        >
          RestCountries
        </a>
      </div>
      <p> </p>
    </footer>
  );
};

export default Footer;
