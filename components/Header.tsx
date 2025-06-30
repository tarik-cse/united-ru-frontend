
"use client"

import React, { useState } from 'react';
import { Search, Home, Users, MessageSquare, Bell, ChevronDown } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export const Header = () => {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <header className="fixed top-0 left-0 right-0 bg-white shadow-sm z-50 border-b">
      <div className="max-w-7xl mx-auto px-4 h-16 flex items-center justify-between">
        {/* Logo and Search */}
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-lg">UR</span>
            </div>
            <span className="text-xl font-bold text-gray-800 hidden sm:block">United RU</span>
          </div>
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-5 h-5" />
            <Input
              type="text"
              placeholder="Search United RU"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-10 w-64 bg-gray-100 border-none focus:bg-white focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center space-x-2">
          <Button variant="ghost" size="icon" className="relative">
            <Home className="w-6 h-6 text-blue-600" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Users className="w-6 h-6 text-gray-600" />
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <MessageSquare className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">3</span>
          </Button>
          <Button variant="ghost" size="icon" className="relative">
            <Bell className="w-6 h-6 text-gray-600" />
            <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">5</span>
          </Button>
        </div>

        {/* User Menu */}
        <div className="flex items-center space-x-3">
          <Avatar className="w-8 h-8">
            <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face" alt="User" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          <Button variant="ghost" size="icon">
            <ChevronDown className="w-5 h-5 text-gray-600" />
          </Button>
        </div>
      </div>
    </header>
  );
};
