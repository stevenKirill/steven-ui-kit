import React from 'react';
import classes from './progressbar.module.css';

const time = {
    1: 'one-sec',
    2: 'two-sec',
    3: 'three-sec',
    4: 'four-sec',
    5: 'five-sec',
}

const ProgressBar = ({ mainTitle, config }) => {
    if (config.length === 0) {
        throw new Error("data shouldn't be empty");
    }
    return (
        <div className={classes.wrapper}>
            <h4 style={{ textAlign: 'center' }}>{mainTitle}</h4>
            {config.map((option,id) => {
                const { title, percent, color, animationTime } = option;
                return (
                    <section key={`${option.title}_${id}`} className={classes.box}>
                        <section className={classes.texts}>
                            <div>{title}</div>
                            <div>{percent}%</div>
                        </section>
                        <section className={classes.bar}>
                            <div className={classes[time[animationTime]]} style={{
                                backgroundColor: `${color}`,
                                maxWidth: `${percent}%`,
                                height: `20px`,
                                }}
                            />
                        </section>
                    </section>
                )
            })}
        </div>
    )
}

export default ProgressBar
