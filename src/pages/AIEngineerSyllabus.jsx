import React from 'react';
import { ArrowLeft } from 'lucide-react';

const AIEngineerSyllabus = ({ setCurrentPage }) => {
  return (
    <div className="animate-fade-in" style={{ paddingBottom: '60px' }}>
      <div className="page-header" style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
        <button 
          onClick={() => setCurrentPage('goals')}
          style={{ background: 'rgba(255,255,255,0.1)', padding: '8px', borderRadius: '50%', color: 'var(--text-primary)', border: 'none', cursor: 'pointer' }}
        >
          <ArrowLeft size={20} />
        </button>
        <div>
          <h1 className="page-title">AI Engineer Syllabus</h1>
          <p className="page-subtitle">Software Engineering + Machine Learning + Deep Learning + Generative AI + MLOps</p>
        </div>
      </div>

      <div className="glass-panel" style={{ padding: '32px', lineHeight: '1.7', color: 'var(--text-secondary)' }}>
        
        <h2 style={{ color: 'var(--text-primary)', marginTop: '0', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>0. Prerequisites & Core Programming</h2>
        <ul>
          <li><strong>Mathematics:</strong> Linear Algebra (Vectors, Matrices, Dot product), Calculus (Derivatives, Gradients, Optimization), Probability & Statistics (Distributions, Variance, Bias).</li>
          <li><strong>Python Core:</strong> Data types, Functions, OOP, Async, Multithreading, Exceptions, Type hints.</li>
          <li><strong>Data Libraries:</strong> NumPy (Arrays, Vectorization), Pandas (DataFrames, GroupBy), Matplotlib/Seaborn.</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>2-4. Software Engineering, Databases, & Data Engineering</h2>
        <ul>
          <li><strong>Software Engineering:</strong> Git/GitHub, CI/CD, Clean code, SOLID, API design, Unit testing, Integration testing.</li>
          <li><strong>Databases:</strong> SQL (Joins, CTEs, Window functions), NoSQL (MongoDB, Redis), Vector Databases.</li>
          <li><strong>Data Engineering:</strong> Data pipelines, Data cleaning, Feature extraction, Pandas, PySpark, Formats (Parquet, JSON).</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>5-8. Machine Learning & Deep Learning (PyTorch)</h2>
        <ul>
          <li><strong>Supervised ML:</strong> Linear/Logistic Regression, Random Forest, XGBoost, LightGBM, SVM.</li>
          <li><strong>Unsupervised ML:</strong> K-Means, PCA, t-SNE, DBSCAN, Gaussian Mixture Models.</li>
          <li><strong>ML Concepts:</strong> Train/val/test split, Cross-validation, Precision/Recall, F1, ROC-AUC, Hyperparameter tuning.</li>
          <li><strong>Deep Learning:</strong> Neural Networks, Forward/Backpropagation, Activation Functions (ReLU, Softmax), Loss Functions (BCE, CCE).</li>
          <li><strong>PyTorch:</strong> Tensors, Autograd, nn.Module, DataLoaders, Training loops, Optimizers (Adam, AdamW), Checkpointing.</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>9-11. NLP, Computer Vision, & Transformers</h2>
        <ul>
          <li><strong>Computer Vision:</strong> CNNs, Filters, Pooling, ResNet, EfficientNet, Object Detection (YOLO), Segmentation (U-Net).</li>
          <li><strong>NLP:</strong> Tokenization, Embeddings (Word2Vec, FastText), RNNs, LSTMs.</li>
          <li><strong>Transformers:</strong> Attention mechanism, Self-attention, Multi-head attention, Positional encoding, Encoder/Decoder architecture, BERT, GPT.</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>12-18. Generative AI, RAG, & Agents</h2>
        <ul>
          <li><strong>LLMs & Prompting:</strong> Pretraining, Inference (Temperature, Top-k/p), Zero/Few-shot, Chain-of-thought, ReAct, Function calling.</li>
          <li><strong>Embeddings & Vector DBs:</strong> Semantic search, Cosine similarity, Pinecone, FAISS, Weaviate, Qdrant.</li>
          <li><strong>RAG (Retrieval Augmented Generation):</strong> Chunking, Embedding, Vector Search, Hybrid search, Context construction, Generation.</li>
          <li><strong>Fine-Tuning:</strong> Instruction tuning, SFT, LoRA, QLoRA, Quantization, PEFT.</li>
          <li><strong>AI Agents:</strong> Agent tools, Memory, Planning, LangChain, LangGraph, LlamaIndex, Multi-agent systems.</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>19-27. Production AI, MLOps, & Cloud</h2>
        <ul>
          <li><strong>Backend for AI:</strong> FastAPI, Routes, Pydantic, Async endpoints, API integration.</li>
          <li><strong>Cloud & DevOps:</strong> AWS (EC2, S3, RDS, SageMaker), Docker (Dockerfile, Compose), Kubernetes basics.</li>
          <li><strong>MLOps:</strong> ML Lifecycle, MLflow, Weights & Biases, DVC, Model Registry, Monitoring.</li>
          <li><strong>Deployment & Serving:</strong> REST APIs, Batch Inference, Serverless (AWS Lambda), LLM Serving (vLLM, TGI, Ollama), TensorRT.</li>
        </ul>

        <h2 style={{ color: 'var(--text-primary)', marginTop: '32px', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '8px' }}>28-36. Evaluation, Security, & System Design</h2>
        <ul>
          <li><strong>AI Evaluation:</strong> Faithfulness, Relevance, Hallucination, Toxicity, RAG Evaluation (Recall@K, MRR).</li>
          <li><strong>AI Security:</strong> Prompt injection, Jailbreaking, Data leakage, Sandboxing, Rate limiting.</li>
          <li><strong>System Design for AI:</strong> Scalability, AI Chatbot architecture, RAG architecture, Trade-offs (Accuracy vs Latency, API vs Open Source).</li>
        </ul>

        <div style={{ padding: '24px', background: 'rgba(99, 102, 241, 0.1)', borderRadius: '12px', marginTop: '32px', borderLeft: '4px solid var(--accent-primary)' }}>
          <h3 style={{ color: 'var(--text-primary)', marginTop: 0 }}>The AI Engineer Learning Path</h3>
          <p style={{ margin: 0 }}>
            Because you're targeting <strong>SDE + Data Scientist + ML/AI Engineer internships</strong>, do not study everything equally. Your strongest combination should be:
            <br/><br/>
            <strong>DSA → Python/SQL → ML → PyTorch → Deep Learning → Transformers → LLMs → RAG → Agents → FastAPI → Docker → Cloud → MLOps → AI System Design.</strong>
            <br/><br/>
            This gives you a much more practical AI Engineer profile than spending months learning every single AI framework.
          </p>
        </div>

      </div>
    </div>
  );
};

export default AIEngineerSyllabus;
