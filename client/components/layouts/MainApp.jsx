C.MainApp = React.createClass({
    propTypes: {},
    mixins : [/*ReactMeteorData*/],

    getInitialState() {
        return {};
    },
    getMeteorData() {},

    componentWillMount() {},
    componentWillReceiveProps() {},
    shouldComponentUpdate() {
        return true;
    },
    componentWillUnmount() {},

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