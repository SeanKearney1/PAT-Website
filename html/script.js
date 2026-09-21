class PATEvent {
  constructor(type,name,dates, times, school, location, flyer, desc,donate_link,volunteer_link) {
    this.type = type;
    this.name = name;
    this.dates = dates;
    this.times = times;
    this.school = school;
    this.location = location;
    this.flyer = flyer;
    this.desc = desc;
    this.dl = donate_link;
    this.vl = volunteer_link;
  }
}
class Sponsor {
  constructor(image,name) {
    this.image = image;
    this.name = name;
  }
}


const sponsors = [];

sponsors.push(new Sponsor("Auburn-Photoroom.png","Auburn Tavern"));
sponsors.push(new Sponsor("booker_family_dentistry.webp","Booker Family Dentistry"));
sponsors.push(new Sponsor("Carmella's Logo.jpg","Carmellas"));
sponsors.push(new Sponsor("Century 21.jpg","Century 21"));
sponsors.push(new Sponsor("Collective_Mind_Logo.jpg","Collective Mind"));
sponsors.push(new Sponsor("Eureka Family Dental.jpg","Eureka Family Dental"));
sponsors.push(new Sponsor("ferrero label.png","Ferrero Electric"));
sponsors.push(new Sponsor("Great Lakes Health Logo.jpg","Great Lakes Health"));
sponsors.push(new Sponsor("Grosse Ile Pet & Garden Logo.webp","Grosse Ile Pet & Garden"));
sponsors.push(new Sponsor("Island Kiddie Kampus Logo_fixed.jpg","Island Kiddie Kampus"));
sponsors.push(new Sponsor("island_tax_advisory.png","Island Tax Advisory"));
sponsors.push(new Sponsor("JSP Dental Logo 2026_fixed.jpg","JSP Dental"));
sponsors.push(new Sponsor("La Vie en Rose Logo.jpg","La Vie en Rose"));
sponsors.push(new Sponsor("MBA Audrey Trethewey.jpg","MBA Audrey Tretheway"));
sponsors.push(new Sponsor("Simply Gray Logo.jpg","Simply Gray"));
sponsors.push(new Sponsor("Southland Eye Clinic Logo 2023.jpg","Southland Eye Clinic"));
sponsors.push(new Sponsor("Stepping Stones.jpg","Stepping Stones"));

const featured_images = [
    "featured1.jpg",
    "featured2.jpg",
    "featured3.jpg",
    "featured4.jpg",
    "featured5.jpg",
    "featured6.jpg",
    "featured7.jpg",
    "featured8.jpg",
    "featured9.jpg",
    "featured10.jpg"
];
const pat_events = [];
// Event Types: Fundraiser, Event
//pat_events.push(new PATEvent(
// "Event Type",
// "Event Name",
// ["Date 1","Date 2","Date n"],
// ["Time 1", "Time 2", "Time n"],
// "School",
// "Location",
// "Flyer FilePath",
// "Description",
// "Donate Link",
// "Volunteer Link"
// ));


// Back To School Carnival
pat_events.push(new PATEvent(
    "Event", // Event Type
    "Back To School Carnival", // Title
    ["2026-9-12"], // Dates
    ["1:00-5:00 pm"], // Times
    "Middle School", // School Type
    "Grosse Ile Middle School", // Displayed Location
    "carnival_flyer.jpg", // Flyer
    "This is the back to school carnival.", // Description
    "", // Donate Link
    "https://www.signupgenius.com/go/508054EACA629A2FE3-65447608-back#/" // Volunteer Link
));
// Roar Show
pat_events.push(new PATEvent(
    "Event", // Event Type
    "Roar Show", // Title
    ["2026-9-25"], // Dates
    ["8:30 am and 9:30 am"], // Times
    "Elementary School", // School Type
    "Grosse Ile Elementary School", // Displayed Location
    "The Roar Show 2026.jpg", // Flyer
    "The ROAR Show is the School Respect Assembly Program...Designed for grades K-2 and grades 3-5, The ROAR Show Kindness Assembly Program uses storytelling, audience participation and a bit of magic to engage students with age-appropriate lessons of inclusion, acceptance, kindness, responsibility, respect, safety, bully prevention and accountability for their actions. Elementary schools book The ROAR Show and utilize its lessons and activity worksheets to help remind students of their school-wide learning behavior expectations to allow for a positive school environment.", // Description
    "", // Donate Link
    "" // Volunteer Link
));

