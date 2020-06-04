import React from 'react'
import Base from '../../core/Base'

const ErrorPage = () => {
    return (
        <Base>
            <section className="presentation">
                    <div className="introduction">
                        <div>
                            <h1 className="text-danger">404! Oops page not found</h1>
                        </div>
                    </div>    
            </section>
        </Base>
    )
}

export default ErrorPage;
