// OOP

// Classes
// -----------------------

// Class Question
function Question (description) {

  // Properties
  this.description = description;

  // Methods
  this.tell_me_the_question = function() {
    console.log(this.description);
  }
}

// Class Answer 
function Answer (description, question) {

  // Properties
  this.description = description;
  this.question = question;

  // Methods
  this.tell_me_the_answer = function() {
    console.log('Tengo ' + this.description + ' años');
  }

  this.tell_me_the_question = function() {
    console.log(this.question.tell_me_the_question());
  }

  this.get_description = function() {
    return this.description;
  }
}

// Class Person
function Person (name) {
    this.answers = [];
  
    // Properties
    this.name = name;
  
    // Methods
    this.tell_me_the_name = function() {
      console.log(this.name);
    }

    this.get_name = function() {
      return this.name;
    }

    this.create_answer = function(description, question) {
      var answer = new Answer(description, question);
      this.answers.push(answer) 
    }

    this.get_answers = function() {
      return this.answers;
    }

    this.get_first_answer = function() {
      return this.answers[0].get_description();
    }

    this.get_answers_as_human = function() {
      this.get_answers().forEach(function(answer) {
        answer.tell_me_the_answer();
      });
    }

    this.tell_me_about_yourself = function() {
      console.log('Hola, soy ' + this.get_name() + ' y tengo ' + this.get_first_answer() + ' años');
    }

}

// Instances
// -----------------------

// var question1 = new Question('¿Qué color te gusta?');
// var answer1 = new Answer('Rojo', question1);

// answer1.tell_me_the_question();
// answer1.tell_me_the_answer();

var person = new Person('Juan');
var person2 = new Person('Pedro');

var question = new Question('Dime tu edad');

// person.tell_me_the_name();
// person2.tell_me_the_name();

person.create_answer('25', question);
person2.create_answer('29', question);

person.tell_me_about_yourself();
person2.tell_me_about_yourself();





