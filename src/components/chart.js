import React from 'react';
import {XYPlot, XAxis, YAxis, VerticalGridLines, HorizontalGridLines, LineSeries} from 'react-vis';
import styles from './chart.module.css'

const Chart = (props) => {
    

    const dataArr = props.data.map(d => {
        return {x: d.year + '/' + d.quarter,
    y: parseFloat(d.count/1000)}
    });

    const javaArr = props.java.map(d => {
        return {x: d.year + '/' + d.quarter,
    y: parseFloat(d.count/1000)}
    });

    console.log(dataArr);

        return (
            <XYPlot className = {styles.chart}
                xType = "ordinal"
                width={1000}
                height={500}>
                <VerticalGridLines 
                    style = {{strokeDasharray: '5 5', stroke: 'rgba(255,255,255,0.2)'}}/>
                <HorizontalGridLines 
                    style = {{strokeDasharray: '5 5', stroke: 'rgba(255,255,255,0.2'}}/>
                <XAxis title="Period"/>
                <YAxis title="Pull requests"/>
                <LineSeries
                style={{strokeWidth: 3, stroke: 'rgba(0, 176, 151, 1)'}}
                data={dataArr}/>
                <LineSeries
                style={{strokeWidth: 3, stroke: 'rgba(0, 176, 151, 0.3)',}}
                data={javaArr}/>
            </XYPlot>
        );
}

export default Chart;
