import timetable from "../src/assets/images/timetable.png";
import notification from "../src/assets/images/notification.png";
import videocall from "../src/assets/images/videocall.png";
import chat from "../src/assets/images/chat.png";
import callcenter from "../src/assets/images/call-center-agent.png";
import calendar from "../src/assets/images/google-calendar.png";

export const services = [
  {
    name: 'Online calendar',
    description:
    'Keep track of recorded hours, can manually add hours, manually confirm recorded hours so there is no confusion',
    icon: timetable,

  },
  {
    name: 'SMS and Email notification',
    description:
      'Our system notifies the patient about the reserved time via Email or SMS',
      icon: notification,

  },
  {
    name: 'Direct chat connection with the patient',
    description:
      'Through our system, you can directly contact the patient via chat',
      icon: chat,

  },
  {
    name: 'Teleview Zoom',
    description:
      'You can practice telemedicine using ZOOM or Google Meet.',
      icon: videocall,

  },
  {
    name: 'Receptionist',
    description:
      'With this module, your front desk clerk can manage the doctors stocked appointments as well as add new ones.',
      icon: callcenter,

  },
  {
    name: 'Link to Google Calendar',
    description:
      'Through our module, you can synchronize your hours with Google Calendar',
      icon: calendar,

  },
  ];