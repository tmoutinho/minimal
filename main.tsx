import * as RunRouter from "@remix-run/router";
import * as htmPreact from "htm/preact";
import * as preact from "preact";
import * as preactHooks from "preact/hooks";

// Write main module code here, or as a separate file with a "src" attribute on the module script.
console.log(htmPreact, preact, preactHooks);

// Create your app
const app = preact.h("h1", null, "Hello World!");

preact.render(app, document.body);
