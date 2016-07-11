/**
 * Created by Arthur on 2016-06-12.
 */
var animalImage = document.getElementById("animal_image");
var animals =  document.querySelectorAll("a");

function choosePictureListener() {
    var picId = this.attributes["id"].value;
    console.log("PicId: " + picId);
    var picUrl = "";
    switch (picId) {
        case "picture_cat":
            picUrl = "https://pbs.twimg.com/profile_images/616542814319415296/McCTpH_E.jpg";
            break;
        case "picture_dog":
            picUrl = "http://r.ddmcdn.com/s_f/o_1/cx_633/cy_0/cw_1725/ch_1725/w_720/APL/uploads/2014/11/too-cute-doggone-it-video-playlist.jpg";
            break;
        case "picture_owl":
            picUrl = "http://also.kottke.org/misc/images/brad-wilson-owl-02.jpg";
            break;
        default:
            picUrl = "";
            break;
    }
    console.log("PicUrl: " + picUrl);
    animalImage.src = picUrl;
}

function setupListeners() {
    console.log("Size: " + animals.length);
    for (var i = 0; i < animals.length; i++) {
        animals[i].addEventListener("click", choosePictureListener)
    }
}

setupListeners();