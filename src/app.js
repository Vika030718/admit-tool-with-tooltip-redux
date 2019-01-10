import {render} from 'react-dom';
import React from 'react';
import 'bootstrap';
import './scss/app.scss';
import {HashRouter, Route, Switch, Redirect} from 'react-router-dom';
import {HomePage} from './components/mainPages/HomePage';
import {AboutPage} from './components/mainPages/AboutPage';
import {GalleryPage} from './components/mainPages/GalleryPage';
import {Whoops404Page} from './components/mainPages/Whoops404Page';

window.React = React;
render(
    <HashRouter>
      <div className="main">
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/gallery" component={GalleryPage} />
          <Redirect from="/history" to="/about/history" />
          <Redirect from="/services" to="/about/services" />
          <Redirect from="/location" to="/about/location" />
          <Route path="/about" component={AboutPage} />
          <Route component={Whoops404Page} />
        </Switch>
      </div>
    </HashRouter>,
    document.getElementById('root'),
);
