import React, { useState } from 'react'

import QRCode from 'qrcode'
function Banner() {
  const [text, setText] = useState('')
  const [text1, setText1] = useState('')
  const [text2, setText2] = useState('')

  const [imageUrl, setImageUrl] = useState('')
  const generateQrCode = async () => {
    try {
      const response = await QRCode.toDataURL("ID : " + text + " , First Name: " + text1 + " , Last Name: "+ text2)
      setImageUrl(response);
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  }
  return (
    <div class="main-banner">
      <div class="container">
        <div class="row">
          <div class="col-lg-6 align-self-center">
            <div class="header-text">
              <h6>Fill the Form and generate your Qr Code :</h6>

              <form action="/action_page.php">
                <div class="form-group">
                  <h6 for="email">ID:</h6>
                  <input type="text" class="form-control" onChange={(e) => setText(e.target.value)} />
                </div>
                <div class="form-group">
                  <h6 for="pwd">First Name:</h6>
                  <input type="text" class="form-control"  onChange={(e) => setText1(e.target.value)} />
                </div>
                <div class="form-group">
                  <h6 for="pwd">Last Name:</h6>
                  <input type="text" class="form-control" onChange={(e) => setText2(e.target.value)} />
                </div>
                <div class="buttons">
                  <div class="border-button" onClick={() => generateQrCode()}>
                    <a>Generate Qr Code</a>
                  </div>
                  {imageUrl ? (<div class="main-button">
                    <a href={imageUrl} download >Download</a>
                  </div>

                  ) : null}

                </div>



              </form>



            </div>
          </div>
          <div class="col-lg-5 offset-lg-1">
            <div class="owl-banner owl-carousel">
              <div class="item">

                {imageUrl ? (<a href={imageUrl} download ><img src={imageUrl} alt="img" /></a>) : null}

              </div>
              <div class="item">
                <img src="assets/images/banner-02.png" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Banner;