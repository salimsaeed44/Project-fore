import React, { useState } from 'react'
import "./Bank.css"
import { ReactComponent as Logo } from './images/logo.svg';
import { ReactComponent as Mobile } from './images/bg-intro-mobile.svg';
import { ReactComponent as Desktop } from './images/bg-intro-desktop.svg';
import { ReactComponent as Menu } from './images/icon-hamburger.svg';
import { ReactComponent as Icon1 } from './images/icon-online.svg';
import { ReactComponent as Icon2 } from './images/icon-budgeting.svg';
import { ReactComponent as Icon3 } from './images/icon-onboarding.svg';
import { ReactComponent as Icon4 } from './images/icon-api.svg';
import { ReactComponent as Facebook } from './images/icon-facebook.svg';
import { ReactComponent as Youtube } from './images/icon-youtube.svg';
import { ReactComponent as Twitter } from './images/icon-twitter.svg';
import { ReactComponent as Pinterset } from './images/icon-pinterest.svg';
import { ReactComponent as Instegram } from './images/icon-instagram.svg';

const Bank = () => {
    const [check, setCheck] = useState(false);
    return(
        <div className="">
            {/* Start Header */}
            <div className='header'>
                <div className='container'>
                    <div className='logo'>
                        <Logo />
                    </div>
                    <div className={`nav-lists ${check ? "" : "hidden"}`} onClick={() => setCheck(false)}>
                        <ul>
                            <li><a href='#'>Home</a></li>
                            <li><a href='#'>About</a></li>
                            <li><a href='#'>Contact</a></li>
                            <li><a href='#'>Blog</a></li>
                            <li><a href='#'>Careers</a></li>
                        </ul>
                    </div>
                    <div className='btn'>
                        <button className='button'>Request Invite</button>
                    </div>
                    <div className='menu'>
                        <Menu onClick={() => setCheck(true)}/>
                    </div>
                </div>
            </div>
            {/* End Header */}
            {/* Start Content */}
            <div className='content'>
                <div className='container'>
                    <div className='title'>
                        <h1>Next generation<br/>
                        digital banling</h1>
                    </div>
                    <div className='info'>
                        <p>
                            Take your financial life online. Your Easybank account<br/>
                            will be one-stop-shpe for spending, saving,<br/>
                            budgeting, investing, and much more.
                        </p>
                    </div>
                    <div className='btn'>
                        <button className='button'>Request Invite</button>
                    </div>
                    <div className='intro'>
                        <div className='desktop'>
                            <Desktop />
                        </div>
                        <div className='image-mob'>
                            <img src={require("./images/image-mockups.png")} />
                        </div>
                    </div>
                </div>
            </div>
            {/* End Content */}
            {/* Start Information */}
            <div className='infor'>
                <div className='container'>
                    <div className='title'>
                        <h2>Why chose Easybank?</h2>
                        <p>
                            We leverage Open Banking to turn tour bank account into your financial hub.
                            Controal Your financial like never before.
                        </p>
                    </div>
                    <div className='parent'>
                    <div className='info-work'>
                        <div className='icon'>
                            <Icon1 />
                        </div>
                        <div className='title'>
                            <h3>Online Banking</h3>
                        </div>
                        <div className='info'>
                            <p>
                            Lorem ipusm dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut lab Lorem ipusm dolor sit amet,
                            </p>
                        </div>
                    </div>
                    <div className='info-work'>
                        <div className='icon'>
                            <Icon2 />
                        </div>
                        <div className='title'>
                            <h3>Simple Budgeting</h3>
                        </div>
                        <div className='info'>
                            <p>
                            Lorem ipusm dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut lab Lorem ipusm dolor sit amet,
                            </p>
                        </div>
                    </div>
                    <div className='info-work'>
                        <div className='icon'>
                            <Icon3 />
                        </div>
                        <div className='title'>
                            <h3>Fast Onboarding</h3>
                        </div>
                        <div className='info'>
                            <p>
                            Lorem ipusm dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut lab Lorem ipusm dolor sit amet,
                            </p>
                        </div>
                    </div>
                    <div className='info-work'>
                        <div className='icon'>
                            <Icon4 />
                        </div>
                        <div className='title'>
                            <h3>Open API</h3>
                        </div>
                        <div className='info'>
                            <p>
                            Lorem ipusm dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut lab Lorem ipusm dolor sit amet,
                            </p>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            {/* End Information */}
            {/* Start Portfolio */}
            <div className='portfolio'>
                <div className='container'>
                    <div className='title'>
                        <h2>Latest Articles</h2>
                    </div>
                    <div className='parent'>
                        <div className='child'>
                        <div className='image'>
                        <img src={require("./images/image-currency.jpg")} />
                    </div>
                    <div className='margin'>
                        <div className='creator'>
                        <p>By Salem Saeed</p>
                    </div>
                    <div className='title'>
                        <h4>Reseve Money in any currency with no fees</h4>
                    </div>
                    <div className='text'>
                        <p>
                            Lorem ipusm dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut lab Lorem ipusm dolor sit amet,
                            </p>
                    </div>
                    </div>
                        </div>
                        <div className='child'>
                        <div className='image'>
                        <img src={require("./images/image-restaurant.jpg")} />
                    </div>
                    <div className='margin'>
                        <div className='creator'>
                        <p>By Salem Saeed</p>
                    </div>
                    <div className='title'>
                        <h4>Reseve Money in any currency with no fees</h4>
                    </div>
                    <div className='text'>
                        <p>
                            Lorem ipusm dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut lab Lorem ipusm dolor sit amet,
                            </p>
                    </div>
                    </div>
                        </div>
                        <div className='child'>
                        <div className='image'>
                        <img src={require("./images/image-plane.jpg")} />
                    </div>
                    <div className='margin'>
                        <div className='creator'>
                        <p>By Salem Saeed</p>
                    </div>
                    <div className='title'>
                        <h4>Reseve Money in any currency with no fees</h4>
                    </div>
                    <div className='text'>
                        <p>
                            Lorem ipusm dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut lab Lorem ipusm dolor sit amet,
                            </p>
                    </div>
                    </div>
                        </div>
                        <div className='child'>
                        <div className='image'>
                        <img src={require("./images/image-confetti.jpg")} />
                    </div>
                    <div className='margin'>
                        <div className='creator'>
                        <p>By Salem Saeed</p>
                    </div>
                    <div className='title'>
                        <h4>Reseve Money in any currency with no fees</h4>
                    </div>
                    <div className='text'>
                        <p>
                            Lorem ipusm dolor sit amet, consectetur adipisicing elit,
                            sed do eiusmod tempor incididunt ut lab Lorem ipusm dolor sit amet,
                            </p>
                    </div>
                    </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* End Portfolio */}
            {/* Start Footer */}
            <footer>
                <div className='container'>
                    <div className='parent'>
                        <div className='logo-social'>
                            <div className='logo'><Logo /></div>
                            <div className='social'>
                                <Facebook className='icon' /> <Youtube className='icon' /> <Twitter className='icon' /> <Pinterset className='icon' /> <Instegram className='icon' />
                            </div>
                        </div>
                        <div className='list1'>
                            <ul>
                                <li><a href='#'>About Us</a></li>
                                <li><a href='#'>Contact</a></li>
                                <li><a href='#'>Blog</a></li>
                            </ul>
                        </div>
                        <div className='list2'>
                            <ul>
                                <li><a href='#'>Careers</a></li>
                                <li><a href='#'>Support</a></li>
                                <li><a href='#'>Privacy policy</a></li>
                            </ul>
                        </div>
                        <div className='btn-copy'>
                            <button className='button'>Request Invite</button>
                            <p>&copy; Easybank. All Right Reserved</p>
                    </div>
                    </div>
                </div>
            </footer>
            {/* End Footer */}
        </div>
    )
}

export default Bank;