// Homecoming
pat_events.push(new PATEvent(
    "Event", // Event Type
    "Homecoming", // Title
    ["2026-10-2"], // Dates
    [""], // Times
    "High School", // School Type
    "Grosse Ile High School", // Displayed Location
    "", // Flyer
    "Homecoming.", // Description
    "", // Donate Link
    "" // Volunteer Link
));
// National Walk & Ride To School Day
pat_events.push(new PATEvent(
    "Event", // Event Type
    "National Walk & Ride To School Day", // Title
    ["2026-10-7"], // Dates
    [""], // Times
    "", // School Type
    "Grosse Ile High School", // Displayed Location
    "", // Flyer
    "National Walk & Ride To School Day.", // Description
    "", // Donate Link
    "" // Volunteer Link
));
// Mumkin Pick Up
pat_events.push(new PATEvent(
    "Fundraiser", // Event Type
    "Mumkin Pick Up", // Title
    ["2026-10-10"], // Dates
    ["9:00-1:00 pm"], // Times
    "High School", // School Type
    "Grosse Ile High School", // Displayed Location
    "Updated Mumkin Sale 2026.jpg", // Flyer
    "Mumkin pick up.", // Description
    "", // Donate Link
    "" // Volunteer Link
));

// Trunk or Treat
pat_events.push(new PATEvent(
    "Event", // Event Type
    "Trunk or Treat", // Title
    ["2026-10-21"], // Dates
    ["5:30-7:30 pm"], // Times
    "", // School Type
    "Grosse Ile Airport", // Displayed Location
    "Trunk or Treat 2026.jpg", // Flyer
    "Come join us up at the Grosse Ile airport Wednesday, October 21st for our annual Trunk or Treat!", // Description
    "", // Donate Link
    "" // Volunteer Link
));














const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
const month_caps = [31,28,31,30,31,30,31,31,30,31,30,31];
const date_endings = ['th','st','nd','rd','th','th','th','th','th','th']
const const_date = new Date();
cur_date = const_date;


function LoadPage_main() { window.location.href = "index.html"; }
function LoadPage_elementary() { window.location.href = "parke_lane.html"; }
function LoadPage_middle() { window.location.href = "middle_school.html"; }
function LoadPage_high() { window.location.href = "high_school.html"; }
function LoadPage_calendar() { window.location.href = "calendar.html"; }
function LoadPage_newsletter() { window.location.href = "newsletter.html"; }
function LoadPage_donate() { window.location.href = "donate.html"; }
function LoadPage_volunteer() { window.location.href = "volunteer.html"; }
function LoadPage_fundraiser() { window.location.href = "fundraiser.html"; }




function FillFeaturedImages() {
    var image_board = document.getElementById("featured_images");
    var str = "";
    for (var i = 0; i < featured_images.length; i++) { str += '<div><img src="Featured/' + featured_images[i] + '" alt="Featured Image"></div>'; }
    str += str; // Added so looping scroll doesn't snap.
    image_board.innerHTML = str;

}


function FillSponsors() {
  var table = document.getElementById("sponsors_table");
  var str = "";
  for (var i = 0; i < sponsors.length; i++) {
    str += '<th> <div class="sponsor"> <img src="Sponsors/' + sponsors[i].image + '" alt="Sponsor"> <br>' + sponsors[i].name + ' </div> </th>';
  }
  table.innerHTML = str;
}





