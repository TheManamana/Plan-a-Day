// Element Variables 
var rootEl = $('#root');
var body = $('#middle');
var textAreaEls = [];



// Current Date and Time 
var time = moment().format('LLLL');
$("#currentDay").text(time);

// Current Hour 
var timeHour = moment().format('HH');

// Array of text parsed from local storage
var todoArray = JSON.parse(localStorage.getItem("todo"));

// If local storage has never been used, sets array to non-null
if (todoArray === null){
    todoArray = [""];

}

//Creates all of the body elements
function createHour() {

    for (var i = 0; i < 9; i++) {


        var div1 = $('<div>');
        var div2 = $('<div>');
        var span1 = $('<span>');
        var textarea = $('<textarea>');
        var div3 = $('<div>');
        var button1 = $('<button>');
        
        //Variable used to check if the current hour is the same as the selected hour
        var checkTime = i + 9;

        //Body element styling attributes
        div1.attr('class', 'input-group');
        div2.attr('class', 'input-group-prepend');
        span1.attr('class', 'input-group-text');
        textarea.attr('class', 'form-control text-dark font-weight-bold');
        textarea.attr('aria-label', 'With textarea');
        div3.attr('class', 'input-group-append');
        button1.attr('class', 'btn btn-outline-secondary');
        button1.attr('type', 'button');
        button1.attr('id', 'button-addon2');

        span1.css("width", "65px");
        textarea.css('opacity', .9);

        textarea.attr('style','cursor:pointer');

        // Sets each button to call the SaveText() function on-click. When created, its current index is
        // saved as the parameter that is used when the function is called. This allows the saveText() function
        // to know the index it should save to.
        button1.attr('onclick', 'saveText(' + i + ')');

        //To-do text elements saved in array 
        textAreaEls.push(textarea);

        
        //Checks whether to say am or pm for current hour element
        if (i + 9 > 12) {

            span1.text((i + 9 - 12) + 'pm');
        } else {

            span1.text((i + 9) + 'am');
        }
        
        //Sets the color of the current text element based on whether it is before current time, equal to, or after.
        if (checkTime < timeHour) {
            textarea.addClass('bg-secondary');
        } else if (checkTime == timeHour) {
            textarea.addClass('bg-danger');
        } else {
            textarea.addClass('bg-success');

        }

        //Sets text to stored text
        textarea.text(todoArray[i]);

        //Save button text
        button1.text('Save');

        //Appends elements
        div3.append(button1);
        div2.append(span1);

        div1.append(div2);
        div1.append(textarea);
        div1.append(div3);

        body.append(div1);

    }


}


//Calls function to create body.
createHour();


//Saves text entered
function saveText(index) {


    todoArray[index] = textAreaEls[index].val();
    
 



    localStorage.setItem('todo', JSON.stringify(todoArray));
}
