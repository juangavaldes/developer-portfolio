import React from 'react'
import { Helmet } from 'react-helmet'

import { Navbar, Footer, Landing, About, Skills, Testimonials, Blog, Education, Experience, Contacts, Projects, Services, Achievement } from '../../components'
import { headerData } from '../../data/headerData'

function Main() {
    return (
        <div>
            <Helmet>
                <title>Rebeca Arroyo Lobo</title>
            </Helmet>
            <Navbar />        
            <Landing />
            <About />
            <Projects />
            <Skills />
            <Education />
            <Achievement />
            {/* <Blog /> */}
            <Contacts />
            {/* <Footer /> */}
        </div>
    )
}

export default Main
