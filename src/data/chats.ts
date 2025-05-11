import { IMAGE_PATH } from '@utils/constants'
import { Chat } from '@utils/types'
import { v4 as uuidv4 } from 'uuid'

export const chats: Chat[] = [
  {
    id: uuidv4(),
    person: {
      name: 'Liam Smith',
      image: `${IMAGE_PATH}liam-smith.png`,
    },
    messages: [
      {
        id: uuidv4(),
        date: new Date(),
        type: 'receiver',
        message:
          "Hi Robert, I saw you were updating the dashboard metrics. How's that coming along?",
      },
      {
        id: uuidv4(),
        date: new Date(),
        type: 'sender',
        message:
          "Hey Liam! It's going well, but I'm trying to figure out the best way to visualize the user engagement data. Some of the charts feel a bit cluttered.",
      },
      {
        id: uuidv4(),
        date: new Date(),
        type: 'receiver',
        message:
          "Yeah, dashboards can get overwhelming if there's too much info. Have you thought about breaking it down by user segments?",
      },
      {
        id: uuidv4(),
        date: new Date(),
        type: 'sender',
        message:
          "That's a good idea. I was considering adding filters for active users versus trial users to see different trends.",
      },
      {
        id: uuidv4(),
        date: new Date(),
        type: 'receiver',
        message:
          'Perfect. Also, maybe we should highlight the key KPIs like churn rate and MRR separately so they stand out.',
      },
      {
        id: uuidv4(),
        date: new Date(),
        type: 'sender',
        message:
          'Sounds like a solid plan. Need me to help with designing the layout or setting up the data queries?',
      },
      {
        id: uuidv4(),
        date: new Date(),
        type: 'receiver',
        message:
          "If you could help with the queries, that'd save me some time. I'll focus on the UI and user flow.",
      },
      {
        id: uuidv4(),
        date: new Date(),
        type: 'sender',
        message:
          "Got it. I'll send over some example SQL queries for segmenting users by subscription status.",
      },
      {
        id: uuidv4(),
        date: new Date(),
        type: 'receiver',
        message:
          'Awesome, thanks! Once we have that, we can test the dashboard with the team and get feedback.',
      },
      {
        id: uuidv4(),
        date: new Date(),
        type: 'sender',
        message:
          "Definitely. Let's aim to have a prototype ready by end of day Thursday.",
      },
      {
        id: uuidv4(),
        date: new Date(),
        type: 'receiver',
        message: 'Will do. Appreciate the teamwork, Liam!',
      },
      {
        id: uuidv4(),
        date: new Date(),
        type: 'sender',
        message: 'No problem, Robert. Let me know if anything else comes up.',
      },
    ],
  },
  {
    id: uuidv4(),
    person: {
      name: 'Jessica Garcia',
      image: `${IMAGE_PATH}jessica-garcia.png`,
    },
    messages: [
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          "Hi Robert, I saw you were working on the User Feedback ticket. How's it going?",
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          "Hey Jessica! I'm making progress, but I'm trying to analyze the feedback from the last release. There are quite a few conflicting comments.",
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message: 'I can imagine! Do you need help categorizing the feedback?',
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          "That would be great! I'm thinking of grouping them into positive, negative, and suggestions. What do you think?",
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          "That would be great! I'm thinking of grouping them into positive, negative, and suggestions. What do you think?",
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          "Great idea! I'll start categorizing and wait for your examples. Thanks!",
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          'I noticed you were assigned to the Update Status ticket. Just wanted to check if you need any help or have questions. Let me know!',
      },
    ],
  },
  {
    id: uuidv4(),
    person: {
      name: 'Luna Moore',
      image: `${IMAGE_PATH}luna-moore.png`,
    },
    messages: [
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          "Hey Robert, I noticed you're working on the new dashboard layout. How's the redesign coming along?",
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          "Hi Luna! It's progressing, but I'm trying to simplify the visuals without losing key insights. The current metrics feel a bit overwhelming for users.",
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          'That makes sense. Maybe we can streamline by focusing on core KPIs like churn rate, MRR, and user engagement, and hide less critical data behind filters?',
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          'Exactly what I was thinking. Also, I want to add role-based views so product managers, marketers, and support teams each see what matters most to them.',
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          'Great idea. Custom views help keep the dashboard relevant and reduce clutter. Have you considered integrating onboarding tips directly into the dashboard for new users?',
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          'I have! Inspired by some platforms that embed onboarding walkthroughs right in the UI. It could help users understand the data without external docs.',
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          "Perfect. That will boost adoption. Also, let's add a collaboration feature so teams can comment on data points and discuss insights directly on the dashboard.",
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          'Yes, that would solve the usual problem of insights getting lost in emails. Real-time discussion on the dashboard itself would keep everyone aligned.',
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          'Exactly. I can draft some UI mockups for the collaboration panel if you want.',
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          "That'd be awesome, Luna. Once we have those, I'll start working on the backend integration for segmented data and comments.",
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          "Sounds like a plan. Let's aim to have a prototype ready for internal review by next week.",
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message: 'Agreed. Thanks for the input and support!',
      },
    ],
  },
  {
    id: uuidv4(),
    person: {
      name: 'Sophia Taylor',
      image: `${IMAGE_PATH}sophia-taylor.png`,
    },
    messages: [
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          "Hey Robert, I wanted to check in on the updates you're working on. How's the progress with the new collaboration features?",
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          "Hi Sophia! It's coming along well. I'm focusing on simplifying the UI while integrating real-time commenting and tagging so teams can discuss insights directly on the dashboard.",
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          "That's great. Are you implementing role-based access controls to ensure users only see and edit what's relevant to them?",
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          'Yes, role-based views are part of the plan. It helps reduce clutter and keeps the dashboard focused for different teams like marketing, product, and support.',
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          'Perfect. Also, are you considering integration with tools like Slack for notifications? It really helps keep conversations timely and centralized.',
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          "Absolutely. We're setting up Slack integration so users get alerts when they're tagged or when comments are added. It should make collaboration much smoother.",
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          'Nice. How about version history or conflict resolution for simultaneous edits?',
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          "We're working on version control to let users revert changes if needed, and conflict management will prompt manual resolution for tricky cases.",
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          'Sounds solid. Do you need help testing the collaboration APIs or designing the user flows?',
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          'That would be very helpful. If you could help with testing and feedback, I can focus on backend integration and UI polish.',
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          "Consider it done. Let's aim to have a working prototype for internal review by next week.",
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message: 'Thanks, Sophia. Looking forward to your input!',
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          'Anytime, Robert. This collaboration feature will be a game changer for our dashboard.',
      },
    ],
  },
  {
    id: uuidv4(),
    person: {
      name: 'Benjamin Miller',
      image: `${IMAGE_PATH}benjamin-miller.png`,
    },
    messages: [
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          "Hey Benjamin, I wanted to check in on how's the integration of the real-time collaboration features coming along?",
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          "Hi Robert! It's going well. I'm focusing on enabling seamless sharing of customized dashboard views across teams, so product, marketing, and customer success can all see data relevant to them without clutter.",
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          "That's great. Custom views really help reduce noise and keep everyone focused on their KPIs. Are you also working on scheduling cross-team reviews to align around these insights?",
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          "Yes, that's part of the plan. I'm building features to facilitate easy sharing and commenting on dashboards, so teams can discuss trends and coordinate strategies directly within the platform.",
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          'Perfect. Real-time sharing and collaboration are crucial to foster engagement and drive data-informed decisions. How about integration with communication tools like Slack?',
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          "We're adding Slack notifications for comments and tags, so users get alerts instantly. This should keep conversations timely and actionable.",
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          "Excellent. Are you handling role-based access control as well? It's important to ensure users only see what's relevant to their function.",
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          'Absolutely. Role-based permissions are baked in to maintain security and relevance. Users can customize their dashboards but within the boundaries of their access level.',
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          "Sounds like you're covering all the bases. Do you need any help testing the real-time data syncing or user experience flows?",
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message:
          "That would be helpful. Once the initial build is ready, I'll send you a test version to gather feedback.",
      },
      {
        id: uuidv4(),
        type: 'sender',
        date: new Date(),
        message:
          'Looking forward to it. These improvements will really make our SaaS dashboard a powerful tool for the whole company.',
      },
      {
        id: uuidv4(),
        type: 'receiver',
        date: new Date(),
        message: 'Agreed. Thanks for the support, Robert!',
      },
    ],
  },
]
