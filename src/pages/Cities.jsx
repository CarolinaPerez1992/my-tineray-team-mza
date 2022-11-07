import React from "react";
import Layout from "../layout/Layout";
import CityCard from "../components/CityCard";
import DataCity from "../data/dataCity";

export default function Cities() {
  return (
    <Layout>
      <div className="cont-card">
        {DataCity.map((cadaPerfil, id) => (
          <CityCard datos={cadaPerfil} key={id} />
        ))}
      </div>
    </Layout>
  );
}
