Webruntime.moduleRegistry.define('c/deeplinkTwitter', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        h: api_element
      } = $api;
      return [api_element("p", {
        key: 2
      }, [api_text("Click to deeplink into Twitter app")])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-deeplinkTwitter_deeplinkTwitter-host",
      shadowAttribute: "lwc-deeplinkTwitter_deeplinkTwitter"
    };

    class DeeplinkTwitter extends lwc.LightningElement {}

    var deeplinkTwitter = lwc.registerComponent(DeeplinkTwitter, {
      tmpl: _tmpl
    });

    return deeplinkTwitter;

});
