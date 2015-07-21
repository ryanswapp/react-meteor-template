C.MainApp = React.createClass({
    render() {
        return (
            <div>
                {this.props.header}

                {this.props.content}

                {this.props.footer}
            </div>
        )
    }
});