const DELAY = 500;

setTimeout(() => {
  /**
   * @type {HTMLScriptElement}
   */
  const extScript = document.querySelector('script[data-extension="api-extension"]');
  const extensionId = extScript && extScript.dataset.id;

  if (extensionId) {
    if (typeof chrome !== 'undefined' && chrome?.runtime?.sendMessage) {
      /**
       * @type {RequestInit}
       */
      const requestDetails = {
        method: 'GET',
        body: undefined,
        headers: {
          Accept: 'application/json',
        },
      };

      chrome.runtime.sendMessage(
        extensionId,
        { url: 'http://localhost:7899/product', details: requestDetails },
        (response) => {
          console.log('response', response);
        }
      );
    } else {
      console.log('extension not available.');
    }
  }
}, DELAY);
