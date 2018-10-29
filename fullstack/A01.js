//  We've created an App object (a set of key value pairs) to hold the applcation code.
//  The App object shows how to create a JavaScript object and includes
//  examples of standard programming constructs in JavaScript. 
//  The goal is provide many useful examples in a single code file. 
//
//  When you modify the application, use different ids for your HTML elements.
//  Do not use length and width. 

var App = {
  launch: function () {
    App.getFirstName();
    App.getLastName();
    App.getorg();
    App.getrow();
    App.getseatsrow();
    App.getStudents();
    App.getEstimate();
    App.displayExploreButtons();
    App.showExample();
    App.rememberClicks();
  },
  getFirstName: function () {
    let answer = prompt("What is your first name", "Bob");
    if (answer != null) {
      $("#first").html(answer); // $ = jQuery object, uses CSS selectors
      sessionStorage.firstName = answer
    }
  },

  getLastName: function () {
    const s = sessionStorage.firstName + ", what is your last name"
    let answer = prompt(s, "Smith");
    if (answer != null) {
      $("#last").html(answer);  // setter
    }
  },
  getorg: function () {
    const s = sessionStorage.firstName + ", what is the organization name?"
    let answer = prompt(s, "NWMSU");
    if (answer != null) {
      answer =  "your organization is :"+answer
      $("#org").html(answer);  // setter
    }
  },
  getrow: function () {
    let answer = prompt("Enter the number of rows", 5);
    if (answer != null) {
      //document.getElementById("width").innerHTML = answer;
      $('#row').html(answer);   // either double or single tick marks designate strings
    }
  },
  getseatsrow: function () {
    let answer = prompt("Enter number of seats per row", 5);
    if (answer != null) {
      $('#rowseats').html(answer);  // html method works as a getter and a setter
    }
  },
  getStudents: function () {
    //let inputWidth = parseFloat(document.getElementById("width").innerHTML);
    //let inputLength = parseFloat(document.getElementById("length").innerHTML);
    //let answer = Area.calculateArea(inputWidth, inputLength); // do some checks on the inputs
    //document.getElementById("area").innerHTML = answer;
    let inputrow = parseFloat($('#row').html());
    let inputrowseats = parseFloat($('#rowseats').html());
    let answer = App.calculateSeats(inputrow, inputrowseats); // do some checks on the inputs
    $("#student").html(answer);
    $(".displayText").css('display', 'inline-block');  //overwrites display: hidden to make it visible 
    alert("You have about " + answer + "number of students in the class.");
  },
  calculateSeats: function (givenrow, givenrowseats) {
    if (typeof givenrow !== 'number' || typeof givenrowseats !== 'number') {
      return 0;
      //returns 0 if the value typed is not number.
    }

    if((givenrow%1) !== 0 || (givenrowseats%1) !== 0){
      return 0;
      //retruns 0 if it is not the integer
    }

    const minrow = 1;
    const minrowseats = 1;
    const maxrow = 100;
    const maxrowseats = 100;

    // check the first argument.................
    let row // undefined
    if (givenrow < minrow) {
      row = 0;
    }
    else if (givenrow > maxrow) {
      row = 0;
    }
    else {
      row = givenrow;
    }

    //check the second argument ...................
    if (givenrowseats < minrowseats) {
      rowseats = 0;
    }
    else if (givenrowseats > maxrowseats) {
      rowseats = 0;
    }
    else {
      rowseats = givenrowseats;
    }

    // calculate the answer and store in a local variable so we can watch the value
    let NoOfStudents = row * rowseats;
    // return the result of our calculation to the calling function
    return NoOfStudents;
  },
  getEstimate: function () {
    let NoOfStudents = parseFloat(document.getElementById("student").innerHTML);
    let ct;
    if (NoOfStudents < 1) { ct = 0; }
    else { ct = NoOfStudents }; // estimate 1 students per seat
    // document.getElementById("count").innerHTML = count;
    $("#count").html(ct);
    alert("You could have about " + ct + " students.");
    $("#count").css("color", "blue");
    $("#count").css("background-color", "yellow");
  },
  showExample: function () {
    document.getElementById("displayPlace").innerHTML = "";
    let totalCount = parseFloat($('#student').html());
    for (var i = 0; i < totalCount; i++) {
      App.addImage(i);
     // console.log(i)
    }
  },
  addImage: function (icount) {
    var imageElement = document.createElement("img");
    imageElement.id = "image" + icount;
    imageElement.class = "picture";
    imageElement.style.maxWidth = "90px";
    var displayElement = document.getElementById("displayPlace");
    displayElement.appendChild(imageElement);
    document.getElementById("image" + icount).src = "bearcat.png";
  },
  displayExploreButtons: function () {
    $(".displayExploreButtons").css('display', 'block');  //overwrites display: hidden to make it visible 
  },
  exploreHtml: function () {
    alert("Would you like to learn more? \n\n Run the app in Chrome.\n\n" +
      "Right-click on the page, and click Inspect. Click on the Elements tab.\n\n" +
      "Hit CTRL-F and search for displayPlace to see the new image elements you added to the page.\n")
  },
  exploreCode: function () {
    alert("Would you like explore the running code? \n\n Run the app in Chrome.\n\n" +
      "Right-click on the page, and click Inspect. Click on the top-level Sources tab.\n\n" +
      "In the window on the left, click on the .js file.\n\n" +
      "In the window in the center, click on the line number of the App.getFirstName() call to set a breakpoint.\n\n" +
      "Click on it again to remove the breakpoint, and one more time to turn it back on.\n\n" +
      "Up on the web page, click the main button to launch the app.\n\n" +
      "Execution of the code will stop on your breakpoint.\n\n" +
      "Hit F11 to step into the App.getFirstName() function.\n" +
      "Hit F10 to step over the next function call.\n\n" +
      "As you hit F11 and step through your code, the values of local variables appear beside your code - very helpful in debugging.\n\n" +
      "Caution: Hitting F11 in VS Code will make your top-level menu disapper. Hit F11 again to bring it back.\n"
    )
  },
  rememberClicks: function () {
    if (localStorage.getItem("clicks")) { // use getter
      const value = Number(localStorage.clicks) + 1  // or property
      localStorage.setItem("clicks", value)  // use setter
    } else {
      localStorage.clicks = 1 // or property
    }
    s = "You have clicked this button " + localStorage.clicks + " times"
    $("#clicks").html(s) // display forever clicks 
  }
};

