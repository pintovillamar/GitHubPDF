function gettab(){
    chrome.tabs.query(
        {active:true},
        tabs=>{
            const tab = tabs[0];
            var github = tab.url.slice(0,18);
            var pdf = tab.url.slice(-4);
            console.log("URL:", tab.url)

            if (github === "https://github.com" && pdf === ".pdf") {
                
                console.log("PDF detected");
            }
        })
}

function requestUserRepos(username) {
    var url = 'https://api.github.com/users/' + username + '/repos';
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.onload = function() {
        if (xhr.status === 200) {
            var repos = JSON.parse(xhr.responseText);
            console.log(repos);
        }
    };
    xhr.send();
}


document.addEventListener('DOMContentLoaded', function() {
    var link = document.getElementById('link');
    // onClick's logic below:
    link.addEventListener('click', function() {
        chrome.tabs.query(
            {active:true},
            tabs=>{
                const tab = tabs[0];
                var github = tab.url.slice(0,18);
                var pdf = tab.url.slice(-4);

                // https://api.github.com/repos/pintovillamar/software-construction/blob/main/parcial01-latex/build/report.pdf
                // structure: https://api.github.com/repos/:owner/:repo/contents/:path 
                // https://api.github.com/repos/OWNER/REPO/contents/PATH

                var owner = "pintovillamar"
                var repo = "software-construction"
                var path = "parcial01-latex/build/report.pdf"
                var url = 'https://api.github.com/repos/' + owner + '/' + repo + '/contents/' + path;
                console.log(url)

            
                fetch(url)
                .then(response => response.json())
                .then(data => console.log(data))
                .catch(error => console.log(error))


                // console.log("URL:", tab.url)
                
                if (github === "https://github.com" && pdf === ".pdf") {
                    
                    console.log("PDF detected");
                }
                else{
                    console.log("Not a PDF");
                }
            })
    });
});


getJSON('hola');