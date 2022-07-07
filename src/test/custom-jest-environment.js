"use strict";

import "regenerator-runtime/runtime.js";

import BrowserEnvironment from "jest-environment-jsdom";

class MyEnvironment extends BrowserEnvironment {
  constructor(config) {
    super(
      Object.assign({}, config, {
        globals: Object.assign({}, config.globals, {
          Uint32Array: Uint32Array,
          Uint8Array: Uint8Array,
          ArrayBuffer: ArrayBuffer,
        }),
      })
    );
  }

  async setup() {}

  async teardown() {}
}

export default MyEnvironment;