function FillCalendar() {

    var table = document.getElementById("event_calendar");
    var date = 0;
    var event_counter = 0;
    var max_date = month_caps[cur_date.getMonth()];
    var start_weekday = new Date(cur_date.getFullYear() + "-" + (cur_date.getMonth()+1) + "-1").getDay();

    document.getElementById("ec_month_year").innerText = months[cur_date.getMonth()] + " " + cur_date.getFullYear();


    // Leap Year
    if (cur_date.getFullYear() % 4 == 0 && cur_date.getMonth() == 1) { max_date++; }

    table.addEventListener('click', (event) => {
      const cell = event.target.closest('td');
      if (!cell) { return; }
      if (cell.innerText == "") { return; }
      var event_date = cell.innerText.substring(0, 2);
      if (event_date == NaN || cell.innerText.length < 3) { return; }
      Events_of_Day_Enable(cell, cur_date.getFullYear()+"-"+(cur_date.getMonth()+1)+"-"+event_date);
    });

    for (var i = 2, row; row = table.rows[i]; i++) {

        for (var j = 0, col; col = row.cells[j]; j++) {
            date = (j + 1 + (i-2) * 7) - start_weekday;
            if (date > 0 && date <= max_date) {
                col.innerText = date;
                col.id = "calendar_red_empty";
            }
            else {
                col.innerText = "";
                col.id = "";
            }
            if (cur_date.getFullYear() == const_date.getFullYear() && cur_date.getMonth() == const_date.getMonth() && date == const_date.getDate()) {
                col.id = "calendar_today";
                col.innerText += " (Today)";
            }

            event_counter = 0;
            pat_events.forEach( function() {
                    if(CalendarFillEvent(event_counter,date,col)) { col.id = "calendar_red"; }
                    event_counter++;
                }
            );

        }
    }
}


function CalendarFillEvent(idx,date,col) {
    var current_date = cur_date.getFullYear()+"-"+(cur_date.getMonth()+1)+"-"+date;
    var didFill = false;
    for (var i = 0, pat_date; pat_date = pat_events[idx].dates[i]; i++) {
        if (current_date == pat_date && pat_events[idx].type == "Event") {
            col.innerText = col.innerText + "\n" + pat_events[idx].name;
            didFill = true;
        }
    }
    return didFill;
}

function GetEventsOfDay(current_date) {
    var dates = [];
    for (var x = 0, pat_evnt; pat_evnt = pat_events[x]; x++) {
      for (var i = 0, pat_date; pat_date = pat_evnt.dates[i]; i++) {
          if (current_date == pat_date) {
              dates.push(pat_evnt);
          }
      }
    }
    return dates;
}
// .2026-10-2. != .2026-10-2.




function CalendarUpMonth() {
    var new_year = cur_date.getFullYear();
    var new_month = cur_date.getMonth() + 1;
    if (new_month > 11) {
        new_month = 0;
        new_year++;
    }
    CalendarSetNewMonth(new_month, new_year);
}

function CalendarBackMonth() {
    var new_year = cur_date.getFullYear();
    var new_month = cur_date.getMonth() - 1;
    if (new_month < 0) {
        new_month = 11;
        new_year--;
    }
    CalendarSetNewMonth(new_month, new_year);
}

function CalendarSetNewMonth(new_month, new_year) {

    cur_date = new Date(new_year + "-" + (new_month+1) + "-" + cur_date.getDay());
    FillCalendar();
}


function FillUpcomingEvents(school,event_type) {
  var str = '';
  var school_events = [];
  for (var i = 0, pat_evnt; pat_evnt = pat_events[i]; i++) {
    if ((school == "" || school == pat_evnt.school) && (event_type == "" || event_type == pat_evnt.type)) { school_events.push(pat_evnt); }
  }
  school_events = SortEvents(false,school_events);
  for (var i = 0; i < school_events.length; i++) {
    str += '<li>'+ school_events[i].name + ' at the ' + school_events[i].school + '</li>';
  }

  document.getElementById("upcoming_events").innerHTML = str;
}


function Events_of_Day_Enable(cell,current_date) {
  var background = document.getElementById("day_events_background");
  var event_content = document.getElementById("day_events");

  background.style.display = "block";

  var cur_date_events = GetEventsOfDay(current_date.trim());

  event_content.innerHTML = "";
  event_content.innerHTML = GetEventsHTML(cur_date_events);

}

function Events_of_Day_Disable() {
  var background = document.getElementById("day_events_background");
  background.style.display = "none";
}



function GetEventsPerSchool(school,event_type) {
var dates = [];
  for (var i = 0, pat_evnt; pat_evnt = pat_events[i]; i++) {
      if ((school == "" || pat_evnt.school == school) && (pat_evnt.type == event_type || event_type == "")) {
          dates.push(pat_evnt);
      }
  }
  return dates;
}



function FillSchoolEvents(school,event_type) {
  var event_content = document.getElementById("school_events");

  var cur_date_events = GetEventsPerSchool(school,event_type);
  cur_date_events = SortEvents(false, cur_date_events);
  event_content.innerHTML = "";
  event_content.innerHTML = GetEventsHTML(cur_date_events);

}



