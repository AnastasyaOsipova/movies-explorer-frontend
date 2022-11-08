import { Link } from 'react-router-dom';
import './Page404.css';

function Page404() {
    return(
        <div className='page-not-found'>
            <h2 className='page-not-found__title'>404</h2>
            <h3 className='page-not-found__subtitle'>Страница не найдена</h3>
            <Link to='/' className='page-not-found__link'>Назад</Link>
        </div>
    )
}

export default Page404;