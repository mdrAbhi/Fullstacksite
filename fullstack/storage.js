window.onload = function () {
  // We can use getters and setters
  // or properties to access sessionStorage (or localStorage)

  const fname = prompt("What is your first name", "Emmett");
  if (fname != null) {
    sessionStorage.setItem("firstName", fname)
  }
  const s = sessionStorage.getItem("firstName") + ", what is your last name"
  const lname = prompt(s, "Awesome");
  if (lname != null) {
    sessionStorage.lastName = lname
  }
  alert("Hello " + sessionStorage.firstName + " " + sessionStorage.lastName)

  // We cannot test the following in Chrome.
  // Chrome blocks cookies running on localhost
  // for security reasons.

  document.cookie = "firstName=Emmett"
  document.cookie = "lastName=Aweseome"
}