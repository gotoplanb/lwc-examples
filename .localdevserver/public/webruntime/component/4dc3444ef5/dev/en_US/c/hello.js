Webruntime.moduleRegistry.define('c/hello', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text
      } = $api;
      return [api_text("Hello")];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-hello_hello-host",
      shadowAttribute: "lwc-hello_hello"
    };

    class Hello extends lwc.LightningElement {}

    var hello = lwc.registerComponent(Hello, {
      tmpl: _tmpl
    });

    return hello;

});
