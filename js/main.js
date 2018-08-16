$(function(){
	$('a').click(function(){
		let selectedTag = $(this);
		$('a').removeClass('active');
		$(selectedTag).addClass('active');
		
		
	});
	let homePage = $('.homePage'),
	aboutMePage = $('.aboutMePage'),
	projectsPage = $('.projectsPage'),
	resumePage = $('.resumePage'),
	home = $('.home'),
	aboutme = $('.aboutMe'),
	projects = $('.projects'),
	resume = $('.resumeBox'),
	tabs = home.add(aboutme).add(projects).add(resume),
	project1 = $('#project1'),
	project2 = $('#project2'),
	project3 = $('#project3');


function showTab(tab){
	//start with all tabs
		tabs
		//stop any fadeout, fadein animations
		//.stop()
		//all tabs except the tab being shown
		.not(tab)
		//hide them
		//.fadeOut();
		.prop('hidden',true);
		//tab.fadeIn();
		tab.prop('hidden',false);
}

	homePage.click(function(){
		showTab(home);
		
	});

	aboutMePage.click(function(){
		showTab(aboutme);
	});

	projectsPage.click(function(){
		showTab(projects);
	});

	resumePage.click(function(){
		showTab(resume);


	});

	project1.click(function(){
		
	});

	project2.click(function(){
		
	});

	project3.click(function(){
		
	});

});