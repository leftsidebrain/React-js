import {useState} from "react";
import { Button } from "react-bootstrap";

export default function Home() {
  const 
  return (
    <div className="container">
      <h2>Home</h2>
      <div id="carouselExampleIndicators" className="carousel slide" data-bs-ride="true">
        <div className="carousel-indicators">
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
          <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={require("../img/1.jpg")} className="d-block w-100" alt="..." style={{ height: "300px", width: "auto", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src={require("../img/2.jpg")} className="d-block w-100" alt="..." style={{ height: "300px", width: "auto", objectFit: "cover" }} />
          </div>
          <div className="carousel-item">
            <img src={require("../img/3.jpg")} className="d-block w-100" alt="..." style={{ height: "300px", width: "auto", objectFit: "cover" }} />
          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>

      <p>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem debitis ullam accusamus temporibus incidunt laborum beatae voluptas possimus, eum veritatis tempore sequi sit aliquam minus voluptate quos excepturi voluptatum nulla
        eligendi quae! Explicabo distinctio, iusto, quasi ipsum laboriosam magnam architecto debitis dolorum in voluptatem temporibus veniam vel modi ullam perspiciatis optio. Dolorum nesciunt sit, natus fugit ea nam quod! A odio,
        consequuntur voluptatum maiores cum temporibus blanditiis dolore vel beatae cumque obcaecati quasi distinctio magnam voluptatem mollitia deleniti deserunt quod, sint dolores. Aut suscipit ratione quas alias quo quaerat quod a
        commodi minus, iste voluptate aspernatur repellat sapiente expedita, deleniti autem, aliquid inventore totam eligendi vero? Ullam, minima voluptatum consectetur harum quam amet. Sunt, explicabo. Iure culpa fuga assumenda recusandae
        voluptatum soluta inventore labore autem. Rem, quas animi id ducimus doloribus sapiente temporibus molestias mollitia accusamus natus dolorum tenetur optio facilis qui, hic dignissimos vitae veritatis labore maiores eaque quibusdam
        dolorem. Inventore culpa at magni voluptatum fugit quibusdam quasi veniam unde nihil voluptates possimus odit, saepe
      </p>
    </div>
  );
}
