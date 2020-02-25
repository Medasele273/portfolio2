import React, { Component } from 'react';
import { Grid, Cell, List, ListItem, ListItemContent } from 'react-mdl';
class Contact extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6} className="contact-cell">
            <h2>Medhanie Weldeab</h2>
            <img src="https://cdn2.iconfinder.com/data/icons/avatar-2/512/Fred_man-512.png" alt="avatar" style={{ height: "200px" }} />


            <ol style={{ width: "70%", margin: " 0 auto", paddingTop: "20px" }}>
              <li>Hard worker</li>
              <li>open minded,love to learn new things</li>
              <li>love to help people</li>
              <li>love to solve problems</li>
              <li>Developer (front and back end)</li>
              <li>IT technician</li>
              <li>Mobile technician</li>
            </ol>

          </Cell>
          <Cell col={6} className="contact-cell">
            <h2>Contact Me</h2>
            <hr />
            <div className="contactMe-left">
              <List>
                <ListItem>
                  <ListItemContent style={{ fontFamily: "Anton", fontSize: "25px" }}><i class="fas fa-envelope-square"></i>medasele273@gmail.com</ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontFamily: "Anton", fontSize: "25px" }}><i class="fab fa-github-square"></i><a href="https://github.com/Medasele273" target="_blank" rel="noopener noreferrer">
                    https://github.com/Medasele273</a></ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent style={{ fontFamily: "Anton", fontSize: "25px" }}><i class="fas fa-phone-square-alt"></i>+46739338848</ListItemContent>
                </ListItem>
              </List>
            </div>

          </Cell>
        </Grid>
      </div >

    );
  }
}
export default Contact;