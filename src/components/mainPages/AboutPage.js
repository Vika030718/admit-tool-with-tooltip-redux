import React from 'react';
import {Route} from 'react-router-dom';
import {PageTemplate} from './../PageTemplate';
import {About} from './../aboutPages/About';
import {Contacts} from './../aboutPages/Contacts';

export const AboutPage = () =>
  <PageTemplate>
    <section className="about">
      <Route exact path="/about" component={About}/>
      <Route path="/about/contacts" component={Contacts}/>
    </section>
  </PageTemplate>;
