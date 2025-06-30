
"use client"

import React, { useState } from 'react';
import { Stories } from '@/components/Stories';
import { CreatePost } from '@/components/CreatePost';
import { Post } from '@/components/Post';

const mockPosts = [
  {
    id: 1,
    user: {
      name: 'Alex Johnson',
      avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face',
      verified: true
    },
    content: 'Just finished an amazing hike in the mountains! The view was absolutely breathtaking. Nature has a way of putting everything into perspective. 🏔️',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&h=400&fit=crop',
    timestamp: '2 hours ago',
    likes: 142,
    comments: 23,
    shares: 8,
    liked: false
  },
  {
    id: 2,
    user: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108755-2616b612b190?w=40&h=40&fit=crop&crop=face',
      verified: false
    },
    content: 'Excited to share my latest photography project! Been working on this series for months. What do you think? 📸',
    image: 'https://images.unsplash.com/photo-1520637836862-4d197d17c93a?w=600&h=400&fit=crop',
    timestamp: '4 hours ago',
    likes: 89,
    comments: 17,
    shares: 5,
    liked: true
  },
  {
    id: 3,
    user: {
      name: 'Mike Rodriguez',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=face',
      verified: false
    },
    content: 'Team building event was a huge success! Great to see everyone collaborating and having fun. Our company culture is truly something special. 🎉',
    timestamp: '6 hours ago',
    likes: 67,
    comments: 12,
    shares: 3,
    liked: false
  }
];

export const NewsFeed = () => {
  const [posts, setPosts] = useState(mockPosts);

  const handleLike = (postId: number) => {
    setPosts(posts.map(post => 
      post.id === postId 
        ? { ...post, liked: !post.liked, likes: post.liked ? post.likes - 1 : post.likes + 1 }
        : post
    ));
  };

  return (
    <div className="max-w-2xl mx-auto space-y-6">
      <Stories />
      <CreatePost />
      
      <div className="space-y-6">
        {posts.map(post => (
          <Post 
            key={post.id} 
            post={post} 
            onLike={() => handleLike(post.id)}
          />
        ))}
      </div>
    </div>
  );
};
