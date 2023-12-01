
// const timestamp = new Date().getTime().toString();
// const date = new Date(parseInt(timestamp, 10));
// const options = { year: 'numeric', month: 'short', day: 'numeric' };
// const formattedDate = date.toLocaleDateString('en-US', options);

// console.log(formattedDate); // Output: Apr 3, 2023

// output.data = {
//     date: formattedDate
// }


const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const monthNumber = 12; // For example, if you have the month number (1-12)
const year = 2023; // Example year
const day = 1; // Example day

const formattedDate = `${months[monthNumber - 1].substr(0, 3)} ${day}, ${year}`;

console.log(formattedDate); // Output: Dec 1, 2023

output.data = {
    date: formattedDate
}