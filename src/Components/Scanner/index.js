
import React, { useState, useRef } from 'react';
import { Container, Card, CardContent, makeStyles, Grid, TextField, Button } from '@material-ui/core';

import QrReader from 'modern-react-qr-reader';
function Scanner() {
  const [scanResultWebCam, setScanResultWebCam] = useState('');

  const handleErrorWebCam = (error) => {
    console.log(error);
  }
  const handleScanWebCam = (result) => {
    if (result) {
      setScanResultWebCam(result);
    }
  }


  return (
    <div class="main-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 align-self-center">
           
              
            <h3>QRCode Scanner</h3>
             
                
                <QrReader
                  delay={300}
                  style={{ width: '50%' }}
                  onError={handleErrorWebCam}
                  onScan={handleScanWebCam}
                />

             



       
          </div>
          <div class="col-lg-5 align-self-center">
            <div class="owl-banner owl-carousel">
              <div class="item">

                <h3>QRCode Content : </h3>
                <h3>{scanResultWebCam}</h3>

              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Scanner;