import React, { useRef, useEffect, useState } from 'react';
import CountUp from 'react-countup';
import "../../../styles/stats_area.css";

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      setIsIntersecting(entry.isIntersecting);
    }, options);

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [options]);

  return [ref, isIntersecting];
};

function Stats() {
  const [ref, isVisible] = useIntersectionObserver({
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
  });

  return (
    <div className='stats-section' ref={ref}>
      <h2 className='stats_title'>Exlore hundreds of offerings tailored to your business needs</h2>
      <div className='stats-area'>
        <div className='top-stats'>
          <div className='stats-item border-l'>
            <h3 className='stats-item-title'>
              <CountUp 
                end={10} 
                redraw={true}
                start={isVisible ? 0 : undefined}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>+
            </h3>
            <p className='stats-item-desc'>
              Businesses
            </p>
          </div>
          <div className='stats-item border-l'>
            <h3 className='stats-item-title'>
              <CountUp 
                end={50} 
                redraw={true}
                start={isVisible ? 0 : undefined}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
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
              <CountUp 
                end={590} 
                redraw={true}
                start={isVisible ? 0 : undefined}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
              </CountUp>
            </h3>
            <p className='stats-item-desc'>
              products
            </p>
          </div>
          <div className='stats-item border-l'>
            <h3 className='stats-item-title'>
              <CountUp 
                end={30} 
                redraw={true}
                start={isVisible ? 0 : undefined}
              >
                {({ countUpRef }) => <span ref={countUpRef} />}
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