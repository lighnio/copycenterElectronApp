import React, {Fragment} from 'react'

/* IMPORTS */
import {OpenSidebar} from './content/OpenSidebar'
import {TopContent} from './content/TopContent'
import {SectionOne} from './content/SectionOne'
import {SectionTwo} from './content/SectionTwo'
import {SectionThree} from './content/SectionThree'
import {SectionFour} from './content/SectionFour'
import {SectionFive} from './content/SectionFive'
import {SectionSix} from './content/SectionSix'
import {Footer} from './content/Footer'

export const Content = () => {
    return (
        <Fragment>
            <OpenSidebar/>

            <TopContent/>

            <SectionOne/>

            <SectionTwo/>

            <SectionThree/>

            <SectionFour/>

            <SectionFive/>

            {/* <SectionSix/> */}

            <Footer/>
        </Fragment>
    )
}

