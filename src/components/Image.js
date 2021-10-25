import Message from './Message';
import BackgroundAnimation from '../components/BackgroundAnimation';

const Image = ({ url, text, divCls, cls }) => {
    return (
        <div className="logo-name-slogan">
            <div className={`login-image--${divCls}`}>
                <div className="title-slogan">
                    <img
                        src={`${url}`}
                        alt={`${text}`}
                        className={`login--${cls}`}
                    />
                    <BackgroundAnimation />
                    <h1 className="login--headline">Mothercode</h1>
                    <h4 className="login--headline-secondary">
                        Code it like your momma would
                    </h4>
                </div>
            </div>
        </div>
    );
};

export default Image;
