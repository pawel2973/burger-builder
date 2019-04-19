import React, {Component, Fragment} from 'react';
import Modal from '../../components/UI/Modal/Modal';


const withErrorHandler = (WrappedComponent, axios) => {
    return class extends Component {
        state = {
            error: null
        };

        // This will be called before the child components are rendered.
        // In the future, this React lifecycle hook will not be supported anymore.
        // Just use the constructor because the general idea here is that we execute
        // this code when this component here gets created.
        componentWillMount() {
            // whenever I send a request, I don't have my error set up anymore
            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });

            this.resInterceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: error});
            });
        }

        // This will just ensure that whenever we don't need e.g. BurgerBuilder component anymore
        // that we clean up the interceptors which we attached due to using withErrorHandler
        // in the burgerBuilder so that if we reuse withErrorHandler in our application, we don't
        // create more and more interceptors with the old ones living on.
        componentWillUnmount() {
            axios.interceptors.request.eject(this.reqInterceptor);
            axios.interceptors.response.eject(this.resInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        };

        render() {
            return (
                <Fragment>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}>
                        {this.state.error ? this.state.error.message : null}
                    </Modal>
                    <WrappedComponent {...this.props} />
                </Fragment>
            );
        }
    }
};

export default withErrorHandler;