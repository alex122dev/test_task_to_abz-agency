import bannerImage from '../../assets/main-banner.jpeg'
import bannerImageMobile from '../../assets/main-banner x780.jpg'
import { Button } from '../common/Button/Button'

export const MainBanner = () => {
    return <div className="mainbanner">
        <div className="mainbanner__container container">
            <div className="mainbanner__body">
                <div className="mainbanner__image" >
                    <picture>
                        <source srcSet={bannerImage} media="(min-width: 769px)" />
                        <source srcSet={bannerImageMobile} media="(max-width: 768px)" />
                        <img src={bannerImageMobile} alt="banner" />
                    </picture>
                </div>
                <div className="mainbanner__content">
                    <h2 className="mainbanner__title">Test assignment for front-end developer</h2>
                    <p className="mainbanner__text">
                        What defines a good front-end developer is one that has skilled knowledge of HTML, CSS, JS with a vast understanding of User design thinking as they'll be building web interfaces with accessibility in mind. They should also be excited to learn, as the world of Front-End Development keeps evolving.
                    </p>
                    <Button text={'Sign up'} />
                </div>
            </div>
        </div>
    </div>
}