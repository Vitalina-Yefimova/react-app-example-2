// useRef — это хук в React, который позволяет создавать рефы.
// Рефы используются для доступа к DOM-элементам или сохранения значения, которое остаётся неизменным между рендерами компонента.
// В отличие от контролируемых компонентов, здесь значения полей не управляются через состояние (useState). 
// Вместо этого используется прямой доступ к DOM через рефы.

import React, { useRef } from 'react'
import './UncontrolledForm.css'

function UncontrolledForm() {
  // Рефы для доступа к значениям полей формы
  const textInputRef = useRef(null)
  const checkboxRef = useRef(null)

  // Обработчик отправки формы
  const handleSubmit = (event) => {
    event.preventDefault() // Останавливает перезагрузку страницы
    const text = textInputRef.current.value // Получение текста из input
    const isChecked = checkboxRef.current.checked // Получение состояние чекбокса
    console.log('Text input:', text) 
    console.log('Checkbox is checked:', isChecked)
  }

  return (
    <form onSubmit={handleSubmit} className="uncontrolled-form">
      <div className="form-group">
        <label htmlFor="textInput">Enter text:</label>
        <input
          type="text"
          id="textInput"
          ref={textInputRef}
          placeholder="Type here..."
        />
      </div>
      <div className="form-group">
        <label htmlFor="checkbox">Agree to Terms:</label>
        <input
          type="checkbox"
          id="checkbox"
          ref={checkboxRef} />
      </div>

      <button type="submit">Submit</button>
    </form>
  )
}
 // ref={textInputRef} - привязывает DOM-элемент к рефу textInputRef
export default UncontrolledForm