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

        var email = $(event.target).find("[name=email]").val();
        var password = $(event.target).find("[name=password]").val();

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
                            <C.AuthFormInput hasError={!!this.state.errors.email} name="Email" type="text" label="Email" />
                            <C.AuthFormInput hasError={!!this.state.errors.password} name="Password" type="password" label="Password" />
                            <input type="submit" className="btn btn-default"/>
                        </form>
                    </div>
                </div>
            </div>
        )
    }
});