# 🧠 LeetCode Bucket — Track. Practice. Grow. Repeat.

> A **smart DSA progress tracker** that helps developers organize, visualize, and strengthen their LeetCode journey through structured problem revision and intelligent recommendations.  
> Built with **React**, **Supabase**, and **Node.js**, LeetCode Bucket introduces a unique “**Bucket System**” that helps you stay consistent, revisit mistakes, and master problem patterns — one step at a time.

---

## 🚀 Features

- 🏷️ **Smart Categorization** – Automatically organizes problems by **topic**, **difficulty**, and **status** (Solved / Pending / Retry).  
- 🧠 **Bucket System** – Three intelligent buckets that guide daily practice and learning:
  - 🪣 **Retry Bucket** – Stores problems you couldn’t solve in one go and reminds you after **1–2 days** for focused reattempts.  
  - 🔁 **Similar Pattern Bucket** – Suggests new problems that share a **pattern or logic** with those you’ve already solved (e.g., solving *Majority Element n/2* suggests *Majority Element n/3*).  
  - 📅 **Today’s Queue** – A daily planner that curates **unsolved, retry, and similar problems** to keep your preparation consistent and meaningful.
- 📊 **Progress Dashboard** – Visual charts and streak analytics to track coding consistency, problem categories, and growth trends.  
- 🔍 **Search & Filter** – Quickly find problems by title, tag, or difficulty with optimized **REST API** queries.  
- 🔐 **User Authentication** – Personalized tracking powered by **Supabase Auth** for secure and private data management.  
- ⚡ **Real-Time Updates** – All user actions sync instantly using **Supabase Realtime Database**.  
- 🎯 **Performance Optimization** – Achieved **35% faster load time** through efficient React rendering and state optimization.  
- 🌐 **Fully Responsive UI** – Works smoothly across desktop, tablet, and mobile.

---

## 🧩 The Bucket System (Core Logic)

The **Bucket System** is the heart of LeetCode Bucket — designed to make your coding practice adaptive and structured.

### 🪣 1. Retry Bucket
> “Fail once, fix forever.”

- Automatically stores **unsolved or partially solved problems**.  
- After **1–2 days**, those problems resurface as a **reminder** for reattempting.  
- Helps build long-term memory and problem-solving confidence.  
- Encourages spaced repetition for sustained improvement.

---

### 🔁 2. Similar Pattern Bucket
> “Learn the pattern, not just the problem.”

- Uses your solved history to suggest **problems with similar logic or approach**.  
- Example: Solved **Majority Element (n/2)** → Suggests **Majority Element (n/3)** or related pattern-based problems.  
- Strengthens pattern recognition and accelerates problem-solving ability.

---

### 📅 3. Today’s Queue (Daily Revision Planner)
> “Don’t overthink what to solve — just show up.”

- A curated **daily planner** that suggests:
  - Problems due for retry  
  - Pattern-based recommendations  
  - Random unsolved problems for balance  
- Automatically updates every 24 hours.  
- Keeps your learning continuous and consistent.

---

## 🧠 Why It Matters

Most developers solve problems but fail to **revisit**, **analyze**, or **reinforce**.  
**LeetCode Bucket** fixes that by turning DSA practice into a structured, data-driven habit.  
It’s not just a tracker — it’s your **personal DSA mentor**.

---

## 🛠️ Tech Stack

| Layer | Technologies Used |
|-------|--------------------|
| **Frontend** | React.js, Tailwind CSS |
| **Backend** | Node.js, Supabase |
| **Database** | Supabase PostgreSQL |
| **Visualization** | Recharts |
| **Deployment** | Vercel |
| **Version Control** | Git & GitHub |

---

## ⚙️ Installation & Setup

1. **Clone the repository**
   ```bash
   git clone https://github.com/yourusername/leetcode-bucket.git
