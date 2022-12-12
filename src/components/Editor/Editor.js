import React from 'react';
import style from './Editor.module.css';

const Editor = (props) => {
    const sections = props.sections;
    return (
        <div className={style.container}>
            <div className={style.header}>
                {Object.keys(sections)?.map((key) => (
                    <div className={style.section} key={key}>
                        {sections[key]}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Editor;