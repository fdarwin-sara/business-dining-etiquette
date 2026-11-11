import { DiningScenario } from '../models/dining-scenario';

export const DINING_SCENARIOS: DiningScenario[] = [
  {
    title: 'Arriving at the restaurant',
    situation: 'You have been invited to an important business dinner. When should you arrive?',
    options: ['“That would be very kind, thank you.”', '“Thank you. I have just arrived.”', '“I am sorry to keep everyone waiting.”'],
    answer: 0,
    explanation: 'Arriving a little early gives you time to settle in, review the setting, and meet the moment calmly.',
    recommendation: 'Plan to arrive 5–15 minutes early and notify the host promptly if an unexpected delay occurs.',
    responseReactions: [
      'Mara accepts your coat with a warm smile. “Of course, Mr. Sara. Your host will be pleased to see you.”',
      '“Certainly, Mr. Sara,” Mara says, taking note of your arrival. “Your host is waiting inside.”',
      'Mara glances toward the dining room. “We will let them know you have arrived. Please, allow me to show you in.”',
    ],
    responseMemory: [
      'You begin the evening composed and prepared.',
      'You arrive on time and settle into the room without rushing.',
      'Your late arrival is handled discreetly, but the opening feels slightly hurried.',
    ],
    responseGuidance: [
      'Arriving early gives you time to prepare, settle in, and greet the host without pressure.',
      'Arriving exactly on time can work, but it leaves little room for an unexpected delay or a calm introduction.',
      'Apologizing after keeping guests waiting can repair the moment, but the more professional approach is to arrive early or notify the host promptly.',
    ],
  },
  {
    title: 'The table setting',
    situation: 'You sit down and notice several forks and knives beside your plate. Which utensils should you generally use first?',
    options: ['“I will begin with the pieces closest to my plate.”', '“I will follow the setting from the outside inward.”', '“I will choose the largest piece and see how it goes.”'],
    answer: 1,
    explanation: 'Formal place settings usually follow an outside-in sequence, with each course using the next utensil toward the plate.',
    recommendation: 'When you are unsure, watch the host and begin with the utensil farthest from the plate.',
    responseReactions: [
      'Jordan notices your pause and quietly guides the rhythm of the table. “The setting can be a lot at first. Follow the host’s lead.”',
      '“Exactly,” Jordan says, settling into the conversation. “The arrangement is designed to guide you through the evening.”',
      'Jordan gives a discreet smile and gestures toward the first course. “When in doubt, the outermost piece is a safe place to begin.”',
    ],
    responseMemory: [
      'Your preparation gives you confidence as you take your seat.',
      'You read the table calmly and follow the shared rhythm of the dinner.',
      'You recover gracefully, though you make a mental note to study the setting beforehand next time.',
    ],
    responseGuidance: [
      'Starting closest to the plate reverses the formal outside-in sequence and can make the courses feel uncertain.',
      'Using the outermost utensil first follows the formal sequence and lets each course guide the next choice.',
      'Choosing by size is unreliable; the utensil sequence, not appearance, indicates which piece belongs to the course.',
    ],
  },
  {
    title: 'Professional conversation',
    situation: 'Your business partner is explaining an important project. What should you do?',
    options: ['“That reminds me of my own experience. Let me tell you about it.”', '“Excuse me for a moment—I need to check my phone.”', '“That is interesting. What would success look like for the team?”'],
    answer: 2,
    explanation: 'Active listening signals respect and helps you understand the person, the project, and the opportunity.',
    recommendation: 'Keep your phone away, maintain natural eye contact, and ask a thoughtful follow-up question.',
    responseReactions: [
      'Jordan pauses, giving you room to finish. The conversation becomes more one-sided than either of you intended.',
      'Jordan waits politely while the phone draws attention away from the project. “We can come back to this when you are ready.”',
      'Jordan leans in. “That is an important question, Mr. Sara. Let me tell you how we are approaching it.”',
    ],
    responseMemory: [
      'Your confident welcome makes it easier for the group to include you in the discussion.',
      'The table remembers your earlier composure, and the conversation continues with an easy rhythm.',
      'You need to rebuild some attention, but Jordan gives you space to rejoin the conversation.',
    ],
    responseGuidance: [
      'Turning the conversation back to yourself can make a partner feel unheard during an important discussion.',
      'Checking your phone signals that the conversation is not receiving your full attention and can weaken trust.',
      'Listening and asking a relevant follow-up question shows respect and helps you understand the opportunity.',
    ],
  },
  {
    title: 'Dining etiquette',
    situation: 'Your meal arrives, but the other guests are still waiting for their food. What should you do?',
    options: ['“Thank you.” You begin eating while the others are still waiting.', '“Thank you. I will wait until everyone is ready.”', '“Could you take the other plates away for now?”'],
    answer: 1,
    explanation: 'Waiting allows the group to share the meal comfortably and shows consideration for everyone at the table.',
    recommendation: 'Pause until the group is ready, unless the host warmly encourages you to begin.',
    responseReactions: [
      'You lift your fork before the others are ready. The table grows quiet for a moment as everyone adjusts.',
      '“Thank you for waiting, Mr. Sara,” the host says as the last plate arrives. “Now we can all begin together.”',
      'The waiter looks toward the host, who helps coordinate the table so everyone can start comfortably.',
    ],
    responseMemory: [
      'Your attentiveness keeps the group’s rhythm comfortable.',
      'Your patience reinforces the considerate impression you have made so far.',
      'The moment passes, but the table becomes a little more careful around the timing of the meal.',
    ],
    responseGuidance: [
      'Beginning alone can make the other guests feel rushed and separates you from the shared rhythm of the meal.',
      'Waiting until everyone is ready shows consideration and allows the group to begin together.',
      'Asking for the other plates to be removed draws attention to the delay instead of handling it with patience.',
    ],
  },
  {
    title: 'Paying the bill',
    situation: 'The dinner is coming to an end. How should the bill be handled?',
    options: ['“We should settle this right now—who is paying?”', 'You leave the bill untouched and begin saying goodbye.', '“Thank you for dinner. I am happy to follow the arrangement we discussed.”'],
    answer: 2,
    explanation: 'Knowing the payment arrangement prevents an awkward ending and lets the dinner close on a professional note.',
    recommendation: 'Follow the host’s lead, settle your share discreetly when appropriate, and thank the host before leaving.',
    responseReactions: [
      'The host raises a hand gently. “There is no need to make this uncomfortable. We can follow the arrangement we discussed.”',
      'The bill remains on the table while everyone waits for a clear, considerate way forward.',
      '“Thank you, Mr. Sara,” the host says quietly. “That is a thoughtful way to close the evening.”',
    ],
    responseMemory: [
      'The evening closes warmly, with your early preparation reflected in a gracious goodbye.',
      'You have built enough trust for the payment conversation to remain comfortable.',
      'The final exchange is more guarded, but a discreet approach gives the relationship room to recover.',
    ],
    responseGuidance: [
      'Making payment a public argument can create unnecessary tension at the close of an otherwise productive dinner.',
      'Leaving the bill unacknowledged avoids the conversation rather than honoring the arrangement and the host.',
      'Following the agreed arrangement discreetly and thanking the host closes the dinner with clarity and respect.',
    ],
  },
];
