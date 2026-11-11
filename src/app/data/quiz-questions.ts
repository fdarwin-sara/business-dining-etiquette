import { QuizQuestion } from '../models/quiz-question';

export const QUIZ_QUESTIONS: QuizQuestion[] = [
  { question: 'Where should your napkin go after you sit down?', options: ['On the table beside your plate', 'On your lap, folded with the fold toward you', 'Around your collar', 'Under your plate'], answer: 1, explanation: 'Place the napkin on your lap soon after the host does.' },
  { question: 'Which utensil should you generally use first?', options: ['The utensil farthest from the plate', 'The largest fork', 'The utensil closest to the plate', 'Your hands'], answer: 0, explanation: 'Formal place settings are designed to be used from the outside in.' },
  { question: 'What is the best approach to a business conversation?', options: ['Speak mostly about yourself', 'Interrupt to show enthusiasm', 'Ask thoughtful questions and listen actively', 'Avoid eye contact'], answer: 2, explanation: 'Curiosity and attentive listening build trust.' },
  { question: 'When should you silence your phone?', options: ['Only when food arrives', 'Before entering the restaurant', 'After the main course', 'When someone asks'], answer: 1, explanation: 'Silence and put away your phone before the meal begins.' },
  { question: 'What should you do if you have a dietary restriction?', options: ['Say nothing and skip the meal', 'Tell the host in advance', 'Order the most expensive option', 'Explain it to everyone repeatedly'], answer: 1, explanation: 'Advance notice lets the host choose a welcoming, practical venue.' },
  { question: 'Who usually leads the ordering at a hosted meal?', options: ['The newest guest', 'The host', 'The server', 'Whoever speaks first'], answer: 1, explanation: 'Follow the host’s lead, especially about timing and price range.' },
  { question: 'If you need to leave the table briefly, what is best?', options: ['Announce the reason in detail', 'Say a brief excuse me and step away', 'Leave without saying anything', 'Take your plate with you'], answer: 1, explanation: 'A discreet “excuse me” is considerate and sufficient.' },
  { question: 'How should you close a productive business dinner?', options: ['Leave as soon as the check arrives', 'Thank the host and confirm next steps', 'Discuss private complaints', 'Wait silently for others to leave'], answer: 1, explanation: 'A warm thank-you and clear follow-up make the relationship memorable.' },
];
