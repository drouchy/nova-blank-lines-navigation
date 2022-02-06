exports.activate = function() {
    // Do work when the extension is activated
}

exports.deactivate = function() {
    // Clean up state before the extension is deactivated
}


nova.commands.register("navigate-betweem-blank-lines.previous", (editor) => {
    let end = editor.selectedRange.end
    let text = editor.getTextInRange(new Range(0, end))
    let lines = text.split("\n").reverse()

    if (lines.length <= 1) {
        return
    }
    
    i = 1
    while (lines[i].trim().length > 0) {
        i++
        if (i >= lines.length) {
            editor.moveToTop()
            return
        }
    }
    console.log("will need to move up by "+ i +" lines")
    editor.moveUp(i)
});

nova.commands.register("navigate-betweem-blank-lines.next", (editor) => {
    let start = editor.selectedRange.start
    let text = editor.getTextInRange(new Range(start, editor.document.length))
    let lines = text.split("\n")
    
    if (lines.length <= 1) {
        return
    }
    
    i = 1
    while (lines[i].trim().length > 0) {
        i++
        if (i >= lines.length) {
            editor.moveToBottom()
            return
        }
    }
    console.log("will need to move down by "+ i +" lines")
    editor.moveDown(i)
});
