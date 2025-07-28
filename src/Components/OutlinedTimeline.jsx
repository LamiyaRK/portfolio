import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem, { timelineItemClasses } from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import { motion } from 'framer-motion';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0 },
};

export default function OutlinedTimeline() {
  const theme = useTheme();
  const islg = useMediaQuery(theme.breakpoints.up('lg'));

  return (
    <motion.div
      className="w-full px-4"
      variants={container}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      <Timeline
        position={islg ? 'alternate' : 'right'}
        sx={{
          ...(islg
            ? {}
            : {
                [`& .${timelineItemClasses.root}:before`]: {
                  flex: 0,
                  padding: 0,
                },
              }),
        }}
      >
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="w-full max-w-full">
            <motion.div
              variants={item}
              className="p-5 bg-black/10 backdrop-blur-xs rounded-2xl w-full"
            >
              <p className="text-2xl font-semibold">
                B.Sc. in <span className="text-[#66FCF1]">CSE</span>
              </p>
              <span className="text-xl">
                <span className="text-[#66FCF1] font-semibold">Jagannath University</span> — 2023–2027
              </span>
              <br />
              <span className="text-xl">
                <span className="font-medium">CGPA:</span> 3.82
              </span>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="w-full max-w-full">
            <motion.div
              variants={item}
              className="p-5 bg-black/10 backdrop-blur-xs rounded-2xl w-full"
            >
              <p className="text-2xl font-semibold text-[#66FCF1]">
                Web Development <span className="text-white">Bootcamp</span>
              </p>
              <p className="text-[#66FCF1] font-semibold text-xl">
                Complete Web Development Course (Batch 11)
              </p>
              <p className="text-xl">Programming Hero — 2025</p>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent className="w-full max-w-full">
            <motion.div
              variants={item}
              className="p-5 bg-black/10 backdrop-blur-xs rounded-2xl w-full"
            >
              <p className="text-2xl font-semibold text-[#66FCF1]">
                Web Development <span className="text-white">Bootcamp</span>
              </p>
              <span className="text-[#66FCF1] font-semibold text-xl">
                "21 Days with Code" – Web Development Bootcamp
              </span>
              <br />
              <p className="text-xl">Programming Hero — 2023</p>
            </motion.div>
          </TimelineContent>
        </TimelineItem>

        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
          </TimelineSeparator>
          <TimelineContent className="w-full max-w-full" />
        </TimelineItem>
      </Timeline>
    </motion.div>
  );
}
