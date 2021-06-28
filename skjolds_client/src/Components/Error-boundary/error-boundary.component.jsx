import React from 'react';
import { withTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import './error-boundary.styles.scss'

class ErrorHandler extends React.Component {
    constructor(props) {
      super(props);
      this.state = { hasError: false };
    }


    // ErrorBoundary component is responsible for encountered errors and displaying 404 page
  
    // If error is caught
    static getDerivedStateFromError(error) {
      // Update state so the next render will show the fallback UI.
      return { hasError: true };
    }

  
    // Reset error state
    handleClick = () => {
      this.setState({
        hasError: false
      })
    }
  
    // if no error has been caught then renders child components i.e. the application
    render() {

      const { t } = this.props;

      console.log(this.props)

      if (this.state.hasError) {
        return (
            <div className="error-boundary">
                <div className='wrapper'>
                    <div className="content">
                        <h1>
                          {t('Errorpage.title')}
                        </h1>
                        <p>
                          {t('Errorpage.text')}
                        </p>
                        <div className="buttons">
                            <Link to='/' onClick={this.handleClick}>
                              {t('Errorpage.link')}
                            </Link>
                        </div>
                
                    </div>
                </div>
            </div>
        )
      }
  
      return this.props.children; 
    }
  }

const ErrorBoundary = withTranslation()(ErrorHandler);

export default ErrorBoundary;