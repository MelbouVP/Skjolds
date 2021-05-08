import ClipLoader from "react-spinners/ClipLoader";

import './page-spinner.styles.scss';

const PageSpinner = () => {
    
    return (
        <div className="page-spinner__container">
            <div className="page-spinner__content">
                <ClipLoader color={'#0000FF'} size={150} />
            </div>
        </div>
    )
}

export default PageSpinner;