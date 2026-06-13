import { useState, useRef, useEffect, type ChangeEvent, type FormEvent } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { MessageSquare, X, Send } from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { business } from "@/lib/business";

interface Message {
  role: 'user' | 'assistant';
  content: string;
}

const INITIAL_MESSAGE: Message = {
  role: 'assistant',
  content: "Hi, I can help you choose a Snoasis catering package. What type of event are you planning, and how many guests are you expecting?"
};

const ChatBot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([INITIAL_MESSAGE]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: 'smooth' });
    }
  }, [messages]);

  const toggleChat = () => {
    setIsOpen(!isOpen);
  };

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const mockApiCall = async (userMessage: string): Promise<string> => {
    // Simulate API call with predefined responses based on keywords
    setIsLoading(true);
    
    // Simulate network delay
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const userMessageLower = userMessage.toLowerCase();
    
    if (userMessageLower.includes('price') || userMessageLower.includes('cost') || userMessageLower.includes('pricing')) {
      return "The site keeps public rate numbers off the page. The catering tab asks for the details needed to build the right bid: date, guest count, location, and notes.";
    } else if (userMessageLower.includes('small') || userMessageLower.includes('40') || userMessageLower.includes('birthday')) {
      return "The Neighborhood Party package is the best starting point for smaller events. It covers up to 40 servings, a 2-hour service window, 6 to 8 requested flavors, and a simple table or canopy setup.";
    } else if (userMessageLower.includes('medium') || userMessageLower.includes('80') || userMessageLower.includes('school') || userMessageLower.includes('office')) {
      return "The Crowd Pleaser package is usually the best fit for schools, offices, church groups, and reunions. It covers up to 80 servings, a 2 to 3-hour service window, 10 to 12 requested flavors, and a custom event flavor menu.";
    } else if (userMessageLower.includes('large') || userMessageLower.includes('150') || userMessageLower.includes('wedding') || userMessageLower.includes('corporate')) {
      return "The Celebration Setup works well for weddings, company events, and larger parties. It covers up to 150 servings, expanded flavors, premium toppings, custom signage planning, and staffing matched to guest flow.";
    } else if (userMessageLower.includes('flavor')) {
      return "The public menu lists more than 30 flavors, including Blue Hawaii, Blue Raspberry, Mango, Pina Colada, Tiger's Blood, Watermelon, Wedding Cake, and Red Raspberry. For catered events, choosing a focused flavor list keeps the line moving.";
    } else if (userMessageLower.includes('topping')) {
      return "Cream is the key add-on people call out most often. Catering requests can also include sweet milk, heavy cream, ice cream, or event-specific add-ons if availability is confirmed.";
    } else if (userMessageLower.includes('book') || userMessageLower.includes('reserve') || userMessageLower.includes('schedule')) {
      return `Great. Use the catering form or call ${business.phone}. The most helpful details are event date, guest count, address, start time, and any setup notes.`;
    } else if (userMessageLower.includes('difference') || userMessageLower.includes('compare')) {
      return "The biggest differences are servings, service window, flavor count, toppings, staffing, and setup polish. If the event is public, longer than 3 hours, or over 150 servings, start with a Custom Bid.";
    } else if (userMessageLower.includes('thanks') || userMessageLower.includes('thank you')) {
      return `You're welcome. When you are ready, send the catering form or call ${business.phone}.`;
    } else if (userMessageLower.includes('cancel') || userMessageLower.includes('refund')) {
      return "Cancellation and deposit terms should be confirmed directly when the bid is approved.";
    } else {
      return "That sounds like a good catering lead. To narrow it down, please share the event date, expected guest count, serving window, and city or venue.";
    }
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    if (!input.trim()) return;
    
    const userMessage: Message = {
      role: 'user',
      content: input
    };
    
    setMessages(prev => [...prev, userMessage]);
    setInput('');
    
    try {
      const response = await mockApiCall(input);
      
      const assistantMessage: Message = {
        role: 'assistant',
        content: response
      };
      
      setMessages(prev => [...prev, assistantMessage]);
    } catch (error) {
      console.error('Error getting response:', error);
      
      const errorMessage: Message = {
        role: 'assistant',
        content: 'Sorry, I encountered an error. Please try again.'
      };
      
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <div className="fixed bottom-4 right-4 z-50">
      {isOpen ? (
        <Card className="w-80 sm:w-96 h-[500px] flex flex-col shadow-xl rounded-lg overflow-hidden border-tiki-blue">
          <div className="bg-tiki-blue p-3 flex justify-between items-center">
            <div className="flex items-center gap-2 text-white">
              <MessageSquare size={20} />
              <h3 className="font-medium">Catering Assistant</h3>
            </div>
            <Button variant="ghost" size="icon" onClick={toggleChat} className="text-white hover:bg-tiki-blue/20">
              <X size={20} />
            </Button>
          </div>
          
          <ScrollArea className="flex-1 p-4">
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div 
                  key={index} 
                  className={`flex ${message.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div 
                    className={`max-w-[80%] rounded-2xl p-3 ${
                      message.role === 'user' 
                        ? 'bg-tiki-blue text-white rounded-tr-none' 
                        : 'bg-gray-100 text-gray-800 rounded-tl-none'
                    }`}
                  >
                    <p className="whitespace-pre-line">{message.content}</p>
                  </div>
                </div>
              ))}
              <div ref={messagesEndRef} />
            </div>
          </ScrollArea>
          
          <form onSubmit={handleSubmit} className="p-3 border-t border-gray-200">
            <div className="flex gap-2">
              <Input
                type="text"
                placeholder="Ask about packages..."
                value={input}
                onChange={handleInputChange}
                className="flex-1"
                disabled={isLoading}
              />
              <Button 
                type="submit" 
                size="icon" 
                disabled={isLoading || !input.trim()}
                className="bg-tiki-blue hover:bg-tiki-blue/90"
              >
                <Send size={18} />
              </Button>
            </div>
          </form>
        </Card>
      ) : (
        <Button
          onClick={toggleChat}
          className="h-14 w-14 rounded-full bg-tiki-blue hover:bg-tiki-blue/90 shadow-lg flex items-center justify-center"
        >
          <MessageSquare size={24} className="text-white" />
        </Button>
      )}
    </div>
  );
};

export default ChatBot; 