function SortEvents(keepOld, events) {
    var sorted = false;
    var counter = 1;
    var date1 = 0;
    var date2 = 0;
    var switcher;
    while (!sorted) {
        sorted = true;
        for (var i = counter; i < events.length; i++) {
            date1 = new Date(events[i-1].dates[0]).getTime();
            date2 = new Date(events[i].dates[0]).getTime();
            if (date1 > date2) {
                switcher = events[i-1];
                events[i-1] = events[i];
                events[i] = switcher;
                sorted = false;
            }
        }
    }
    if (!keepOld) {
        for (var i = 0; i < events.length; i++) {
            date1 = new Date(events[i].dates[0]).getTime();
            date2 = new Date(const_date).getTime();
            if (date1 < date2) {
                events.shift();
            }
            else { break; }
        }
    }

    return events;
} // 2026-10-10

function RestructureDate(str_date) {
    var new_str_date = "";
    var date_var = new Date(str_date);
    var date = date_var.getDate();
    var month = date_var.getMonth();
    var year = date_var.getFullYear();
    //alert(str_date + " = " + year + " " + months[month] + " " + date);
    if (parseInt(str_date.substr(str_date.length - 1)) != date%10 ) { date++; }

    new_str_date += months[month].substring(0,3) + '.';
    new_str_date += ' ' + date;
    if (date < 10 || date > 19) { new_str_date += date_endings[date%10]; }
    else { new_str_date += "th"; }
    if (year != const_date.getFullYear()) { new_str_date += ', ' + year; }

    return new_str_date;
}


function GetEventsHTML(cur_date_events) {
    var str = "";
    var date1 = 0;
    var date2 = 0;
    var counter = 0;

    str += '<div id="day_event_block" style="border-width:0px;">';
    cur_date_events.forEach(function(pat_evnt) {
      //if (pat_evnt.type == "Event") {
          str += '<div id="day_event_block">';
          str += '<p style="font-size:36px;padding:16px 64px 0px 64px;"><u><b> '+ pat_evnt.name + '</b></u></p>';
          if (pat_evnt.flyer != "") { str += '<img style="float:right;max-width:45%;padding:0px 48px;" src="Events/Flyers/' + pat_evnt.flyer + '" alt="Flyer">'; }
          str += '<p style="font-size:24px;padding:0px 64px;">' + pat_evnt.location + '</p>';
          str += '<p style="font-size:24px;padding:0px 64px;">';
          for (var i = 0, the_date; the_date = pat_evnt.dates[i]; i++) {

            if (i != 0) { date1 = new Date(pat_evnt.dates[i-1]).getDate(); }
            else { date1 = new Date(pat_evnt.dates[i]).getDate(); }
            date2 = new Date(pat_evnt.dates[i]).getDate();

            if (i == 0) { str += RestructureDate(pat_evnt.dates[i]); } //  || i+1 == pat_evnt.dates.length
            else if (i+1 == pat_evnt.dates.length) { str += ' - '+RestructureDate(pat_evnt.dates[i]); }
            else if (date2 - date1 != 1) {
                str += ' - '+RestructureDate(pat_evnt.dates[i-1]);
                if (i+1 < pat_evnt.dates.length) { str += ', '+RestructureDate(pat_evnt.dates[i]);}
            }


          }
          str += '</p>';
          str += '<p style="font-size:24px;padding:0px 64px;">';
          for (var i = 0, the_date; the_date = pat_evnt.times[i]; i++) { if (i != 0 ) { str += ', '; } str += pat_evnt.times[i]; }
          str += '</p>';
          str += '<p style="font-size:24px;padding:0px 64px;">' + pat_evnt.desc + '</p>';

          if (pat_evnt.dl != "") { str += '<p><a href="' + pat_evnt.dl + '" style="font-size:24px;padding:0px 64px;">Donate to the Event!</a> </p>'; }
          if (pat_evnt.vl != "") { str += '<p><a href="' + pat_evnt.vl + '" style="font-size:24px;padding:0px 64px;">Volunteer for the Event!</a> </p>'; }
          str += '</div>';
      //}
      counter++;
    }
  );
    str += '</div>';
    return str;
}
