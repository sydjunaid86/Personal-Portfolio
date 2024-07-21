function openNav() {
  document.getElementById("mySidenav").style.width = "280px";
  document.getElementById("my-nav-btn").style.border = "none";
  document.getElementById("my-nav-btn").style.outline = "none";


}

function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

 let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }