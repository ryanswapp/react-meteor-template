FlowRouter.route("/", {
    name: 'Home',
    subscriptions(params) {

    },
    action(params) {
        renderMainAppWith(<C.Home />);
    }
});

FlowRouter.route("/login", {
    name: "Login",
    subscriptions(params) {

    },
    action(params) {
        renderMainAppWith(<C.UserLogin />);
    }
});

function renderMainAppWith(component) {
    ReactLayout.render(C.MainApp, {
        header: <C.Header />,
        content: component,
        footer: <C.Footer />
    });
}