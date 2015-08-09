describe("UserLogin", function () {
    var defProps, renderWithProps, component, el, $el;

    beforeEach(function() {
        defProps = {

        };
        renderWithProps = function(props) {
            component = renderComponent(C.UserLogin, props);
            el = React.findDOMNode(component);
            $el = $(el);
        };
    });

    // Text

    it("should have the title Login", function() {
        renderWithProps({});
        expect($el.find('h1').text()).toBe('Login');
    });

    // State

    it("should have a default state that holds an empty error object", function() {
        renderWithProps({});
        expect(component.state.errors).toEqual({});
    });

});