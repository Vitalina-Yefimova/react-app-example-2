import React, { useState } from 'react'
import './ControlledForm.css'

function ControlledForm() { // Этот компонент управляет значениями через состояние
  const [text, setText] = useState('') // State для текстового поля
  const [isChecked, setIsChecked] = useState(false)  // State для чекбокса

  const handleTextChange = (event) => { // Обновляет state для текстового поля
    setText(event.target.value)
  }

  const handleCheckboxChange = (event) => { // Обновляет state для чекбокса
    setIsChecked(event.target.checked)
  }

  const handleSubmit = (event) => {  // Обработка отправки формы
    event.preventDefault() // Останавливает перезагрузку страницы
    console.log('Text input:', text)
    console.log('Checkbox is checked:', isChecked)
  }

  return (
    <form onSubmit={handleSubmit} className="controlled-form">
      <div className="form-field">
        <label>
          Enter text:
          <input
            type="text"
            value={text}
            onChange={handleTextChange} />
        </label>
      </div>
      <div className="form-field">
        <label>
          Agree to Terms:
          <input
            type="checkbox"
            checked={isChecked}
            onChange={handleCheckboxChange} />
        </label>
      </div>
      <button
        type="submit"
        className='submit-button'>
        Submit
      </button>
    </form>
  )
}

export default ControlledForm