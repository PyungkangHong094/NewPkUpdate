import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

export function ProfileCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-md mx-auto">
      <div className="flex flex-col items-center space-y-6">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-700">
            <img
              src="https://media.licdn.com/dms/image/v2/D4E35AQGS_O4ZlET9OA/profile-framedphoto-shrink_200_200/profile-framedphoto-shrink_200_200/0/1704483107835?e=1733634000&v=beta&t=q_VQsDRE9d_BfGzmSpEbDj99qUU4CCbWFTKkW5NMA7U"
              alt="Pyungkang Hong"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">Pyungkang Hong</h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">Developer & Project Manager</p>
        </div>

        {/* Social Links */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/PyungkangHong094"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Github className="w-6 h-6" />
          </a>
          <a
            href="https://www.linkedin.com/public-profile/settings?trk=d_flagship3_profile_self_view_public_profile"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
          >
            <Linkedin className="w-6 h-6" />
          </a>
        </div>

        {/* Email */}
        <a
          href="mailto:pyungkanghong094@gmail.com"
          className="flex items-center space-x-2 text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white transition-colors"
        >
          <Mail className="w-5 h-5" />
          <span>pyungkanghong094@gmail.com</span>
        </a>
      </div>
    </div>
  );
}