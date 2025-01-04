import React, { useState, useEffect } from 'react'
import './DataFetchingComponent.css'

function FetchDataComponent() {
    const [data, setData] = useState(null) // Хранятся данные, которые получены с сервера
    const [loading, setLoading] = useState(true) // State для отслеживания состояния загрузки
    const [error, setError] = useState(null) // State для хранения ошибок

    useEffect(() => {
        const fetchData = async () => {  // Асинхронная функция для получения данных
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/posts')
                if (!response.ok) {
                    throw new Error('Network response was not ok')
                }
                const result = await response.json()
                setData(result)
            } catch (err) {
                setError(err.message)
            } finally {
                setLoading(false)
            }
        }

        fetchData() // Вызов асинхронной функции
    }, []) // Пустой массив зависимостей, чтобы запрос выполнялся только один раз при монтировании компонента

    if (loading) {
        return <div>Loading...</div> // Показывается индикатор загрузки
    }

    if (error) {
        return <div>Error: {error}</div> // Показывается сообщение об ошибке
    }

    return (
        <div>
            <h2>Posts</h2>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default FetchDataComponent