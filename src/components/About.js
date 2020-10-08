import React, {component} from 'react';

class About extends React.Component {
    render() {
        return(
            <div>
                {/* <!-- About Section--> */}
                <section class="page-section bg-dark text-white mb-0" id="about">
                    <div class="container">
                        {/* <!-- About Section Heading--> */}
                        <h2 class="page-section-heading text-center text-uppercase text-white">About</h2>
                        {/* <!-- Icon Divider--> */}
                        <div class="divider-custom divider-light">
                            <div class="divider-custom-line"></div>
                            <div class="divider-custom-icon"><i class="fas fa-star"></i></div>
                            <div class="divider-custom-line"></div>
                        </div>
                        {/* <!-- About Section Content--> */}
                        <div class="row">
                            <div class="col-lg-4 ml-auto"><p class="lead"> </p><b>logos.ro</b> is a multi-award winning travelling website located in Romania. The website is run by a group of friends who are passionate about travelling.</div>
                            <div class="col-lg-4 mr-auto"><p class="lead"></p>The website was founded in late 2019 and the main idea of the app was to find the cheapest flights on the market.</div>
                        </div>
                    </div>
                </section>
            </div>
        )
    }
}

export default About;