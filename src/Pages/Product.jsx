import React from "react";
import "../style/Product.css";

const Product = () => {
  return (
    <>
      <main id="product-main">
        {/* ----------------- product image div------------------------------ */}

        <article id="product-images">
          <div id="product-img-galary">
            <img
              className="img-thumbnail"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/41709041/3788707592.png"
              alt=""
            />
            <img
              className="img-thumbnail"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/41709041/3788707592.png"
              alt=""
            />
            <img
              className="img-thumbnail"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/41709041/3788707592.png"
              alt=""
            />
            <img
              className="img-thumbnail"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/41709041/3788707592.png"
              alt=""
            />
            <img
              className="img-thumbnail"
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/41709041/3788707592.png"
              alt=""
            />
          </div>
          <hr />
          <div id="product-main-img">
            <img 
              src="https://d2j6dbq0eux0bg.cloudfront.net/images/41709041/3788707592.png"
              alt=""
            />
          </div>
        </article>

        {/* ----------------- product detail div------------------------------ */}

        <article id="product-details">
          <h2 id="product-name">RAM3 RAM SITA 10.5X8 5050 HOLES</h2>
          <p className="secondary">
            <strong>ID:</strong> ram3555
          </p>
          <p >
            <strong>category: </strong> polysheet/hindu/ram/
          </p>

          <p style={{ fontWeight: "bold", }}>
            <strong >Price :</strong>
            <strong style={{ color: "var(--color-green)", fontSize: 22, fontWeight: 500 }}> &nbsp;₹ 7050</strong>
          </p>
          <div className="product-detail-select" >
            <strong>select Sheet Size:</strong>

            <div className="product-detail-select-options">
              <img className="product-detail-select-img" src="https://d2j6dbq0eux0bg.cloudfront.net/images/41709041/3788707592.png" alt="" />
              <p className="secondary" > RAM3.1 : 1X5 ft  </p>
            </div>

            <div className="product-detail-select-options">  <img className="product-detail-select-img" src="https://d2j6dbq0eux0bg.cloudfront.net/images/41709041/3788707592.png" alt="" /> <p className="secondary" > RAM3.2 : 10X05 ft  </p> </div>
            <div className="product-detail-select-options">  <img className="product-detail-select-img" src="https://d2j6dbq0eux0bg.cloudfront.net/images/41709041/3788707592.png" alt="" /> <p className="secondary" > RAM3.3 : 12X14 ft </p> </div>

          </div>

          <div className="product-detail-select" >
            <strong>select Holes Size:</strong>

            <div className="product-detail-select-options">            <img className="product-detail-select-img" src="src/assets/close up.png" alt="" />
              <p className="secondary" >  12MM (PIXEL)  </p></div>


            <div className="product-detail-select-options"> <img className="product-detail-select-img" src="src/assets/single color.png" alt="" /> <p className="secondary" >9MM (SINGLE) </p> </div>
            <div className="product-detail-select-options"> <img className="product-detail-select-img" src="src/assets/oval5mm.png" alt="" /> <p className="secondary" >5MM (oval) </p> </div>

          </div>

          <div className="product-detail-select" >
            <strong>select sheet COlOR:</strong>
            <div className="product-detail-select-options"> <div style={{ backgroundColor: "var(--color-primary)", color: "var(--color-secondary)" }} className="product-detail-select-color" >  </div>   <p className="secondary" >  Black  </p> </div>
            <div className="product-detail-select-options">
              <div style={{ backgroundColor: "var(--color-secondary)", color: "var(--color-primary)" }} className="product-detail-select-color" > </div> <p className="secondary" >  white  </p></div>

            <div className="product-detail-select-options">
              <div style={{ backgroundColor: "LemonChiffon", color:"LightYellow"
 }} className="product-detail-select-color" > </div> <p className="secondary" >  Yellow  </p></div>

          </div>

          <div id="product-details-buttons" >
            <label htmlFor="product-quantity"> <strong> Quantity : </strong> </label>
            <input type="number" defaultValue={1} name="quantity" id="product-quantity" />

            <button className="add-to-cart" >ADD TO CART <img className="add-to-cart-icon" src="src/assets/cart.png" alt="add to cart icon" />  </button>


          </div>

          <div id="product-details-buttons" > <strong>   in Stock:</strong>
            <img className="add-to-cart-icon" src="src/assets/in-stock.png" alt="add to cart icon" />
            <button className="add-to-cart" >ADD TO WISHLIST <img className="add-to-cart-icon" src="src/assets/love.png" alt="add to cart icon" />  </button>
          </div>






          <div id="social-share">
            <strong > share with your friends : </strong>
            <img className="social-share-icon" src="src/assets/whatsapp.png" alt="whatsapp" />
            <img className="social-share-icon" src="src/assets/instagram.png" alt="whatsapp" />
            <img className="social-share-icon" src="src/assets/facebook.png" alt="whatsapp" />
            <img className="social-share-icon" src="src/assets/twitter.png" alt="whatsapp" />
            <img className="social-share-icon" src="src/assets/linkedin.png" alt="whatsapp" />
            <img className="social-share-icon" src="src/assets/download.png" alt="whatsapp" />


          </div>
          <strong>Product Description : </strong>
          <p> &#9724; LENGTH: 320.04</p>
          <p>&#9724; WIDTH: 243.84</p>
          <p>&#9724; LENGTH: 320.04</p>
          <p>&#9724; TOTAL HOLES: 5050</p>


        </article>
      </main>
      
    </>
  );
};

export default Product;
