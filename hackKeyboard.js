function hackKeyboard() {    
    var target = document.getElementById("write");
    if (((document.getElementById('prompt')).innerHTML).length != 0) {
        var currentVal = (document.getElementById('prompt')).textContent;

        var prompt_text = currentVal
            .replace(new RegExp('&amp;', 'g'), "&")
            .replace(new RegExp('&lt;', 'g'), "<")
            .replace(new RegExp('&gt;', 'g'), ">")
            .replace(new RegExp('&quot;', 'g'), '"')
            .replace(new RegExp('&#039;', 'g'), "'");

        var event = new KeyboardEvent('keydown', {
            bubbles: true,
            cancelable: true,
            char: prompt_text,
            key: "Shift",
            shiftKey: false,
            keyCode: 0
        });
        target.dispatchEvent(event);

        target.value = target.value + prompt_text;
        event = new Event('input', {
            bubbles: true,
            cancelable: true
        });
        target.dispatchEvent(event);
        target.scrollTop = target.scrollHeight;
    }
    setTimeout(prova, 100);
}