
"use client"

import React, { useState } from 'react';
import { Image, Smile, MapPin, Users } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Separator } from '@/components/ui/separator';

export const CreatePost = () => {
  const [postContent, setPostContent] = useState('');

  return (
    <Card className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex space-x-3">
        <Avatar className="w-10 h-10">
          <AvatarImage src="https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=40&h=40&fit=crop&crop=face" alt="User" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
        <div className="flex-1">
          <Textarea
            placeholder="What's on your mind, Jane?"
            value={postContent}
            onChange={(e) => setPostContent(e.target.value)}
            className="border-none resize-none focus:ring-0 p-0 text-lg bg-gray-50 rounded-full px-4 py-3"
            rows={1}
          />
        </div>
      </div>
      
      <Separator className="my-4" />
      
      <div className="flex justify-between items-center">
        <div className="flex space-x-4">
          <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100">
            <Image className="w-5 h-5 text-green-500" />
            <span>Photo/Video</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100">
            <Users className="w-5 h-5 text-blue-500" />
            <span>Tag friends</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100">
            <Smile className="w-5 h-5 text-yellow-500" />
            <span>Feeling</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2 text-gray-600 hover:bg-gray-100">
            <MapPin className="w-5 h-5 text-red-500" />
            <span>Location</span>
          </Button>
        </div>
        <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6">
          Post
        </Button>
      </div>
    </Card>
  );
};
