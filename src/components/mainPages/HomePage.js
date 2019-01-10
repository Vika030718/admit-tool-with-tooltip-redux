import React from 'react';
import {PageTemplate} from './../PageTemplate';

export const HomePage = () =>
  <PageTemplate>
    <section className="home">
      <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="./src/images/crystalcaves-hero-01.jpg" alt="First slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Caves</h5>
              <p>Some Caves</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./src/images/forests.jpg" alt="Second slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Forests</h5>
              <p>Some Forests</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./src/images/marble-caves-CAVE0416.jpg" alt="Third slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Sea</h5>
              <p>Some Seas</p>
            </div>
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="./src/images/djungel_display.jpg" alt="Fourth slide"/>
            <div className="carousel-caption d-none d-md-block">
              <h5>Caves</h5>
              <p>Caves</p>
            </div>
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div>
      <section>
      <p className="mt-4">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero.
        Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum.
        Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.
        Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Curabitur
        sodales ligula in libero.
      </p>
      <p>
          Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
          In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
          nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
          quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
          nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
      </p>
      <p>
          Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
          In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
          nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
          quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
          nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
      </p>
      <p>
          Sed dignissim lacinia nunc. Curabitur tortor. Pellentesque nibh. Aenean quam.
          In scelerisque sem at dolor. Maecenas mattis. Sed convallis tristique sem. Proin ut ligula vel
          nunc egestas porttitor. Morbi lectus risus, iaculis vel, suscipit quis, luctus non, massa. Fusce ac turpis
          quis ligula lacinia aliquet. Mauris ipsum. Nulla metus metus, ullamcorper vel, tincidunt sed, euismod in,
          nibh. Quisque volutpat condimentum velit. Class aptent taciti sociosqu ad litora torquent per conubia
          nostra, per inceptos himenaeos.
      </p>
    </section>
    </section>

  </PageTemplate>;