import React from 'react';
import {
  App,
  View,
  Page,
  Navbar,
  Toolbar,
  Link,
  Fab,
  Icon,
  FabButtons,
  FabButton,
  Block,
} from 'framework7-react';

export default () => (
  <App>
    <View main>
      <Page>
        <Navbar title="Floating Action Button" />

        <Toolbar bottom className="fab-morph-target">
          <Link>Link 1</Link>
          <Link>Link 2</Link>
          <Link>Link 3</Link>
        </Toolbar>

        <Fab position="left-top" slot="fixed" color="yellow">
          <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
          <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
          <FabButtons position="bottom">
            <FabButton>1</FabButton>
            <FabButton>2</FabButton>
            <FabButton>3</FabButton>
          </FabButtons>
        </Fab>

        <Fab position="right-top" slot="fixed" color="pink">
          <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
          <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
          <FabButtons position="left">
            <FabButton>1</FabButton>
            <FabButton>2</FabButton>
            <FabButton>3</FabButton>
          </FabButtons>
        </Fab>

        <Fab position="center-center" slot="fixed" color="green">
          <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
          <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
          <FabButtons position="center">
            <FabButton>1</FabButton>
            <FabButton>2</FabButton>
            <FabButton>3</FabButton>
            <FabButton>4</FabButton>
          </FabButtons>
        </Fab>

        <Fab position="left-bottom" slot="fixed" morphTo=".toolbar.fab-morph-target">
          <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
          <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
        </Fab>

        <Fab position="right-bottom" slot="fixed" color="orange">
          <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
          <Icon ios="f7:xmark" aurora="f7:xmark" md="material:close"></Icon>
          <FabButtons position="top">
            <FabButton label="Action 1">1</FabButton>
            <FabButton label="Action 2">2</FabButton>
          </FabButtons>
        </Fab>

        <Fab position="center-bottom" slot="fixed" text="Create" color="red">
          <Icon ios="f7:plus" aurora="f7:plus" md="material:add"></Icon>
        </Fab>

        <Block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quia, quo rem beatae, delectus
            eligendi est saepe molestias perferendis suscipit, commodi labore ipsa non quasi eum
            magnam neque ducimus! Quasi, numquam.
          </p>
          <p>
            Maiores culpa, itaque! Eaque natus ab cum ipsam numquam blanditiis a, quia, molestiae
            aut laudantium recusandae ipsa. Ad iste ex asperiores ipsa, mollitia perferendis
            consectetur quam eaque, voluptate laboriosam unde.
          </p>
          <p>
            Sed odit quis aperiam temporibus vitae necessitatibus, laboriosam, exercitationem
            dolores odio sapiente provident. Accusantium id, itaque aliquam libero ipsum eos fugiat
            distinctio laboriosam exercitationem sequi facere quas quidem magnam reprehenderit.
          </p>
          <p>
            Pariatur corporis illo, amet doloremque. Ab veritatis sunt nisi consectetur error modi,
            nam illo et nostrum quia aliquam ipsam vitae facere voluptates atque similique odit
            mollitia, rerum placeat nobis est.
          </p>
          <p>
            Et impedit soluta minus a autem adipisci cupiditate eius dignissimos nihil officia
            dolore voluptatibus aperiam reprehenderit esse facilis labore qui, officiis consectetur.
            Ipsa obcaecati aspernatur odio assumenda veniam, ipsum alias.
          </p>
        </Block>
        <Block>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Culpa ipsa debitis sed nihil
            eaque dolore cum iste quibusdam, accusamus doloribus, tempora quia quos voluptatibus
            corporis officia at quas dolorem earum!
          </p>
          <p>
            Quod soluta eos inventore magnam suscipit enim at hic in maiores temporibus pariatur
            tempora minima blanditiis vero autem est perspiciatis totam dolorum, itaque repellat?
            Nobis necessitatibus aut odit aliquam adipisci.
          </p>
          <p>
            Tenetur delectus perspiciatis ex numquam, unde corrupti velit! Quam aperiam, animi fuga
            veritatis consectetur, voluptatibus atque consequuntur dignissimos itaque, sint impedit
            cum cumque at. Adipisci sint, iusto blanditiis ullam? Vel?
          </p>
          <p>
            Dignissimos velit officia quibusdam! Eveniet beatae, aut, omnis temporibus consequatur
            expedita eaque aliquid quos accusamus fugiat id iusto autem obcaecati repellat fugit
            cupiditate suscipit natus quas doloribus? Temporibus necessitatibus, libero.
          </p>
          <p>
            Architecto quisquam ipsa fugit facere, repudiandae asperiores vitae obcaecati possimus,
            labore excepturi reprehenderit consectetur perferendis, ullam quidem hic, repellat
            fugiat eaque fuga. Consectetur in eveniet, deleniti recusandae omnis eum quas?
          </p>
          <p>
            Quos nulla consequatur quo, officia quaerat. Nulla voluptatum, assumenda quibusdam,
            placeat cum aut illo deleniti dolores commodi odio ipsam, recusandae est pariatur veniam
            repudiandae blanditiis. Voluptas unde deleniti quisquam, nobis?
          </p>
          <p>
            Atque qui quaerat quasi officia molestiae, molestias totam incidunt reprehenderit
            laboriosam facilis veritatis, non iusto! Dolore ipsam obcaecati voluptates minima maxime
            minus qui mollitia facere. Nostrum esse recusandae voluptatibus eligendi.
          </p>
        </Block>
      </Page>
    </View>
  </App>
);
