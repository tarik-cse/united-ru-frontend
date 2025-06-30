
import React from 'react';
import { Home, Users, MessageSquare, Bell, Calendar, Bookmark, Flag, Clock } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

const menuItems = [
  { icon: Home, label: 'Home', active: true },
  { icon: Users, label: 'Friends', count: 23 },
  { icon: MessageSquare, label: 'Messages', count: 5 },
  { icon: Bell, label: 'Notifications', count: 8 },
  { icon: Calendar, label: 'Events' },
  { icon: Bookmark, label: 'Saved' },
  { icon: Flag, label: 'Pages' },
  { icon: Clock, label: 'Memories' },
];

export const Sidebar = () => {
  return (
    <aside className="w-64 p-4 h-screen sticky top-16 overflow-y-auto hidden lg:block">
      {/* User Profile */}
      <div className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 cursor-pointer">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <span className="font-medium text-gray-800">Jane Doe</span>
      </div>

      {/* Menu Items */}
      <nav className="mt-4 space-y-1">
        {menuItems.map((item, index) => (
          <Button
            key={index}
            variant="ghost"
            className={`w-full justify-start p-3 h-auto ${
              item.active ? 'bg-blue-50 text-blue-600' : 'text-gray-700 hover:bg-gray-100'
            }`}
          >
            <item.icon className="w-6 h-6 mr-3" />
            <span className="flex-1 text-left">{item.label}</span>
            {item.count && (
              <span className="bg-red-500 text-white text-xs rounded-full px-2 py-1 min-w-[20px] text-center">
                {item.count}
              </span>
            )}
          </Button>
        ))}
      </nav>

      {/* Shortcuts */}
      <div className="mt-6">
        <h3 className="text-sm font-medium text-gray-500 mb-3">Your shortcuts</h3>
        <div className="space-y-2">
          {['Photography Club', 'Tech News', 'Cooking Recipes'].map((group, index) => (
            <div key={index} className="flex items-center space-x-3 p-2 rounded-lg hover:bg-gray-100 cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-400 to-pink-400 rounded-lg flex items-center justify-center">
                <span className="text-white text-xs font-bold">{group[0]}</span>
              </div>
              <span className="text-sm text-gray-700">{group}</span>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};
