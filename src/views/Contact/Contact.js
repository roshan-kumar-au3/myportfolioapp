import React from 'react'
import Base from '../../core/Base'

const Contact = () => {
    return (
        <Base>
            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-12">
                    <iframe src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d15555.877846574187!2d77.5734042!3d12.909684299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae156225c01f0f%3A0xa147958ba4cddac4!2s281%2C%2074th%20Cross%20Road%2C%201st%20Stage%2C%20Kumaraswamy%20Layout%2C%20Bengaluru%2C%20Karnataka%20560078!5e0!3m2!1sen!2sin!4v1591297528689!5m2!1sen!2sin"
                    title="My Location"
                    width = "100%"
                    height = "450"
                    frameborder = "0"
                    allowfullscreen
                    ariaHidden = "false"
                    tabindex = "0"></iframe>
                    </div>
                </div>
            </div>
        </Base>
    )
}

export default Contact;
