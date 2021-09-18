import React from 'react'

export const Footer = () => {
    return (
        <div>
            <footer className="footer footer-bar">
                <div className="container text-center">
                    <div className="row align-items-center">
                        <div className="col-sm-6">
                            <div className="text-sm-start">
                                <p className="mb-0">©
                                    <script>document.write(new Date().getFullYear())</script> Customer Feedback. Design with <i
                                        className="mdi mdi-heart text-danger"></i> by <a className="text-reset">Nandom Gusen</a>.
                                </p>
                            </div>
                        </div>


                    </div>

                </div>

            </footer>
        </div>
    )
}
