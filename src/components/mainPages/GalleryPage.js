import React from 'react';
import {PageTemplate} from './../PageTemplate';
import AdminTool from './../AdminTool';
import 'bootstrap';
import './../../scss/app.scss';
import storeFactory from './../../store';

const store = storeFactory();

export const GalleryPage = () =>
  <PageTemplate>
    <section className="products">
      <AdminTool store={store}/>
    </section>
  </PageTemplate>;