// -----------------------------------
console.log("2- Switch...case");
// -----------------------------------

let role = "guest";

switch (role) {
  case "admin":
    console.log("Admin User");
    break;

  case "moderator":
    console.log("Moderator User");
    break;

  case "guest":
    console.log("Guest User");
    break;

  default:
    console.log("Unknown User");
}
