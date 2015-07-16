FlowRouter.route("/", {
    name: 'Home',
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.Home />);
    }
});

FlowRouter.route("/login", {
    name: "Login",
    subscriptions(params) {

    },
    action(params) {
        renderMainLayoutWith(<C.UserLogin />);
    }
});

function renderMainLayoutWith(component) {
    ReactLayout.render(C.MainLayout, {
        header: <C.Header />,
        content: component,
        footer: <C.Footer />
    });
}