
import React from 'react';
import { Search, MoreHorizontal } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Input } from '@/components/ui/input';

const friendSuggestions = [
  {
    id: 1,
    name: 'Jennifer Martinez',
    avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b190?w=40&h=40&fit=crop&crop=face',
    mutualFriends: 5
  },
  {
    id: 2,
    name: 'Kevin Thompson',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
    mutualFriends: 3
  },
  {
    id: 3,
    name: 'Amy Foster',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=40&h=40&fit=crop&crop=face',
    mutualFriends: 8
  }
];

const birthdays = [
  {
    id: 1,
    name: 'Chris Evans',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=40&h=40&fit=crop&crop=face'
  }
];

export const RightSidebar = () => {
  return (
    <aside className="w-80 p-4 space-y-6 hidden xl:block">
      {/* Birthdays */}
      <Card className="p-4">
        <h3 className="font-bold text-gray-800 mb-3">Birthdays</h3>
        {birthdays.map(person => (
          <div key={person.id} className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={person.avatar} alt={person.name} />
              <AvatarFallback>{person.name[0]}</AvatarFallback>
            </Avatar>
            <div className="flex-1">
              <p className="text-sm">
                <span className="font-medium">{person.name}</span> has a birthday today
              </p>
            </div>
          </div>
        ))}
      </Card>

      {/* Friend Requests */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-800">Friend Requests</h3>
          <Button variant="ghost" size="sm" className="text-blue-600">
            See All
          </Button>
        </div>
        <div className="space-y-3">
          {friendSuggestions.map(person => (
            <div key={person.id} className="flex items-center space-x-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={person.avatar} alt={person.name} />
                <AvatarFallback>{person.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-sm text-gray-800">{person.name}</p>
                <p className="text-xs text-gray-500">{person.mutualFriends} mutual friends</p>
                <div className="flex space-x-2 mt-2">
                  <Button size="sm" className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-1 text-xs">
                    Confirm
                  </Button>
                  <Button size="sm" variant="outline" className="px-4 py-1 text-xs">
                    Delete
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>

      {/* People You May Know */}
      <Card className="p-4">
        <div className="flex items-center justify-between mb-3">
          <h3 className="font-bold text-gray-800">People You May Know</h3>
          <Button variant="ghost" size="sm" className="text-blue-600">
            See All
          </Button>
        </div>
        <div className="space-y-3">
          {friendSuggestions.reverse().map(person => (
            <div key={`suggestion-${person.id}`} className="flex items-center space-x-3">
              <Avatar className="w-12 h-12">
                <AvatarImage src={person.avatar} alt={person.name} />
                <AvatarFallback>{person.name[0]}</AvatarFallback>
              </Avatar>
              <div className="flex-1">
                <p className="font-medium text-sm text-gray-800">{person.name}</p>
                <p className="text-xs text-gray-500">{person.mutualFriends} mutual friends</p>
                <div className="flex space-x-2 mt-2">
                  <Button size="sm" variant="outline" className="px-4 py-1 text-xs">
                    Add Friend
                  </Button>
                  <Button size="sm" variant="ghost" className="px-2 py-1 text-xs">
                    Remove
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </aside>
  );
};
