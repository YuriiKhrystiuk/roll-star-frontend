import React from 'react'
import MainHead from './MainHead/MainHead'
import DivideElement from './DivideElement/DivideElement'
import MenuBar from './MenuBar/MenuBar'
import MapComponent from './MapComponent/MapComponent'
import RollstarSlider from './Slider/RollstarSlider'
import OrderInstruction from './OrderInstruction/OrderInstruction'

const MainPage = () => {
  return (
    <div>
        
        <MainHead />

        <DivideElement />

        <MenuBar />

        <RollstarSlider />

        <MapComponent />

        <DivideElement />

        <OrderInstruction />

    </div>
  )
}

export default MainPage