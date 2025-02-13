import React from "react";
import { Github, Linkedin, Mail } from "lucide-react";

export function ProfileCard() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg p-8 max-w-3xl mx-auto">
      <div className="flex flex-col items-center space-y-6">
        {/* Profile Image */}
        <div className="relative">
          <div className="w-32 h-32 rounded-full overflow-hidden ring-4 ring-gray-100 dark:ring-gray-700">
            <img
              src="https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FbObFN4%2FbtsMiuTWJbK%2F77EHSP6GScdWomxPgbF6ik%2Fimg.jpg"
              alt="Pyungkang Hong"
              className="w-full h-full object-cover"
            />
          </div>
        </div>

        {/* Name */}
        <div className="text-center">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-white">
            Pyungkang Hong
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-1">
            Developer & Project Manager
          </p>
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

        {/* Section Title */}
        <h2 className="text-xl font-bold text-gray-900 dark:text-white text-center">
          "최우선적으로 강조해야하는 프로젝트 매니저의 필수"
        </h2>

        {/* Three Circles Section */}
        <div className="flex flex-col md:flex-row gap-6 mt-4 w-full max-w-3xl">
          {/* First Circle */}
          <div className="flex-1">
            <div className="bg-red-500 rounded-full aspect-square flex flex-col items-center justify-center p-6 text-white">
              <h3 className="font-bold text-lg mb-2">기술창작·</h3>
              <h3 className="font-bold text-lg mb-2">컴퓨터 공학 전공</h3>
              <p className="text-sm text-center">
                사람의 시대: <br></br>사람이 더 살기 좋아진 시대라서 좋은 기술을
                연구합니다
              </p>
            </div>
          </div>

          {/* Second Circle */}
          <div className="flex-1">
            <div className="bg-gray-400 rounded-full aspect-square flex flex-col items-center justify-center p-6 text-white">
              <h3 className="font-bold text-lg mb-2">사용자의 목소리에</h3>
              <h3 className="font-bold text-lg mb-2">소홀하지 않기</h3>
              <p className="text-sm text-center">
                사용자 시나리오를 우선적으로 고려하여<br></br> 최선의 해결책을
                고민합니다.
              </p>
            </div>
          </div>

          {/* Third Circle */}
          <div className="flex-1">
            <div className="bg-black rounded-full aspect-square flex flex-col items-center justify-center p-6 text-white">
              <h3 className="font-bold text-lg mb-2">최대한의 소통,</h3>
              <h3 className="font-bold text-lg mb-2">최소한의 참견</h3>
              <p className="text-sm text-center">
                자신의 '모름'을 인정하고<br></br> 팀원들과 협력하는
                제너럴리스트입니다.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
