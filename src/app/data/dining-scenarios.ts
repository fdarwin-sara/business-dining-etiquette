import { DiningScenario } from '../models/dining-scenario';

export const DINING_SCENARIOS: DiningScenario[] = [
  {
    title: 'Arriving at the restaurant',
    situation: 'You have been invited to an important business dinner. When should you arrive?',
    options: ['15 minutes before the scheduled time.', 'Exactly at the scheduled time.', '15 minutes late without informing anyone.'],
    answer: 0,
    explanation: 'Arriving a little early gives you time to settle in, review the setting, and meet the moment calmly.',
    recommendation: 'Plan to arrive 5–15 minutes early and notify the host promptly if an unexpected delay occurs.',
  },
  {
    title: 'The table setting',
    situation: 'You sit down and notice several forks and knives beside your plate. Which utensils should you generally use first?',
    options: ['Start with the utensils closest to the plate.', 'Start with the outermost utensils and work inward.', 'Choose whichever utensils look largest.'],
    answer: 1,
    explanation: 'Formal place settings usually follow an outside-in sequence, with each course using the next utensil toward the plate.',
    recommendation: 'When you are unsure, watch the host and begin with the utensil farthest from the plate.',
  },
  {
    title: 'Professional conversation',
    situation: 'Your business partner is explaining an important project. What should you do?',
    options: ['Interrupt and talk about yourself.', 'Check your phone while they speak.', 'Listen attentively and ask relevant questions.'],
    answer: 2,
    explanation: 'Active listening signals respect and helps you understand the person, the project, and the opportunity.',
    recommendation: 'Keep your phone away, maintain natural eye contact, and ask a thoughtful follow-up question.',
  },
  {
    title: 'Dining etiquette',
    situation: 'Your meal arrives, but the other guests are still waiting for their food. What should you do?',
    options: ['Start eating immediately.', 'Wait until everyone has been served or the host indicates that everyone should begin.', 'Ask the waiter to remove the other plates.'],
    answer: 1,
    explanation: 'Waiting allows the group to share the meal comfortably and shows consideration for everyone at the table.',
    recommendation: 'Pause until the group is ready, unless the host warmly encourages you to begin.',
  },
  {
    title: 'Paying the bill',
    situation: 'The dinner is coming to an end. How should the bill be handled?',
    options: ['Argue about who should pay.', 'Leave without acknowledging the bill.', "Follow the prior arrangement or the host's expectations and handle payment discreetly."],
    answer: 2,
    explanation: 'Knowing the payment arrangement prevents an awkward ending and lets the dinner close on a professional note.',
    recommendation: 'Follow the host’s lead, settle your share discreetly when appropriate, and thank the host before leaving.',
  },
];
