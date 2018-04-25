import React from 'react';
import './checkbox.css'

const checkbox = ({ text, checked, onChange }) => (
  <label className="checkbox">
    <input type='checkbox' checked={checked} onChange={e => onChange(e.target.checked)} />
    <div className="checkbox__text">{text}</div>
  </label>
)

export default checkbox;