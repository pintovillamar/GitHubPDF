chrome.tabs.onActivated.addListener(tab => {
    chrome.tabs.get(tab.tabId, current_tab_info => {
        // if (/^https:\/\/www\.google/.test(current_tab_info.url)) {
        //     console.log("HI GOOGLE")
        // }
        console.log(current_tab_info.url)
    });
});