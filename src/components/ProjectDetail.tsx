import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ArrowLeft, ExternalLink, Github } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import { projects } from '../data/projects';

export function ProjectDetail() {
  const { t, i18n } = useTranslation();
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  const currentLang = i18n.language as 'en' | 'kr';

  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#1e2124]">
        <div className="text-center">
          <h1 className="text-2xl font-bold mb-4 text-white">{t('projects.notFound')}</h1>
          <Link to="/" className="text-blue-400 hover:text-blue-300">
            {t('projects.returnHome')}
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1e2124] text-white">
      <div className="container mx-auto px-4 py-12">
        {/* Back Button */}
        <Link
          to="/"
          className="inline-flex items-center text-gray-400 hover:text-white mb-8"
        >
          <ArrowLeft className="w-4 h-4 mr-2" />
          {t('navigation.back')}
        </Link>

        {/* Project Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-white mb-4">
            {project.title[currentLang]}
          </h1>
          <p className="text-xl text-gray-300 max-w-2xl mx-auto">
            {project.description[currentLang]}
          </p>
        </div>

        {/* Screenshots */}
        <div className="mb-16">
          <div className="flex overflow-x-auto gap-6 pb-4 -mx-4 px-4">
            {project.screenshots.map((screenshot, index) => (
              <img
                key={index}
                src={screenshot}
                alt={`${project.title[currentLang]} screenshot ${index + 1}`}
                className={`object-cover rounded-lg shadow-lg flex-none ${
                  project.type === 'web'
                    ? 'w-[800px] h-[450px]'
                    : 'w-[270px] h-[584px]'
                }`}
              />
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Column - Main Card: Links & About */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 overflow-hidden">
            {/* Links Section */}
            <div className="p-8 border-b border-gray-700/50">
              <h2 className="text-2xl font-semibold mb-6 text-white">{t('projectDetails.links')}</h2>
              <div className="space-y-4">
                {Object.entries(project.links).map(([key, value]) => (
                  <div key={key}>
                    <a
                      href={value}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center text-blue-400 hover:text-blue-300"
                    >
                      {key === 'github' ? (
                        <Github className="w-4 h-4 mr-2" />
                      ) : (
                        <ExternalLink className="w-4 h-4 mr-2" />
                      )}
                      {key.charAt(0).toUpperCase() + key.slice(1).replace(/([A-Z])/g, ' $1')}
                    </a>
                  </div>
                ))}
              </div>
            </div>

            {/* About Section */}
            <div className="p-8">
              <h2 className="text-2xl font-semibold mb-6 text-white">{t('projectDetails.about')}</h2>
              <p className="text-gray-300 leading-relaxed">
                {project.details.about[currentLang]}
              </p>
            </div>
          </div>

          {/* Right Column - Main Card: Project Details */}
          <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-gray-700/50 overflow-hidden">
            {/* Period Section */}
            <div className="p-8 border-b border-gray-700/50">
              <h3 className="text-lg font-medium text-white mb-4">{t('projectDetails.period')}</h3>
              <p className="text-gray-300">{project.details.period[currentLang]}</p>
            </div>

            {/* Team Section */}
            <div className="p-8 border-b border-gray-700/50">
              <h3 className="text-lg font-medium text-white mb-4">{t('projectDetails.team')}</h3>
              <div className="space-y-4">
                {project.details.team.map((member, index) => (
                  <div key={index} className="bg-gray-700/30 rounded-lg p-4">
                    <h4 className="font-medium text-white mb-2">{member.role[currentLang]}</h4>
                    <p className="text-gray-300 text-sm">{member.responsibilities[currentLang]}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Tech Stack Section */}
            <div className="p-8 border-b border-gray-700/50">
              <h3 className="text-lg font-medium text-white mb-4">{t('projectDetails.techStack')}</h3>
              <div className="flex flex-wrap gap-2">
                {project.details.stack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-gray-700 text-gray-200 rounded-full text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {/* Key Features Section */}
            <div className="p-8">
              <h3 className="text-lg font-medium text-white mb-4">{t('projectDetails.features')}</h3>
              <ul className="space-y-3">
                {project.details.features[currentLang].map((feature, index) => (
                  <li key={index} className="flex items-start">
                    <span className="inline-block w-2 h-2 bg-blue-400 rounded-full mt-2 mr-3"></span>
                    <span className="text-gray-300">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>

        {/* Success Metrics */}
        <div className="max-w-7xl mx-auto mt-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {Object.entries(project.details.successMetrics).map(([key, value]) => (
              <div
                key={key}
                className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-8 shadow-lg border border-gray-700/50 text-center"
              >
                <div className="text-3xl font-bold text-blue-400 mb-2">
                  {value}%
                </div>
                <div className="text-sm text-gray-300">
                  {t(`projectDetails.metrics.${key}`)}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}