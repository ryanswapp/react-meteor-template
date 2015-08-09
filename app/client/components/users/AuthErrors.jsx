C.AuthErrors = React.createClass({
    propTypes: {
        errors: React.PropTypes.object
    },
    render() {
        if (this.props.errors) {
            return (
                <ul className="list-group">
                    {
                        _.values(this.props.errors).map((errorMessage) => {
                            return <li key={errorMessage} className="list-group-item alert alert-danger">{errorMessage}</li>;
                        })
                    }
                </ul>
            )
        }
    }
});