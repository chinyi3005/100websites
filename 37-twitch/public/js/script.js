"use strict";var urlApi="https://www.googleapis.com/youtube/v3/search?part=snippet&eventType=live&maxResults=20&type=video&order=viewCount&key= AIzaSyBIZ1kKJvH6NIJzefMXGiOd18tr-Bic9Z0",urlVideo="https://www.youtube.com/watch?v=",DOM={$section:$(".channel-card")};$.getJSON(urlApi,function(n){for(var e="",a=0;a<n.items.length;a+=1)e+='\n            <a href="'+urlVideo+n.items[a].id.videoId+'"class="channel-card__link" target="_blank">\n                <div class="channel-card__item">\n                    <img src="'+n.items[a].snippet.thumbnails.high.url+'" class="channel-card__img">\n                    <div class="channel-card__content">\n                        <img src="imgs/avatar.png" alt="" class="channel-card__avatar">\n                        <div class="channel-card__container">\n                            <h2 class="channel-card__heading">'+n.items[a].snippet.title+'</h2>\n                            <h3 class="channel-card__subheading">'+n.items[a].snippet.channelTitle+"</h3>\n                        </div>\n                    </div>\n                </div>\n            </a>";DOM.$section.html(e)});