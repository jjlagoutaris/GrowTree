import React from 'react'
import Header from '../containers/Header/Header'
import KryptoFacts from '../containers/KryptoFacts/KryptoFacts'
import Trading from '../containers/Trading/Trading'

const MainPage = () => {
  return (
    <>
      <Header />
      <KryptoFacts />
      <Trading />
    </>
  )
}

export default MainPage