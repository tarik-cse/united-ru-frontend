import { Chat } from "@/components/Chat";
import { Header } from "@/components/Header";
import { NewsFeed } from "@/components/NewsFeed";
import { RightSidebar } from "@/components/RightSidebar";
import { Sidebar } from "@/components/Sidebar";
import Image from "next/image";

export default function Home() {
  return (
    <div className="min-h-screen bg-gray-100">
      <Header />
      <div className="flex max-w-7xl mx-auto pt-16">
        <Sidebar />
        <main className="flex-1 px-4 py-6">
          <NewsFeed />
        </main>
        <RightSidebar />
      </div>
      <Chat />
    </div>
  );
}
