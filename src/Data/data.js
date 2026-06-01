import {
  Code2,
  PencilRuler,
  Megaphone,
  Palette,
  Settings,
  Box,
} from "lucide-react";

export const services = [
  {
    id: 1,
    title: "Development",
    icon: Code2,
    selected: false,
  },
  {
    id: 2,
    title: "Web Design",
    icon: PencilRuler,
    selected: false,
  },
  {
    id: 3,
    title: "Marketing",
    icon: Megaphone,
    selected: true,
  },
  {
    id: 4,
    title: "Brand Strategy",
    icon: Palette,
    selected: false,
  },
  {
    id: 5,
    title: "Optimization",
    icon: Settings,
    selected: false,
  },
  {
    id: 6,
    title: "Other",
    icon: Box,
    selected: false,
  },
];

export const servicesSelected = [
  {
    id: 1,
    title: "Development",
    icon: Code2,
    selected: false,
  },
  {
    id: 2,
    title: "Web Design",
    icon: PencilRuler,
    selected: false,
  },
  {
    id: 3,
    title: "Marketing",
    icon: Megaphone,
    selected: true,
  },
  {
    id: 4,
    title: "Brand Strategy",
    icon: Palette,
    selected: false,
  },
  {
    id: 5,
    title: "Optimization",
    icon: Settings,
    selected: false,
  },
  {
    id: 6,
    title: "Other",
    icon: Box,
    selected: false,
  },
];
export const successData = {
  title: "Thank You for Your Submission!",
  description: "Your information has been successfully received.",
  buttonText: "Finish",
  selectedServiceId: 3,
};

export const SideData=[
  {
    "id": 1,
    "title": "Personal information",
    "description": "Tell us who you are to get started.",
    "active": true
  },
  {
    "id": 2,
    "title": "Available plans",
    "description": "Choose the product plan that fits your needs.",
    "active": false
  },
  {
    "id": 3,
    "title": "Our Service",
    "description": "Verify your identity for security purposes.",
    "active": false
  },
  {
    "id": 4,
    "title": "Activate account",
    "description": "Final step! Let's activate your account.",
    "active": false
  }
]

export const FormData=[
  {
    "label": "Full name",
    "placeholder": "Exp. John Carter",
    "type": "text",
    "required": true
  },
  {
    "label": "Email",
    "placeholder": "Enter your email",
    "type": "email",
    "required": true
  },
  {
    "label": "Phone number",
    "placeholder": "(123) 000-0000",
    "type": "text",
    "required": true
  },
  {
    "label": "Company",
    "placeholder": "Exp. Company",
    "type": "text",
    "required": false
  },
  {
    "label": "Address",
    "placeholder": "Exp. San Francisco, CA",
    "type": "text",
    "required": true
  }
]
export const plans = [
  {
    id: 1,
    title: "Basic Plan",
    description: "Limited access to essential features.",
    users: "Up to 5 users",
    billing: "Monthly",
    selected: false,
  },
  {
    id: 2,
    title: "Professional Plan",
    description: "All advanced features included.",
    users: "Up to 25 users",
    billing: "Monthly",
    selected: true,
  },
  {
    id: 3,
    title: "Premium Plan",
    description: "Complete access and priority support.",
    users: "Up to 100 users",
    billing: "Annual",
    selected: false,
  },
  {
    id: 4,
    title: "Enterprise Plan",
    description: "Custom solutions for large teams.",
    users: "Unlimited users",
    billing: "Annual",
    selected: false,
  },
];