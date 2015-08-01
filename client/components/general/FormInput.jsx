C.FormInput = React.createClass({
    propTypes: {
        hasError: React.PropTypes.bool,
        label: React.PropTypes.string,
        type: React.PropTypes.string,
        name: React.PropTypes.string,
        value: React.PropTypes.string,
        onKeyUp: React.PropTypes.func,
        onBlur: React.PropTypes.func
    },
    shouldComponentUpdate() {
        return true;
    },
    render() {
        var className = "form-group";
        if (this.props.hasError) {
            className += " has-error";
        }

        if (this.props.type === "textarea") {
            return (
                <div className={ className }>
                    <label htmlFor={ this.props.name.toLowerCase() } className="control-label">{ this.props.name }</label>
                    <textarea type={ this.props.type } className="form-control" name={ this.props.name.toLowerCase() } placeholder={ this.props.label } defaultValue={ this.props.value } onKeyUp={ this.props.onKeyUp } onBlur={ this.props.onBlur }></textarea>
                </div>
            )
        }

        return (
            <div className={ className }>
                <label htmlFor={ this.props.name.toLowerCase() } className="control-label">{ this.props.name }</label>
                <input type={ this.props.type } className="form-control" name={ this.props.name.toLowerCase() } placeholder={ this.props.label } defaultValue={ this.props.value } onKeyUp={ this.props.onKeyUp } onBlur={ this.props.onBlur }/>
            </div>
        )
    }
});