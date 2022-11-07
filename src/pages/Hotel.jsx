import React from "react";
import Layout from "../layout/Layout";
import HotelCard from "../components/HotelCard";
import Hotels from "../data/hotels";
import "../card.css";

export default function Hotel() {
  return (
    <Layout>
      <div className="cont-card">
        {Hotels.map((cadaPerfil, id) => (
          <HotelCard datos={cadaPerfil} key={id} />
        ))}
      </div>
    </Layout>
  );
}
