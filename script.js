console.log('working!')

document.getElementById('submitmsg').onclick = function() {
    console.log('wow')
    var inputVal = document.getElementById("mainText").value;
    var ul = document.getElementById('messageList');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputVal));
    ul.appendChild(li);
    document.getElementById("mainText").value = '';
    quoteMessage();
};


function quoteMessage(){
    console.log("randomquote")

    let requestURL = 'https://raw.githubusercontent.com/Crypto-Advisor/motivation_generator/texting_backend/quotes.json';
    let request = new XMLHttpRequest();
    request.open('GET', requestURL);
    request.responseType = 'json';
    request.send();
    request.onload = function() {
        var ul = document.getElementById('messageList');
        var li = document.createElement('li');
        const quotes = request.response;
        var random = Math.floor(Math.random() * quotes['quotes'].length)
        var text = quotes['quotes'][random].text + "\n Written by: " + quotes['quotes'][random].author
        li.appendChild(document.createTextNode(text));
        li.setAttribute("class", "quote");
        ul.appendChild(li);
    }


}
