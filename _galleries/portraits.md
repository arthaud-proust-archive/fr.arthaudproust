---
layout: gallery
title: Portraits
path: portraits
desc: Portraits de rue, d'amis
img: preview.jpg
imgs: 
    - site
    - premier-concours
    - pause
display: true
sitemap: 
    priority: 0.5
    changefreq: weekly
---

{% capture content %}


{% endcapture %}

{% 
    include sections/gallery.html
    title=page.title
    link=page.link
    img=page.img
    imgs=page.imgs
    imgsFolder=page.imgsFolder
    desc=page.desc
    content=content
%}