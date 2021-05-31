import React, {Fragment} from 'react'

/* IMPORTS */
import {Sidebar} from './Sidebar'
import {Content} from './Content'

export const App = () => {
    return (
        <Fragment>
            <Sidebar/>
            <Content/>
        </Fragment>
    )
}
