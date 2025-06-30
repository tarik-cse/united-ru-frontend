"use client"


import React, { useState } from 'react';
import { MessageSquare, Search, Phone, Video, MoreHorizontal, Smile, Plus, Send, Minus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const onlineFriends = [
  {
    id: 1,
    name: 'Sarah Johnson',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b190?w=40&h=40&fit=crop&crop=face',
    active: true,
    lastMessage: 'Hey! How are you doing?',
    time: '2m'
  },
  {
    id: 2,
    name: 'Mike Chen',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
    active: true,
    lastMessage: 'Thanks for the help earlier!',
    time: '5m'
  },
  {
    id: 3,
    name: 'Emma Davis',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    active: false,
    lastMessage: 'See you tomorrow!',
    time: '1h'
  }
];

const chatMessages = [
  {
    id: 1,
    sender: 'Sarah Johnson',
    message: 'Hey! How are you doing?',
    time: '2:30 PM',
    isOwn: false
  },
  {
    id: 2,
    sender: 'You',
    message: 'Hi Sarah! I\'m doing great, thanks for asking. How about you?',
    time: '2:32 PM',
    isOwn: true
  },
  {
    id: 3,
    sender: 'Sarah Johnson',
    message: 'I\'m doing well! Just finished my workout. Want to grab coffee later?',
    time: '2:33 PM',
    isOwn: false
  },
  {
    id: 4,
    sender: 'You',
    message: 'That sounds perfect! How about 4 PM at the usual place?',
    time: '2:35 PM',
    isOwn: true
  }
];

export const Chat = () => {
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [activeChat, setActiveChat] = useState(onlineFriends[0]);
  const [newMessage, setNewMessage] = useState('');

  return (
    <div className="fixed bottom-0 right-4 z-50">
      <div className="flex items-end space-x-3">
        {/* Chat List */}
        <Card className="w-80 bg-white shadow-lg rounded-t-lg">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="font-bold text-gray-800">Contacts</h3>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Search className="w-4 h-4 text-gray-600" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <MoreHorizontal className="w-4 h-4 text-gray-600" />
                </Button>
              </div>
            </div>
          </div>
          
          <div className="max-h-96 overflow-y-auto">
            {onlineFriends.map(friend => (
              <div
                key={friend.id}
                className={`p-3 hover:bg-gray-50 cursor-pointer border-b ${
                  activeChat.id === friend.id ? 'bg-blue-50' : ''
                }`}
                onClick={() => {
                  setActiveChat(friend);
                  setIsChatOpen(true);
                }}
              >
                <div className="flex items-center space-x-3">
                  <div className="relative">
                    <Avatar className="w-10 h-10">
                      <AvatarImage src={friend.avatar} alt={friend.name} />
                      <AvatarFallback>{friend.name[0]}</AvatarFallback>
                    </Avatar>
                    {friend.active && (
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-gray-800 truncate">{friend.name}</p>
                    <p className="text-xs text-gray-500 truncate">{friend.lastMessage}</p>
                  </div>
                  <span className="text-xs text-gray-400">{friend.time}</span>
                </div>
              </div>
            ))}
          </div>
        </Card>

        {/* Active Chat Window */}
        {isChatOpen && (
          <Card className="w-80 bg-white shadow-lg rounded-t-lg">
            {/* Chat Header */}
            <div className="p-3 border-b bg-blue-500 text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <Avatar className="w-8 h-8">
                    <AvatarImage src={activeChat.avatar} alt={activeChat.name} />
                    <AvatarFallback>{activeChat.name[0]}</AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-medium text-sm">{activeChat.name}</p>
                    <p className="text-xs opacity-75">Active now</p>
                  </div>
                </div>
                <div className="flex space-x-2">
                  <Button variant="ghost" size="icon" className="w-8 h-8 text-white hover:bg-white/20">
                    <Phone className="w-4 h-4" />
                  </Button>
                  <Button variant="ghost" size="icon" className="w-8 h-8 text-white hover:bg-white/20">
                    <Video className="w-4 h-4" />
                  </Button>
                  <Button 
                    variant="ghost" 
                    size="icon" 
                    className="w-8 h-8 text-white hover:bg-white/20"
                    onClick={() => setIsChatOpen(false)}
                  >
                    <Minus className="w-4 h-4" />
                  </Button>
                </div>
              </div>
            </div>

            {/* Chat Messages */}
            <div className="h-96 overflow-y-auto p-3 space-y-3">
              {chatMessages.map(message => (
                <div
                  key={message.id}
                  className={`flex ${message.isOwn ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-xs px-3 py-2 rounded-lg ${
                    message.isOwn 
                      ? 'bg-blue-500 text-white' 
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    <p className="text-sm">{message.message}</p>
                    <p className={`text-xs mt-1 ${
                      message.isOwn ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {message.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            {/* Chat Input */}
            <div className="p-3 border-t">
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Plus className="w-4 h-4 text-gray-600" />
                </Button>
                <Input
                  placeholder="Type a message..."
                  value={newMessage}
                  onChange={(e) => setNewMessage(e.target.value)}
                  className="flex-1 border-none focus:ring-0 bg-gray-100 rounded-full px-4"
                />
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Smile className="w-4 h-4 text-gray-600" />
                </Button>
                <Button variant="ghost" size="icon" className="w-8 h-8">
                  <Send className="w-4 h-4 text-blue-500" />
                </Button>
              </div>
            </div>
          </Card>
        )}
      </div>
    </div>
  );
};
