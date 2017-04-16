import React, { PropTypes } from 'react';
import _ from 'lodash';
import {Sparklines, SparklinesLine, SparklinesReferenceLine} from 'react-sparklines';

function average(data) {
  return _.round(_.sum(data)/data.length);
}

const Chart = (props) => {
  const { data, color, units } = props;

  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
        <SparklinesReferenceLine type='mean'></SparklinesReferenceLine>
      </Sparklines>
      <div>{average(data)} {units}</div>
    </div>
  );
};

export default Chart;
