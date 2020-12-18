import React from 'react';
import { Page, Navbar, App, View, List, ListItem } from 'framework7-react';

import ToolbarPage from './toolbar-tabbar_toolbar.jsx';
import TabbarPage from './toolbar-tabbar_tabbar.jsx';
import TabbarLabelsPage from './toolbar-tabbar_tabbar-labels.jsx';
import TabbarScrollablePage from './toolbar-tabbar_tabbar-scrollable.jsx';
import ToolbarHidePage from './toolbar-tabbar_toolbar-hide-scroll.jsx';

const routes = [
  {
    path: '/toolbar/',
    component: ToolbarPage,
  },
  {
    path: '/tabbar/',
    component: TabbarPage,
  },
  {
    path: '/tabbar-labels/',
    component: TabbarLabelsPage,
  },
  {
    path: '/tabbar-scrollable/',
    component: TabbarScrollablePage,
  },
  {
    path: '/toolbar-hide-scroll/',
    component: ToolbarHidePage,
  },
];

export default () => (
  <App routes={routes}>
    <View main>
      <Page>
        <Navbar title="Toolbar & Tabbar" />
        <List>
          <ListItem link="/toolbar/" title="Toolbar" />
          <ListItem link="/tabbar/" title="Tabbar" />
          <ListItem link="/tabbar-labels/" title="Tabbar With Labels" />
          <ListItem link="/tabbar-scrollable/" title="Tabbar Scrollable" />
          <ListItem link="/toolbar-hide-scroll/" title="Hide Toolbar On Scroll" />
        </List>
      </Page>
    </View>
  </App>
);
