import React, { useState } from 'react';
import {
  f7,
  Page,
  LoginScreenTitle,
  List,
  ListInput,
  ListButton,
  BlockFooter,
} from 'framework7-react';

export default ({ f7router }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const signIn = () => {
    f7.dialog.alert(`Username: ${username}<br>Password: ${password}`, () => {
      f7router.back();
    });
  };

  return (
    <Page noToolbar noNavbar noSwipeback loginScreen>
      <LoginScreenTitle>Framework7</LoginScreenTitle>
      <List form>
        <ListInput
          label="Username"
          type="text"
          placeholder="Your username"
          value={this.state.username}
          onInput={(e) => {
            setUsername(e.target.value);
          }}
        />
        <ListInput
          label="Password"
          type="password"
          placeholder="Your password"
          value={this.state.password}
          onInput={(e) => {
            setPassword(e.target.value);
          }}
        />
      </List>
      <List>
        <ListButton onClick={signIn}>Sign In</ListButton>
        <BlockFooter>
          Some text about login information.
          <br />
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.
        </BlockFooter>
      </List>
    </Page>
  );
};
