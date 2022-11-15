
// I can confirm that the randomIndex function is working after testing it with a test array.
const randomIndex = (array) => {
 return array[Math.floor(Math.random() * 5)];
}

//create function which combines pieces of data into a status.
const status = () => {

const figures = ['Napoleon ', 'Lennon ', 'Disraeli ', 'Ligeti ', 'Medici ']
const activities = ['is thinking about world dominion ', 'is trying to bring about world peace ', 'is speaking to MPs ', 'is composing a new symphony ', 'is funding the completion of a cathedral '];
const places = ['on the Island of Elba.', 'in bed.', 'in the house of commons.', 'in his music room.', 'in his big Florentine palace.'];

return randomIndex(figures) + randomIndex(activities) + randomIndex(places);

}

console.log(status());

