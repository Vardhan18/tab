function openUrls() {
    var urls = localStorage['urls'].split('\n');
    var activate = true;
    for (i=0; i<urls.length; i++) {

      
      if(urls[i].length>0){
console.log(urls[i]);
         chrome.tabs.create({url: urls[i],
			       active: activate});
      }
    activate=false;
   }
}

chrome.browserAction.onClicked.addListener(openUrls);