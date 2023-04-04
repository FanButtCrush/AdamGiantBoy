function page()
{
    let pages = document.getElementById("num_page").value;
    let select = document.getElementById("videos");
    document.getElementById("num_page").value = "";

    let page1 = "<div id='name_page'>Page: 1</div>"+
    "<div id='clip1' class='clip'><a href='../videos/adam1.mp4' target='_blank'><img class='img_small' src='../image/thumbview1.jpg'></a><br><br>Barefooted GIANT BOY Attacks Crowd POV.</div>"+
    "<div id='clip2' class='clip'><a href='../videos/adam2.mp4' target='_blank'><img class='img_small' src='../image/thumbview2.jpg'></a><br><br>Giant Boy Attacks Crowd POV Mean Giant.</div>"+
    "<div id='clip3' class='clip'><a href='../videos/adam3.mp4' target='_blank'><img class='img_small' src='../image/thumbview3.jpg'></a><br><br>The human lollipop Giant Adam.</div>"+
    "<div id='clip4' class='clip'><a href='../videos/adam4.mp4' target='_blank'><img class='img_small' src='../image/thumbview4.jpg'></a><br><br>Adam Giantboy Human Crowd Part 2.</div>"+
    "<div id='clip5' class='clip'><a href='../videos/adam5.mp4' target='_blank'><img class='img_small' src='../image/thumbview5.jpg'></a><br><br>Giant Unawere Vore - Adam Giantboy.</div>"+
    "<div id='clip6' class='clip'><a href='../videos/adam6.mp4' target='_blank'><img class='img_small' src='../image/thumbview6.jpg'></a><br><br>Giant Boy Stomping on Crowd (POV).</div>";

    let page2 = "<div id='name_page'>Page: 2</div>"+
    "<div id='clip1' class='clip'><a href='../videos/adam7.mp4' target='_blank'><img class='img_small' src='../image/thumbview7.jpg'></a><br><br>Adam the Giant Doing Squats (POV) WARNING: LOUD SOUNDS #AdamGiantboy.</div>"+
    "<div id='clip2' class='clip'><a href='../videos/adam8.mp4' target='_blank'><img class='img_small' src='../image/thumbview8.jpg'></a><br><br>Giant UNAWARE Devours YOU POV (REQUEST).</div>"+
    "<div id='clip3' class='clip'><a href='../videos/adam9.mp4' target='_blank'><img class='img_small' src='../image/thumbview9.jpg'></a><br><br>Adam Giantboy sit on you [POV].</div>"+
    "<div id='clip4' class='clip'><a href='../videos/adam10.mp4' target='_blank'><img class='img_small' src='../image/thumbview10.jpg'></a><br><br>Trapped in a Giant's Mouth for 1 Minute (POV, Uvula, Tongue) #AdamGiantboy.</div>"+
    "<div id='clip5' class='clip'><a href='../videos/adam11.mp4' target='_blank'><img class='img_small' src='../image/thumbview11.jpg'></a><br><br>Adam makes a human sandwitch.</div>"+
    "<div id='clip6' class='clip'><a href='../videos/adam12.mp4' target='_blank'><img class='img_small' src='../image/thumbview12.jpg'></a><br><br>Adam Giantboy puts human girl in Pocket POV TEST.</div>";

    let page3 = "<div id='name_page'>Page: 3</div>"+
    "<div id='clip1' class='clip'><a href='../videos/adam13.mp4' target='_blank'><img class='img_small' src='../image/thumbview13.jpg'></a><br><br>Adam Giantboy sit on you 2 [POV].</div>"+
    "<div id='clip2' class='clip'><a href='../videos/adam14.mp4' target='_blank'><img class='img_small' src='../image/thumbview14.jpg'></a><br><br>Fancy Giant eats cereal (Vore).</div>"+
    "<div id='clip3' class='clip'><a href='../videos/adam15.mp4' target='_blank'><img class='img_small' src='../image/thumbview15.jpg'></a><br><br>Fee Fi Fo Fum - Adam Giantboy.</div>"+
    "<div id='clip4' class='clip'><a href='../videos/adam16.mp4' target='_blank'><img class='img_small' src='../image/thumbview16.jpg'></a><br><br>The Giant and His Breakfast - Adam Giantboy.</div>";


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
    else
    {
        select.innerHTML = "";
    }
}