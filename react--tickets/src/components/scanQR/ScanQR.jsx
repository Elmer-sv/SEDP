import React, { useState } from "react";
import Reader from "react-qr-scanner";

function ScannerQR() {



    return(
        <>
        <Reader
        onScan={(result) => {
          if (!!result) {
            console.log(result?.text)
          }
        }}

        onError={(error) => {
            if(!!error){
                console.log(error)
            }
        }}

      />
        </>
    )
}

export default ScannerQR;