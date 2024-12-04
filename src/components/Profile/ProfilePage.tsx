import React from 'react';
import { ProfileCard } from './ProfileCard';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

export function ProfilePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-gray-100 dark:from-gray-900 dark:to-gray-800">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          Back to Projects
        </Link>

        <ProfileCard />
      </div>
    </div>
  );
}