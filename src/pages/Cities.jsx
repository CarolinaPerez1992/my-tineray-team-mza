import React from 'react'
import Layout from '../layout/Layout'
import CityCard from '../components/CityCard'
import DataCity from '../data/dataCity'

export default function Cities() {
  return (
    <Layout>
       {DataCity.map((cadaPerfil,id) => <CityCard datos={cadaPerfil} key={id} />)}
    </Layout>
  )
}
