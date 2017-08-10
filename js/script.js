$("#hamburger").click(function(){
        $(".mobile-nav-div").toggle();
    });


$(".hello").hide().fadeIn(1000);
$(".close-me-button-hello").hide().fadeIn(2000);
$(".close-me-button-hello").click(function (){
    $(".hello").fadeOut("slow");
});

$('a').click(function () {
    $(".info").fadeIn("slow");
    }); 
    $(".close-me-button").click(function (){
    $(".info").fadeOut("slow");
    return false;
    });       

var team = [
	{ 
		name: 'Cordelia',
		job: 'Senior Creative Developer',
		description: 'Cordelia is known as ‘The Helpful One’ around the office, or ‘The Sarcastic One’ to those who know her well. Joining the team back in 2011, Cordelia brought a wealth of knowledge with her from her time studying Media Technology. In her spare time (when she’s not partying with Steven Hawking), Cordelia is often shouting at Arsenal on the TV or working out with some Pilates. Her creative skills are as flexible as her double-leg stretch!',
		img: 'https://placeimg.com/120/120/people/grayscale'
	},
	{
		name: 'Alina',
		job: 'Creative Developer',
		description: 'Alina is known for being “a mega-star at Super Smash Bros”. Quiet on the outside, it doesn’t take much to bring Alina out of her shell, particularly if you mention her beloved homeland, Romania. Alina has an abundance of knowledge from previous work - from illustration and design, to installing structures for a well-known Portuguese artist! Since 2015, Alina continues to impress with her creative skills… and gaming prowess.',
		img: 'https://placeimg.com/120/120/people/grayscale'
	},
	{
		name: 'Mo',
		job: 'Creative Lead',
		description: 'Mo. The Leader of the Pack. The Lone Wolf. The Enigma. These are none of his titles. Joining Cheetah Digital in 2016, Mo took the reins of the Creative team and focussed their raw talent into something pure and wonderful. 7ft tall, built of muscles, Mo has no fear. Consuming whole chickens? Go-karting blind? Constructive creative critiques? Easy as 1-2-3.',
		img: 'https://placeimg.com/120/120/people/grayscale'
	},
	{
		name: 'Andy',
		job: 'Studio Manager',
		description: 'Back in 2007, this lover of chicken feet joined Cheetah Digital. An ex-web developer, Andy’s creative and leadership skills propelled him to Creative Studio Manager, where he now presides. Andy can commonly be found eating multipacks of donuts… with a fork. Strange eating habits aside, Andy is a keen sportsman and gamer, and has begun sharing some games online; 11 viewers so far!',
		img: 'https://placeimg.com/120/120/people/grayscale'
	},
	{
		name: 'Jack',
		job: 'Creative Developer and Designer',
		description: 'Jack, the baby of the team, joined us in 2016. Jack loves football, but he don’t know Jack about it. A team he once managed failed to win a single game all season, ending any hopes for fame and glory. Thankfully, Jack’s coding and design skills are of a much higher calibre. If he’s not drinking copious amounts of beer and gaming, he may be crying in the doctor’s office.',
		img: 'https://placeimg.com/120/120/people/grayscale'
	},
	{
		name: 'Alex',
		job: 'Creative Developer',
		description: 'Alex is best known for one thing… having a face like the shining moon. His true claim to fame however comes from starring in the UK advert for Disney’s ‘Hercules’ as ‘happy child no. 3’. An enthusiastic illustrator and designer, Alex is often found “accidentally” doodling suspicious shapes on post-it notes…',
		img: 'https://placeimg.com/120/120/people/grayscale'
	},
	{
		name: 'Champs',
		job: 'Creative Developer',
		description: 'Ian “The Champ” Champion joined us in 2013. Ian is known around the office for being a big eater, in fact, the only thing he likes bigger than his meals are his Land Rovers. An avid photographer and drone enthusiast, Ian is passionate to a fault - once having a scuffle with a stranger over Pokémon Go… as his name suggests, he just wants to be the very best.',
		img: 'https://placeimg.com/120/120/people/grayscale'
	},
	{
		name: 'David',
		job: 'Creative Developer',
		description: 'David joined us in 2011 (following Cordelia from the same uni course). He then continued his stalking as she moved from MCS to Creative. Does he have a mind of his own? Yes! In fact, he’s written all of these brilliant personal bio’s. Talent abound, perhaps the most impressive thing about this human specimen are his model good looks. In David’s spare time, he enjoys exploring dungeons or slaying dragons.',
		img: 'https://placeimg.com/120/120/people/grayscale'
	},
	{
		name: 'Neil',
		job: 'Senior Creative Developer',
		description: 'Neil - the big, cuddly teddy bear of the team. Don’t squeeze him too tight though, this teddy makes enough noise already! Joining us in 2013, Neil comes from a strong print design background; specialising in things like this very brochure. Neil was once presented an award for ‘best magazine’ by Jenny Bond (impressive!). In his spare time, Neil enjoys walks along the beach (of Eastbourne) and getting his car repaired.',
		img: 'https://placeimg.com/120/120/people/grayscale'
	}
];

var inforTeamMemeber = document.getElementById('info-member');
var string;




// if the div class matches the teamMembers.name then print the name
// intai sa verific daca exista clasa apoi sa salvez udeva si apoi sa compar clasa cu numele 

// if (teamMembers.name === ) {

// }



$('a').click(function () {
	for (var i = 0; i < team.length; i++) {
	var teamMembers = team[i];
	var teamMemebersName = teamMembers.name;
	var teamMemebersJob = teamMembers.job;
	var teamMemebersPhoto = teamMembers.img;
	var teamMemebersDescription = teamMembers.description;
	if($(this).attr('id') === teamMemebersName) {
   	console.log(teamMemebersName);
   	string = "<h1 class='name'>" + teamMemebersName + "</h1>" +  "<h3 class='job-title'>" + teamMemebersJob + "</h3>" +  "<p class='description'>" + teamMemebersDescription + "</p>";
   	inforTeamMemeber.innerHTML = string;
   	document.getElementById("team-memeber").src = teamMemebersPhoto;
   } 
}  
});


// cand dau click pe link verifica daca id ul lui a este egal cu vreunul din objectname