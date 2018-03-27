//ES6 JS Classes
class User {
    constructor(name){
      this.name = name;
      this.type = "Trial User"
    }
    //Method 1
    greet(){
        console.log('Welcome back, ' + this.name);
    }
    //Method 2
    status(){
        console.log('Current status: ' + this.type);
    }
  }

  //Extends
class TrialUser extends User {
    trialEnding(){
      console.log('Your trial will be ending soon, ' + this.name + '.' + ' Would you like to join our program?');
    }
  }

  //Instance of User class
  var anonDude = new User("Anonymous");
  anonDude.greet();
  anonDude.status();

//Instance of TrialUser class
  var trialUser = new TrialUser("Paul");
  trialUser.greet();
  trialUser.trialEnding();
  trialUser.status();

//Banned user extends
class BannedUser extends User {
    banned(){
      console.log(this.name + ', I regret to inform you that you have been banned from the group for user violations.');
    }
  }
  var bannedUser = new BannedUser("Tom");
  bannedUser.greet();
  bannedUser.banned();

