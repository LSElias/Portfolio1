// eslint-disable-next-line no-unused-vars
import React from "react";

const GreenWallet = () => {
  return (
    <div className="m-0 propage gw">
      <div className="container infobox">
        <h1 className="ProjectName"> GreenWallet </h1>
        <div className="row py-3">
          <div className="col-md-6">
            <div className="table-responsive">
              <table className="table tableInfo">
                <tbody>
                  <tr className="">
                    <td scope="row">
                      {" "}
                      <h2>Year</h2>
                    </td>
                    <td>
                      <h4> 2023</h4>
                    </td>
                  </tr>
                  <tr className="">
                    <td scope="row">
                      <h2>Category</h2>
                    </td>
                    <td>
                      <h4>FullStack Development</h4>
                    </td>
                  </tr>
                  <tr className="">
                    <td scope="row">
                      <h2>Made With</h2>
                    </td>
                    <td className="row col-10">
                      <h4 className="col-6">Angular</h4>
                      <h4 className="col-6">Node.JS</h4>
                      <h4 className="col-6">Prisma</h4>
                      <h4 className="col-6">MySQL</h4>
                    </td>
                  </tr>
                  <tr className="">
                    <td scope="row">
                      <h2>TEAM</h2>
                    </td>
                    <td>
                      <h4>Elías Rodríguez</h4>
                      <h4>Tylinn González</h4>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="col-md-6 description">
            <h4>
              {" "}
              A website for a company with the purpose of increasing awareness of
              the benefits that recycling has. Encouraging customers to recycle
              in exchange for e-coins. These coins can be used to purchase
              multiple coupons displayed on the website, ranging from household
              utensils to free meals at affiliated restaurants.{" "}
            </h4>
            <h4>
              This university project was made during 2023, from the end of september to
              the beggining december. It has multiple features, such as login
              authentication, user registration, facturation of the recycling
              exchange and reward coupons, and many others.
            </h4>
          </div>
        </div>
      </div>
      <br />
      <div
        id="carouselId"
        className=" container carousel slide w-100"
        data-bs-ride="carousel"
      >
        <ol id="gw-carousel" className="carousel-indicators">
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="First slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="1"
            aria-label="Second slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="2"
            aria-label="Third slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="3"
            aria-label="Third slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="4"
            aria-label="Third slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="5"
            aria-label="Third slide"
          ></li>
          <li
            data-bs-target="#carouselId"
            data-bs-slide-to="6"
            aria-label="Third slide"
          ></li>
                    <li
            data-bs-target="#carouselId"
            data-bs-slide-to="7"
            aria-label="Third slide"
          ></li>
        </ol>
        <div className="carousel-inner" role="listbox">
          <div className="carousel-item active">
            <img
              src="/greenwallet/1.png"
              className="w-100 d-block"
              alt="First slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/greenwallet/2.png"
              className="w-100 d-block"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/greenwallet/3.png"
              className="w-100 d-block"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/greenwallet/4.png"
              className="w-100 d-block"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/greenwallet/5.png"
              className="w-100 d-block"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/greenwallet/6.png"
              className="w-100 d-block"
              alt="Third slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/greenwallet/8.png"
              className="w-100 d-block"
              alt="Second slide"
            />
          </div>
          <div className="carousel-item">
            <img
              src="/greenwallet/9.png"
              className="w-100 d-block"
              alt="Second slide"
            />
          </div>
        </div>
      </div>
      <br />
    </div>
  );
};

export default GreenWallet;
