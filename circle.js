<script language='JavaScript' type='text/javascript'>
<!--
 document.write('<!DOCTYPE html>
<html>
  <head>
    <meta http-equiv="Co'
 +'ntent-Type" content="text/html; charset=utf-8">
    <meta name="viewpo'
 +'rt" content="initial-scale=1, maximum-scale=1, user-scalable=no">
    '
 +'<title>Create circles</title>
   <link rel="stylesheet" href="https://'
 +'js.arcgis.com/3.19/esri/css/esri.css">
    <style>
      html, body, #'
 +'map {
        height: 100%; width: 100%; margin: 0; padding: 0; 
     '
 +' }
      #controls {
        background: #fff;
        box-shadow: 0 6'
 +'px 6px -6px #999;
        color: #444;
        font-family: sans-serif'
 +';
        height: auto;
        left: 1em;
        padding: 1em;
     '
 +'   position: absolute;
        top: 1em;
        width: auto;
        '
 +'z-index: 40;
      }
      #controls div {
        padding: 0 0 1em 0;'
 +'
      }
    </style>
  </head>
  <body>
    <form name="userInput">
 '
 +'       Latitude:<input type=text id="lat" value =" 38.5" /><br><br> 
 '
 +'       Longitude:  <input type=text id="longi" value =" -77.5" /><br><'
 +'br>
        Radius: <input type=number  id="rad" value = "500"> <br><b'
 +'r> 
        <input type="button" id="submit" value="Submit" onclick="t'
 +'est();"/> <br>  
    </form>
    <div id="map1"></div>
    <script src'
 +'="https://js.arcgis.com/3.19/"></script>
    <script>
        function'
 +' test(){
           
         require([
                "esri/map", "e'
 +'sri/geometry/Circle","esri/symbols/SimpleFillSymbol", 
               '
 +' "esri/graphic", "esri/layers/GraphicsLayer","esri/symbols/SimpleMarke'
 +'rSymbol",
                "dojo/dom", "dojo/dom-attr", "dojo/domReady!'
 +'"       
              ], 
              function( Map, Circle, Simple'
 +'FillSymbol, Graphic, GraphicsLayer)
              {     
//           '
 +'       var point = new Point(
//                          {
//        '
 +'              setLatitude:,"esri/geometry/Point"
//                   '
 +'   setLongitude:Point,
//                          });
               '
 +'   var irad=document.forms["userInput"]["rad"].value;
                '
 +'  var map = new Map("map1", {basemap: "streets", center: [document.for'
 +'ms["userInput"]["longi"].value,document.forms["userInput"]["lat"].valu'
 +'e], slider: true, zoom: 15});
                  var symbol = new Simpl'
 +'eFillSymbol().setColor(null).outline.setColor("blue");
               '
 +'   var gl = new GraphicsLayer({ id: "createcircle" });  
             '
 +'   
                  var circle = new Circle(
                       '
 +'   {center : [document.forms["userInput"]["longi"].value,document.form'
 +'s["userInput"]["lat"].value], 
                           radius: irad'
 +',
                       geodesic:true}); 
                
          '
 +'        var graphic = new Graphic(circle, symbol);                 
  '
 +'                map.addLayer(gl);
                  map.on("load",gl.a'
 +'dd(graphic));
                  
              });
        };
    </sc'
 +'ript>        
  </body>
</html>');
-->
</script>
