import React from 'react';
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import "../../../styles/stats_area.css";

function Stats() {
  return (
    <div className='stats-section'>
      <h2 className='stats_title'>Exlore hundreds of offerings tailored to your business needs</h2>
      <div className='stats-area'>
        <div className='top-stats'>
          <div className='stats-item border-l'>
            <h3 className='stats-item-title'>
              <CountUp end={10} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>+
            </h3>
            <p className='stats-item-desc'>
              Businesses
            </p>
          </div>
          <div className='stats-item border-l'>
            <h3 className='stats-item-title'>
              <CountUp end={50} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>+
            </h3>
            <p className='stats-item-desc'>
              suppliers
            </p>
          </div>
        </div>
        <div className='top-stats lower-stats'>
          <div className='stats-item border-l'>
            <h3 className='stats-item-title'>
              <CountUp end={590} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>
            </h3>
            <p className='stats-item-desc'>
              products
            </p>
          </div>
          <div className='stats-item border-l'>
            <h3 className='stats-item-title'>
              <CountUp end={30} redraw={true}>
                {({ countUpRef, start }) => (
                  <VisibilitySensor onChange={start} delayedCall>
                    <span ref={countUpRef} />
                  </VisibilitySensor>
                )}
              </CountUp>+
            </h3>
            <p className='stats-item-desc'>
              regions
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Stats;