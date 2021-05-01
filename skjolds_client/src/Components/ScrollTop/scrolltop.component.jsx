import { useEffect } from 'react';

import { withRouter } from 'react-router-dom';

const ScrollTop = ({ history }) => {
  
  
  useEffect(() => {
    const unlisten = history.listen(() => {
      window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
      });
    });
    return () => {
      unlisten();
    }
  }, [history]);

  return (null);
}

export default withRouter(ScrollTop);