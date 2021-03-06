import React from 'react';

const Home = () => {
    return(
        <React.Fragment>
            <main data-testid="home-router-page" className='container'>
                <div className='row'>
                    <div className="col-xs-6 col-sm-9 col-md-6">
                        <p>Hello World</p>
                        <h1>Header</h1>
                        <h2>Header</h2>
                        <h3>Header</h3>
                        <h4>Header</h4>
                        <h5>Header</h5>
                        <h6>Header</h6>
                        <p><a>Contrary to popular belief</a>, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature, discovered the undoubtable source. Lorem Ipsum comes from sections 1.10.32 and 1.10.33 of "de Finibus Bonorum et Malorum" (The Extremes of Good and Evil) by Cicero, written in 45 BC. This book is a treatise on the theory of ethics, very popular during the Renaissance. The first line of Lorem Ipsum, "Lorem ipsum dolor sit amet..", comes from a line in section 1.10.32.</p>
                    </div>
                </div>
            </main>
        </React.Fragment>

    )
}

export default Home;