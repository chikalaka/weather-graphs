import React, { PropTypes } from 'react';
import {Sparklines, SparklinesLine} from 'react-sparklines';

const Chart = (props) => {
  const { data, color } = props;

  return (
    <div>
      <Sparklines height={120} width={180} data={data}>
        <SparklinesLine color={color} />
      </Sparklines>
    </div>
  );
};

export default Chart;
