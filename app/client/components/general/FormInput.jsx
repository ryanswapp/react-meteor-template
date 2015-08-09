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
        const {type, label, name, value, onKeyUp, onBlur } = this.props;
        let inputType;

        var className = "form-group";
        if (this.props.hasError) {
            className += " has-error";
        }

        switch (type) {
            case "textarea":
                inputType = (
                  <textarea type={ type } className="form-control" name={ name.toLowerCase() } placeholder={ name } defaultValue={ value } onKeyUp={ onKeyUp } onBlur={ onBlur }></textarea>
                );
                break;
            default:
                inputType = (
                  <input type={ type } className="form-control" name={ name.toLowerCase() } placeholder={ name } defaultValue={ value } onKeyUp={ onKeyUp } onBlur={ onBlur }/>
                );
                break;
        }


        return (
          <div className={ className }>
              { label === "none" ? "" : <label htmlFor={ name.toLowerCase() } className="control-label">{ name }</label> }
              { inputType }
          </div>
        )

    }
});