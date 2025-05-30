
import React, { useState, useEffect } from 'react';
import { Key } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Card } from '@/components/ui/card';

interface ApiKeyInputProps {
  onSave: (apiKey: string) => void;
}

const ApiKeyInput: React.FC<ApiKeyInputProps> = ({ onSave }) => {
  const [apiKey, setApiKey] = useState('');
  const [hasKey, setHasKey] = useState(false);

  useEffect(() => {
    const savedKey = localStorage.getItem('elevenlabs_api_key');
    setHasKey(!!savedKey);
    if (savedKey) {
      setApiKey(savedKey);
    }
  }, []);

  const handleSave = () => {
    if (apiKey.trim()) {
      onSave(apiKey.trim());
      setHasKey(true);
    }
  };

  return (
    <Card className="p-4 bg-white/10 backdrop-blur-md border-white/20">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Key className="text-yellow-300" size={20} />
          <h3 className="text-white font-medium">ElevenLabs API Key</h3>
        </div>
        
        <div className="flex gap-2">
          <Input
            type="password"
            placeholder="Enter your ElevenLabs API key..."
            value={apiKey}
            onChange={(e) => setApiKey(e.target.value)}
            className="bg-white/20 border-white/30 text-white placeholder-purple-300"
          />
          <Button 
            onClick={handleSave}
            size="sm"
            className="bg-blue-600 hover:bg-blue-700"
          >
            Save
          </Button>
        </div>
        
        {hasKey && (
          <p className="text-green-300 text-sm">✓ API key saved</p>
        )}
        
        <p className="text-purple-200 text-xs">
          Get your free API key from{' '}
          <a 
            href="https://elevenlabs.io" 
            target="_blank" 
            rel="noopener noreferrer"
            className="text-yellow-300 hover:underline"
          >
            elevenlabs.io
          </a>
        </p>
      </div>
    </Card>
  );
};

export default ApiKeyInput;
