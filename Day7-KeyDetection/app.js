 
    let pressed=[]
    let secretCode="maha"
    
    window.addEventListener('keyup',(e)=>
    {
        console.log(e.key);
        pressed.push(e.key)
        console.log(pressed.splice(-secretCode.length - 1));
        pressed.splice(-secretCode.length - 1, pressed.length - secretCode.length)

        if (pressed.join("").includes(secretCode))
        {
            console.log("DING DING!");
            cornify_add();
        }
      console.log(pressed);
    
    })
    