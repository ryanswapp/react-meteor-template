C.AuthFormInput = React.createClass({
    propTypes: {
        hasError: React.PropTypes.bool,
        label: React.PropTypes.string,
        iconClass: React.PropTypes.string,
        type: React.PropTypes.string,
        name: React.PropTypes.string
    },
    render() {
        var className = "form-group";
        if (this.props.hasError) {
            className += " has-error";
        }

        return (
            <div className={ className }>
                <label for={ this.props.name } className="control-label"></label>
                <input type={ this.props.type } name={ this.props.name } placeholder={ this.props.label }/>
            </div>
        )
    }
});