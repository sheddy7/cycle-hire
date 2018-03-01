import React, { Component } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';

import Axes from './Axes';
import Bars from './Bars';
import ResponsiveWrapper from './ResponsiveWrapper'
import * as restClient from '../lib/rest-client';

class BikeGraph extends Component {

  constructor() {
    super();

    this.xScale = scaleBand();
    this.yScale = scaleLinear();
    this.state = {
      data: null
    };
  };

  componentDidMount() {
    restClient.getJson('/api/bike-data')
    .then(resp => {
      this.setState({
        data: resp.data
      });
    });
  };

  render() {
    const data = this.state.data;

    if (!data) return null;
console.log(data);
    const margins = { top: 50, right: 20, bottom: 100, left: 60 };
    const svgDimensions = {
      width: Math.max(this.props.parentWidth, 300),
      height: 500
    };

    const maxValue = Math.max(...data.map(d => d.nbBikes));

    // scaleBand type
    const xScale = this.xScale
      .padding(0.5)
      // scaleBand domain should be an array of specific values
      // in our case, we want to use movie titles
      .domain(data.map(d => d.title))
      .range([margins.left, svgDimensions.width - margins.right]);

     // scaleLinear type
    const yScale = this.yScale
       // scaleLinear domain required at least two values, min and max
      .domain([0, maxValue + 10])
      .range([svgDimensions.height - margins.bottom, margins.top]);

    return (
      <div className="App-data">
        <svg width={svgDimensions.width} height={svgDimensions.height}>
          <Axes
            scales={{ xScale, yScale }}
            margins={margins}
            svgDimensions={svgDimensions}
          />

          <Bars
            scales={{ xScale, yScale }}
            margins={margins}
            data={data}
            maxValue={maxValue}
            svgDimensions={svgDimensions}
          />
        </svg>
      </div>
    )
  };

};

export default ResponsiveWrapper(BikeGraph);
