console.log('working!')

document.getElementById('submitmsg').onclick = function() {
    console.log('wow')
    var inputVal = document.getElementById('mainText').value;
    var ul = document.getElementById('messageList');
    var li = document.createElement('li');
    li.appendChild(document.createTextNode(inputVal));
    ul.appendChild(li);
    quoteMessage();
};


function quoteMessage(){
    console.log("randomquote")
    var fr = new FileReader();
    
    var text = fr.readAsText("./quotes.txt");

    console.log(text)

}
