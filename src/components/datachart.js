import React from 'react';
import {
    XYPlot, 
    XAxis, 
    YAxis, 
    VerticalGridLines, 
    HorizontalGridLines, 
    LineSeries, 
    Crosshair
    } from 'react-vis';

import styles from './chart.module.css';


export default class DataChart extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            crosshairValues: []
        };
    }

      /**
   * Event handler for onMouseLeave.
   * @private
   */
  _onMouseLeave = () => {
    this.setState({crosshairValues: []});
  };

  /**
   * Event handler for onNearestX.
   * @param {Object} value Selected value.
   * @param {index} index Index of the value in the data array.
   * @private
   */

  _onNearestX = (value, {index}) => {
    this.setState({crosshairValues: this.props.data.map(d => d[index])});
  };


    

    render(){

        return (
            <XYPlot 
                onMouseLeave = {this._onMouseLeave}
                className = {styles.chart}
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
                onNearestX={this._onNearestX}
                style={{strokeWidth: 3, stroke: 'rgba(0, 176, 151, 1)'}}
                data={this.props.data[0]}/>
                <LineSeries
                onNearestX={this._onNearestX}
                style={{strokeWidth: 3, stroke: 'rgba(0, 176, 151, 0.3)',}}
                data={this.props.data[1]}/>
                <Crosshair
          values={this.state.crosshairValues}
          className={'test-class-name'}
          style={{stroke: "red"}}
        />
            </XYPlot>
        );
    }
}

