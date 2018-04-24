(function(){


var aboutUs = {
        container: document.getElementById('about_us-img'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/data/about_us_1/data.json'
    };
    bodymovin.loadAnimation(aboutUs);

    var ourMission = {
        container: document.getElementById('our_mission-img'),
        renderer: 'svg',
        loop: true,
        autoplay: true,
        path: '/assets/data/about_us_2/data.json'
    };
    bodymovin.loadAnimation(ourMission);



// var testimonials=[{

//   quote:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos delectus ut eius maiores autem accusamus dolorem cupiditate tempora architecto est!",
//   author: "Anshuman",
//   title: "Director,Dell",
//   logo : "dell"
// },
// {

//  quote:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos delectus ut eius maiores autem accusamus dolorem cupiditate tempora architecto est!",
//   author: "Gopikrishnan Kanan",
//   title: "CEO,Hashworks",
//   logo : "hashworks"
// },
// {

//   quote:  "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos delectus ut eius maiores autem accusamus dolorem cupiditate tempora architecto est!",
//   author: "Bill Gates",
//   title: "CEO,Locatr",
//   logo : "locatr"
// }];


$($('.valuable-clients-right__list')[0]).addClass('active');
$('.valuable-clients__quote').text(testimonials[0].quote);
$('.valuable-clients__author').text(testimonials[0].author);
$('.valuable-clients__title').text(testimonials[0].title);


$('.valuable-clients-right__list').on('click',function(e){



   var index=$(this).attr('data-id');
$('.valuable-clients__quote').text(testimonials[index].quote);
$('.valuable-clients__author').text(testimonials[index].author);
$('.valuable-clients__title').text(testimonials[index].title);
$('.valuable-clients-right__list').removeClass("active");
$(this).addClass("active");
});






if($(window).width()  > 1024){

      $(document).ready(function() {
	$('#fullpage').fullpage({
        fixedElements: '.about-indicators',
        anchors: ['about_us','our_mission' ,'valuable_clients'],
	menu: '#myMenu',
    onLeave: function(index, nextIndex, direction){
		var leavingSection = $(this);

		//after leaving section 2
		if(index == 2 && direction =='down'){
            
			 $('.commonMenu__icon').attr("src", "/assets/img/common/LB_Menu_Color.svg");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_Color.svg");
		}

		else if(index == 3 && direction == 'up'){
			$('.commonMenu__icon').attr("src", "/assets/img/common/MENU_WHITE.png");
        $('.commonHeader__logo').attr("src", "/assets/img/common/LB_Logo_White.svg");
		}
	}
    });
});

}

})();