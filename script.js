var rootEl = $('#root');

var body = $('#middle');

var textAreaEls =[];




var time = moment().format('LLLL');
$("#currentDay").text(time);

var timeHour = moment().format('HH')-4;
// console.log(timeHour);

var testArray = ['Test 1','Test 2','Test 3','Test 4','Test 5','Test 6','Test 7','Test 8','Test 9'];

// localStorage.setItem('todo', JSON.stringify(testArray));

var todoArray = JSON.parse(localStorage.getItem("todo"));

function createHour(){

    for(var i = 0; i < 9; i++){
    
    
    var div1 = $('<div>');
    var div2 = $('<div>');

    var span1 = $('<span>');

    var textarea = $('<textarea>');

    var div3 = $('<div>');

    var button1 = $('<button>');

    var checkTime = i + 9;


    div1.attr('class', 'input-group');
    div2.attr('class', 'input-group-prepend');
    span1.attr('class', 'input-group-text');
    textarea.attr('class', 'form-control text-dark font-weight-bold');
    textarea.attr('aria-label', 'With textarea');
    div3.attr('class', 'input-group-append');
    button1.attr('class', 'btn btn-outline-secondary');
    button1.attr('type', 'button');
    button1.attr('id', 'button-addon2');

    span1.css("width","65px");
    textarea.css('opacity', .9);

    

    button1.attr('onclick', 'saveText('+i+')');

    textAreaEls.push(textarea);
    
    // textarea.attr('style', 'color: rgb(0,0,0)');
    // textarea.text("Test"+'\n'+'hello'+'\n'+'\n'+'\n'+'test'); 
    
    if (i+9 > 12){
        
        span1.text((i+9-12) + 'pm');
    }else{
        
        span1.text((i+9) + 'am');
    }
    console.log(checkTime + " " + timeHour);

    if (checkTime < timeHour){
        textarea.addClass('bg-secondary');
    }else if (checkTime == timeHour){
        textarea.addClass('bg-danger');
    }else{
        textarea.addClass('bg-success');

    }

    textarea.text(todoArray[i]);
    

    button1.text('Save');

    div3.append(button1);
    div2.append(span1);

    div1.append(div2);
    div1.append(textarea);
    div1.append(div3);

    body.append(div1);
    
    }


}



createHour();



function saveText(index) {

    console.log(todoArray[index]);
    console.log(textAreaEls[index]);
    // todoArray[index] = textAreaEls[index].text;
// console.log();

localStorage.setItem('todo', JSON.stringify(todoArray));
}
