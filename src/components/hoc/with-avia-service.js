import React from 'react';
import AviaServiceContext from '../avia-service-context';

const WithAviaService = () => (Wrapped) => {
    return (props) => {
        return (
            <AviaServiceContext.Consumer>
                {
                    (AviaSalesService) => {
                        return <Wrapped {...props} AviaSalesService={AviaSalesService} />
                    }
                }
            </AviaServiceContext.Consumer>
        )
    }
}

export default WithAviaService;