function formatUrl(url) {
    if (url.substring(0, 7) != 'http://' && url.substring(0, 8) != 'https://') {
	url = 'http://' + url;
    }
    return url;
}

function saveOptions() {
    var urls = document.getElementById('urls').value.split('\n');
    var url=document.getElementById('urls').value;
    var pageStart=document.getElementById('start').value;
    var pageEnd=document.getElementById('end').value;
    var ps = parseInt(pageStart);
    var pe = parseInt(pageEnd);
   
    var urlsFormattedNew = '';
    //document.getElementById('urls').value = result;
    var urlsFormatted = [];
    
    for (i=ps; i<=pe ; i++) {
	
	    urlsFormatted.push(urls[0] + i+".svg"+'\n');	    
	
    }

    for (i=0; i<urlsFormatted.length; i++) {
	if (urlsFormatted[i].length > 0) {
	    urlsFormattedNew += urlsFormatted[i] + '\n';	    
	}
    }
    document.getElementById('urls').value = urlsFormattedNew;
    localStorage['urls'] = urlsFormattedNew;
    document.getElementById('status').innerHTML = 'Saved!';
    setTimeout(function() {
	document.getElementById('status').innerHTML = '';
    }, 1500);
}

function range(start, end) {
  return Array(end - start + 1).fill().map((_, idx) => start + idx)
}


function init() {
    var url=document.getElementById('urls').value;
    var pageStart=document.getElementById('start').value;
    var pageEnd=document.getElementById('end').value;
    
    document.getElementById('save').addEventListener('click', saveOptions);
    var urls = localStorage['urls'];
    if (!urls) {
	return;
    }
    document.getElementById('urls').value = urls;
}

document.addEventListener('DOMContentLoaded', init);