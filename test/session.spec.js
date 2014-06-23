var React = require('react');
var ReactTestUtils = require('react/lib/ReactTestUtils');
var Router = require('../src/router.jsx');
var expect = require('chai').expect;
var find = require('jquery');

describe('integration like tests', function() {

    var container;

    beforeEach(function() {
        container = document.createElement('div');
        document.body.appendChild(container);
    });

    afterEach(function() {
        document.body.removeChild(container);
    });

    it('should render a link for each session at boot', function (done) {
        Router.renderComponent(container);
        expect(2).eql(find("ul li a").length);
        var first = find("ul li:eq(0) a");
        expect(first.text()).eql("introduction to react");
        ReactTestUtils.Simulate.click(first.get(0));
        setTimeout(function() { //simulate could use a cb or promise ...
            var details = find("div .Session h2").length;
            expect(details).eql(1);
            var name = find("div .Session h2:eq(0)").text();
            expect(name).eql("Session: introduction to react");
            done();
        }, 0);
    });

});
