(function($){
    $.fn.numberRock=function(options){
        var defaults={
            speed:24,
            count:1000
        };
        var opts=$.extend({}, defaults, options);

        var div_by = 100,
        count=opts["count"],
        speed = Math.floor(count / div_by),
        sum=100,
        $display = this,
        run_count = 1,
        int_speed = opts["speed"];
        var int = setInterval(function () {
             if (sum < count) {
                $display.text(++sum+'%');
            } else {
                clearInterval(int);
            }
        }, int_speed);
    }

})(jQuery);

