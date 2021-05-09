import React, { useEffect, useRef, useState } from 'react'

const Lazy = ({
  value,
  onChangeInput,
  nativeProps = { type: 'text' },
}) => {
  const [stateValue, setStateValue] = useState('')

  const inputEl = useRef(null)

  useEffect(() => {
    if (stateValue !== value) {
      inputEl.current.value = value
    }
  }, [value, stateValue])

  const checkChange = (e) => {
    if (value !== e.target.value) {
      setStateValue(e.target.value)
      onChangeInput(e.target.value)
    }
  }

  const pressEnter = (e) => {
    if (e.keyCode === 13) checkChange(e)
  }

  return (
    <input
      {...nativeProps}
      defaultValue={value}
      onBlur={checkChange}
      onKeyUp={pressEnter}
      ref={inputEl}
    />
  )
}

export { Lazy }
