/*
 * ACCD Plugin video
 * Varios metodos para trabajar los videos
*/

(function($) {
    
    // realizar acciones al estar llegar un tiempo determinado
    $.fn.video = function(opts) {
        
        var 
            status = [],
            mode,
            check,
            notified = false;
            
        options = $.extend({}, $.fn.video.defaultOptions, opts)
        
        this.each(function() {
            var 
                v  = $(this), // element
                vd = v.duration,
               
            if (opts.handleEnoughPercent && opts.onEnoughPercent) {
                
                opts.onEnoughPercent()
            }
            
            // -- commons
            
            
        })
    }
    
    // default options
    $.fn.video.defaultOptions = {
        handleEnoughTime: false,
        enoughTime: 0.0,
        handleEnoughPercent: false,
        enoughPercent: 0,
        onPlaying: null,
        onPause: null,
        onSeeking: null,
        onEnoughTime: null,
        onEnoughPercent: null
    }
    
})(jQuery)