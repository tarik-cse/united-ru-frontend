"use client"


import React, { useState } from 'react';
import { Heart, MessageSquare, Share, MoreHorizontal, ThumbsUp } from 'lucide-react';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Separator } from '@/components/ui/separator';

interface PostProps {
  post: {
    id: number;
    user: {
      name: string;
      avatar: string;
      verified: boolean;
    };
    content: string;
    image?: string;
    timestamp: string;
    likes: number;
    comments: number;
    shares: number;
    liked: boolean;
  };
  onLike: () => void;
}

export const Post = ({ post, onLike }: PostProps) => {
  const [showComments, setShowComments] = useState(false);

  return (
    <Card className="bg-white rounded-lg shadow-sm overflow-hidden">
      {/* Post Header */}
      <div className="p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Avatar className="w-10 h-10">
              <AvatarImage src={post.user.avatar} alt={post.user.name} />
              <AvatarFallback>{post.user.name[0]}</AvatarFallback>
            </Avatar>
            <div>
              <div className="flex items-center space-x-2">
                <h3 className="font-medium text-gray-900">{post.user.name}</h3>
                {post.user.verified && (
                  <div className="w-4 h-4 bg-blue-500 rounded-full flex items-center justify-center">
                    <span className="text-white text-xs">✓</span>
                  </div>
                )}
              </div>
              <p className="text-sm text-gray-500">{post.timestamp}</p>
            </div>
          </div>
          <Button variant="ghost" size="icon">
            <MoreHorizontal className="w-5 h-5 text-gray-500" />
          </Button>
        </div>
      </div>

      {/* Post Content */}
      <div className="px-4 pb-3">
        <p className="text-gray-800 leading-relaxed">{post.content}</p>
      </div>

      {/* Post Image */}
      {post.image && (
        <div className="relative">
          <img
            src={post.image}
            alt="Post content"
            className="w-full h-96 object-cover"
          />
        </div>
      )}

      {/* Post Stats */}
      <div className="px-4 py-3">
        <div className="flex items-center justify-between text-sm text-gray-500">
          <div className="flex items-center space-x-2">
            <div className="flex items-center">
              <div className="w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center mr-1">
                <ThumbsUp className="w-3 h-3 text-white" />
              </div>
              <div className="w-5 h-5 bg-red-500 rounded-full flex items-center justify-center -ml-1">
                <Heart className="w-3 h-3 text-white" />
              </div>
            </div>
            <span>{post.likes} likes</span>
          </div>
          <div className="flex items-center space-x-4">
            <span>{post.comments} comments</span>
            <span>{post.shares} shares</span>
          </div>
        </div>
      </div>

      <Separator />

      {/* Post Actions */}
      <div className="px-4 py-2">
        <div className="flex items-center justify-between">
          <Button
            variant="ghost"
            className={`flex items-center space-x-2 flex-1 justify-center ${
              post.liked ? 'text-blue-600' : 'text-gray-600'
            }`}
            onClick={onLike}
          >
            <ThumbsUp className={`w-5 h-5 ${post.liked ? 'fill-current' : ''}`} />
            <span>Like</span>
          </Button>
          <Button
            variant="ghost"
            className="flex items-center space-x-2 flex-1 justify-center text-gray-600"
            onClick={() => setShowComments(!showComments)}
          >
            <MessageSquare className="w-5 h-5" />
            <span>Comment</span>
          </Button>
          <Button variant="ghost" className="flex items-center space-x-2 flex-1 justify-center text-gray-600">
            <Share className="w-5 h-5" />
            <span>Share</span>
          </Button>
        </div>
      </div>

      {/* Comments Section */}
      {showComments && (
        <div className="px-4 pb-4 border-t">
          <div className="mt-4 space-y-3">
            <div className="flex space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=face" alt="Commenter" />
                <AvatarFallback>RC</AvatarFallback>
              </Avatar>
              <div className="flex-1 bg-gray-100 rounded-lg p-3">
                <p className="font-medium text-sm">Robert Chen</p>
                <p className="text-sm text-gray-700">Amazing shot! The lighting is perfect.</p>
              </div>
            </div>
            <div className="flex space-x-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=32&h=32&fit=crop&crop=face" alt="Commenter" />
                <AvatarFallback>MW</AvatarFallback>
              </Avatar>
              <div className="flex-1 bg-gray-100 rounded-lg p-3">
                <p className="font-medium text-sm">Maria Wilson</p>
                <p className="text-sm text-gray-700">Wow! Where was this taken?</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </Card>
  );
};
