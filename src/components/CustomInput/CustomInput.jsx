import React, { useState, useRef, useEffect } from 'react';
import './CustomInput.css'; // Стили вынесены в отдельный файл

const CustomInput = ({
  type = 'text',
  placeholder = '',
  value,
  onChange,
  icon,
  className = '',
  inputClassName = '',
  iconClassName = '',
  caretClassName = '',
  ...props
}) => {
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef(null);
  const caretRef = useRef(null);

  const positionCaret = () => {
    if (inputRef.current && caretRef.current) {
      const input = inputRef.current;
      const textWidth = getTextWidth(input.value, getComputedStyle(input).font);
      caretRef.current.style.left = `${16 + textWidth}px`; // 16px - это padding-left
    }
  };

  const getTextWidth = (text, font) => {
    const canvas = document.createElement('canvas');
    const context = canvas.getContext('2d');
    context.font = font;
    return context.measureText(text).width;
  };

  const handleFocus = (e) => {
    setIsFocused(true);
    e.target.placeholder = '';
    positionCaret();
  };

  const handleBlur = (e) => {
    setIsFocused(false);
    if (e.target.value === '') {
      e.target.placeholder = e.target.dataset.placeholder || '';
    }
  };

  const handleChange = (e) => {
    onChange(e);
    if (isFocused) positionCaret();
  };

  useEffect(() => {
    if (isFocused) positionCaret();
  }, [value, isFocused]);

  return (
    <div className={`input-container ${className}`}>
      <input
        ref={inputRef}
        type={type}
        value={value}
        className={`custom-input ${inputClassName}`}
        placeholder={placeholder}
        data-placeholder={placeholder}
        onChange={handleChange}
        onFocus={handleFocus}
        onBlur={handleBlur}
        {...props}
      />
      <div ref={caretRef} className={`custom-caret ${caretClassName} ${isFocused ? 'visible' : ''}`} />
      {icon && <img src={icon} alt="" className={`input-icon ${iconClassName}`} />}
    </div>
  );
};

export default CustomInput;