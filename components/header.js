import { isFirefox } from '../utils/platform';

const extensionUrl = isFirefox
    ? 'https://addons.mozilla.org/en-US/firefox/addon/buttercup-pw/'
    : 'https://chrome.google.com/webstore/detail/buttercup/heflipieckodmcppbnembejjmabajjjj?hl=en';

export default () => (
    <header>
        <nav className="navbar is-transparent">
            <div className="navbar-brand">
                <a className="navbar-item" href="/">
                    <img src="/static/img/logo.svg" alt="Buttercup Logo" />
                </a>

                <a className="navbar-item is-hidden-desktop" href="https://github.com/buttercup" target="_blank">
                    <span className="icon">
                        <i className="fa fa-lg fa-github"></i>
                    </span>
                </a>

                <a className="navbar-item is-hidden-desktop" href="https://twitter.com/buttercup" target="_blank">
                    <span className="icon">
                        <i className="fa fa-lg fa-twitter"></i>
                    </span>
                </a>

                <div className="navbar-burger burger" data-target="mainMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>

            <div id="mainMenu" className="navbar-menu">
                <div className="navbar-start">
                    <a className="navbar-item " href="/">Home</a>
                    <a className="navbar-item " href="/privacy/">Privacy Policy</a>
                </div>

                <div className="navbar-end">
                    <a className="navbar-item is-hidden-desktop-only" href="https://github.com/buttercup" target="_blank">
                        <span className="icon">
                            <i className="fa fa-lg fa-github"></i>
                        </span>
                    </a>
                    <a className="navbar-item is-hidden-desktop-only" href="https://twitter.com/buttercup" target="_blank">
                        <span className="icon">
                            <i className="fa fa-lg fa-twitter"></i>
                        </span>
                    </a>
                    <div className="navbar-item">
                        <div className="field is-grouped">
                            <p className="control">
                                <a className="button is-primary" href="#download">
                                    <span className="icon">
                                        <i className="fa fa-download"></i>
                                    </span>
                                    <span>Download</span>
                                </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </nav>
    </header>
);
