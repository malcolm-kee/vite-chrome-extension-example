# Vite Chrome Extension Example

A monorepo used to develop a Chrome extension using [CRXJS](https://crxjs.dev/vite-plugin/).

Runtime code in the host (the website) would send request details to the extension, which would make a `fetch` request and respond back. As a result, we can bypass CORS error.

- [`api-extension`](libs/api-extension/): the code for the extension.
- [`usage-example`](apps/usage-example/): an example of how runtime code communicate with the extension.
