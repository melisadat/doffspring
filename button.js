$(document).ready(function() {
    $('#begin').on('click', function() {
        $('#animate-section').addClass('animate-click');

    });
});
/*enter page2 */
    $(document).ready(function(){
        $("#begin").click(function(){
            $('#animated-section').show();
            $('#animated-section').addClass('second');
        });
    });
