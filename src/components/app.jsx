import React from "react";

import {
  App,
  Panel,
  Views,
  View,
  Popup,
  Page,
  Navbar,
  Toolbar,
  NavRight,
  Link,
  Block,
  BlockTitle,
  LoginScreen,
  LoginScreenTitle,
  List,
  ListItem,
  ListInput,
  ListButton,
  BlockFooter
} from "framework7-react";

import { Provider } from "react-redux";
import store  from "../store";

import cordovaApp from "../js/cordova-app";
import routes from "../js/routes";

export default class extends React.Component {
  constructor() {
    super();

    this.state = {
      // Framework7 Parameters
      f7params: {
        id: "f7.react.todos", // App bundle ID
        name: "f7-react-todos", // App name
        theme: "auto", // Automatic theme detection
        // App root data
        data: function() {
          return {
            user: {
              firstName: "John",
              lastName: "Doe"
            }
          };
        },

        // App routes
        routes: routes,

        // Input settings
        input: {
          scrollIntoViewOnFocus: this.$device.cordova && !this.$device.electron,
          scrollIntoViewCentered: this.$device.cordova && !this.$device.electron
        },
        // Cordova Statusbar settings
        statusbar: {
          iosOverlaysWebView: true,
          androidOverlaysWebView: false
        }
      },
      // Login screen demo data
      username: "",
      password: ""
    };
  }
  render() {
    return (
      <Provider store={store}>
        <App params={this.state.f7params}>
          {/* Left panel with cover effect*/}
          <Panel left cover themeDark>
            <View>
              <Page>
                <Navbar title="Left Panel" />
                <Block>Left panel content goes here</Block>
              </Page>
            </View>
          </Panel>

          {/* Right panel with reveal effect*/}
          <Panel right reveal themeDark>
            <View>
              <Page>
                <Navbar title="Right Panel" />
                <Block>Right panel content goes here</Block>
              </Page>
            </View>
          </Panel>

          {/* Your main view, should have "view-main" class */}
          <View main className="safe-areas" url="/" />

          {/* Popup */}
          <Popup id="my-popup">
            <View>
              <Page>
                <Navbar title="Popup">
                  <NavRight>
                    <Link popupClose>Close</Link>
                  </NavRight>
                </Navbar>
                <Block>
                  <p>Popup content goes here.</p>
                </Block>
              </Page>
            </View>
          </Popup>

          <LoginScreen id="my-login-screen">
            <View>
              <Page loginScreen>
                <LoginScreenTitle>Login</LoginScreenTitle>
                <List form>
                  <ListInput
                    type="text"
                    name="username"
                    placeholder="Your username"
                    value={this.state.username}
                    onInput={e => this.setState({ username: e.target.value })}
                  ></ListInput>
                  <ListInput
                    type="password"
                    name="password"
                    placeholder="Your password"
                    value={this.state.password}
                    onInput={e => this.setState({ password: e.target.value })}
                  ></ListInput>
                </List>
                <List>
                  <ListButton
                    title="Sign In"
                    loginScreenClose
                    onClick={() => this.alertLoginData()}
                  />
                  <BlockFooter>
                    Some text about login information.
                    <br />
                    Click "Sign In" to close Login Screen
                  </BlockFooter>
                </List>
              </Page>
            </View>
          </LoginScreen>
        </App>
      </Provider>
    );
  }
  alertLoginData() {
    this.$f7.dialog.alert(
      "Username: " +
        this.state.username +
        "<br>Password: " +
        this.state.password
    );
  }
  componentDidMount() {
    this.$f7ready(f7 => {
      // Init cordova APIs (see cordova-app.js)
      if (f7.device.cordova) {
        cordovaApp.init(f7);
      }
      // Call F7 APIs here
    });
  }
}
