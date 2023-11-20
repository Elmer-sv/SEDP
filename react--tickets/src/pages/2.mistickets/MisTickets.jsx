import React, { useState } from "react";
import QRCode from "react-qr-code";
import Ticket from "../../components/ticket/Ticket";
import "../../css/GeneradorQR.css";
import Navbar from "../../components/header/Navbar";

function Tickets() {
  const [isQROpen, setIsQROpen] = useState(false);
  return (
    <>
<Navbar/>

<section className="flex">
<div className={isQROpen ? "showQR" : "hideQR"}>
  <div
    className="absolute top-0 right-0 px-8 py-8"
    onClick={() => setIsQROpen(false)}
  >
    <svg
      className="h-8 w-8 text-gray-600"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="18" y1="6" x2="6" y2="18" />
      <line x1="6" y1="6" x2="18" y2="18" />
    </svg>
  </div>
  <QRCode
    value="Hola Mundo"
    size={256}
    bgColor="#282c34"
    fgColor="#fff"
    level="H"
  />
</div>
</section>  

      <div className="pt-40 lg:pt-12 h-full bg-white">
        <div className="relative xl:container m-auto pb-10 px-6 md:px-12 lg:px-6">
          <div className="grid grid-cols-1 gap-10 sm:grid-cols-2 md:grid-cols-2 xl:grid-cols-2"> 
            <div>
              <button
                className="p-0 rounded-2xl bg-transparent"
                onClick={() => setIsQROpen(!isQROpen)}
              >
                <Ticket />
              </button>
            </div>
            <div>
              <button
                className="p-0 rounded-2xl bg-transparent"
                onClick={() => setIsQROpen(!isQROpen)}
              >
                <Ticket />
              </button>
            </div>
            <div>
              <button
                className="p-0 rounded-2xl bg-transparent"
                onClick={() => setIsQROpen(!isQROpen)}
              >
                <Ticket />
              </button>
            </div>
            <div>
              <button
                className="p-0 rounded-2xl bg-black"
                onClick={() => setIsQROpen(!isQROpen)}
              >
                <Ticket />
              </button>
            </div>
            <div>
              <button
                className="p-0 rounded-2xl bg-transparent"

                onClick={() => setIsQROpen(!isQROpen)}
              >
                <Ticket />
              </button>
            </div>
            <div>
              <button
                className="p-0 rounded-2xl bg-transparent"
                onClick={() => setIsQROpen(!isQROpen)}
              >
                <Ticket />
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Tickets;
