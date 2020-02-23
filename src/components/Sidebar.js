import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './component.css';
import '@trendmicro/react-sidenav/dist/react-sidenav.css';
import SideNav, {
  NavItem, NavIcon, NavText,
} from '@trendmicro/react-sidenav';


function AddSideBar() {
  return (
    <>

      <SideNav
        onSelect={() => {
          // Add your code here
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="home">
            <NavIcon>
              <i className="fa fa-fw fa-home" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Home
            </NavText>
          </NavItem>
          <NavItem eventKey="charts">
            <NavIcon>
              <i className="fa fa-fw fa-line-chart" style={{ fontSize: '1.75em' }} />
            </NavIcon>
            <NavText>
              Charts
            </NavText>
            <NavItem eventKey="charts/linechart">
              <NavText>
                Line Chart
              </NavText>
            </NavItem>
            <NavItem eventKey="charts/barchart">
              <NavText>
                Bar Chart
              </NavText>
            </NavItem>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
    </>
  );
}
export default AddSideBar;
