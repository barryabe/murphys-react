import React from 'react';
import ReactDOM from 'react-dom';
import './style.css';
import 'semantic-ui-css/semantic.min.css';
import { Container, Header } from 'semantic-ui-react';
import Menu from 'semantic-ui-react/dist/es/collections/Menu/Menu';
import Dropdown from 'semantic-ui-react/dist/es/modules/Dropdown/Dropdown';
import Icon from 'semantic-ui-react/dist/es/elements/Icon/Icon';
import Image from 'semantic-ui-react/dist/es/elements/Image/Image';
import Grid from 'semantic-ui-react/dist/es/collections/Grid/Grid';
import List from 'semantic-ui-react/dist/es/elements/List/List';
import Input from 'semantic-ui-react/dist/es/elements/Input/Input';
import Button from 'semantic-ui-react/dist/es/elements/Button/Button';

var GrHeight= {
  height: "500px"
}

class TopMenu extends React.Component {
  render() {
    return (
        <Menu borderless className="topmenu">
          <Container>

            <Image fitted src='http://murphyshawaii.com/media/2014/04/murphyshawaii.png'/>

            <Menu.Item position="right" name='Home' onClick={this.handleItemClick}/>

            <Dropdown item text="About Us">
              <Dropdown.Menu>
                <Dropdown.Item>Getting Here/Parking</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item name="St. Patrick's Day" onClick={this.handleItemClick}/>

            <Dropdown item text="Menus">
              <Dropdown.Menu>
                <Dropdown.Item>Lunch Menu</Dropdown.Item>
              </Dropdown.Menu>
            </Dropdown>

            <Menu.Item name="Bar" onClick={this.handleItemClick}/>

            <Menu.Item><Icon name = "search"/></Menu.Item>

          </Container>
        </Menu>
    )
  }
}

class MiddlePicture extends React.Component {
  render() {
    return (
        <div class = "murphys-background">
          <Grid style={GrHeight} verticalAlign="middle" centered container columns={2}>

            <Grid.Column>
            <Image src='http://murphyshawaii.com/media/2014/04/murphyshawaiilogo.png'/>
            </Grid.Column>

            <Grid.Column>
              <h3>A traditional downtown saloon and eatery located in the Honolulu Financial District, just one block off the waterfront, Murphy’s has been a haven for mariners, businessmen and locals since 1891.</h3>
            </Grid.Column>

          </Grid>
        </div>
    )
  }
}

class FooterMenu extends React.Component {
  render() {
    return (
        <Grid  centered columns={3} className="footer-background">
          <Grid.Column>
            Lunch
            <hr/>
            <List>
              <List.Item>Monday – Friday: 11:00am – 2:30pm</List.Item>
              <List.Item>Saturday – Sunday: Not open for lunch</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            Bar
            <hr/>
            <List>
              <List.Item>Monday- Friday from 11:00am</List.Item>
              <List.Item>Saturday- Sunday from 4:00pm</List.Item>
            </List>
          </Grid.Column>
          <Grid.Column>
            Dinner
            <hr/>
            <List>
              <List.Item>Monday – Saturday: 5:30pm – 10:00pm</List.Item>
              <List.Item>Sunday: 5:00pm – 9:00pm</List.Item>
            </List>
          </Grid.Column>
        </Grid>
    );
  }
}

class Murphys extends React.Component {
  render() {
    return (
        <div>
          <TopMenu/>
          <MiddlePicture/>
          <FooterMenu/>
        </div>
    );
  }
}

ReactDOM.render(<Murphys/>, document.getElementById('root'));
