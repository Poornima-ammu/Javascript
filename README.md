# 🎯 Guess The Number — JavaScript Mini Project

## 📝 Project Description
This is a simple **"Guess the Number"** game built using **pure JavaScript**.  
The program randomly selects a number between **1 and 100**, and the user tries to guess it.  
After each guess, the program gives hints like:
- “It’s too high!” 🔺  
- “It’s too low!” 🔻  
Until the correct number is guessed 🎉

---

## 💡 How It Works
1. The computer generates a **random number** between 1 and 100.  
2. The user is prompted to **enter a guess**.  
3. The program compares the guess with the actual number:
   - If it’s too high → shows a hint.  
   - If it’s too low → shows a hint.  
   - If correct → displays a congratulatory message and the number of attempts.  
4. The game ends when the correct guess is made.

---

## ⚙️ Technologies Used
- **JavaScript (ES6)** ⚡ (for logic and interactivity)  
- **Browser window methods** like:
  - `window.prompt()` — for user input  
  - `window.alert()` — for displaying messages

---

## 🚀 How to Run the Game
1. Clone or download the repository:
   ```bash
   git clone https://github.com/<your-username>/guess-the-number.git
   ```
2. Open the project folder.  
3. Double-click on the **index.html** file — it will open in your browser.  
4. Start playing and guess the number! 🎮  

---

## 🧠 Code Explanation
```js
const min = 1;
const max = 100;
const answer = Math.floor(Math.random() * (max - min + 1) + min);
let guess;
let attempt = 0;
let running = true;

while (running) {
  guess = window.prompt("Enter your guess:");
  attempt++;

  if (guess > answer) {
    window.alert("It's too high!");
  } else if (guess < answer) {
    window.alert("It's too low!");
  } else {
    window.alert(`🎉 Congratulations! The correct number was ${answer}. You guessed it in ${attempt} attempts!`);
    running = false;
  }
}
```

---

## 🏆 Features
✅ Random number generation  
✅ Interactive hints for the player  
✅ Tracks number of attempts  
✅ Simple and beginner-friendly  

---

## 📚 Future Improvements
- Add difficulty levels (Easy/Medium/Hard).  
- Display hints directly in the web page instead of using alerts.  
- Add a “Play Again” button.  

---

## 👩‍💻 Author
**C. Poornima**  
💬 *A simple project demonstrating basic JavaScript logic and browser interaction.*

