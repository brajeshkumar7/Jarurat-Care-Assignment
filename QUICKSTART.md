# ⚡ QUICKSTART GUIDE

## 30-Second Setup

```bash
npm install
npm run dev
```

Visit: `http://localhost:5173` ✨

---

## Project Overview

| Component | Purpose |
|-----------|---------|
| **Header.jsx** | App branding & title |
| **SupportForm.jsx** | Patient intake form |
| **Chatbot.jsx** | FAQ assistant (rule-based) |
| **App.jsx** | Main layout + footer |

---

## Key Features at a Glance

✅ Patient support form (no backend needed)  
✅ AI-powered FAQ chatbot (concept-level, no APIs)  
✅ Fully responsive mobile + desktop  
✅ Tailwind CSS styling  
✅ Ready for Vercel deployment  

---

## What to Customize First

### 1. Update Contact Info
**File:** `src/App.jsx` → Footer section

Change:
```javascript
📧 support@healthcarengo.org
📱 +1-800-HEALTH-1
```

### 2. Customize Chatbot Responses
**File:** `src/components/Chatbot.jsx` → Lines 3-72

Replace example responses with your NGO's actual advice.

**See:** `CHATBOT_GUIDE.md` for detailed instructions

### 3. Update Form Categories
**File:** `src/components/SupportForm.jsx` → Line 65-69

Add/remove healthcare categories as needed.

---

## Deployment in 3 Steps

### Step 1: Push to GitHub
```bash
git init
git add .
git commit -m "Healthcare Support Assistant"
git remote add origin <your-repo>
git push -u origin main
```

### Step 2: Connect to Vercel
- Visit https://vercel.com
- Click "New Project"
- Select GitHub repository
- Click "Deploy"

### Step 3: Done! 🎉
Your app is live at: `https://your-project.vercel.app`

---

## Form Submission

**How It Works:**
1. User fills the patient form
2. Clicks "Submit Request"
3. Data is logged to browser console (Ctrl+Shift+K)
4. Success message appears


## Chatbot Rules (Current)

```
appointment  → How to schedule
emergency    → Emergency disclaimer
volunteer    → How to help
hours        → Support hours
fever        → Fever management
injury       → First aid
mental       → Mental health
cost         → Free services info
```

---

## Troubleshooting

**Issue:** App won't start
```bash
npm install    # Reinstall dependencies
npm run dev    # Try again
```

**Issue:** Port 5173 in use
```bash
npm run dev -- --port 3000
```

**Issue:** Chatbot not showing
- Press `npm run dev` in terminal
- Refresh browser (Ctrl+R)
- Click 💬 button bottom-right

---

## File Descriptions

```
src/
├── App.jsx              ← Main app + footer
├── main.jsx             ← Entry point
├── index.css            ← Tailwind styles
└── components/
    ├── Header.jsx       ← Top banner
    ├── SupportForm.jsx  ← Patient form
    └── Chatbot.jsx      ← FAQ bot
```

---

## Environment

**No environment variables needed!** ✅

This is a frontend-only, stateless app.

---

## Next Steps

1. **Local Testing:**
   ```bash
   npm run dev
   ```

2. **Customize:**
   - Edit `CHATBOT_GUIDE.md` for responses
   - Update footer info in `App.jsx`

3. **Deploy:**
   - Push to GitHub
   - Connect to Vercel
   - Share URL with your NGO

---

## Resources

- **Vite Docs:** https://vitejs.dev
- **Tailwind CSS:** https://tailwindcss.com
- **React:** https://react.dev
- **Deployment:** See `DEPLOYMENT.md`
- **Chatbot Guide:** See `CHATBOT_GUIDE.md`

---

## Status: ✅ Ready for Production

- ✅ All components built
- ✅ Responsive design verified
- ✅ Tailwind CSS configured
- ✅ Chatbot logic working
- ✅ Vercel config ready
- ✅ Documentation complete

---

**Happy coding! 🚀**
