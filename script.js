window.addEventListener('load', () => {
   setTimeout(() => {
      document.getElementById('loadingScreen').classList.add('hidden');
   }, 1000);
});

function WeblogGo(){
   var MySection = document.getElementById("p-card6");
   MySection.scrollIntoView({block: 'start', behavior: 'smooth', inline: 'start'});
}

function AboutGo(){
   var MySection = document.getElementById("filter-btn1");
   MySection.scrollIntoView({block: 'start', behavior: 'smooth', inline: 'start'});
}

function HomeGo(){
   var MySection = document.getElementById("hero");
   MySection.scrollIntoView({block: 'start', behavior: 'smooth', inline: 'start'});
}

function QGo(){
   var MySection = document.getElementById("weblog-card4");
   MySection.scrollIntoView({block: 'start', behavior: 'smooth', inline: 'start'});
}

function ContactGo(){
   var MySection = document.getElementById("q4");
   MySection.scrollIntoView({block: 'start', behavior: 'smooth', inline: 'start'});
}
