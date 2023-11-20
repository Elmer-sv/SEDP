import React from "react";

function Ticket() {
  return (
    <>
      <div className="flex flex-col bg-white h-full w-full rounded-xl border border-blue-900 shadow-md shadow-black/60">
        <div className="text-end text-[0.6em]">
          <p className="pr-[1em] pt-[0.5em]">Localidad</p>
        </div>
        <div className="flex">

        <div className="flex h-full w-[100%] p-[1em]">
              <img src="/src/assets/img/ticketImg.webp" alt="" />
            </div>

          <div className="flex flex-row items-center">

            <div className="flex-1 flex-col pr-[1.5em] h-auto">
              <h1 className="text-[0.8em] pb-[0.5em] xl:text-[1.5em]">Bad Bunny</h1>
              <p className="text-[0.5em] xl:text-[0.7em] text-justify">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam,
                aliquid quisquam quia officia commodi voluptatum debitis laborum
                accusamus eum quo. Enim mollitia quia nisi dicta!
              </p>

              <div className="flex flex-row justify-between items-center py-[1em]">
          <div className="flex h-6 w-16 items-center">
            <img src="/src/assets/img/fedecredito.png" alt="" />
          </div>
          <button className="w-20 h-6/ text-[1em] bg-[#264E52] text-white">Canjear</button>
        </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Ticket;
