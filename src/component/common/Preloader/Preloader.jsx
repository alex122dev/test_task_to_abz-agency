import preloaderImg from '../../../assets/loader.gif'
import style from './Preloader.module.scss'

export const Preloader = () => {

    return (
        <div className={style.preloader}>
            <img src={preloaderImg} alt="loading" />
        </div>
    )
}