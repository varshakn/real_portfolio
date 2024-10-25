import React, { useState } from 'react';
import './Experience.css'; // Assuming you have a CSS file for styling

function Experience() {
  const [activeExperience, setActiveExperience] = useState(null);

  const experiences = [
    {
      company: "Proceedit - Intern",
      timeline: "Feb 2024 - June 2024",
      details: (
        <div>
          <h3>Projects</h3>
          <h4>1. Reinforcement Learning Environment</h4>
          <p>
            This project leverages financial data to develop a reinforcement learning (RL) environment for predicting asset prices and making trading decisions. It incorporates machine learning, financial time series analysis, and reinforcement learning to simulate trading behavior. Below are the key technical aspects, technologies used, and project complexities:
          </p>
          <h3>Technical Aspects & Workflow</h3>
          <ul>
            <li><strong>Data Extraction:</strong>
              <ul>
                <li>Utilizes PostgreSQL database to retrieve historical financial data.</li>
                <li>SQL queries are run within Python to pull data specific to financial assets (e.g., MSFT).</li>
                <li>Data is filtered and cleaned, ensuring only necessary columns are used for modeling.</li>
                <li>Financial features like open price, high price, low price, close price, and volume are processed.</li>
              </ul>
            </li>
            <li><strong>Data Preprocessing:</strong>
              <ul>
                <li>The dataset is normalized using <code>StandardScaler</code> to standardize the features for better model training.</li>
                <li>Feature columns like opening price, closing price, and volume are extracted as input features.</li>
                <li>A target column (<code>MPN5P</code>) is defined for predicting future stock prices.</li>
              </ul>
            </li>
            <li><strong>Feature Engineering:</strong>
              <ul>
                <li>Added a derived column <code>Percentage_Change</code> which calculates percentage change between current and future prices, aiding in understanding market trends.</li>
                <li>This serves as a target for price prediction.</li>
              </ul>
            </li>
            <li><strong>Training/Testing Split:</strong>
              <ul>
                <li>Historical data is split into training and validation sets using <code>train_test_split()</code>.</li>
                <li>Time-based splitting is done to mimic real-world scenarios: training data from 2000 to 2021, with validation starting from 2023 onward.</li>
              </ul>
            </li>
          </ul>
          <h3>Reinforcement Learning (RL) Environment</h3>
          <ul>
            <li><strong>Custom Gym Environment:</strong>
              <ul>
                <li>Built using the <code>gym</code> library, simulating a financial trading environment.</li>
                <li>Actions: Buy, Sell, or Hold decisions are taken based on the current state of the market.</li>
                <li>The environment uses features like opening price, high, low, and closing price to make decisions on stock trading.</li>
                <li>Rewards are computed based on profit/loss, transaction costs, and holding penalties to incentivize profitable and efficient trades.</li>
              </ul>
            </li>
            <li><strong>Reward Calculation:</strong>
              <ul>
                <li>Positive rewards are given for profitable trades and minimized holding time.</li>
                <li>Transaction costs (set at 5%) and holding penalties (set at 0.5%) are factored into the decision-making process.</li>
                <li>Reward normalization is done to keep reward values within a reasonable range.</li>
              </ul>
            </li>
          </ul>
          <h3>Machine Learning Model: PPO</h3>
          <ul>
            <li><strong>Proximal Policy Optimization (PPO):</strong>
              <ul>
                <li>A reinforcement learning algorithm (<code>stable-baselines3</code>) is used to train the agent on the custom environment.</li>
                <li>The <code>MlpPolicy</code> (Multi-layer Perceptron) is employed, which uses a neural network to predict actions based on input features.</li>
                <li>Trains over 10,000 time steps to optimize trading strategies.</li>
              </ul>
            </li>
          </ul>
          <h3>Model Predictions & Analysis</h3>
          <ul>
            <li><strong>Prediction Process:</strong>
              <ul>
                <li>The trained RL model predicts asset price changes and performs actions (buy/sell/hold) based on the market state.</li>
                <li>Predicted results are compared with actual asset prices (target values) to assess model performance.</li>
              </ul>
            </li>
            <li><strong>Performance Evaluation:</strong>
              <ul>
                <li>Metrics like <code>mean_squared_error</code> and <code>r2_score</code> are used to evaluate the model's accuracy in predicting stock prices.</li>
                <li>Validation results help refine the RL strategy by adjusting hyperparameters.</li>
              </ul>
            </li>
          </ul>
          <h3>Visualization & Analysis</h3>
          <ul>
            <li><strong>Reward Visualization:</strong>
              <ul>
                <li>Training progress is visualized using reward curves, showing how the agent's performance improves over time.</li>
                <li>Episode rewards are plotted after each training session to analyze trading success.</li>
              </ul>
            </li>
            <li><strong>Success Rate Tracking:</strong>
              <ul>
                <li>The project includes success rate calculations based on positive returns.</li>
                <li>Plots show the proportion of successful trades and overall profitability.</li>
              </ul>
            </li>
            <li><strong>Price Ratio Analysis:</strong>
              <ul>
                <li>Price ratios (today’s price / tomorrow’s price) are analyzed over time, visualized to track market trends.</li>
              </ul>
            </li>
          </ul>
          <h3>Technologies Used</h3>
          <ul>
            <li><strong>Programming Languages:</strong> Python (core language)</li>
            <li><strong>Libraries:</strong>
              <ul>
                <li><code>pandas</code> and <code>NumPy</code>: For data manipulation and analysis.</li>
                <li><code>psycopg2</code>: PostgreSQL database connector.</li>
                <li><code>scikit-learn</code>: For data preprocessing, splitting, and scaling.</li>
                <li><code>gym</code>: For building the custom reinforcement learning environment.</li>
                <li><code>stable-baselines3</code>: For implementing Proximal Policy Optimization (PPO).</li>
                <li><code>matplotlib</code>: For plotting graphs and visualizing training progress.</li>
              </ul>
            </li>
            <li><strong>Database:</strong> PostgreSQL: Stores historical asset data; queries are made to extract this data.</li>
            <li><strong>Machine Learning Algorithms:</strong>
              <ul>
                <li><code>Linear Regression</code>: For baseline comparison in predicting prices.</li>
                <li><code>PPO (Proximal Policy Optimization)</code>: Main algorithm for training the RL agent.</li>
              </ul>
            </li>
            <li><strong>Reinforcement Learning:</strong> Custom trading environment built using the <code>gym</code> framework.</li>
          </ul>
          <h3>Project Complexities & Challenges</h3>
          <ul>
            <li><strong>Data Handling:</strong>
              <ul>
                <li>Efficiently handling large financial datasets and ensuring timely extraction, filtering, and preprocessing.</li>
                <li>Managing outliers and noise in stock prices to build a reliable model.</li>
              </ul>
            </li>
            <li><strong>Modeling & Predictions:</strong>
              <ul>
                <li>Training an RL model (PPO) with complex reward structures involving transaction costs and penalties.</li>
                <li>Balancing between underfitting and overfitting on financial data, which can be volatile.</li>
              </ul>
            </li>
            <li><strong>Reward Optimization:</strong>
              <ul>
                <li>Fine-tuning the reward function to correctly reflect market conditions, profits, and losses, ensuring that the agent is incentivized for real-world profitable actions.</li>
              </ul>
            </li>
          </ul>
          <p>This project demonstrates a combination of data science, machine learning, and financial analysis, making it ideal for roles in algorithmic trading, financial modeling, or data-driven decision-making roles.</p>
          
          <h4>2. Bayesian Neural Network for Time Series Prediction</h4>
          <p>
            <strong>Project Overview:</strong><br />
            - <strong>Objective</strong>: Build a <strong>Bayesian Neural Network (BNN)</strong> for time series prediction that estimates <strong>prediction uncertainty</strong>.<br />
            - <strong>Key Focus</strong>: Use advanced machine learning techniques to forecast patterns with quantified uncertainty using <strong>Bayesian inference</strong>.<br />
            - <strong>Technologies</strong>: TensorFlow, TensorFlow Probability (TFP), Nadam optimizer, Bayesian Inference, Exponential Decay.
          </p>
          <h3>Technologies and Libraries Used</h3>
          <ul>
            <li><strong>TensorFlow</strong>:
              <ul>
                <li>Open-source deep learning framework for building neural networks.</li>
                <li><strong>Complexity</strong>: Simplifies high-level model building but can get complex with custom layers (e.g., DenseVariational).</li>
              </ul>
            </li>
            <li><strong>TensorFlow Probability (TFP)</strong>:
              <ul>
                <li>Extends TensorFlow for probabilistic reasoning and Bayesian modeling.</li>
                <li><strong>Complexity</strong>: Adds layers for uncertainty estimation but requires handling concepts like KL Divergence.</li>
              </ul>
            </li>
            <li><strong>Scikit-learn (MinMaxScaler)</strong>:
              <ul>
                <li>Used to normalize input and output data for better training performance.</li>
                <li><strong>Complexity</strong>: Easy to use, but incorrect scaling can negatively affect the model.</li>
              </ul>
            </li>
            <li><strong>Nadam Optimizer</strong>:
              <ul>
                <li>Combines Adam optimization with Nesterov momentum for faster convergence.</li>
                <li><strong>Complexity</strong>: Requires careful tuning of learning rate and decay schedules.</li>
              </ul>
            </li>
            <li><strong>SciPy and NumPy</strong>:
              <ul>
                <li>Numerical and statistical libraries for data manipulation and computing the <strong>log-likelihood</strong> function.</li>
                <li><strong>Complexity</strong>: Provides powerful statistical tools for likelihood estimation.</li>
              </ul>
            </li>
            <li><strong>Matplotlib</strong>:
              <ul>
                <li>Used for plotting actual vs predicted values with uncertainty bounds.</li>
                <li><strong>Complexity</strong>: Simple and essential for visualizing model performance.</li>
              </ul>
            </li>
          </ul>
          <h3>Data Generation</h3>
          <ul>
            <li><strong>Synthetic Time Series Data</strong>: Generated with four distinct patterns to ensure the model learns various behaviors.
              <ul>
                <li><strong>Trend</strong>: Linear increase over time.</li>
                <li><strong>Seasonal</strong>: Sinusoidal data mimicking seasonal trends.</li>
                <li><strong>Noise</strong>: Random Gaussian noise.</li>
                <li><strong>Abrupt</strong>: Sudden shifts in data simulating anomalies.</li>
              </ul>
            </li>
            <li><strong>Parameters</strong>:
              <ul>
                <li><code>num_samples</code>: Total samples generated (e.g., 1000).</li>
                <li><code>sequence_length</code>: Length of each time series sequence (e.g., 10).</li>
                <li><code>num_features</code>: Features for each sample (e.g., 5).</li>
              </ul>
            </li>
          </ul>
          <h3>Model Architecture</h3>
          <ul>
            <li><strong>DenseVariational Layer</strong>:
              <ul>
                <li>Represents distributions over model weights instead of point estimates.</li>
                <li>Incorporates <strong>posterior</strong> and <strong>prior distributions</strong>.</li>
                <li><strong>KL Divergence</strong>: Regularizes the model by controlling how much the posterior diverges from the prior.</li>
              </ul>
            </li>
            <li><strong>Custom Components</strong>:
              <ul>
                <li><strong>Dropout Layer</strong>: Adds regularization by dropping neurons randomly during training.</li>
                <li><strong>KL Weight</strong>: Balances complexity (KL divergence) and data fitting (reconstruction loss).</li>
                <li><strong>Exponential Decay</strong>: Reduces learning rate over time to stabilize training.</li>
              </ul>
            </li>
          </ul>
          <h3>Training Process</h3>
          <ul>
            <li><strong>Loss Function</strong>:
              <ul>
                <li>Custom <strong>ELBO (Evidence Lower Bound) Loss</strong> that combines:
                  <ul>
                    <li><strong>Reconstruction Loss</strong>: Mean Squared Error between actual and predicted values.</li>
                    <li><strong>KL Divergence</strong>: Penalizes divergence from prior distribution, keeping the model from overfitting.</li>
                  </ul>
                </li>
              </ul>
            </li>
            <li><strong>Early Stopping</strong>:
              <ul>
                <li>Monitors validation loss and halts training if no improvement is seen after 10 epochs.</li>
                <li>Prevents overfitting and saves training time.</li>
              </ul>
            </li>
          </ul>
          <h3>Prediction and Uncertainty Estimation</h3>
          <ul>
            <li><strong>Bayesian Inference Bounds</strong>:
              <ul>
                <li>Uses the <strong>mean</strong> and <strong>standard deviation</strong> of predictions to compute a 95% <strong>Confidence Interval</strong>.
                  <ul>
                    <li>Lower Bound = \( \mu - 1.96 \cdot \sigma \)</li>
                    <li>Upper Bound = \( \mu + 1.96 \cdot \sigma \)</li>
                  </ul>
                </li>
                <li>Provides <strong>uncertainty estimation</strong> for the predictions, a key benefit of Bayesian models.</li>
              </ul>
            </li>
            <li><strong>Log-Likelihood</strong>:
              <ul>
                <li>Evaluates the likelihood of actual values under a normal distribution fitted to predictions.</li>
                <li>Used as a performance metric to assess model accuracy in probabilistic terms.</li>
              </ul>
            </li>
          </ul>
          <h3>Visualization</h3>
          <ul>
            <li><strong>Matplotlib</strong>:
              <ul>
                <li>Plots <strong>actual vs predicted values</strong> alongside the uncertainty bounds.</li>
                <li>Useful for visually analyzing model performance and uncertainty.</li>
              </ul>
            </li>
          </ul>
          <h3>Summary of Key Features</h3>
          <ul>
            <li><strong>Model Type</strong>: Bayesian Neural Network (BNN) for time series forecasting.</li>
            <li><strong>Core Technologies</strong>: TensorFlow, TensorFlow Probability, Nadam, Early Stopping, Exponential Decay.</li>
            <li><strong>Uncertainty Estimation</strong>: Built-in through Bayesian inference (Confidence Intervals).</li>
            <li><strong>Complexity</strong>: Involves advanced concepts like variational inference and custom loss functions for Bayesian modeling.</li>
          </ul>
          <p>
            This project demonstrates a blend of traditional deep learning with advanced probabilistic methods, ideal for time series forecasting where uncertainty is critical.
          </p>
        </div>
      ),
    },
    {
      company: "Solar Secure Solutions - Data Scientist",
      timeline: "Dec 2023 - Feb 2024",
      details: (
        <div>
          <p>Interned on machine learning projects.</p>
          <p>Focused on data cleaning and solution verification through graphs.</p>
        </div>
      ),
    },
    {
      company: "Cyber Cell, Kochi, Kerala - Intern",
      timeline: "Jan 2023 - Feb 2023",
      details: (
        <div>
          <p>Learned about cyber forensics and digital evidence recovery.</p>
          <p>Worked on risk mitigation, IP tracking, and data duplication using Tableau.</p>
        </div>
      ),
    },
    {
      company: "Virtually Testing Foundation, USA - Cyber Security Engineer",
      timeline: "May 2022 - July 2022",
      details: (
        <div>
          <p>Learned fundamentals of cyber security.</p>
          <p>Conducted research, attended meetings, and excelled in TryHackMe challenges.</p>
        </div>
      ),
    },
  ];

  const handleExperienceClick = (index) => {
    setActiveExperience(activeExperience === index ? null : index);
  };

  return (
    <section className="experience-section" id="experience">
      <h2>Experience</h2>
      <ul>
        {experiences.map((exp, index) => (
          <li 
            key={index} 
            className={`experience-square ${activeExperience === index ? 'active' : ''}`} 
            onClick={() => handleExperienceClick(index)}
          >
            <div className="experience-header">
              <h3>{exp.company}</h3>
              <div className="timeline">{exp.timeline}</div>
            </div>
            {activeExperience === index && (
              <div className="experience-details">{exp.details}</div>
            )}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Experience;
