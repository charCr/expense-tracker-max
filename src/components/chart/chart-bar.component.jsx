import React from 'react';
import './chart-bar.styles.css'

export const ChartBar = props => {

    let barHeightClass = '0%';
    
    if (props.maxValue > 0) {
        barHeightClass = Math.round(props.value / props.maxValue) * 100 + '%';
    }

    return (
        <div className='chart-bar'>
            <div className='chart-bar__inner'>
                <div className='chart-bar__fill' style={{height: barHeightClass}}></div>
            </div>
            <div className='chart-bar__label'>{props.label}</div>
        </div>
    )
}