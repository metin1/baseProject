import React from 'react';
import moment from 'moment';

import config from '../../../../config';

const DateTimeCell = ({
  timestamp,
  dateFormat,
  timeFormat,
}) => {
  const __timestamp = moment(timestamp, 'X');

  if ( ! __timestamp.isValid()) {
    return (
      <td> - </td>
    );
  }

  return (
    <td>
      <span style={{whiteSpace: 'nowrap'}}>
        {
          __timestamp.format(dateFormat ? dateFormat : config.formats.date)
        }
      </span>
      {' '}
      <span style={{whiteSpace: 'nowrap'}}>
          {
            __timestamp.format(timeFormat ? timeFormat : config.formats.time)
          }
        </span>
    </td>
  );
};

export default DateTimeCell;
