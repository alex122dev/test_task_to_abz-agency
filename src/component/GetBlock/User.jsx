import photoPlaceholder from '../../assets/photo-cover.svg'
import Tippy from '@tippyjs/react';
import 'tippy.js/dist/tippy.css';

export const User = ({ user }) => {

    return <div className="user">
        <div className="user__body">
            <div className="user__photo">
                <img src={user.photo || photoPlaceholder} onError={(e) => e.target.src = photoPlaceholder}
                    alt="photo" />
            </div>
            <Tippy delay={[300, null]} maxWidth={'none'} placement='bottom' arrow={false} content={user.name}>
                <p className="user__name">{user.name}</p>
            </Tippy>
            <Tippy delay={[300, null]} maxWidth={'none'} placement='bottom' arrow={false} content={user.position}>
                <p className="user__position">{user.position}</p>
            </Tippy>
            <Tippy delay={[300, null]} maxWidth={'none'} placement='bottom' arrow={false} content={user.email}>
                <p className="user__email">{user.email}</p>
            </Tippy>
            <Tippy delay={[300, null]} maxWidth={'none'} placement='bottom' arrow={false} content={user.phone}>
                <p className="user__phone">{user.phone}</p>
            </Tippy>
        </div>
    </div>
}