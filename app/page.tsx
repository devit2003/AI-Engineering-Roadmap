"use client";

import { useState } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { ChevronRight, ChevronLeft } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const roadmap = [
  {
    week: "Week 1",
    title: "Python & Git Basics",
    topics: [
      "Numpy: Array creation, indexing, slicing",
      "Pandas: Series & DataFrame basics",
      "OOP: Class, object, attributes, methods",
      "Git: Git init, add, commit, push, pull"
    ]
  },
  {
    week: "Week 2",
    title: "Math for AI",
    topics: [
      "Linear Algebra: Vectors, matrices, operations",
      "Calculus Basics: Derivatives & gradients",
      "Probability & Statistics Intro"
    ]
  },
  {
    week: "Week 3",
    title: "SQL & NoSQL, APIs",
    topics: [
      "SQL Basics: SELECT, INSERT, UPDATE, DELETE",
      "NoSQL Basics: MongoDB CRUD",
      "RESTful API Basics: Flask, FastAPI"
    ]
  },
  {
    week: "Week 4",
    title: "Supervised Learning & Evaluation",
    topics: [
      "Linear Regression",
      "Logistic Regression",
      "KNN, SVM basics",
      "Model Evaluation: Confusion Matrix, ROC AUC"
    ]
  },
  {
    week: "Week 5",
    title: "Unsupervised Learning & Feature Engineering",
    topics: [
      "K-Means, DBSCAN",
      "PCA (Principal Component Analysis)",
      "Feature Scaling: Min-Max, StandardScaler",
      "Encoding: One-Hot, Label Encoding"
    ]
  },
  {
    week: "Week 6",
    title: "End-to-End ML Project",
    topics: [
      "Dataset sourcing",
      "Building Scikit-learn Pipelines",
      "Hyperparameter Tuning"
    ]
  },
  {
    week: "Week 7",
    title: "Neural Network Fundamentals",
    topics: [
      "Perceptron, Backpropagation",
      "Loss Functions: MSE, Cross-Entropy",
      "Optimizers: SGD, Adam, RMSProp"
    ]
  },
  {
    week: "Week 8",
    title: "CNN Basics",
    topics: [
      "Convolution, Pooling, Padding",
      "TensorFlow/Keras or PyTorch basics",
      "Image Classification: MNIST, CIFAR-10"
    ]
  },
  {
    week: "Week 9",
    title: "RNN Basics",
    topics: [
      "LSTM, GRU concepts",
      "Sequence Modeling for text",
      "Simple Sentiment Analysis project"
    ]
  },
  {
    week: "Week 10",
    title: "Mini-Projects",
    topics: [
      "Image Classifier (Cats vs Dogs)",
      "Text Classifier (Spam Detection)"
    ]
  },
  {
    week: "Week 11",
    title: "Transformers Fundamentals",
    topics: [
      "Attention Mechanism",
      "Encoder-Decoder Structure"
    ]
  },
  {
    week: "Week 12",
    title: "Hugging Face Transformers",
    topics: [
      "Loading pretrained models (BERT, GPT-2)",
      "Tokenization basics"
    ]
  },
  {
    week: "Week 13",
    title: "Fine-Tuning Techniques",
    topics: [
      "LoRA, QLoRA",
      "PEFT Concepts",
      "Quantization, Pruning"
    ]
  },
  {
    week: "Week 14",
    title: "RAG Concept",
    topics: [
      "Retrieval-Augmented Generation setup",
      "Using LangChain or LlamaIndex"
    ]
  },
  {
    week: "Week 15",
    title: "Diffusion Models & GANs",
    topics: [
      "Stable Diffusion Basics",
      "GAN Overview"
    ]
  },
  {
    week: "Week 16",
    title: "Vision Foundation Models",
    topics: [
      "CLIP, BLIP",
      "Segment Anything Model (SAM)",
      "YOLO v8 basics"
    ]
  },
  {
    week: "Week 17",
    title: "Multimodal Models",
    topics: [
      "Qwen-VL, Kosmos-2",
      "GIT, BLIP-2, LLaVA Project Setup"
    ]
  },
  {
    week: "Week 18",
    title: "Multimodal Mini-Project",
    topics: [
      "Image + Text Chatbot (RAG + Vision)"
    ]
  },
  {
    week: "Week 19",
    title: "Model Deployment",
    topics: [
      "Docker Basics",
      "FastAPI/Flask Deployment",
      "Streamlit/Gradio Apps"
    ]
  },
  {
    week: "Week 20",
    title: "LLM Deployment",
    topics: [
      "OpenAI API Usage",
      "Hugging Face Inference API",
      "vLLM Basics"
    ]
  },
  {
    week: "Week 21",
    title: "End-to-End Pipeline",
    topics: [
      "MLflow Setup",
      "Weights & Biases Tracking",
      "Project Structuring Best Practices"
    ]
  },
  {
    week: "Week 22–24",
    title: "Portfolio & Interview Prep",
    topics: [
      "Strong GitHub Projects",
      "LinkedIn Optimization",
      "Resume Writing",
      "ML System Design",
      "Mock Interviews",
      "Kaggle Competitions",
      "AI Meetups, Open-Source Contributions"
    ]
  }
];


