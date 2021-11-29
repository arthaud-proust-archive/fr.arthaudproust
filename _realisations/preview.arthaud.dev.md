---
layout: realisation
title: Preview
desc: Visualisez, comparez, organisez, partagez vos photos depuis n'importe quel appareil.
img: /assets/realisations/preview.arthaud.dev/preview.jpg
link: https://preview.arthaud.dev
---

{% capture content %}
<li class="swiper-slide" data-cover="/assets/realisations/bordeaux-photo.fr/preview.jpg">
    <div class="intro-card">
        <!-- <span>Mars 2021</span> -->
        <h2>Section en cours de rédaction</h2>
        <p>
            J'arrive j'arrive !
        </p>
    </div>
</li>
{% endcapture %}

{% 
    include sections/realisation.html
    title=page.title
    link=page.link
    img=page.img
    desc=page.desc
    content=content
%}
