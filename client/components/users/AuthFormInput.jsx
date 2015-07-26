C.AuthFormInput = React.createClass({
    propTypes: {
        hasError: React.PropTypes.bool,
        label: React.PropTypes.string,
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
                <label for={ this.props.name.toLowerCase() } className="control-label">{ this.props.name }</label>
                <input type={ this.props.type } className="form-control" name={ this.props.name.toLowerCase() } placeholder={ this.props.label }/>
            </div>
        )
    }
});