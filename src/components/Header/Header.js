import React from 'react';
import style from './Header.module.css';
import resume from '../../images/resume.svg';

const Header = () => {
    return (
        <div>
            <div  className={style.container}>
            <div>
            <p className={style.heading}>
                A <span className={style.resColor}>Resume</span> that stand out!
            </p>
            <p className={style.heading}>
                Make your own resume. <span>It's free</span>
            </p>
            </div>
            
            <div className={style.right}>
            <img width={400} src={resume} alt="" />
            </div>
            </div>
        </div>

    );
};

export default Header;