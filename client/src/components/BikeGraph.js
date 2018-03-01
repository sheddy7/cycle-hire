import React, { Component } from 'react';
import { scaleBand, scaleLinear } from 'd3-scale';

import Axes from './Axes'
import * as restClient from '../lib/rest-client';

const data = [
  { title: 'blah', value: 34, year: 84 },
  { title: 'sdfdsf', value: 25, year: 99 },
  { title: 'ererw', value: 12, year: 87 },
  { title: 'ujkuk', value: 87, year: 56 },
  { title: 'tyhnnn', value: 45, year: 66 }
];

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
        data: resp
      });
    });
  };

  render() {
    const margins = { top: 50, right: 20, bottom: 100, left: 60 };
    const svgDimensions = { width: 800, height: 500 };

    const maxValue = Math.max(...data.map(d => d.value));

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
      .domain([0, maxValue])
      .range([svgDimensions.height - margins.bottom, margins.top]);

    return (
      <div className="App-data">
        <svg width={svgDimensions.width} height={svgDimensions.height}>
          <Axes
            scales={{ xScale, yScale }}
            margins={margins}
            svgDimensions={svgDimensions}
          />
        </svg>
      </div>
    )
  };

};

export default BikeGraph;
