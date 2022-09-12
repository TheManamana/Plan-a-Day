var rootEl = $('#root');

var body = $('#middle');

var time = moment().format('LLLL');
$("#currentDay").text(time);

var timeHour = moment().format('HH');
// console.log(timeHour);


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
    textarea.attr('class', 'form-control');
    textarea.attr('aria-label', 'With textarea');
    div3.attr('class', 'input-group-append');
    button1.attr('class', 'btn btn-outline-secondary');
    button1.attr('type', 'button');
    button1.attr('id', 'button-addon2');

    // span1.attr('id', 'inputGroup-sizing-default');
    
    
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