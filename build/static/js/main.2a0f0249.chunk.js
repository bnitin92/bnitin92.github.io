(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{16:function(e,a,t){e.exports=t.p+"static/media/profile.11a1a485.jpg"},17:function(e,a,t){e.exports=t(28)},22:function(e,a,t){},28:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(15),i=t.n(s),c=(t(22),t(2)),l=t(3),o=t(5),m=t(4),d=t(6),u=t(16),p=t.n(u),g=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).sidebarData=e.sidebarData,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-primary fixed-top",id:"sideNav"},r.a.createElement("a",{className:"navbar-brand js-scroll-trigger",href:"#page-top"},r.a.createElement("span",{className:"d-block d-lg-none"},this.sidebarData.firstName," ",this.sidebarData.lastName),r.a.createElement("span",{className:"d-none d-lg-block"},r.a.createElement("img",{className:"img-fluid img-profile rounded-circle mx-auto mb-2",src:p.a,alt:""}))),r.a.createElement("button",{className:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarSupportedContent","aria-controls":"navbarSupportedContent","aria-expanded":"false","aria-label":"Toggle navigation"},r.a.createElement("span",{className:"navbar-toggler-icon"})),r.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarSupportedContent"},r.a.createElement("ul",{className:"navbar-nav"},r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#about"},"About")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#experience"},"Experience")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#education"},"Education")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#skills"},"Skills")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#interests"},"Interests")),r.a.createElement("li",{className:"nav-item"},r.a.createElement("a",{className:"nav-link js-scroll-trigger",href:"#awards"},"Awards")))))}}]),a}(n.Component),h=t(7),b=t(12),f=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).landingData=e.landingData,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"about"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h1",{className:"mb-0"},this.landingData.firstName,r.a.createElement("span",{className:"text-primary"},this.landingData.lastName)),r.a.createElement("div",{className:"subheading mb-5"},this.landingData.phoneNumber," \xb7",r.a.createElement("a",{href:"mailto:name@email.com"},this.landingData.email)),r.a.createElement("p",{className:"lead mb-5"},this.landingData.bio),r.a.createElement("div",{className:"social-icons"},r.a.createElement("a",{href:this.landingData.linkedin},r.a.createElement(h.a,{icon:b.b})),r.a.createElement("a",{href:this.landingData.github},r.a.createElement(h.a,{icon:b.a})))))}}]),a}(n.Component),E=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).experience=e.experience,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex justify-content-center",id:"experience"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Experience"),this.experience.map(function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.position),r.a.createElement("div",{className:"subheading mb-3"},e.organization),r.a.createElement("p",null,e.aboutWork)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),a}(n.Component),v=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).education=e.education,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"education"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Education"),this.education.map(function(e,a){return r.a.createElement("div",{key:a,className:"resume-item d-flex flex-column flex-md-row justify-content-between mb-5"},r.a.createElement("div",{className:"resume-content"},r.a.createElement("h3",{className:"mb-0"},e.university),r.a.createElement("div",{className:"subheading mb-3"},e.degree),r.a.createElement("p",null,e.gpa)),r.a.createElement("div",{className:"resume-date text-md-right"},r.a.createElement("span",{className:"text-primary"},e.fromDate," - ",e.toDate)))})))}}]),a}(n.Component),N=t(10),w=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).skills=e.skills,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"skills"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Skills"),r.a.createElement("div",{className:"subheading mb-3"},"Programming Languages & Tools"),r.a.createElement("div",{className:"row"},this.skills.map(function(e,a){return r.a.createElement("div",{key:a,className:"col-6"},r.a.createElement("p",{className:"list-item"},r.a.createElement(h.a,{icon:N.b,color:"green"}),r.a.createElement("span",{className:"ml-3"},e.name)))}))))}}]),a}(n.Component),k=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).interests=e.interests,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"interests"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Interests"),r.a.createElement("p",null,this.interests.paragraphOne),r.a.createElement("p",{className:"mb-0"},this.interests.paragraphTwo)))}}]),a}(n.Component),y=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).awards=e.awards,t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("section",{className:"resume-section p-3 p-lg-5 d-flex align-items-center",id:"awards"},r.a.createElement("div",{className:"w-100"},r.a.createElement("h2",{className:"mb-5"},"Awards & Certifications"),r.a.createElement("ul",{className:"fa-ul mb-0"},this.awards.map(function(e,a){return r.a.createElement("li",{key:a},r.a.createElement(h.a,{icon:N.a,color:"#ffc107"}),r.a.createElement("span",{className:"ml-2"}," ",e.awardDetail," "))}))))}}]),a}(n.Component),j=t(8),D=t(13),x=function(e){function a(e){var t;return Object(c.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).state={landingData:j.landing,experience:j.experience,education:j.education,skills:j.skills,interests:j.interests,awards:j.awards},D.a.initialize("UA-158818625-1"),D.a.pageview(window.location.pathname),t}return Object(d.a)(a,e),Object(l.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"App"},r.a.createElement(g,{sidebarData:this.state.landingData}),r.a.createElement("div",{className:"container-fluid p-0"},r.a.createElement(f,{landingData:this.state.landingData}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(E,{experience:this.state.experience}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(v,{education:this.state.education}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(w,{skills:this.state.skills}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(k,{interests:this.state.interests}),r.a.createElement("hr",{className:"m-0"}),r.a.createElement(y,{awards:this.state.awards})))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},8:function(e){e.exports={landing:{firstName:"Nitin",lastName:"Bhandari",phoneNumber:"+1 (505) 814 3850",bio:"I am a Full stack Developer and Research Assistant at the University of New Mexico. I primarily work with MERN Stack with Nodejs, Expressjs and MongoDB for backend/serverside development and React for forntend/clientside development. I have developed REST APIs as a part of my current job. I am also a certified Carpentry instructor, conducting workshops in software and data carpentry. I also work on machine learning and deep learning as side projects using Python and Pytorch. Currently I am pursuing my Masters in Computer Science and graduating in December 2020",email:"bnitin92@gmail.com",linkedin:"https://www.linkedin.com/in/nitinbhandari11/",github:"https://github.com/bnitin92"},experience:[{position:"Full Stack Developer/Research Assistant",organization:"University of New Mexico",aboutWork:"Working under Research Data Services department for an NSF EPSCoR project. Responsible of developing web application using web application and migration from older stack. Also work wiht containerized deploymnet using Docker. Timely conducts software and data carpentry wrokshops along with other instructors.",fromDate:"May 2019",toDate:"Present"},{position:"Associate System Engineer",organization:"IBM India Pvt Ltd",aboutWork:"Primarily worked on automation testing for a banking services project. Reduced the overall cost of testing products by 50% (\xa319,000) as the yearly cost by developing an automated testing environment using Unified Functional Testing",fromDate:"March 2016",toDate:"April 2017"},{position:"Web Development Intern",organization:"HCL Career Development Center",aboutWork:"Developed e-commerce website using ASP.NET, C#, HTML, CSS",fromDate:"May 2013",toDate:"June 2013"}],education:[{university:"University of New Mexico",degree:"Master of Science in Computer Science",gpa:"3.77 / 4.0",fromDate:"August 2018",toDate:"December 2020"},{university:"National Institute of Technology Goa",degree:"Bachelor of Technology in Computer Science and Engineering",gpa:"7.42 / 10",fromDate:"August 2011",toDate:"May 2015"}],skills:[{name:"MongoDB"},{name:"Python"},{name:"Express.js"},{name:"JavaScript"},{name:"React"},{name:"Docker"},{name:"Nodejs"},{name:"Pytorch"}],interests:{paragraphOne:"Along with my usual job as a software developer and master's student I love my time being outdoors like going for a hike or exploring new places. I try to visit new places whenever time permits.",paragraphTwo:"When forced indoors, I watch all popular  movies and television shows, usually Hollywood and Bollowod movies. I am a foodie and an aspiring chef and so I try different cuisine and also try cooking different dishes."},awards:[{awardDetail:"Runner up for IBM Service Excellence Award (SEA) year 2016-2017"},{awardDetail:"Certified Software Carpentry Instructor"}]}}},[[17,1,2]]]);
//# sourceMappingURL=main.2a0f0249.chunk.js.map