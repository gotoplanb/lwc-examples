Webruntime.moduleRegistry.define('c/helloInput', ['lwc'], function (lwc) { 'use strict';

    function tmpl($api, $cmp, $slotset, $ctx) {
      const {
        t: api_text,
        d: api_dynamic,
        b: api_bind,
        h: api_element
      } = $api;
      const {
        _m0,
        _m1
      } = $ctx;
      return [api_element("div", {
        classMap: {
          "slds-card": true
        },
        key: 2
      }, [api_element("div", {
        classMap: {
          "slds-card__body": true,
          "slds-card__body_inner": true,
          "slds-p-vertical_small": true
        },
        key: 3
      }, [api_text("Hello, "), api_dynamic($cmp.greeting), api_text("!"), api_element("input", {
        classMap: {
          "slds-input": true
        },
        attrs: {
          "type": "text"
        },
        props: {
          "value": $cmp.myInput
        },
        key: 4,
        on: {
          "change": _m0 || ($ctx._m0 = api_bind($cmp.handleChange))
        }
      }, []), api_element("button", {
        classMap: {
          "slds-button": true,
          "slds-button_brand": true,
          "slds-m-top_small": true
        },
        attrs: {
          "name": "Update",
          "type": "submit"
        },
        key: 5,
        on: {
          "click": _m1 || ($ctx._m1 = api_bind($cmp.handleClick))
        }
      }, [api_text("Update")])])])];
    }

    var _tmpl = lwc.registerTemplate(tmpl);
    tmpl.stylesheets = [];
    tmpl.stylesheetTokens = {
      hostAttribute: "lwc-helloInput_helloInput-host",
      shadowAttribute: "lwc-helloInput_helloInput"
    };

    class HelloWorld extends lwc.LightningElement {
      constructor(...args) {
        super(...args);
        this.greeting = 'World';
        this.myInput = 'World';
      }

      handleChange(event) {
        this.greeting = event.target.value;
        console.log("Greeting: ", this.greeting);
        this.myInput = this.greeting;
      }

      handleClick() {
        this.greeting = this.myInput + ". It's a pleasure to meet you";
      }

    }

    lwc.registerDecorators(HelloWorld, {
      track: {
        greeting: 1,
        myInput: 1
      }
    });

    var helloInput = lwc.registerComponent(HelloWorld, {
      tmpl: _tmpl
    });

    return helloInput;

});
