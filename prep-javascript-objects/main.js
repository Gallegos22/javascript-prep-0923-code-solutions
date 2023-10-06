const person = {
  firstName: 'Eduardo',
  lastName: 'Gallegos',
  hobby: 'Fishing',
};
console.log(person);

const fullName =
  " The person's name is: " + person.firstName + ' ' + person.lastName + '.';
console.log(fullName);

const currentJob = " The person's current job is: " + person.job + '.';
console.log(currentJob);

const previousJob =
  " The person's previous job is: " + person['previousJob'] + '.';
console.log(previousJob);

const completePerson = {
  firstName: 'Eduardo',
  lastName: 'Gallegos',
  job: 'Electrician',
  previousJob: 'Door Dasher',
  hobby: 'Fishing',
};

console.log(completePerson);
