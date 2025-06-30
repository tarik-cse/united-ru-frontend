
import React from 'react';
import { Plus } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Card } from '@/components/ui/card';

const stories = [
  {
    id: 1,
    user: 'Your Story',
    avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=60&h=60&fit=crop&crop=face',
    isOwn: true
  },
  {
    id: 2,
    user: 'Emma Wilson',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face',
    background: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=120&h=200&fit=crop'
  },
  {
    id: 3,
    user: 'David Kim',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=60&h=60&fit=crop&crop=face',
    background: 'https://images.unsplash.com/photo-1519389950473-47ba0277781c?w=120&h=200&fit=crop'
  },
  {
    id: 4,
    user: 'Lisa Park',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b190?w=60&h=60&fit=crop&crop=face',
    background: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?w=120&h=200&fit=crop'
  }
];

export const Stories = () => {
  return (
    <Card className="p-4 bg-white rounded-lg shadow-sm">
      <div className="flex space-x-3 overflow-x-auto">
        {stories.map(story => (
          <div key={story.id} className="flex-shrink-0 cursor-pointer">
            <div className="relative">
              <div 
                className="w-24 h-36 rounded-lg bg-gradient-to-b from-gray-300 to-gray-100 flex items-end p-2 overflow-hidden"
                style={{
                  backgroundImage: story.background ? `url(${story.background})` : undefined,
                  backgroundSize: 'cover',
                  backgroundPosition: 'center'
                }}
              >
                {story.isOwn && (
                  <div className="absolute top-2 left-2 w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
                    <Plus className="w-4 h-4 text-white" />
                  </div>
                )}
                <Avatar className={`w-8 h-8 ${story.isOwn ? 'border-2 border-white' : 'border-2 border-blue-500'}`}>
                  <AvatarImage src={story.avatar} alt={story.user} />
                  <AvatarFallback>{story.user[0]}</AvatarFallback>
                </Avatar>
              </div>
              <p className="text-xs text-center mt-1 text-gray-700 truncate w-24">{story.user}</p>
            </div>
          </div>
        ))}
      </div>
    </Card>
  );
};
