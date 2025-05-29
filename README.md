
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

## 🔧 Configuration

### AI Story Generation

To enable AI story generation, you'll need to integrate with an LLM provider:

1. **OpenAI Integration** (Recommended)
   - Get an API key from [OpenAI](https://platform.openai.com/)
   - Add your API key to environment variables or integrate with Supabase Edge Functions

2. **Alternative LLM Providers**
   - Anthropic Claude
   - Google Gemini
   - Cohere

### Audio Generation

For text-to-speech functionality, we recommend using ElevenLabs:

1. **ElevenLabs Setup**
   - Sign up at [ElevenLabs](https://elevenlabs.io/)
   - Get your API key
   - Install the ElevenLabs React package:
   ```bash
   npm install @11labs/react
   ```

2. **Alternative TTS Providers**
   - Google Cloud Text-to-Speech
   - Amazon Polly
   - Azure Cognitive Services

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

## 🎯 Usage

1. **Enter Child's Name**: Input the child's name for personalization
2. **Choose Theme**: Select from 8 magical themes like "Magical Forest Adventure" or "Underwater Kingdom"
3. **Pick Character**: Choose a friendly character to be the story's protagonist
4. **Generate Story**: Click "Generate Magical Story" to create a unique bedtime story
5. **Listen or Download**: Generate audio narration or download the story as a text file

## 🚀 Deployment

### Deploy with Lovable

1. Click the "Publish" button in the Lovable editor
2. Your app will be deployed to a Lovable subdomain
3. Optionally connect a custom domain in Project Settings

### Deploy to Other Platforms

The app can be deployed to any static hosting service:

- **Vercel**: Connect your GitHub repo for automatic deployments
- **Netlify**: Drag and drop the build folder or connect via Git
- **GitHub Pages**: Use the built-in Actions workflow

Build command:
```bash
npm run build
```

## 🔒 Environment Variables

Create a `.env` file in the root directory:

```env
VITE_OPENAI_API_KEY=your_openai_api_key_here
VITE_ELEVENLABS_API_KEY=your_elevenlabs_api_key_here
```

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- Built with [Lovable](https://lovable.dev) - AI-powered web development platform
- UI components from [shadcn/ui](https://ui.shadcn.com/)
- Icons from [Lucide](https://lucide.dev/)
- Animations powered by [Framer Motion](https://www.framer.com/motion/)

## 📞 Support

If you have any questions or need help:

- Open an issue on GitHub
- Visit our [documentation](https://docs.lovable.dev/)
- Join the [Lovable Discord community](https://discord.gg/lovable)

---

**Sweet dreams and happy coding! 🌙✨**
