// Functional

function main() {
  this.questions = [];

  this.create_question = function(description) {
    var question = {
      description: description,
      tell_me_the_question: function() {
        console.log(this.description);
      }
    };

    this.questions.push(question);
  }

  // this.questions.forEach(function(question) {
  //   question.tell_me_the_question();
  // });

  this.get_questions = function() {
    return this.questions;
  }

  this.get_questions_as_human = function() {
    this.get_questions().forEach(function(question) {
      question.tell_me_the_question();
    });
  }
  
}

var questionnarie = new main();

questionnarie.create_question('¿Qué color te gusta?');
questionnarie.create_question('¿Cuál es tu nombre?');
questionnarie.create_question('¿Cuál es tu edad?');
questionnarie.create_question('¿Cuál es tu dirección?');
questionnarie.get_questions_as_human();