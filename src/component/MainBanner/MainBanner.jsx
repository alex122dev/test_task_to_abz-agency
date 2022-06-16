import bannerImage from '../../assets/main-banner.jpeg'
import { Button } from '../common/Button/Button'

export const MainBanner = () => {
    return <div className="mainbanner">
        <div className="mainbanner__container container">
            <div className="mainbanner__body">
                <div className="mainbanner__image" >
                    <img src={bannerImage} alt="banner" />
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