(function(a){SimpleSlideshow=function(b,c){this.init(b,c)};a.extend(SimpleSlideshow.prototype,{options:{initialized:false,pictureChanged:false},init:function(b,c){this.options=a.extend({},this.options,c);this.images=b;this.count=b.length;this.currentIndex=0;if(this.options.initialized){this.options.initialized.call(this,this.images)}},next:function(){this.currentIndex=(this.currentIndex+1)%this.count;this.updatePicture()},prev:function(){this.currentIndex=(this.currentIndex+(this.count-1))%this.count;this.updatePicture()},index:function(b){this.currentIndex=b;this.updatePicture()},updatePicture:function(){if(this.options.pictureChanged){this.options.pictureChanged.apply(this,[this.images[this.currentIndex],{index:this.currentIndex,count:this.count}])}},reset:function(b){this.images=b;this.count=b.length;this.currentIndex=0},peek:function(c){var b=(this.currentIndex+(this.count+c))%this.count;return{url:this.images[b],index:b}}})})(jQuery);!function(k,m,g){var d="crouching-tiger-hidden-box",j="open-content",o="transition-close",f="transition-open",i="toggle",e="closed",n="+",a="\u2212";var b=function(q){q[0].offsetWidth};var l=function(q,r){q.css("display","none");b(q);r(q);q.css("display","");b(q)};g(m).delegate("."+d+" > ."+i,"click",function(r){var q=g(this),s=q.closest("."+d);r.preventDefault();if(s.hasClass(e)){h(s)}else{p(s)}g.post(q.attr("href"),{})});var p=function(r){var q=r.children("."+j);q.css("height","");q.removeClass(f);q.addClass(o);r.addClass(e);r.children("."+i).text(n)};var h=function(r){var q=r.children("."+j);q.removeClass(o);q.addClass(f);q.css("height",q.attr("data-original-height")+"px");r.removeClass(e);r.children("."+i).text(a)};var c=k.CrouchingTigerHiddenBox={init:function(r){var q=function(){var s,v=g(this),u=v.closest("."+d),t=u.hasClass(e);if(t){l(u,function(w){w.removeClass(e)})}s=v.height();l(v,function(w){if(!t){w.css("height",s)}w.attr("data-original-height",s)});if(t){l(u,function(w){w.addClass(e)})}};if(r){q.call(r.find("."+j))}else{g("."+d+" ."+j).each(q)}}};g(function(){c.init()})}(window,document,jQuery);(function(d,c){var b=d.Profile={};var a;c.extend(b,{init:function(f){var g=550;var e=c("#profile_description");a=f.userId;c(".social_connections_and_reviews").delegate(".more-review-link","click",function(i){var h=c(this).parent();h.html(h.attr("data-full-review"));i.preventDefault()});c(".social_connections a.view_all").click(function(){c("ul.social-connections-list").css({"max-height":"none",overflow:"visible"});c(this).hide()});if(e.height()>g){e.addClass("truncated");e.css("height",g);e.append('<a class="show_more" href="javascript:void(0);">'+e.attr("data-more")+"</a>");e.find(".show_more").one("click",function(h){c(this).remove();e.css("height","");e.removeClass("truncated");h.preventDefault()})}c(".as_host .load_more").click(function(){d.Profile.loadReviewPage("host")});c(".as_guest .load_more").click(function(){d.Profile.loadReviewPage("guest")});c(".recommendations .load_more").click(function(){d.Profile.loadRecommendationsPage()});if(d.Utils.isUserLoggedIn){c.getJSON("/users/show_personalize/"+window.location.pathname.match(/\d+$/)[0]+window.location.search,function(i){if(i.is_owner){c(".edit_profile_container").append('<a href="/users/edit">'+I18n.t("editProfile")+"</a>");if(i.suggestions_view){var h=c(i.suggestions_view);c("#background-fade-top").after(h);CrouchingTigerHiddenBox.init(h)}}if(!i.is_flagged_by_user){c(".flag_controls").show();c(".flag-container").flagWidget({success:function(){c(this.element).fadeOut(1000)}})}if(i.recommendation_view){c("#recommendation_container").append(i.recommendation_view);c("#recommendation_container").show()}if(i.social_connections_view){c(".social_connections_and_reviews").prepend(i.social_connections_view)}})}if(f.pictures&&f.pictures.length>1){b.initSimpleSlidedhow(f.pictures)}if(f.hasProfileVideo){b.initProfileVideo()}},initProfileVideo:function(){var i,g,h,e,f;window.onTemplateLoaded=function(k){var j;e=brightcove.getExperience(k);f=e.getModule(APIModules.VIDEO_PLAYER);h=e.getModule(APIModules.EXPERIENCE);g=e.getModule(APIModules.CONTENT);h.setEnabled(false);j=c("#image_wrapper");f.addEventListener(BCMediaEvent.COMPLETE,onVideoComplete);f.addEventListener(BCMediaEvent.STOP,onVideoComplete);j.click(function(){if(f.getVisible()&&f.isPlaying()){f.pause();c("#small_play_button").removeClass("pause")}else{j.fadeOut("slow",f.play());c("#small_play_button").addClass("pause");c("#profile_video_wrapper").addClass("show_video")}});c("#small_play_button").click(function(){if(f.getVisible()&&f.isPlaying()){f.pause();c("#small_play_button").removeClass("pause")}else{j.fadeOut("slow",f.play());c("#small_play_button").addClass("pause");c("#profile_video_wrapper").addClass("show_video")}})};window.onVideoComplete=function(){c("#image_wrapper").delay(1000).fadeIn("slow",function(){c("#small_play_button").removeClass("pause")});c("#profile_video_wrapper").removeClass("show_video")};if(document.location.protocol==="https:"){i="//sadmin.brightcove.com/js/BrightcoveExperiences_all.js"}else{i="//admin.brightcove.com/js/BrightcoveExperiences_all.js"}LazyLoad.js([i])},initSimpleSlidedhow:function(e){var k;var i=c("#user .profile_pic");var j=c('._pm_inner img:not(".alt-img")',i);var g=c("._pm_inner img.alt-img",i);var h=c(".indicators",i);var l=c("#staged-photos");var f=new SimpleSlideshow(e,{initialized:function(n){var o,m,p;var q="";for(o=0,p=n.length;o<p;o++){q+="<li></li>"}c("#polaroid-navigation .indicators").html(q).find("li:first-child").addClass("selected");m='<img src="'+this.peek(1).url+'"/><img src="'+this.peek(-1).url+'"/>';l.html(m)},pictureChanged:function(o,n){var m;(i.hasClass("alt")?j:g).attr("src",o);i.toggleClass("alt");c("li.selected",h).removeClass("selected");c("li:eq("+n.index+")",h).addClass("selected");m='<img src="'+this.peek(1).url+'"/><img src="'+this.peek(-1).url+'"/>';l.html(m)}});k=c("#polaroid-navigation");c(".nav.prev",k).click(function(m){f.prev();m.preventDefault()});c(".nav.next",k).click(function(m){f.next();m.preventDefault()});h.delegate("li","click",function(){f.index(c(this).index())})},loadReviewPage:function(h){var f=c(".as_"+h+" .load_more");var e=+f.attr("data-page");var g=c(".as_"+h+" .loading_feed");f.hide();g.show();c.ajax({url:"/users/review_page/"+a,data:{page:e+1,role:h},success:function(j){var i;if(j.success){i=c(".as_"+h+" .reviews-list").append(j.review_content);i.find("img.lazy").lazyload();f.attr("data-page",e+1);g.hide();if(!j.last_page){f.show()}}}})},loadRecommendationsPage:function(){var f=c(".recommendations .load_more");var e=+f.attr("data-page");var g=c(".recommendations .loading_feed");f.hide();g.show();c.ajax({url:"/users/recommendation_page/"+a,data:{page:e+1},success:function(i){var h=c(".recommendations .reviews-list").append(i.recommendation_content);h.find("img.lazy").lazyload();f.attr("data-page",e+1);g.hide();if(!i.last_page){f.show()}}})}});c(window).load(function(){c("img.lazy").lazyload()})})(Airbnb,jQuery);var Facebook={setupFacebookModal:function(a){if(Airbnb.userAttributes.open_graph_publish_setting){jQuery(document).bind("fbLoginStatus",Airbnb.Utils.fbInitHasPublishAction)}Airbnb.OpenGraph.init(function(b){jQuery.post("/open_graph_actions",{access_token:FB.getAccessToken(),action_type:"list",hosting_id:a},function(){})},"yo")},showFacebookModal:function(){jQuery.colorbox({inline:true,href:"#open-graph-publish",onOpen:function(){var a=jQuery("#open-graph-publish-image-container");a.find("img").remove();a.append('<img src="'+a.attr("data-url")+'" width="'+a.attr("data-width")+'" height="'+a.attr("data-height")+'" />')}})}};(function(b,a){a.OpenGraph=(function(){var c={};c.init=function(e,d){b("#open-graph-button-yes, .open-graph-wishlist").live("click",function(){b.colorbox.close();if(!a.userAttributes.open_graph_publish_setting==true){a.userAttributes.open_graph_publish_setting=true;b.post("/favorites/open_graph_setting",{allow:"true"})}a.OpenGraph.doWithPermission(function(){e(d)})});b("#open-graph-button-skip").click(function(){b.colorbox.close();return false});b("#open-graph-button-no, .open-graph-wishlist-no").click(function(){b.colorbox.close();a.userAttributes.open_graph_publish_setting=false;b.post("/favorites/open_graph_setting",{allow:"false"});return false})};c.sendActionToFacebook=function(e,d,f){b.post("/open_graph_actions",b.merge({},{access_token:FB.getAccessToken(),action_type:d},e),f||function(){})};c.deleteActionFromFacebook=function(e,d,f){b.ajax({type:"POST",data:b.merge({},{access_token:FB.getAccessToken(),action_type:d},e),url:"/open_graph_actions/"+e.hosting_id,dataType:"json",success:f||function(){}})};c.sendFavoriteToFacebook=function(d){c.sendActionToFacebook({hosting_id:d},"favorite",function(e){b('<span id="" style="font-size: 10px; color: gray; position: absolute;margin: -17px 0 0 27px; width:200px">Added to your Facebook Timeline!</span>').hide().appendTo("#star_"+d).fadeIn(100).delay(3000).fadeOut(1000)})};c.sendWishlistToFacebook=function(d){b.post("/open_graph_actions",{access_token:FB.getAccessToken(),fb_uid:FB.getUserID(),action_type:"wishlist",note:window.wishlistNote,hosting_id:d||window.hostingId,wishlist_id:window.wishlistId},function(){})};c.deleteFavoriteFromFacebook=function(d){b('<span id="" style="font-size: 10px; color: gray; position: absolute;margin: -17px 0 0 27px; width:200px">Deleted from your Facebook Timeline.</span>').hide().appendTo("#star_"+d).fadeIn(100).delay(3000).fadeOut(1000);b.ajax({type:"POST",data:{access_token:FB.getAccessToken(),action_type:"favorite",_method:"delete"},url:"/open_graph_actions/"+d,dataType:"json",success:function(e){}})};c.doWithPermission=function(f,d){if(a.Utils.fbHasPublishAction){f(d)}else{var e={};e.scope="publish_actions";FB.login(function(){FB.api({method:"fql.query",query:"SELECT publish_actions FROM permissions WHERE uid = me()"},function(g){a.Utils.fbHasPublishAction=(g!==undefined&&g[0]&&g[0]["publish_actions"]==="1");if(a.Utils.fbHasPublishAction){f(d);a.userAttributes.open_graph_publish_setting=true;b.post("/favorites/open_graph_setting",{allow:"true"})}else{a.userAttributes.open_graph_publish_setting=false;b.post("/favorites/open_graph_setting",{allow:"false"})}})},e)}};return c})()})(jQuery,window.Airbnb||{});(function(c,b){var a=c.RichReviews={};b.extend(a,{init:function(){b(".review-content.rich").each(function(g,h){var f=b(this);f.css("height",f.height());f.addClass("preview")});var e=function(g,f){b(g).addClass("preview");b(".frame.video",g).each(function(j,k){var h=b(k);var l=h.data("youtube-id");b(k).html(b("#image-embed-template").jqote({embed_code:l},"*"))})};var d=function(g,f){b(g).removeClass("preview");b(".frame.video",g).each(function(j,k){var h=b(k);var l=h.data("youtube-id");b(k).html(b("#video-embed-template").jqote({autoplay:k==f?"1":"0",width:622,height:372,embed_code:l},"*"))})};b(".review-content.rich.preview").delegate(".toggle-preview, .frame","click",function(h){var g=b(this);var f=g.closest(".review-content");if(f.hasClass("preview")){d(f,this)}else{if(!g.hasClass("frame")){e(f,this)}}})}});b(document).ready(a.init)})(Airbnb,jQuery);