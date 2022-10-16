import { Avatar, Button, Link, Paper, Typography } from "@material-ui/core";
import React from "react";
import useStyles from "./style";
import { Link as RouterLink } from "react-router-dom";

import around from "../../../images/wie/around.png";
import email from "../../../images/wie/email.png";
import help from "../../../images/wie/help.png";
import medal from "../../../images/wie/medal.png";
import scholarship from "../../../images/wie/scholarship.png";
import tag from "../../../images/wie/tag.png";

import Profile from "../../../components/profile/profile";

import wieLogo from "../../../images/homePage/ieee-wie-logo.png";
import { wie } from "../../../data/profile";

const Wie = () => {
  const classes = useStyles();
  return (
    <div className={classes.wie}>
      <section className={classes.wie__groupPhoto}>
        <div className={classes.wie__groupPhoto__container}>
          <img
            src="https://ik.imagekit.io/ieeensakcet/tr:w-1200/WIE_copy_gtxHcaImz.JPG"
            alt="grpPhoto"
            className={classes.wie__groupPhoto__container__image}
          />
        </div>
        <div className={classes.header}>
          <div className={classes.header__content}>
            <div className={classes.logo}>
              <img src={wieLogo} alt="csLogo" className={classes.logo__image} />
            </div>
            <div className={classes.header__text}>
              <Typography variant="h6">
                IEEE Women in Engineering (WIE) is a global network of IEEE
                members and volunteers dedicated to promoting women engineers
                and scientists, and inspiring girls around the world to follow
                their academic interests in a career in engineering and science.
              </Typography>
              <Link href="https://wie.ieee.org/" rel="noopener" target="_blank">
                <Button
                  variant="contained"
                  color="primary"
                  size="large"
                  className={classes.button}
                >
                  Learn More
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
      <section className={classes.wie__joinus}>
        <Typography variant="h4" className={classes.wie__joinus__text}>
          On a mission to encourage women engineers to lead and prosper in
          technical fields and nurture their diverse talents through
          distinguished events and activities
        </Typography>
        <RouterLink to="/joinus" className={classes.link}>
          <Button
            variant="contained"
            color="primary"
            size="large"
            className={classes.Joinus__button}
          >
            Join Us
          </Button>
        </RouterLink>
      </section>
      <section className={classes.wie__benefits}>
        <Typography variant="h4" className={classes.wie__benefits__text}>
          WIE MEMBERSHIP OFFERS
        </Typography>
        <div className={classes.wie__benefits__cards}>
          <Paper elevation={8} className={classes.wie__benefits__cards__paper}>
            <img src={email} alt="email" />
            <Typography variant="body1">
              Features opportunities to network, volunteer, participate in local and global wie activities
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.wie__benefits__cards__paper}>
            <img src={medal} alt="medal" />
            <Typography variant="body1">
            IEEE program recognises wie members and groups who have made an outstanding contribution
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.wie__benefits__cards__paper}>
            <img src={tag} alt="tag" />
            <Typography variant="body1">
            Discounted registrations to the annual ieee-wie international leadership conferences and other events.
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.wie__benefits__cards__paper}>
            <img src={around} alt="around" />
            <Typography variant="body1">
            IEEE provides grants for ieee-wie members to attend and present at sponsored conferences and events
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.wie__benefits__cards__paper}>
            <img src={help} alt="help" />
            <Typography variant="body1">
            Get involved locally with an ieee-wie affinity group discover and connect with your peers volunteer
            </Typography>
          </Paper>
          <Paper elevation={8} className={classes.wie__benefits__cards__paper}>
            <img src={scholarship} alt="scholarship" />
            <Typography variant="body1">
            IEEE is pleased to offer pre-university, undergraduate and graduate students scholarships.
            </Typography>
          </Paper>
        </div>
      </section>
      <section className={classes.wie__team}>
        <Typography variant="h4" className={classes.wie__team__text}>
          Meet The Team
        </Typography>
        <div className={classes.wie__team__members}>
          {wie.map((person) => (
            <Profile
              key={person.name}
              name={person.name}
              designation={person.designation}
              emailURL={person.emailURL}
              linkedInURL={person.linkedInURL}
              image={person.image}
            />
          ))}
        </div>
      </section>
      <section className={classes.wie__message}>
        <Typography variant="h4">ADVISOR MESSAGE</Typography>
        <div className={classes.wie__message__content}>
          <div className={classes.wie__message__content__person}>
            <Avatar className={classes.wie__message__content__person__image} src="https://ik.imagekit.io/ieeensakcet/profiles/tr:w-150/rehana_mam.png"/>
            <Typography variant="h6">Ms Firdous Rehana</Typography>
          </div>
          <Typography
            variant="subtitle1"
            className={classes.wie__message__content__text}
          >
            In the context of Engineering, women play an essential role. When
            women are empowered with access to equal rights and opportunities,
            it results in the improvement of prospects for present and future
            generations. I believe that IEEE WIE is a community that greatly
            understands and promotes women's empowerment in the fields of STEM
            and all women should be part of it.
          </Typography>
        </div>
      </section>
    </div>
  );
};

export default Wie;
