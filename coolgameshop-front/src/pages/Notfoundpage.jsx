import { Link } from 'react-router-dom'


const Notfoundpage = () => {
    return (
        <div style={{padding: '110px'}}>
            Этой страницы не существует.Вернуться на <Link to="/">главную страницу</Link>
        </div>
    )
}

export {Notfoundpage};