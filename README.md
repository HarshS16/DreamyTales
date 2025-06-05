
# 🌙 Dreamy Tales - AI Bedtime Story Generator

A magical web application that creates personalized bedtime stories for children using AI, complete with soothing audio narration that feels like a warm hug from grandma.

![Dreamy Tales](https://via.placeholder.com/800x400/4338ca/ffffff?text=Dreamy+Tales+🌙)

## ✨ Features

- **🎨 Personalized Stories**: Create unique bedtime stories tailored to your child's name and preferences
- **🌈 Multiple Themes**: Choose from magical themes like Forest Adventures, Underwater Kingdoms, Space Adventures, and more
- **🐰 Beloved Characters**: Feature friendly characters like brave bunnies, wise owls, magical unicorns, and gentle elephants
- **🎵 Audio Narration**: Generate soothing audio versions of stories (requires API integration)
- **📱 Responsive Design**: Beautiful, child-friendly interface that works on all devices
- **💾 Download Stories**: Save your favorite stories as text files
- **🎭 Smooth Animations**: Engaging Framer Motion animations throughout the app

## 🚀 Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd dreamy-tales
   ```

2. **Install dependencies**
   ```bash
   npm install
   # or
   yarn install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:8080` to see the application.

## 🏗️ Tech Stack

- **Frontend Framework**: React 18 with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS
- **UI Components**: shadcn/ui
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Routing**: React Router DOM
- **State Management**: TanStack Query

## 📁 Project Structure

```
src/
├── components/
│   ├── ui/              # shadcn/ui components
│   ├── Header.tsx       # App header with navigation
│   ├── HeroSection.tsx  # Landing page hero
│   └── Footer.tsx       # App footer
├── pages/
│   ├── Index.tsx        # Main story generator page
│   └── NotFound.tsx     # 404 page
├── hooks/
│   └── use-toast.ts     # Toast notifications
├── lib/
│   └── utils.ts         # Utility functions
└── App.tsx              # Main app component
```

Build command:
```bash
npm run build
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
## 📞 Support

If you have any questions or need help:

- Open an issue on GitHub
- Visit our [documentation](https://docs.lovable.dev/)
- Join the [Lovable Discord community](https://discord.gg/lovable)

---

**Sweet dreams and happy coding! 🌙✨**
