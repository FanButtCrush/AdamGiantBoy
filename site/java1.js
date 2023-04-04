function page()
{
    let pages = document.getElementById("num_page").value;
    let select = document.getElementById("gallery");
    document.getElementById("num_page").value = "";

    let page1 = "<div id='name_page'>Page: 1</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam1.png' target='_blank'><img class='img_small' src='../gallery/adam1.png'></a><br><br>Stock Material - Adam Reach.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam2.png' target='_blank'><img class='img_small' src='../gallery/adam2.png'></a><br><br>Adam's Wide Reach.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam3.png' target='_blank'><img class='img_small' src='../gallery/adam3.png'></a><br><br>Stock Material - Giant Hand.</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam4.png' target='_blank'><img class='img_small' src='../gallery/adam4.png'></a><br><br>Stock Material - Laughing and Looking at Palm.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam5.png' target='_blank'><img class='img_small' src='../gallery/adam5.png'></a><br><br>Stock Material - 'bout to be SWATTED (POV).</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam6.png' target='_blank'><img class='img_small' src='../gallery/adam6.png'></a><br><br>A Boy and His Pet.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam7.png' target='_blank'><img class='img_small' src='../gallery/adam7.png'></a><br><br>Stock Material - Big Hand.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam8.png' target='_blank'><img class='img_small' src='../gallery/adam8.png'></a><br><br>Stock Material - Big Hand 2.</div>";

    let page2 = "<div id='name_page'>Page: 2</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam9.png' target='_blank'><img class='img_small' src='../gallery/adam9.png'></a><br><br>A Boy and His Pet 2.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam10.png' target='_blank'><img class='img_small' src='../gallery/adam10.png'></a><br><br>A Boy and His Pet 3.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam11.png' target='_blank'><img class='img_small' src='../gallery/adam11.png'></a><br><br>Giant's Slumber.</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam12.png' target='_blank'><img class='img_small' src='../gallery/adam12.png'></a><br><br>A Giant's Morsel.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam13.png' target='_blank'><img class='img_small' src='../gallery/adam13.png'></a><br><br>Another Snack - Adam Giantboy FAN EDIT.</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam14.png' target='_blank'><img class='img_small' src='../gallery/adam14.png'></a><br><br>Adam Giantboy sit on Bart.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam15.png' target='_blank'><img class='img_small' src='../gallery/adam15.png'></a><br><br>Adam Giantboy crush Bart with his feet.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam16.png' target='_blank'><img class='img_small' src='../gallery/adam16.png'></a><br><br>Adam Giantboy picking Bart.</div>";

    let page3 = "<div id='name_page'>Page: 3</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam17.png' target='_blank'><img class='img_small' src='../gallery/adam17.png'></a><br><br>Adam Giantboy want to pick Bart.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam18.png' target='_blank'><img class='img_small' src='../gallery/adam18.png'></a><br><br>Between the feet of Adam Giantboy.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam19.png' target='_blank'><img class='img_small' src='../gallery/adam19.png'></a><br><br>On Adam Giantboy's Hand.</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam20.png' target='_blank'><img class='img_small' src='../gallery/adam20.png'></a><br><br>Gotcha! ZERO.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam21.png' target='_blank'><img class='img_small' src='../gallery/adam21.png'></a><br><br>#relatable.</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam22.png' target='_blank'><img class='img_small' src='../gallery/adam22.png'></a><br><br>Stock Material - Dangle 1.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam23.png' target='_blank'><img class='img_small' src='../gallery/adam23.png'></a><br><br>Stock Material - Dangle 2 (Close up).</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam24.png' target='_blank'><img class='img_small' src='../gallery/adam24.png'></a><br><br>Stock Material - Dangle 3 (2nd Close up).</div>";

    let page4 = "<div id='name_page'>Page: 4</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam25.png' target='_blank'><img class='img_small' src='../gallery/adam25.png'></a><br><br>Stock Material - Dangle 4 (3nd Close up).</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam26.png' target='_blank'><img class='img_small' src='../gallery/adam26.png'></a><br><br>Stock Material - Dangle 5 (VERY Possible Vore).</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam27.png' target='_blank'><img class='img_small' src='../gallery/adam27.png'></a><br><br>Stock Material - Worm's Eye View (POV).</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam28.png' target='_blank'><img class='img_small' src='../gallery/adam28.png'></a><br><br>You're next.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam29.png' target='_blank'><img class='img_small' src='../gallery/adam29.png'></a><br><br>You are tonight's snack.</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam30.png' target='_blank'><img class='img_small' src='../gallery/adam30.png'></a><br><br>Sleeping Giant - Stock Material.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam31.png' target='_blank'><img class='img_small' src='../gallery/adam31.png'></a><br><br>Stock Material - Reach.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam32.png' target='_blank'><img class='img_small' src='../gallery/adam32.png'></a><br><br>Giant and Shoe.</div>";

    let page5 = "<div id='name_page'>Page: 5</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam33.png' target='_blank'><img class='img_small' src='../gallery/adam33.png'></a><br><br>Stock Material - REACH 1.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam34.png' target='_blank'><img class='img_small' src='../gallery/adam34.png'></a><br><br>Stock Material - RESTING HAND.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam35.png' target='_blank'><img class='img_small' src='../gallery/adam35.png'></a><br><br>Stock Material - Handheld 1.</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam36.png' target='_blank'><img class='img_small' src='../gallery/adam36.png'></a><br><br>Hand Crush in the Giant's Kitchen.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam37.png' target='_blank'><img class='img_small' src='../gallery/adam37.png'></a><br><br>Captured by the Giant - Fan Edit.</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam38.png' target='_blank'><img class='img_small' src='../gallery/adam38.png'></a><br><br>In the Giant's Pocket - Fan Edit.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam39.png' target='_blank'><img class='img_small' src='../gallery/adam39.png'></a><br><br>The Sleeping Giant - Fan Edit.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam40.png' target='_blank'><img class='img_small' src='../gallery/adam40.png'></a><br><br>Staring Contest - Fan Edit.</div>";

    let page6 = "<div id='name_page'>Page: 6</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam41.png' target='_blank'><img class='img_small' src='../gallery/adam41.png'></a><br><br>A Giant's Pet - Fan Art.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam42.png' target='_blank'><img class='img_small' src='../gallery/adam42.png'></a><br><br>Relaxing on The Giant - Fan Edit.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam43.png' target='_blank'><img class='img_small' src='../gallery/adam43.png'></a><br><br>Stock Material Giant Foot - Adam Giantboy.</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam44.png' target='_blank'><img class='img_small' src='../gallery/adam44.png'></a><br><br>Stock Material Giant Foot 2 - Adam Giantboy.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam45.png' target='_blank'><img class='img_small' src='../gallery/adam45.png'></a><br><br>Stock Material Giant Feet - Adam Giantboy.</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam46.png' target='_blank'><img class='img_small' src='../gallery/adam46.png'></a><br><br>Stock Material Giant Feet 2 - Adam Giantboy.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam47.png' target='_blank'><img class='img_small' src='../gallery/adam47.png'></a><br><br>Stock Material Giant Feet 3 - Adam Giantboy.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam48.png' target='_blank'><img class='img_small' src='../gallery/adam48.png'></a><br><br>Stock Material Giant Feet 4 - Adam Giantboy.</div>";

    let page7 = "<div id='name_page'>Page: 7</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam49.png' target='_blank'><img class='img_small' src='../gallery/adam49.png'></a><br><br>Stock Material - Between His Fingers - Adam Giantboy.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam50.png' target='_blank'><img class='img_small' src='../gallery/adam50.png'></a><br><br>Catching a Flight - Adam Giantboy FAN EDIT.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam51.png' target='_blank'><img class='img_small' src='../gallery/adam51.png'></a><br><br>Adam and another new Pet.</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam52.png' target='_blank'><img class='img_small' src='../gallery/adam52.png'></a><br><br>Hold On.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam53.png' target='_blank'><img class='img_small' src='../gallery/adam53.png'></a><br><br>Truly a Giant 1.</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam54.png' target='_blank'><img class='img_small' src='../gallery/adam54.png'></a><br><br>Truly a Giant 2.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam55.png' target='_blank'><img class='img_small' src='../gallery/adam55.png'></a><br><br>I'm gonna getcha.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam56.png' target='_blank'><img class='img_small' src='../gallery/adam56.png'></a><br><br>Stock Material Giant Butt - Adam Giantboy.</div>";

    let page8 = "<div id='name_page'>Page: 8</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam57.png' target='_blank'><img class='img_small' src='../gallery/adam57.png'></a><br><br>Stock Material Giant Butt 2 - Adam Giantboy.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam58.png' target='_blank'><img class='img_small' src='../gallery/adam58.png'></a><br><br>Stock Material Giant Butt (POV) - Adam Giantboy.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam59.png' target='_blank'><img class='img_small' src='../gallery/adam59.png'></a><br><br>Stock Material Giant Butt 2 (POV) - Adam Giantboy.</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam60.png' target='_blank'><img class='img_small' src='../gallery/adam60.png'></a><br><br>Stock Material Giant Butt 3 (POV) - Adam Giantboy.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam61.png' target='_blank'><img class='img_small' src='../gallery/adam61.png'></a><br><br>Stock Material Giant Butt 4 (Close up POV) - Adam Giantboy.</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam62.png' target='_blank'><img class='img_small' src='../gallery/adam62.png'></a><br><br>Stock Material Giant Butt 5 (2nd Close up POV) - Adam Giantboy.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam63.png' target='_blank'><img class='img_small' src='../gallery/adam63.png'></a><br><br>Stock Material Giant Butt 6 (3rd Close up POV) - Adam Giantboy.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam64.png' target='_blank'><img class='img_small' src='../gallery/adam64.png'></a><br><br>Stock Material Giant Butt 7 (4th Close up POV) - Adam Giantboy.</div>";

    let page9 = "<div id='name_page'>Page: 9</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam65.png' target='_blank'><img class='img_small' src='../gallery/adam65.png'></a><br><br>Stock Material Giant Butt 8 (5th Close up POV) - Adam Giantboy.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam66.png' target='_blank'><img class='img_small' src='../gallery/adam66.png'></a><br><br>Stock Material Giant Butt 9 (Possible crushed POV) - Adam Giantboy.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam67.png' target='_blank'><img class='img_small' src='../gallery/adam67.png'></a><br><br>Stock Material - Vore (POV).</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam68.png' target='_blank'><img class='img_small' src='../gallery/adam68.png'></a><br><br>Stock Material - Vore 1 (POV).</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam69.png' target='_blank'><img class='img_small' src='../gallery/adam69.png'></a><br><br>Stock Material - Lips (POV).</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam70.png' target='_blank'><img class='img_small' src='../gallery/adam70.png'></a><br><br>Stock Material - Under Glass 1.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam71.png' target='_blank'><img class='img_small' src='../gallery/adam71.png'></a><br><br>Stock Material - Under Glass 2.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam72.png' target='_blank'><img class='img_small' src='../gallery/adam72.png'></a><br><br>Stock Material - Under Glass 3.</div>";

    let page10 = "<div id='name_page'>Page: 10</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam73.png' target='_blank'><img class='img_small' src='../gallery/adam73.png'></a><br><br>Stock Material - Fingered (POV).</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam74.png' target='_blank'><img class='img_small' src='../gallery/adam74.png'></a><br><br>Stock Material - On my Chest.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam75.png' target='_blank'><img class='img_small' src='../gallery/adam75.png'></a><br><br>Stock Material - Pocket Peek.</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam76.png' target='_blank'><img class='img_small' src='../gallery/adam76.png'></a><br><br>Stock Material - Palm Stuff.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam77.png' target='_blank'><img class='img_small' src='../gallery/adam77.png'></a><br><br>Stock Material - Palm Stuff 2.</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam78.png' target='_blank'><img class='img_small' src='../gallery/adam78.png'></a><br><br>Stock Material - Slight Tease.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam79.png' target='_blank'><img class='img_small' src='../gallery/adam79.png'></a><br><br>Stock Material - In good Hands.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam80.png' target='_blank'><img class='img_small' src='../gallery/adam80.png'></a><br><br>Stock Material - Closer Look.</div>";

    let page11 = "<div id='name_page'>Page: 11</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam81.png' target='_blank'><img class='img_small' src='../gallery/adam81.png'></a><br><br>Stock Material - on the finger.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam82.png' target='_blank'><img class='img_small' src='../gallery/adam82.png'></a><br><br>At His Finger Tips - Adam Giantboy.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam83.png' target='_blank'><img class='img_small' src='../gallery/adam83.png'></a><br><br>A treat for the Giant - Adam Giantboy.</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam84.png' target='_blank'><img class='img_small' src='../gallery/adam84.png'></a><br><br>To comfort of His back pocket - Adam Giantboy.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam85.png' target='_blank'><img class='img_small' src='../gallery/adam85.png'></a><br><br>What a shame.. - Adam Giantboy.</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam86.png' target='_blank'><img class='img_small' src='../gallery/adam86.png'></a><br><br>Stock Material On Hand - Adam Giantboy.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam87.png' target='_blank'><img class='img_small' src='../gallery/adam87.png'></a><br><br>Stock Material On Hand 2 - Adam Giantboy.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam88.png' target='_blank'><img class='img_small' src='../gallery/adam88.png'></a><br><br>Stock Material On Hand 3 - Adma Giantboy.</div>";

    let page12 = "<div id='name_page'>Page: 12</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam89.png' target='_blank'><img class='img_small' src='../gallery/adam89.png'></a><br><br>Stock Material - Looking at Palm.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam90.png' target='_blank'><img class='img_small' src='../gallery/adam90.png'></a><br><br>Big Ol' Kiss (Older Edit).</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam91.png' target='_blank'><img class='img_small' src='../gallery/adam91.png'></a><br><br>Entertaining the Giant.</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam92.png' target='_blank'><img class='img_small' src='../gallery/adam92.png'></a><br><br>Stock Material - On Couch 1.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam93.png' target='_blank'><img class='img_small' src='../gallery/adam93.png'></a><br><br>Stock Material - On Couch 2.</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam94.png' target='_blank'><img class='img_small' src='../gallery/adam94.png'></a><br><br>Stock Material - On Couch 3.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam95.png' target='_blank'><img class='img_small' src='../gallery/adam95.png'></a><br><br>Stock Material - On Couch 4.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam96.png' target='_blank'><img class='img_small' src='../gallery/adam96.png'></a><br><br>Stock Material - On Couch 5.</div>";

    let page13 = "<div id='name_page'>Page: 13</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam97.png' target='_blank'><img class='img_small' src='../gallery/adam97.png'></a><br><br>Stock Material - On Couch 6.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam98.png' target='_blank'><img class='img_small' src='../gallery/adam98.png'></a><br><br>Stock Material - On Couch 7.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam99.png' target='_blank'><img class='img_small' src='../gallery/adam99.png'></a><br><br>Stock Material - On Couch 8.</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam100.png' target='_blank'><img class='img_small' src='../gallery/adam100.png'></a><br><br>Stock Material - On Couch 9.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam101.png' target='_blank'><img class='img_small' src='../gallery/adam101.png'></a><br><br>Giantboy want use tiny as cushion - Adam Giantboy.</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam102.png' target='_blank'><img class='img_small' src='../gallery/adam102.png'></a><br><br>Stock Material - Catching 1.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam103.png' target='_blank'><img class='img_small' src='../gallery/adam103.png'></a><br><br>Stock Material - Catching 2.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam104.png' target='_blank'><img class='img_small' src='../gallery/adam104.png'></a><br><br>Stock Material - Catching 3.</div>";

    let page14 = "<div id='name_page'>Page: 14</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam105.png' target='_blank'><img class='img_small' src='../gallery/adam105.png'></a><br><br>Stock Material - Catching 4.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam106.png' target='_blank'><img class='img_small' src='../gallery/adam106.png'></a><br><br>Stock Material - Catching 5.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam107.png' target='_blank'><img class='img_small' src='../gallery/adam107.png'></a><br><br>Stock Material - Catching 6.</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam108.png' target='_blank'><img class='img_small' src='../gallery/adam108.png'></a><br><br>Stock Material - Catching 7.</div>"+
    "<div id='pic5' class='pic'><a href='../gallery/adam109.png' target='_blank'><img class='img_small' src='../gallery/adam109.png'></a><br><br>Stock Material - Catching 8.</div>"+
    "<div id='pic6' class='pic'><a href='../gallery/adam110.png' target='_blank'><img class='img_small' src='../gallery/adam110.png'></a><br><br>Stock Material - Catching 9.</div>"+
    "<div id='pic7' class='pic'><a href='../gallery/adam111.png' target='_blank'><img class='img_small' src='../gallery/adam111.png'></a><br><br>Stock Material - Catching 10.</div>"+
    "<div id='pic8' class='pic'><a href='../gallery/adam112.png' target='_blank'><img class='img_small' src='../gallery/adam112.png'></a><br><br>Stock Material - Standing POV 1.</div>";

    let page15 = "<div id='name_page'>Page: 15</div>"+
    "<div id='pic1' class='pic'><a href='../gallery/adam113.png' target='_blank'><img class='img_small' src='../gallery/adam113.png'></a><br><br>Stock Material - Standing POV 2.</div>"+
    "<div id='pic2' class='pic'><a href='../gallery/adam114.png' target='_blank'><img class='img_small' src='../gallery/adam114.png'></a><br><br>Stock Material - Standing POV 3.</div>"+
    "<div id='pic3' class='pic'><a href='../gallery/adam115.png' target='_blank'><img class='img_small' src='../gallery/adam115.png'></a><br><br>Stock Material - Vore 2 (POV).</div>"+
    "<div id='pic4' class='pic'><a href='../gallery/adam116.png' target='_blank'><img class='img_small' src='../gallery/adam116.png'></a><br><br>Fun with tiny - Adam Giantboy.</div>"

    if(pages == "Page 1")
    {
        select.innerHTML = page1;
    }
    else if(pages == "Page 2")
    {
        select.innerHTML = page2;
    }
    else if(pages == "Page 3")
    {
        select.innerHTML = page3;
    }
    else if(pages == "Page 4")
    {
        select.innerHTML = page4;
    }
    else if(pages == "Page 5")
    {
        select.innerHTML = page5;
    }
    else if(pages == "Page 6")
    {
        select.innerHTML = page6;
    }
    else if(pages == "Page 7")
    {
        select.innerHTML = page7;
    }
    else if(pages == "Page 8")
    {
        select.innerHTML = page8;
    }
    else if(pages == "Page 9")
    {
        select.innerHTML = page9;
    }
    else if(pages == "Page 10")
    {
        select.innerHTML = page10;
    }
    else if(pages == "Page 11")
    {
        select.innerHTML = page11;
    }
    else if(pages == "Page 12")
    {
        select.innerHTML = page12;
    }
    else if(pages == "Page 13")
    {
        select.innerHTML = page13;
    }
    else if(pages == "Page 14")
    {
        select.innerHTML = page14;
    }
    else if(pages == "Page 15")
    {
        select.innerHTML = page15;
    }
    else
    {
        select.innerHTML = "";
    }
}