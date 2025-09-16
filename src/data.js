// Sample chat data
const chats = [
  {
    id: 1,
    name: "Team Alpha",
    messages: [
      { id: 1, sender: "John", text: "Hey team, how's the project going?", timestamp: "2023-09-15T10:30:00" },
      { id: 2, sender: "Sarah", text: "We're on track with the frontend tasks", timestamp: "2023-09-15T10:32:00" },
      { id: 3, sender: "Mike", text: "Backend is almost complete, just need to fix a few bugs", timestamp: "2023-09-15T10:35:00" }
    ],
    lastMessage: "Backend is almost complete, just need to fix a few bugs",
    lastActivity: "2023-09-15T10:35:00"
  },
  {
    id: 2,
    name: "Project Beta",
    messages: [
      { id: 1, sender: "Emily", text: "Has anyone started on the documentation?", timestamp: "2023-09-14T14:20:00" },
      { id: 2, sender: "David", text: "I've created an outline, will share it soon", timestamp: "2023-09-14T14:25:00" }
    ],
    lastMessage: "I've created an outline, will share it soon",
    lastActivity: "2023-09-14T14:25:00"
  },
  {
    id: 3,
    name: "Marketing Team",
    messages: [
      { id: 1, sender: "Lisa", text: "We need to discuss the launch strategy", timestamp: "2023-09-13T09:10:00" },
      { id: 2, sender: "Tom", text: "I'm available tomorrow afternoon", timestamp: "2023-09-13T09:15:00" },
      { id: 3, sender: "Lisa", text: "Perfect, let's schedule for 2 PM", timestamp: "2023-09-13T09:20:00" }
    ],
    lastMessage: "Perfect, let's schedule for 2 PM",
    lastActivity: "2023-09-13T09:20:00"
  },
  {
    id: 4,
    name: "Design Review",
    messages: [
      { id: 1, sender: "Alex", text: "I've uploaded the new mockups for review", timestamp: "2023-09-12T16:40:00" },
      { id: 2, sender: "Jessica", text: "They look great! Just a few minor tweaks needed", timestamp: "2023-09-12T16:45:00" }
    ],
    lastMessage: "They look great! Just a few minor tweaks needed",
    lastActivity: "2023-09-12T16:45:00"
  }
];

export default chats;