$(document).ready(() => { 
// Styling 
// 1. Change the body tag so that everything on the page is centered. 
    //$('body').css('text-align', 'center')

// 2. Change the text of "Old title" to "New title". 
    $('#title h2').html("New title")

// 3. Change the background color of the subtitle box to any color you like. 
    $('.subtitle-box').css({"background-color": "blue"});

// 4. Make sure that the temp-subtitle isn't displayed without actually removing the element from DOM. Hint: ZGlzcGxheTogbm9uZQ== 
    $('.temp').hide()

// 5. Put a dashed border box of any pixel width around any div that has the class "reason" 
    $('div.reason').css("border", "dashed blue 10px")


// Ordered list: Traversing the DOM 
// 6. Change the li's inside of the ordered list to be bold. Hint: RGlyZWN0IGNoaWxkIHNlbGVjdG9ycw== 
    $('#first-list li').css({"font-weight": "bold"})

// 7. Change the last li to be underlined.  Hint: cHNldWRvIHNlbGVjdG9ycw== 
    $('#first-list li').last().css({"text-decoration": "underline"})

// 8. Change the second li element to have a line through it.  
    $('#first-list li:nth-child(2)').css({"text-decoration": "line-through"})


// Unordered List 
//  9: Change all the elements inside of the second-list to italics in one query. Hint: VGhlIGNoaWxkcmVuIHNlbGVjdG9yLiBBbmQgbXVsdGlwbGUgc2VsZWN0b3I= 
    $('.second-list').children().css({"font-style": "italic"})

//  10. Change the span font size in the unordered list to be half as small. Using em is better than pixels. Why is that? 
    $('.second-list span').css({"font-size": "0.5em"})
// em is better to use than px because: 
// em is not an absolut value, it is relative to the predefined value. so 0.5em is half the size
// Furthermore its size is relative to the userchosen font size.
// px is an absolute value, that is set independent of the predefined size.

//  Unused-box: Adding and removing DOM nodes, Dynamic content, When the document is ready 
//  11. Remove the first label element in the unused box. 
    $('.unused-box label:nth-child(1)').remove()

//  12. Add a paragraph that says "Second Sentence". 
    $('.unused-box').append("<p>Second Sentence</p>")

//  13. After finishing 12 add a paragraph before it that says "First Sentence". 
    $('.unused-box').prepend("<p>First Sentence</p>")

//  14. You can finally change the class name of unused-box to used-box. 
    $('.unused-box').attr('class', 'used-box')

//  15. You know what. Let's additionally add a class name on the box called used-boxed-clicked. Every time the box is clicked it should toggle this class (add if not there or remove if there). 
// Wait until the page is done loading.
// Its good practice, to always do JQuery eventhandling inside one of these:

    $(document).ready(() => {
        $(".used-box").click(() => {
            $(".used-box").toggleClass("used-boxed-clicked");
        })
    })



//  Button, Event-handling 
//  16. On mousing over the submit-button add a title property that says "You're ready to click." Remove the text when the mouse isn't over the button anymore. 
//

    $("#submit-button"). mouseenter(() => {
        $(event.currentTarget).text("You're ready to click")
        $("#submit-button"). mouseleave(() => {
            $(event.currentTarget).text("Submit")
        })
    })


//  17. On mouse click add a reason to the ordered list. The reason should start from Reason 4 and count up after every click. 

    var reason = 4
    $("#submit-button").click(() => {
        let count = $('#first-list li').length;
        $("#first-list").append(`<li>Reason ${count + 1} </li>`)

        //  18. Console log the parent div when the button is clicked using a direct reference to the button inside of the event handler scope. Hint: JCh0aGlzKS5wYXJlbnQoKTs= 
        console.log($(event.currentTarget).parent())
    })


//  Extra challenges (No jquery needed, just edit the HTML or the CSS in the head) 

//  19. Extra challenge: Style the website until you think it looks good. 

//  20. Add a tooltip to the button. You can apply it directly to the HTML and add CSS. 
// title="Something" <- This is apparently called a tooltip. just put it inside the opening button tag

//  21. Figure out how to animate the border of the box from exercise 5 like a "neon sign". You are allowed to use code snippets found online but you are required to understand what each thing does to your element. 

// Extra challenge with FLEX 
// 22. Use flex. Remove the "text-align: center;" value from the first assignment. Have the titles be centered with full page width. 
// Place first-list to the left. It automatically takes a lot of width. Try to limit it. Hint VHJ5IHVzaW5nICdkaXNwbGF5OiBpbmxpbmUtYmxvY2s7Jw==
// Place second-list to the right of the previously list. 
// Place the button group at the lower right of the page. 
/*
html {
    display: flex;
    justify-content: space-between;
    align-items: center;
    justify-content: center;
}

#first-list, .reason {
    display: inline-block;
    justify-content: left;
    color: purple;
}
.second-list {
    float:right;
    justify-content: right;
    color: green;
}
.button-group {
    position: absolute;
    right: 0.5em;
    bottom: 0.5em;
    
}
*/

})