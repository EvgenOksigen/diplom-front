import React from 'react';
import { Route, Switch } from "react-router-dom";
import { connect } from "react-redux";
import Auth from "../views/pages/Auth/Auth";
import DefaultRoute from './default'
import GuestRoute from './hoc/GuestRoute';

import { me, setMe } from "../state/ducks/user/actions";
import PrivateRoute from './hoc/PrivateRoute';
import Home from '../views/pages/Home/Home';
import MainContainer from '../views/layout/MainContainer/MainContainer'

class App extends React.Component {

  state = {
    loading: true,
    resources: []
  };

  componentDidMount() {
    this.getMe();
  }

  getMe = async () => {
    const { me } = this.props;

    const token = localStorage.getItem("token");

    if (token) {
      await me().catch(() => {
        localStorage.removeItem("token");
      });
     }
     this.setState({ loading: false });

  };

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { user } = nextProps;
    if (user && user.isLogged && !user.profile) {
      this.setState({ loading: true });

      this.getMe();
    }
  }

  render () { 
    
    return(
      <MainContainer /* className={cm({ [s.visualImpairments]: isChangeTheme })} */>

        {!this.state.loading &&(

          <Switch>
              <Route path="/" exact component={DefaultRoute} />

              <GuestRoute path="/login" exact component={Auth} />

              <PrivateRoute path="/home/:user?/:action?" exact component={Home}/>

            </Switch>
          ) 
        }


      </MainContainer>

     ) 
  }
}

const mapStateToProps = ({ user }) => ({ user });

const mapDispatchToProps = { me, setMe };

export default connect(mapStateToProps, mapDispatchToProps)(App);