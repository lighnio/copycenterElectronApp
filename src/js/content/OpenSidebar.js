import React, {Fragment} from 'react'

export const OpenSidebar = () => {
    return (
        <Fragment>
            {/* <!-- open sidebar menu --> */}
				<a className="btn btn-primary btn-customized open-menu" href="#" role="button">
                    <i className="fas fa-align-left"></i> <span>Menu</span>
                </a>
        </Fragment>
    )
}
