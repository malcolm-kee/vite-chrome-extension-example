chrome.runtime.onInstalled.addListener(() => {
  chrome.action.setBadgeText({
    text: 'OFF',
  });
});

async function onResponse(response: Response) {
  if (response.ok) {
    const data = await response.json();
    const headers = Object.fromEntries(response.headers.entries());

    return {
      data,
      headers,
      status: response.status,
      type: response.type,
    };
  }

  throw new Error('Fail to request');
}

chrome.runtime.onMessageExternal.addListener(
  (
    message: {
      url: string;
      details: RequestInit;
    },
    _,
    reply
  ) => {
    if (message.url && message.details) {
      fetch(message.url, message.details)
        .then(onResponse)
        .then((result) => reply(result));
    } else {
      reply({
        message,
        note: 'from background!',
      });
    }
  }
);

export {};
