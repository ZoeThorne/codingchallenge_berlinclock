var BerlinClock = { 
    tick: function(){
        var time = new Date(),
            second = time.getSeconds();
            minute = time.getMinutes();
            hour = time.getHours();
        this.updateClock(hour, minute, second);
        this.updateSeconds(second);
        this.updateHours(hour);
        this.updateMinutes(minute);
    },
    updateSeconds: function(second){
        $('.secondsCircle').toggleClass('yellow');
    },
    updateHours: function(hour){
        var num = hour / 5
        var boxes = $('#hoursOfFive').find('div')
        var boxes = boxes.slice(0, num);
        $(boxes).each(function() {
            $(this).addClass('yellow')
            });

        var num2 = hour % 5;
        var boxes2 = $('#hoursOfOne').find('div')
        var boxes2 = boxes2.slice(0, num2);
        $(boxes2).each(function() {
            $(this).addClass('yellow')
            });
    },

    updateMinutes: function(minute){
        var num3 = minute / 5
        var boxes3 = $("#minutesOfFive").find('div')
        var boxes3 = boxes3.slice(0, num3);
        console.log(minute);
        console.log(num3);
        console.log(boxes3);
        $(boxes3).each(function() {
            $(this).addClass('yellow')
            });

        var num4 = minute % 5
        var boxes4 = $("#minutesOfOne").find('div')
        var boxes4 = boxes4.slice(0, num3)
        $(boxes4).each(function() {
            $(this).addClass('yellow')
            });
    },

    updateClock: function(hour, minute, second){
        var currentTime = `
            <h1>${hour}:${minute}:${second}</h1>
        `
        $('#clock').html(currentTime);
        
    },

    reset: function(){

    }
}
