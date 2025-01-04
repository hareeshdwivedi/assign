import React from 'react'
import './Checkbox.css'

interface CheckboxProps {
  checked: boolean
  indeterminate?: boolean
  onChange: () => void
}

const Checkbox: React.FC<CheckboxProps> = ({
  checked,
  indeterminate,
  onChange
}) => {
  return (
    <input
      type='checkbox'
      checked={checked}
      ref={el => {
        if (el) el.indeterminate = indeterminate || false
      }}
      onChange={onChange}
    />
  )
}

export default Checkbox
