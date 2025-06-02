// import { GoogleGenerativeAI } from '@google/generative-ai';

// export class GeminiService {
//   private genAI: GoogleGenerativeAI;
//   private model: any;

//   constructor() {
//     const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
//     console.log('Initializing GeminiService...');
//     console.log('API Key exists:', !!apiKey);
    
//     if (!apiKey) {
//       throw new Error('Gemini API key not found in environment variables');
//     }
    
//     try {
//       this.genAI = new GoogleGenerativeAI(apiKey);
//       this.model = this.genAI.getGenerativeModel({ model: 'gemini-pro' });
//       console.log('GeminiService initialized successfully');
//     } catch (error) {
//       console.error('Error initializing GeminiService:', error);
//       throw error;
//     }
//   }

//   async generateStory(prompt: string): Promise<string> {
//     try {
//       console.log('Generating story with prompt:', prompt);
//       const result = await this.model.generateContent(prompt);
//       const response = await result.response;
//       const text = response.text();
//       console.log('Story generated successfully');
//       return text;
//     } catch (error) {
//       console.error('Error generating story:', error);
//       throw new Error('Failed to generate story. Please try again.');
//     }
//   }
// } 
 import { GoogleGenerativeAI } from '@google/generative-ai';

export class GeminiService {
  private genAI: GoogleGenerativeAI;
  private model: any;

  constructor() {
    const apiKey = import.meta.env.VITE_GEMINI_API_KEY;
    console.log('Initializing GeminiService...');
    console.log('API Key exists:', !!apiKey);

    if (!apiKey) {
      throw new Error('Gemini API key not found in environment variables');
    }

    try {
      this.genAI = new GoogleGenerativeAI(apiKey);
      this.model = this.genAI.getGenerativeModel({ model: 'models/gemini-1.5-flash' });
      console.log('GeminiService initialized successfully');
    } catch (error) {
      console.error('Error initializing GeminiService:', error);
      throw error;
    }
  }

  async generateStory(userPrompt: string): Promise<string> {
    try {
      console.log('Generating story with prompt:', userPrompt);

      const prompt = `
Create a complete bedtime story for children that is calm, soothing, and imaginative.
Ensure the entire story fits naturally within 500 characters.
Here is the theme or idea: ${userPrompt}
      `.trim();

      const result = await this.model.generateContent(prompt);
      const response = await result.response;
      const text = await response.text();

      console.log('Story generated successfully');
      return text;
    } catch (error) {
      console.error('Error generating story:', error);
      throw new Error('Failed to generate story. Please try again.');
    }
  }
}
