// src/components/Project.js
import React, { useState } from 'react';
import './Project.css'; // Import the CSS file for styling

function Project() {
  const [selectedProject, setSelectedProject] = useState(null);

  // Project data
  const projects = [
    {
      name: 'Proximal Policy Optimization',
      details: (
        <div>
          <b>Project 1: Reinforcement Learning Model for Financial Asset Prediction</b><br />
          <b>Project Overview:</b><br />
          - Developed and evaluated a reinforcement learning model for financial asset prediction and trading.<br /><br />
          <b>Stack Used:</b><br />
          - Programming Language: Python<br />
          - Libraries:
          <ul>
            <li>Pandas: For data manipulation and analysis.</li>
            <li>NumPy: For numerical operations and array handling.</li>
            <li>Psycopg2: PostgreSQL database adapter for Python.</li>
            <li>Scikit-Learn: For preprocessing, scaling, and evaluation.</li>
            <li>Stable Baselines3: For reinforcement learning model training.</li>
            <li>Gym: For developing and comparing reinforcement learning algorithms.</li>
            <li>Matplotlib: For data visualization.</li>
          </ul><br />
          <b>Purpose:</b><br />
          - To create and test a reinforcement learning model that predicts asset prices and makes trading decisions.<br />
          - Aimed to maximize trading rewards while managing transaction costs and holding penalties.<br /><br />
          <b>Features:</b><br />
          - Data Extraction:
          <ul>
            <li>Retrieved financial data from PostgreSQL.</li>
            <li>Included indicators like 'DCP', 'DNCP', 'OPCP', etc.</li>
          </ul><br />
          - Feature Engineering:
          <ul>
            <li>Calculated percentage changes in prices to create target labels.</li>
            <li>Scaled features for machine learning models.</li>
          </ul><br />
          - Reinforcement Learning Environment:
          <ul>
            <li>Created a custom Gym environment for trading actions (buy, sell, hold).</li>
            <li>Tracked balance, holdings, and asset prices.</li>
          </ul><br />
          - Model Training:
          <ul>
            <li>Used Stable Baselines3's PPO for training.</li>
            <li>Evaluated using rewards accumulated over episodes.</li>
          </ul><br />
          - Evaluation:
          <ul>
            <li>Assessed success rates and average rewards.</li>
            <li>Generated plots for episode rewards, success rates, and price ratios.</li>
          </ul><br />
          <b>Results:</b><br />
          - Training and Validation:
          <ul>
            <li>PPO model trained and validated within the custom environment.</li>
            <li>Evaluated model effectiveness in predicting and trading.</li>
          </ul><br />
          - Visualization:
          <ul>
            <li>Plots illustrated episode rewards, success rates, price ratios, and average rewards.</li>
          </ul><br />
          <b>Complexity:</b><br />
          - Involved data extraction, feature engineering, and reinforcement learning model training.<br />
          - Required advanced evaluation and visualization techniques.<br /><br />
          <b>Impact:</b><br />
          - Enhanced trading strategies through informed decision-making.<br />
          - Automated trading strategies for efficiency and potential profitability.<br />
          - Provided insights for further improvements.<br /><br />
          <b>Backend:</b><br />
          - Database: PostgreSQL.<br />
          - Data Processing: Python with Pandas and NumPy.<br />
          - Machine Learning: Scikit-Learn and Stable Baselines3.<br />
          - Visualization: Matplotlib.<br /><br />
        </div>
      ),
    },
    {
      name: 'Probability Forecast Network',
      details: (
        <div>
          <b>Project 2: Probability Forecast Network</b><br />
          <b>Project Overview:</b><br />
          - Developed a probability forecast network to predict time series data with Bayesian inference.<br />
          - Implemented a neural network with custom probabilistic layers to forecast and quantify prediction uncertainty.<br /><br />
          <b>Stack Used:</b><br />
          - Programming Language: Python<br />
          - Libraries:
          <ul>
            <li>TensorFlow: For building and training the neural network model.</li>
            <li>TensorFlow Probability: For probabilistic layers and Bayesian inference.</li>
            <li>Scikit-Learn: For data preprocessing and normalization.</li>
            <li>NumPy: For numerical operations and data manipulation.</li>
            <li>SciPy: For statistical functions.</li>
            <li>Matplotlib: For visualization.</li>
          </ul><br />
          <b>Backend Used:</b><br />
          - Framework: TensorFlow and TensorFlow Probability<br />
          - Data Processing: NumPy and Scikit-Learn<br />
          - Statistical Analysis: SciPy<br /><br />
          <b>How It Works:</b><br />
          - Data Generation:
          <ul>
            <li>Generated synthetic time series data with patterns like trend, seasonal, noise, and abrupt changes.</li>
            <li>Used this data for training and validating the model.</li>
          </ul><br />
          - Data Preprocessing:
          <ul>
            <li>Normalized features and target variables using MinMaxScaler from Scikit-Learn.</li>
            <li>Reshaped data to fit the model requirements.</li>
          </ul><br />
          - Model Definition:
          <ul>
            <li>Created a custom DenseVariational layer using TensorFlow Probability for probabilistic modeling.</li>
            <li>Defined a Sequential model with DenseVariational, Dropout, and Dense layers.</li>
            <li>Implemented a custom loss function (ELBO) to optimize the model.</li>
          </ul><br />
          - Training:
          <ul>
            <li>Trained the model using Nadam optimizer with learning rate scheduling.</li>
            <li>Used early stopping to prevent overfitting.</li>
          </ul><br />
          - Prediction and Evaluation:
          <ul>
            <li>Predicted on the validation set and calculated Bayesian inference bounds.</li>
            <li>Evaluated using log-likelihood and residuals.</li>
          </ul><br />
          - Visualization:
          <ul>
            <li>Plotted actual vs predicted values with uncertainty bounds.</li>
            <li>Simulated trading strategies and visualized performance.</li>
            <li>Displayed residuals for each time step to analyze prediction accuracy.</li>
          </ul><br />
          <b>Complexity:</b><br />
          - Model Complexity: Involves custom probabilistic layers for Bayesian inference, requiring advanced understanding of TensorFlow Probability and probabilistic modeling.<br />
          - Data Handling: Requires handling and preprocessing time series data with various patterns.<br />
          - Evaluation Metrics: Includes complex metrics like Bayesian inference bounds and log-likelihood.<br /><br />
          <b>Visualization:</b><br />
          - Plots comparing actual vs predicted values with uncertainty bounds.<br />
          - Trading strategy performance visualization showing buy/sell signals and portfolio value.<br />
          - Residual plots for analyzing prediction errors over time.<br /><br />
          <b>Tools Used:</b><br />
          - Development Environment: Python<br />
          - Libraries: TensorFlow, TensorFlow Probability, Scikit-Learn, NumPy, SciPy, Matplotlib<br /><br />
          <b>Language Used:</b><br />
          - Python
        </div>
      ),
    },
    {
      name: 'Simple Chatbot',
      details: (
        <div>
          <b>Overview:</b>
          <ul>
            <li>A chatbot built using the Hugging Face Transformers library, utilizing a pre-trained conversational model.</li>
            <li>Capable of maintaining multi-turn conversations and generating responses based on user input.</li>
          </ul>
          <b>Technical Details:</b>
          <ul>
            <li>Programming Language: Python</li>
            <li>Backend: Uses Python with Hugging Face Transformers library</li>
            <li>Environment: Python virtual environment (venv) for dependency isolation</li>
          </ul>
          <b>Stack & Libraries:</b>
          <ul>
            <li>Virtual Environment: Python's venv</li>
            <li>Hugging Face Transformers: For loading pre-trained conversational models</li>
            <li>NLTK: Potential use for NLP preprocessing tasks</li>
            <li>PyTorch: Backend for model computation and inference</li>
            <li>Hugging Face Tokenizer: For tokenizing input text</li>
          </ul>
          <b>Model and Components:</b>
          <ul>
            <li>BlenderBot-400M-Distill: Conversational AI model from Facebook</li>
            <li>Transformer architecture for context-aware responses</li>
            <li>Hugging Face Conversation object for managing dialogue history</li>
          </ul>
          <b>Execution Settings:</b>
          <ul>
            <li>Max Length: 200 tokens for responses</li>
            <li>Min Length: 30 tokens</li>
            <li>Truncation enabled for longer sequences</li>
          </ul>
          <b>Process Flow:</b>
          <ul>
            <li>Environment setup with Python venv</li>
            <li>Model initialization using Hugging Face pipeline()</li>
            <li>Chat interaction loop for multi-turn dialogues</li>
            <li>Pre-trained model used for inference (no fine-tuning)</li>
          </ul>
          <b>Potential Enhancements:</b>
          <ul>
            <li>Deploy using Flask or FastAPI</li>
            <li>Fine-tune responses for specific domains</li>
            <li>Add logging/feedback for conversation quality improvement</li>
          </ul>
        </div>
      ),
    },
    {
      name: 'Mental Health Chatbot',
      details: (
        <div>
          <b>Overview:</b>
          <ul>
            <li>A chatbot built with a Flask backend, integrating GPT-2 for text generation</li>
            <li>Incorporates sentiment and intent analysis using Hugging Face Transformers</li>
          </ul>
          <b>Technical Details:</b>
          <ul>
            <li>Backend: Flask for API endpoints</li>
            <li>Text Generation: Fine-tuned GPT-2 model</li>
            <li>Analysis: Sentiment and intent recognition with Hugging Face Transformers</li>
            <li>Data Processing: PyPDF2 for PDF text extraction</li>
          </ul>
          <b>Libraries & Tools:</b>
          <ul>
            <li>Flask: Web framework for backend</li>
            <li>PyPDF2: PDF text extraction</li>
            <li>NLTK: Text preprocessing</li>
            <li>Hugging Face Transformers: GPT-2, sentiment analysis, intent recognition</li>
            <li>PyTorch: Deep learning engine for GPT-2</li>
          </ul>
          <b>Features:</b>
          <ul>
            <li>Mental health support chatbot with empathetic responses</li>
            <li>Integrated sentiment and intent analysis</li>
            <li>PDF processing for training data extraction</li>
          </ul>
          <b>Process Flow:</b>
          <ul>
            <li>Flask server receives POST request at /get_response</li>
            <li>Input processed for sentiment and intent</li>
            <li>GPT-2 generates contextual response</li>
            <li>Response sent back to user</li>
          </ul>
          <b>Potential Extensions:</b>
          <ul>
            <li>Integrate Cognitive Behavioral Therapy (CBT) techniques</li>
            <li>Add voice input/output capabilities</li>
            <li>Implement user interaction logging and mood tracking</li>
          </ul>
        </div>
      ),
    },
  ];

  const handleProjectClick = (index) => {
    setSelectedProject(selectedProject === index ? null : index);
  };

  return (
    <section className="projects-section" id="projects">
      <h2 className="projects-main-heading">Project Highlights</h2>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-box ${selectedProject === index ? 'active' : ''}`}
            onClick={() => handleProjectClick(index)}
          >
            {project.name}
          </div>
        ))}
      </div>
      {selectedProject !== null && (
        <div className="project-details-container">
          <div className="project-details">
            {projects[selectedProject].details}
          </div>
        </div>
      )}
    </section>
  );
}

export default Project;
