import React from 'react';
import style from './Body.module.css';
import { ArrowDown } from 'react-feather';
import Editor from '../Editor/Editor';

const Body = () => {
    const colors=["#013932", "#015D51", "#027D6D", "#03A590", "#00BFA6"];
    const sections = {
        basicInfo: "Basic Info",
        workExp: "Work Experience",
        project: "Projects",
        education: "Education",
        achievements: "Achievements",
        Summary: "Summary",
        other: "Other",
    }
    return (
        <div>
            <div  className={style.container}>
                <div className={style.heading}>Resume Builder</div>
                <div className={style.toolber}>
                    <div className={style.colors}>
                        {
                            colors.map(colorItem=> <span
                                key={colorItem}
                                style={{backgroundColor: colorItem}}
                                className={style.color}/>)
                        }
                    </div>
                    <button className={style.btnDownload}>Download <ArrowDown/> </button>
                </div>
                <div className={style.main}>
                    <Editor sections={sections}/>
                </div>


            </div>
             
        </div>
    );
};

export default Body;