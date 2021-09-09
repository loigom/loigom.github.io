const VIDEO_COUNT = 2;

let video = `backgrounds/${Math.floor(Math.random() * 10 % VIDEO_COUNT)}.mp4`; 
let tag = document.createElement("video");
tag.autoplay = tag.loop = tag.muted = 1;
tag.id = "video";
tag.width = "100%";
let source = document.createElement("source");
source.src = video;
source.type= "video/mp4";
tag.appendChild(source);

document.body.appendChild(tag);
