import PropTypes from 'prop-types';
import {useState, useEffect}  from 'react';

const AnimatedCounter = ({ value }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const end = value;
    if (start === end) return;
    let totalDuration = 2000;
    let incrementTime = totalDuration / end;
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [value]);

  return <span>{count}</span>;
};

export default AnimatedCounter;

AnimatedCounter.propTypes = {
  value: PropTypes.arrayOf(PropTypes.string).isRequired,
};