type ProgressType = {
  [week: string]: {
    [topic: string]: boolean;
  };
};

export default function AiLearningProgressApp() {
  const [selectedWeek, setSelectedWeek] = useState<number | null>(null);
  const [progress, setProgress] = useState<ProgressType>({});

  const handleCheck = (week: string, topic: string) => {
    setProgress((prev) => ({
      ...prev,
      [week]: {
        ...prev[week],
        [topic]: !prev[week]?.[topic]
      }
    }));
  };

  const getWeekProgress = (week: string) => {
    const weekObj = roadmap.find((item) => item.week === week);
    if (!weekObj) return 0;
    const topics = weekObj.topics;
    const checkedCount = topics.filter(
      (topic) => progress[week]?.[topic]
    ).length;
    return (checkedCount / topics.length) * 100;
  };

  return (
    <div className="max-w-5xl mx-auto p-6 font-sans bg-gray-50 min-h-screen">
      <header className="text-center mb-12 pt-8">
        <h1 className="text-4xl font-bold text-teal-700">My AI Learning Roadmap</h1>
        <p className="text-gray-600 mt-3">Journey to mastering Artificial Intelligence - One week at a time</p>
      </header>

      {selectedWeek === null ? (
        <div className="grid grid-cols-1 gap-5">
          {roadmap.map((item, index) => (
            <div 
              key={index} 
              className="bg-white rounded-lg shadow-sm hover:shadow-md transition-all border border-gray-100 overflow-hidden"
            >
              <div
                onClick={() => setSelectedWeek(index)}
                className="bg-teal-600 text-white px-6 py-4 cursor-pointer flex justify-between items-center hover:bg-teal-700 transition-colors"
              >
                <span className="font-medium">{item.week}: {item.title}</span>
                <span className={`text-xs ${getWeekProgress(item.week) === 100 ? 'bg-emerald-500' : 'bg-amber-500'} px-3 py-1 rounded-full`}>
                  {getWeekProgress(item.week) === 100 ? "Completed" : `${Math.round(getWeekProgress(item.week))}%`}
                </span>
              </div>
              <div className="px-6 py-3">
                <Progress 
                  value={getWeekProgress(item.week)} 
                  className={`h-2 rounded-full bg-gray-100 ${getWeekProgress(item.week) === 100 ? "progress-complete" : "progress-incomplete"}`}
                />
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="max-w-3xl mx-auto">
          <Button 
            variant="ghost" 
            className="mb-6 text-teal-600 hover:bg-teal-50" 
            onClick={() => setSelectedWeek(null)}
          >
            <ChevronLeft className="mr-2" size={18} /> Back to roadmap
          </Button>
          
          <div className="bg-white rounded-lg shadow-sm p-6 mb-6 border border-gray-100">
            <h2 className="text-2xl font-semibold text-gray-800 mb-2">
              {roadmap[selectedWeek].week}: {roadmap[selectedWeek].title}
            </h2>
            <Progress 
              value={getWeekProgress(roadmap[selectedWeek].week)} 
              className={`h-2 rounded-full bg-gray-100 mb-6 ${getWeekProgress(roadmap[selectedWeek].week) === 100 ? "bg-emerald-400" : "bg-teal-400"}`}
            />
            
            <div className="space-y-3">
              {roadmap[selectedWeek].topics.map((topic, idx) => (
                <div 
                  key={idx} 
                  className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition-colors border border-gray-100"
                >
                  <Checkbox
                    checked={progress[roadmap[selectedWeek].week]?.[topic] || false}
                    onCheckedChange={() => handleCheck(roadmap[selectedWeek].week, topic)}
                    className="border-gray-300 data-[state=checked]:bg-teal-500 data-[state=checked]:border-teal-500"
                  />
                  <span className="text-gray-700">{topic}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}
      
      <footer className="text-center mt-16 pb-8 text-gray-500 italic">
        "The expert in anything was once a beginner. Keep going!"
      </footer>
    </div>
  );
}