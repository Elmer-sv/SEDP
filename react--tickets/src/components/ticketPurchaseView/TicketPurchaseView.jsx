import React from 'react';



const TicketPurchaseView = () => {
  return (
    <div className="bg-gray-400 min-h-min flex flex-col items-center">
      <div className="w-full">
        <div className="relative">
          <img
            src="https://i0.wp.com/tailschannel.com/wp-content/uploads/2021/11/STEVEAOKIHERO.png?resize=1920%2C1024&ssl=1"
            className="w-full h-96 sm:h-60 md:h-80 object-cover"
          />
          <div className="absolute py-[24px] sm:py-[40px] bottom-0 left-0 right-0 bg-black bg-opacity-50 p-4 text-white">
            <h1 className="text-[50px] px-10 sm:text-5xl  font-bold">Steve Aoki</h1>
            <div className="mt-2">
              <p className="text-[18px] px-10 p-4 sm:text-xl text-white text-opacity-70">Estadio Cuscatlan</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TicketPurchaseView;