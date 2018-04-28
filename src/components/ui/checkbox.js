import React from 'react';
import './checkbox.css'

const checkbox = ({ text, defaultChecked, onChange }) => (
  <label className="checkbox">
    <input type='checkbox' defaultChecked onChange={e => onChange(e.target.checked)}/>
    <div className="checkbox__text">{text}</div>
  </label>
)

export default checkbox;