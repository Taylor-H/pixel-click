import React from 'react'

const ColorSelector = (props) => {
  return (
    <select
      onChange={props.onChange}
      className={
        props.selectedColor !== 'black'
          ? props.selectedColor
          : `${props.selectedColor}Text`
      }
      value={props.selectedColor}>
      {props.colors.map((color) => (
        <option
          key={color}
          className={`${props.selectedColor}Text`}
          value={color}>
          {console.log(color)}
          {`${color}`}
        </option>
      ))}
    </select>
  );
}
export default ColorSelector
