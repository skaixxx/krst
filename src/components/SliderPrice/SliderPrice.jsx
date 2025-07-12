import React, { useState, useEffect } from "react";
import "./SliderPrice.css";

const CatlogPriceFilter = () => {
  const initialMinPrice = 0;
  const initialMaxPrice = 1000;

  const [sliderMinValue] = useState(initialMinPrice);
  const [sliderMaxValue] = useState(initialMaxPrice);

  const [minVal, setMinVal] = useState(initialMinPrice);
  const [maxVal, setMaxVal] = useState(initialMaxPrice);
  const [minInput, setMinInput] = useState(initialMinPrice);
  const [maxInput, setMaxInput] = useState(initialMaxPrice);

  const [isDragging, setIsDragging] = useState(false);

  const minGap = 5;

  const slideMin = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value >= sliderMinValue && maxVal - value >= minGap) {
      setMinVal(value);
      setMinInput(value);
    }
  };

  const slideMax = (e) => {
    const value = parseInt(e.target.value, 10);
    if (value <= sliderMaxValue && value - minVal >= minGap) {
      setMaxVal(value);
      setMaxInput(value);
    }
  };
const setSliderTrack = () => {
    const range = document.querySelector(".slider-track");

    if (range) {
      const minPercent =
        ((minVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;
      const maxPercent =
        ((maxVal - sliderMinValue) / (sliderMaxValue - sliderMinValue)) * 100;

      range.style.left = `${minPercent}%`;
      range.style.right = `${100 - maxPercent}%`;
    }
  };

  useEffect(() => {
    setSliderTrack();
  }, [minVal, maxVal]);
  const handleMinInput = (e) => {
    const value =
      e.target.value === "" ? sliderMinValue : parseInt(e.target.value, 10);
    if (value >= sliderMinValue && value < maxVal - minGap) {
      setMinInput(value);
      setMinVal(value);
    }
  };

  const handleMaxInput = (e) => {
    const value =
      e.target.value === "" ? sliderMaxValue : parseInt(e.target.value, 10);
    if (value <= sliderMaxValue && value > minVal + minGap) {
      setMaxInput(value);
      setMaxVal(value);
    }
  };

  const handleInputKeyDown = (e, type) => {
    if (e.key === "Enter") {
      const value = parseInt(e.target.value, 10);
      if (
        type === "min" &&
        value >= sliderMinValue &&
        value < maxVal - minGap
      ) {
        setMinVal(value);
      } else if (
        type === "max" &&
        value <= sliderMaxValue &&
        value > minVal + minGap
      ) {
        setMaxVal(value);
      }
    }
  };
 const startDrag = () => {
    setIsDragging(true);
  };

  const stopDrag = () => {
    setIsDragging(false);
  };
  return (
    <div className="double-slider-box">
        <div className="slidertext">
        <div className="min-box">
         <span>от 0 ₽</span>
        </div>
        <div className="max-box">
          <span>до 200 000 ₽</span>
        </div>
        </div>
       
    
      <div className="range-slider">
        <div className="slider-track"></div>
        <input
          type="range"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={minVal}
          onChange={slideMin}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          className="min-val"
        />
        <input
          type="range"
          min={sliderMinValue}
          max={sliderMaxValue}
          value={maxVal}
          onChange={slideMax}
          onMouseDown={startDrag}
          onMouseUp={stopDrag}
          onTouchStart={startDrag}
          onTouchEnd={stopDrag}
          className="max-val"
        />
      </div>
    </div>
  );
};

export default CatlogPriceFilter;