import React from "react";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Paper,
  Typography,
} from "@material-ui/core";
import {
  Timeline,
  TimelineItem,
  TimelineSeparator,
  TimelineConnector,
  TimelineContent,
  TimelineDot,
} from "@material-ui/lab";

import seminar from "../../images/aboutus/seminar.png";
import hackathon from "../../images/aboutus/hackathon.png";
import competition from "../../images/aboutus/competition.png";
import network from "../../images/aboutus/network.png";
import webinar from "../../images/aboutus/webinar.png";
import workshops from "../../images/aboutus/workshop.png";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import useStyles from "./style";

function About() {
  const classes = useStyles();

  return (
    <div className={classes.About}>
      <Paper elevation={10} className={classes.About__about}>
        <img
          src="https://ik.imagekit.io/ieeensakcet/tr:w-400/college_BKdkFH2fF.webp"
          alt="college"
          className={classes.About__about__image}
        />
        <div className={classes.About__about__text}>
          <Typography variant="h6">
            <span className={classes.About__about__text__header}>
              IEEE Student Branch of Nawab Shah Alam Khan College of Engineering
              and Technology
            </span>{" "}
            is a student community that strives to inform, learn, entertain, and
            inspire action through the events and experiences we create. We
            promote student empowerment, develop professional skills, and foster
            technological innovations and build networks. ​ Our community
            consists of amateurs to experts, who understand the potential of
            volunteering and how priceless volunteers are!
          </Typography>
          {/* <Typography variant="h6">
            It is a student community that strives to inform, learn, entertain,
            and inspire action through the events and experiences we create. We
            promote student empowerment, develop professional skills, and foster
            technological innovations and build networks. ​ Our community
            consists of amateurs to experts, who understand the potential of
            volunteering and how priceless volunteers are!
          </Typography> */}
        </div>
      </Paper>
      <Paper elevation={12} className={classes.About__ourCommunity}>
        <Typography
          variant="h4"
          className={classes.About__ourCommunity__header}
        >
          OUR COMMUNITY
        </Typography>
        <img
          src="https://ik.imagekit.io/ieeensakcet/pyramid_gEz6JFkMv.svg"
          alt="pyramid"
          loading="lazy"
          className={classes.About__ourCommunity__pyramid}
        />
        <div className={classes.About__ourCommunity__text}>
          <Typography variant="h6">
            IEEE has its community around the globe, with more than 420,000 IEEE
            members. The world map has been divided into 10 regions and we come
            under Region 10 (Asia and Pacific), we are located in India and
            belong to the IEEE India Council which acts as a consortium of 12
            IEEE Sections located in different states of the country. IEEE
            Hyderabad Section foresees the activities in Telangana and Andhra
            Pradesh, different IEEE organizational units come under the section
            which includes IEEE Student Branches of colleges and universities.
          </Typography>
        </div>
      </Paper>
      <section className={classes.About__WhatWeDo}>
        <Typography variant="h4" className={classes.About__WhatWeDo__header}>
          WHAT WE DO
        </Typography>
        <Timeline align="left" className={classes.About__WhatWeDo__timeline}>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} className={classes.About__WhatWeDo__paper}>
                <img src={seminar} alt="seminars" />
                <Typography>Seminars</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} className={classes.About__WhatWeDo__paper}>
                <img src={webinar} alt="webinars" loading="lazy" />
                <Typography>Webinars</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} className={classes.About__WhatWeDo__paper}>
                <img src={workshops} alt="workshops" loading="lazy" />
                <Typography>Workshops</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} className={classes.About__WhatWeDo__paper}>
                <img src={competition} alt="competition" loading="lazy" />
                <Typography>Competitions</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} className={classes.About__WhatWeDo__paper}>
                <img src={hackathon} alt="hackathon" loading="lazy" />
                <Typography>Hackathons</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineSeparator>
              <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>
              <Paper elevation={8} className={classes.About__WhatWeDo__paper}>
                <img src={network} alt="network" loading="lazy" />
                <Typography>Help Build Network</Typography>
              </Paper>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </section>
      <Paper elevation={10} className={classes.About__Work}>
        <Typography variant="h4" className={classes.About__Work__header}>
          HOW WE WORK
        </Typography>
        <img
          src="https://ik.imagekit.io/ieeensakcet/tr:w-800/work_RmD9D29gs7.png"
          alt="work"
          loading="lazy"
          className={classes.About__Work__image}
        />
        <div>
          <Accordion className={classes.About__accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.accordion__expandLogo} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Executive Committee (ExCOM)</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
                Comprises of faculty advisors and core student members who hold
                officer positions and maintain the workflow.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.About__accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.accordion__expandLogo} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6">Leadership Team</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              It acts as the HR of an organization and oversees the complete function of the Student Branch.
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.About__accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.accordion__expandLogo} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6"> Publicity Team</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              This team is responsible for managing social media, promotion of events and providing support to the existing societies. It is internally divided into 2 teams:<br />
              1. Content Team - Responsible for generating content and deciding what goes up on our social media accounts and posters.<br />
              2. Design Team - Responsible for designing the posters, flyers and social media posts
              </Typography>
            </AccordionDetails>
          </Accordion>
          <Accordion className={classes.About__accordion}>
            <AccordionSummary
              expandIcon={
                <ExpandMoreIcon className={classes.accordion__expandLogo} />
              }
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography variant="h6"> Tech Team</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>
              This team is responsible for managing the website and other technical aspects of the Student Branch.
              </Typography>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </div>
  );
}

export default About;
