# 🤝 KeenKeeper

🔗 **Live Demo:** [keen-keeper-3icm.vercel.app](https://keen-keeper-3icm.vercel.app)

---

## 📖 Description

KeenKeeper is a relationship management app that helps you stay connected with the people who matter most in your life. It tracks how long it's been since you last reached out, reminds you when it's time to reconnect, and logs every interaction — so no friendship ever slips through the cracks.

---

## 🛠️ Technologies Used

- **Next.js 14** — App Router, file-based routing
- **React** — Component-based UI with Context API for state management
- **Tailwind CSS** — Utility-first styling
- **Recharts** — Interactive pie chart for analytics
- **React Toastify** — Toast notifications
- **Lucide React** — Icon library
- **Vercel** — Deployment

---

## ✨ Key Features

### 1. 👥 Friend Tracker
Keep a personal list of friends with details like tags, relationship goals, and how many days since your last contact. Friends are marked as **On Track**, **Almost Due**, or **Overdue** so you always know who needs attention.

### 2. 📅 Interaction Timeline
Log every check-in — whether it's a **Call**, **Text**, or **Video** — and view a full history of your interactions. Filter the timeline by interaction type to quickly find what you're looking for.

### 3. 📊 Friendship Analytics
Visual pie chart showing the breakdown of your interactions by type (Call, Text, Video). Get a clear picture of how you're staying in touch with the people in your life.

---

## 🚀 Getting Started

```bash
# Clone the repository
git clone https://github.com/fatematz/keen-keeper.git

# Navigate to the project folder
cd keen-keeper

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

---

## 📁 Project Structure

```
src/
├── app/
│   ├── page.jsx        # Home page — GetFriendsData() দিয়ে data fetch করে FriendsCard এ pass করে
│   ├── friends/        # Friend detail pages
│   ├── timeline/       # Interaction history
│   └── stats/          # Friendship analytics
├── components/
│   ├── Banner.jsx      # Home page banner
│   └── FriendsCard.jsx # Friend card UI (data props হিসেবে নেয়)
├── context/            # Global state (FriendContext)
└── lib/
    └── GetFriendsData.js  # Friend data fetch করার function # Helper functions & data
```

<img width="1920" height="2226" alt="screencapture-localhost-3000-2026-04-15-18_37_32" src="https://github.com/user-attachments/assets/57d4eb36-8b5c-410b-8a6c-706e21406415" />

