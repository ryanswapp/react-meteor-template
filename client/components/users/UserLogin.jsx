C.UserLogin = React.createClass({
    mixins: [],
    PropTypes: {

    },
    getInitialState() {
        return {
            errors: {}
        }
    },
    getMeteorData() {
        return {

        }
    },
    onSubmit(event) {
        event.preventDefault();

        var self = this;

        var email = React.findDOMNode(this.refs.email).value;
        var password = React.findDOMNode(this.refs.password).value;

        var errors = {};

        if (!email) {
            errors.email = "Email required"
        }

        if (!password) {
            errors.password = "Password required"
        }

        self.setState({
            errors: errors
        });

        if (! _.isEmpty(errors)) {
            return;
        }

        Meteor.loginWithPassword(email, password, (err) => {
            if (err) {
                self.setState({
                    errors: {'none': err.reason}
                });

                return;
            } else {
                FlowRouter.go('Home');
            }
        });
    },
    render() {
        return (
            <div className="container">
                <div className="row">
                    <div className="col-sm-6 col-sm-offset-3">
                        <h1>Login</h1>

                        <form onSubmit={this.onSubmit}>
                            <C.AuthErrors errors={this.state.errors} />
                            <div className={!!this.state.errors.email ? 'form-group has-error' : 'form-group'}>
                                <label for="email">Email</label>
                                <input type="text" ref="email" className="form-control" />
                            </div>
                            <div className={!!this.state.errors.password ? 'form-group has-error' : 'form-group'}>
                                <label for="password">Password</label>
                                <input type="password" ref="password" className="form-control" />
                            </div>
                            <input type="submit" className="btn btn-default"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});