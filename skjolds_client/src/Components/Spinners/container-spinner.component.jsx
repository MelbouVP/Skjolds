import PulseLoader from "react-spinners/PulseLoader";

import './container-spinner.styles.scss'

const ContainerSpinnder = () => {
    
    return (
        <div className="container-spinner__container">
            <div className="container-spinner__content">
                <PulseLoader color={'#0000FF'} size={10} margin={10}/>
            </div>
        </div>
    )
}

export default ContainerSpinnder;