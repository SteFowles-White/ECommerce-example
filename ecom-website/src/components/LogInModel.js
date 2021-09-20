import React from 'react';
import  ReactDOM  from 'react-dom';

const LogInModel = () => {
    return (
        <div>
            <section data-testid="login-model">
                <form>
                    <div>
                        <label>Some text
                        </label>
                        <input type="text" />
                    </div>
                </form>
                <div>
                    <button>Submit</button>
                </div>
            </section>
        </div>

    )
}

const RenderLogInModel = () => {
    console.log(document.getElementById('login-model'))
    return (
        <React.Fragment>
            { ReactDOM.createPortal( <LogInModel />, document.getElementById('login-model'))}
        </React.Fragment>
    )
}




export default RenderLogInModel;