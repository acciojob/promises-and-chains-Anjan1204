document.getElementById("voteForm").addEventListener("submit", function (e) {
  e.preventDefault(); // prevent form submission

  const name = document.getElementById("name").value.trim();
  const age = document.getElementById("age").value.trim();

  // Validation: Check if both fields are filled
  if (!name || !age) {
    alert("Please enter valid details.");
    return;
  }

  // Convert age to number
  const userAge = parseInt(age);

  // Create a Promise to resolve/reject based on age
  const checkVotingEligibility = new Promise((resolve, reject) => {
    setTimeout(() => {
      if (userAge > 18) {
        resolve(`Welcome, ${name}. You can vote.`);
      } else {
        reject(`Oh sorry ${name}. You aren't old enough.`);
      }
    }, 4000); // 4 seconds delay
  });

  // Handle promise
  checkVotingEligibility
    .then(message => alert(message))
    .catch(error => alert(error));
});
