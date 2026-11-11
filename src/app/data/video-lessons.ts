import { VideoLesson } from '../models/video-lesson';

export interface VideoLessons {
  home: VideoLesson;
  basics: VideoLesson;
  beforeDinner: VideoLesson;
  table: VideoLesson;
  conversation: VideoLesson;
}

export const VIDEO_LESSONS: VideoLessons = {
  home: {
    label: 'VIDEO LESSON',
    sectionTitle: 'Watch & Learn',
    sectionSubtitle: 'Discover the art of professional business dining.',
    title: 'Business & Dining Etiquette for Career Success',
    description: 'See how dining etiquette, attire, communication, and professional presence work together in career and networking settings.',
    creator: 'Syracuse University - Office of Veteran and Military Affairs',
    videoId: 'SW5hV9IqgcI',
  },
  basics: {
    label: 'VIDEO LESSON',
    title: 'Business Dinner Etiquette: Proper Manners for Dining with Clients',
    description: 'A practical overview of hosting, greeting guests, table manners, ordering, and the small details that shape a professional impression.',
    creator: "Gentleman's Gazette",
    videoId: 'h2-HY2oRzm4',
  },
  beforeDinner: {
    label: 'VIDEO LESSON',
    title: 'How a Host Welcomes and Seats a Restaurant Guest',
    description: 'Watch the arrival sequence in action, from being welcomed by restaurant staff to being guided toward the table with confidence and courtesy.',
    creator: 'Hospitality School',
    videoId: 'vb5ZTFC3R34',
  },
  table: {
    label: 'VIDEO LESSON',
    title: 'How to Use and Hold Cutlery with Confidence',
    description: 'A professional butler demonstrates the outside-in rule, cutlery technique, napkin etiquette, bread service, and formal table signals.',
    creator: 'Rosset Bespoke Butlers',
    videoId: 'ag1efAHNId4',
  },
  conversation: {
    label: 'VIDEO LESSON',
    title: 'How to Engage in Better Small Talk',
    description: 'Explore how thoughtful small talk opens doors, builds trust, and creates the foundation for stronger professional relationships.',
    creator: 'TEDx Talks',
    videoId: '4F-S6rgf1-E',
  },
};
