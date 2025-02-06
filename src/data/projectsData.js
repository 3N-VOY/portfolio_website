import neuropdfImg from "../assets/neuropdf.png";
import diabetesImg from "../assets/diabetespredict_ai.png";
import optimaliftsimg from "../assets/optimaliftsfitnessai.png";

export const projectsData = [
  {
    title: "NeuroPDF - Intelligent Document Processing",
    description:
      "An AI-powered PDF processing tool that uses machine learning to extract, analyze and process information from PDFs. Features include automatic text extraction, document classification, and content summarization.",
    technologies: ["Python", "TensorFlow", "NLP", "FastAPI", "React"],
    image: neuropdfImg,
    githubLink: "https://github.com/3N-VOY/aipdf",
    // demoLink: "https://aipdf-demo.example.com"
  },
  {
    title:
      "AI Personal Fitness Trainer MVP - OptimaLifts Startup Program ACEin (AUEB)",
    description:
      "Optimallifts’ AI Fitness Trainer is a web application that uses computer‐vision and machine learning to give real-time feedback on exercise form. Users point their webcam at themselves, perform movements (squats, curls, push-ups), and the system instantly scores form accuracy via a trained neural network. Contributed across backend, AI integration, and deployment. The project was accepted into the ACEin business accelerator program at the Athens University of Economics and Business (AUEB).",
    image: optimaliftsimg,
    technologies: ["Mediapipe", "Python", "OpenCV", "TensorFlow", " Django"],
    githubLink: "https://github.com/3N-VOY/aifitness",
  },
  {
    title: "Diabetes AI Prediction Model",
    description:
      "Machine learning model for early diabetes detection and risk assessment based on patient data. Implemented various ML algorithms and compared their performance to find the most accurate prediction model.",
    technologies: ["Python", "Scikit-learn", "Pandas", "TensorFlow", "Flask"],
    image: diabetesImg,
    githubLink: "https://github.com/3N-VOY/diabetes_ai",
    // demoLink: "https://diabetes-ai.example.com"
  },
  {
    title: "Airline Management SkyWing",
    description:
      "A comprehensive airline management system with modules for flight scheduling, booking management, crew assignments, and analytics dashboards. Built with scalability and performance in mind.",
    technologies: ["Java", "Spring Boot", "PostgreSQL", "Docker", "React"],
    image:
      "https://images.pexels.com/photos/62623/wing-plane-flying-airplane-62623.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/3N-VOY/airline_management_skywing",
  },
  {
    title: "Network Chat Application",
    description:
      "Secure, real-time messaging application with customed developed end-to-end encryption. Features include message persistence, read receipts, and typing indicators.",
    technologies: ["JavaScript", "Node.js", "Socket.io", "MongoDB", "React"],
    image:
      "https://images.pexels.com/photos/373543/pexels-photo-373543.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/3N-VOY/network_chatapp",
  },
  {
    title: "Local AI Voice Assistant",
    description:
      "The AI Voice Assistant is a Python-based project that enables voice-controlled interactions with an AI assistant. The assistant can transcribe audio files to text, generate text-based responses, and convert the generated text into speech.",
    technologies: [
      "Python",
      "Machine Learning",
      "LLMs",
      "HuggingFace",
      "TexttoSpeech",
    ],
    image:
      "https://images.pexels.com/photos/2599244/pexels-photo-2599244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
    githubLink: "https://github.com/3N-VOY/local_ai_voice_assistant",
  },
];
