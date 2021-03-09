import React from 'react';
import { Card, Divider, Dropdown, Header, Popup } from 'semantic-ui-react';
import SidebarVisible from '../components/SideBar';
import Map from '../components/Map';
import State from '../components/State';
import Kauai from '../components/Kauai';
import Maui from '../components/Maui';
import Honolulu from '../components/Honolulu';
import Hawaii from '../components/Hawaii';

const countyOptions = [
  { value: 'State', text: 'State' },
  { value: 'Hawaii', text: 'Hawaii County' },
  { value: 'Honolulu', text: 'Honolulu' },
  { value: 'Kauai', text: 'Kauai' },
  { value: 'Maui', text: 'Maui' },
];

class Community extends React.Component {
  state = {
    value: '',
  }

  handleChange = (e, { value }) => this.setState({ value })

  render() {
    const { value } = this.state;
    return (
        <div id='community-container'>
          <SidebarVisible/>
          <div id='community-map'>
            <Map/>
          </div>
          <div id='community-bottom'>
            <Dropdown
                placeholder='Select County'
                selection
                options={countyOptions}
                onChange={this.handleChange}
                value={value}
            />
            {value === '' && <State/>}
            {value === 'State' && <State/>}
            {value === 'Hawaii' && <Hawaii/>}
            {value === 'Honolulu' && <Honolulu/>}
            {value === 'Kauai' && <Kauai/>}
            {value === 'Maui' && <Maui/>}
            <Divider horizontal>
              <Header as='h3'>
                Get Involved
              </Header>
            </Divider>
            <Card.Group centered itemsPerRow={6}>
              <Popup
                  trigger={
                    <Card href='https://www.hawaiianelectric.com/products-and-services/electric-vehicles'
                          target='_blank'>
                      <Card.Content
                          style={{
                            height: '200px',
                            backgroundImage: 'url(/images/EV.jpeg)',
                            backgroundSize: 'cover',
                          }}
                      />
                      <Card.Content id="card-bottom" textAlign="center">
                        Switch to EV or Hybrid
                      </Card.Content>
                    </Card>}> <Popup.Content>
                Learn more about the benefits of driving an electric vehicle
              </Popup.Content>
              </Popup>
              <Popup
                  trigger={
                    <Card href='http://hidot.hawaii.gov/highways/rideshare/match/' target='_blank'>
                      <Card.Content
                          style={{
                            height: '200px',
                            backgroundImage: 'url(/images/Carpool.jpg)',
                            backgroundSize: 'cover',
                          }}
                      />
                      <Card.Content id="card-bottom" textAlign="center">
                        Carpool
                      </Card.Content>
                    </Card>}> <Popup.Content>
                Ride with friends and save money
              </Popup.Content>
              </Popup>
              <Popup
                  trigger={
                    <Card href='http://www.thebus.org/' target='_blank'>
                      <Card.Content
                          style={{
                            height: '200px',
                            backgroundImage: 'url(/images/Bus.jpg)',
                            backgroundSize: 'cover',
                          }}
                      />
                      <Card.Content id="card-bottom" textAlign="center">
                        Take the Bus
                      </Card.Content>
                    </Card>}> <Popup.Content>
                Learn more about public transportation in Hawaii
              </Popup.Content>
              </Popup><Popup
                trigger={
                  <Card href='https://gobiki.org/' target='_blank'>
                    <Card.Content
                        style={{
                          height: '200px',
                          backgroundImage: 'url(/images/Bike.jpg)',
                          backgroundSize: 'cover',
                        }}
                    />
                    <Card.Content id="card-bottom" textAlign="center">
                      Bike or Walk
                    </Card.Content>
                  </Card>}> <Popup.Content>
              Learn more about bike sharing
            </Popup.Content>
            </Popup><Popup
                trigger={
                  <Card href='#Dashboard'>
                    <Card.Content
                        style={{
                          height: '200px',
                          backgroundImage: 'url(/images/Telework.jpg)',
                          backgroundSize: 'cover',
                        }}
                    />
                    <Card.Content id="card-bottom" textAlign="center">
                      Work from Home
                    </Card.Content>
                  </Card>}> <Popup.Content>
              Skip the commute and work from home
            </Popup.Content>
            </Popup>
            </Card.Group>
          </div>
        </div>
    );
  }
}

export default Community;