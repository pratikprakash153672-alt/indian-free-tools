function calculatePercentage() {
  const percent = Number(document.getElementById("percent").value);
  const number = Number(document.getElementById("number").value);
  const result = document.getElementById("percentageResult");

  if (!Number.isFinite(percent) || !Number.isFinite(number)) {
    result.textContent = "Please enter both numbers.";
    return;
  }

  const answer = (percent / 100) * number;

  result.textContent = `${percent}% of ${number} = ${answer}`;
}


function calculateAge() {
  const birthDate = document.getElementById("birthDate").value;
  const result = document.getElementById("ageResult");

  if (!birthDate) {
    result.textContent = "Please select your date of birth.";
    return;
  }

  const birth = new Date(birthDate + "T00:00:00");
  const today = new Date();

  if (birth > today) {
    result.textContent = "Birth date cannot be in the future.";
    return;
  }

  let years = today.getFullYear() - birth.getFullYear();
  let months = today.getMonth() - birth.getMonth();
  let days = today.getDate() - birth.getDate();

  if (days < 0) {
    months--;
    const previousMonth = new Date(
      today.getFullYear(),
      today.getMonth(),
      0
    );
    days += previousMonth.getDate();
  }

  if (months < 0) {
    years--;
    months += 12;
  }

  result.textContent =
    `Your age is ${years} years, ${months} months and ${days} days.`;
}


function countWords() {
  const text = document.getElementById("textInput").value;
  const result = document.getElementById("wordResult");

  const trimmedText = text.trim();

  const words = trimmedText
    ? trimmedText.split(/\s+/).length
    : 0;

  const characters = text.length;

  result.textContent =
    `Words: ${words} | Characters: ${characters}`;
}
