<!DOCTYPE html> 
<html>
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1"> 
    <title>Pybass Mobile</title> 
    <link rel="stylesheet" href="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.css" />
    <script src="http://code.jquery.com/jquery-1.8.2.min.js"></script>
    <script src="http://code.jquery.com/mobile/1.2.0/jquery.mobile-1.2.0.min.js"></script>

    <link rel="stylesheet" type="text/css" href="/static/css/py_bass.css" />
    <!--
    <script type="text/javascript" src="/javascript/jquery.js"></script>
    -->
    <script type="text/javascript" src="/static/javascript/py_bass.js"></script>
    <script type="text/javascript" src="/static/javascript/raphael.js"></script>

    <script language="javascript" type="text/javascript">
        window.onload = function() {
            var piano_length = 600;
            var piano_width = 96;
            var piano_paper = new Raphael(document.getElementById('piano_container'), piano_length, piano_width);
            var piano = new PyBass.Piano(piano_paper, ['A', 'B', 'C#', 'D', 'E', 'F#', 'G#']);

            $('#a').click(function() { var piano = new PyBass.Piano(piano_paper, ['A']); });
            $('#b').click(function() { var piano = new PyBass.Piano(piano_paper, ['B']); });
            $('#c').click(function() { var piano = new PyBass.Piano(piano_paper, ['C']); });

            var paper = Raphael(10, 50, 320, 200);

            // Creates circle at x = 50, y = 40, with radius 10
            var circle = paper.circle(50, 40, 90);
            // Sets the fill attribute of the circle to red (#f00)
            circle.attr("fill", "#f00");

            // Sets the stroke attribute of the circle to white
            circle.attr("stroke", "#fff");

            circle.click(function() {
                //circle.animate({opacity: 0.25}, 1000, function() {});
                this.mouseover(function () {alert("over");});
                this.mouseleave(function () {alert("up");});
            });
            circle.mouseout(function() {
                this.attr("fill", "#fff");
            });
         }

        $('#one').live('pageinit',function(event){
            //alert("pageinit");

            var c1 = $('#c1');
            //c1.click(alert("test"));

            /*
            c1.mouseover(function () {
                this.attr("fill", "#000000");
            });
            c1.mouseout(function () {
                this.attr("fill", getColor('C', scale));
            });
            */
        });


    </script>
</head> 
<body> 

<!-- Start of first page: #one -->
<div data-role="page" id="one" data-theme="a">
    <div data-role="header">
        <h1>Pybass Mobile</h1>
    </div><!-- /header -->
    <div data-role="content">
        <h2>One</h2>
        
        <p>
            <a id="a" data-role="button" data-inline="true" data-mini="true" data-theme="b">A</a>
            <a id="b" data-role="button" data-inline="true" data-mini="true" data-theme="b">B</a>
            <a id="c" data-role="button" data-inline="true" data-mini="true" data-theme="b">C</a>
        </p>

        <div id="piano_container">
        </div>

        <p><a href="#two" data-role="button">two</a></p>    

    </div><!-- /content -->
    <div data-role="footer">
        <h4>Page Footer</h4>
    </div><!-- /footer -->
</div><!-- /page one -->

<!-- Start of second page: #two -->
<div data-role="page" id="two" data-theme="a">
    <div data-role="header">
        <h1>Pybass Mobile</h1>
    </div><!-- /header -->
    <div data-role="content">
        <h2>Two</h2>


        <p><a href="#one" data-direction="reverse" data-role="button" data-theme="b">one</a></p> 
        
    </div><!-- /content -->
    <div data-role="footer">
        <h4>Page Footer</h4>
    </div><!-- /footer -->
</div><!-- /page two -->

</body>
</html>
