chrome.tabs.onCreated.addListener(function(tab) {
    fetch("https://api.unsplash.com/photos/random?query=background&client_id=YUOSkJkXe-JMXMmdlGzmdBYwQMcxlJkaFZfaF6nFdvU")
      .then(response => response.json())
      .then(data => {
        chrome.tabs.update(tab.id, {
          url: data.urls.full
        });
      });
  });
  