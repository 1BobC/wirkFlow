import {styleBody, addTitle, contact} from './dom';

console.log('index file');
addTitle('add title - test');

styleBody();

console.log(contact);

import users, {getPremUsers} from './data';

const premUsers = getPremUsers(users);
console.log(users, premUsers);

console.log('post watch test');

console.log('will this be watched? Y or N');

console.log('Convince me!');

console.log('Convince me again!');