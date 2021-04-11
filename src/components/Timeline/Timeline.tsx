import { m as motion } from 'framer-motion';
import React, { FunctionComponent } from 'react';
import { InView } from 'react-intersection-observer';

import { TimelineProps } from './Timeline.models';
import {
  DateMark,
  Details,
  TimelineCard,
  TimelineItem,
  TimelineRoot,
  Title,
} from './Timeline.styles';

/**
 * Given an image path will display a Next Image component in a
 * small preview format
 */
const Timeline: FunctionComponent<TimelineProps> = (props) => {
  const { events } = props;

  return (
    <TimelineRoot>
      {events.map((event, index) => (
        <InView threshold={1}>
          {({ ref, inView }) => (
            <motion.div
              ref={ref}
              initial={{ opacity: 0 }}
              animate={inView && { y: [-10, 5], opacity: 1 }}
              transition={{ duration: index * 0.3 + 0.3 }}
            >
              <TimelineItem inView={inView}>
                <DateMark>{event.date}</DateMark>
                <TimelineCard>
                  <Title>{event.title}</Title>
                  <Details>{event.content}</Details>
                </TimelineCard>
              </TimelineItem>
            </motion.div>
          )}
        </InView>
      ))}
    </TimelineRoot>
  );
};

export default Timeline;
