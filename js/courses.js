const courses = [
  {
    "name": "Mathematics for Economists",
    "keywords": [
      "math",
      "mathematics",
      "economics",
      "calculus",
      "linear algebra",
      "optimization"
    ]
  },
  {
    "name": "Foundations of Microeconomics",
    "keywords": [
      "microeconomics",
      "economics",
      "supply",
      "demand",
      "market structures",
      "policy",
      "elasticity"
    ]
  },
  {
    "name": "Foundations of Macroeconomics",
    "keywords": [
      "macroeconomics",
      "economics",
      "GDP",
      "inflation",
      "monetary policy",
      "fiscal policy"
    ]
  },
  {
    "name": "Economic History",
    "keywords": [
      "economic history",
      "history",
      "development",
      "industrialization",
      "globalization"
    ]
  },
  {
    "name": "Impact Writing Lab",
    "keywords": [
      "writing",
      "communication",
      "reports",
      "presentations",
      "professional writing"
    ]
  },
  {
    "name": "Programming for Economists I",
    "keywords": [
      "r",
      "programming",
      "python",
      "coding",
      "data analysis",
      "economics applications",
      "machine learning",
      "ML",
      "data"
    ]
  },
  {
    "name": "Probability & Statistics",
    "keywords": [
      "probability",
      "statistics",
      "data analysis",
      "statistical inference",
      "econometrics",
      "r",
      "Python",
      "data"
    ]
  },
  {
    "name": "Development and Growth Economics",
    "keywords": [
      "development economics",
      "growth theory",
      "emerging markets",
      "poverty",
      "inequality"
    ]
  },
  {
    "name": "Game Theory",
    "keywords": [
      "game theory",
      "strategic interaction",
      "Nash equilibrium",
      "economics",
      "decision-making",
      "problem solving",
      "strategy"
    ]
  },
  {
    "name": "International Trade and Monetary System",
    "keywords": [
      "international trade",
      "monetary system",
      "exchange rates",
      "balance of payments",
      "global economics"
    ]
  },
  {
    "name": "Research Methods",
    "keywords": [
      "r",
      "research methods",
      "data collection",
      "analysis",
      "survey design",
      "econometrics",
      "data"
    ]
  },
  {
    "name": "Programming for Economists II",
    "keywords": [
      "r",
      "advanced programming",
      "python",
      "data structures",
      "algorithms",
      "economics modeling",
      "data"
    ]
  },
  {
    "name": "Econometrics",
    "keywords": [
      "econometrics",
      "regression",
      "r",
      "statistics",
      "hypothesis testing"
    ]
  },
  {
    "name": "Financial Economics & Accounting",
    "keywords": [
      "classification",
      "valuation",
      "business strategy",
      "financial analysis",
      "financial instruments",
      "communication",
      "math",
      "corporate finance",
      "forecasting",
      "probability"
    ]
  },
  {
    "name": "Industrial Organization and Strategy",
    "keywords": []
  },
  {
    "name": "Public Economics & Political Economy",
    "keywords": []
  },
  {
    "name": "New Economy: Digital Ecosystems & Platforms",
    "keywords": [
      "innovation",
      "deep learning",
      "communication",
      "cloud computing",
      "optimization",
      "benchmarking",
      "digital transformation"
    ]
  },
  {
    "name": "Technology",
    "keywords": [
      "technology",
      "innovation",
      "IT",
      "digital transformation",
      "emerging technologies"
    ]
  },
  {
    "name": "Institutional Economics",
    "keywords": [
      "econometrics",
      "statistics",
      "r"
    ]
  },
  {
    "name": "Corporate Finance",
    "keywords": [
      "derivatives",
      "market risk",
      "capital markets",
      "corporate finance",
      "valuation",
      "investment strategies",
      "fixed income",
      "arbitrage",
      "financial instruments",
      "risk management"
    ]
  },
  {
    "name": "Economic Modeling & Simulation",
    "keywords": [
      "econometrics",
      "time series analysis",
      "python",
      "regression",
      "calculus",
      "statistics",
      "bayesian statistics",
      "bayesian inference",
      "data analysis",
      "exploratory data analysis",
      "probability",
      "forecasting",
      "time series"
    ]
  },
  {
    "name": "Market, Auction and Contract Design",
    "keywords": [
      "financial analysis",
      "math"
    ]
  },
  {
    "name": "Data Science for Economists",
    "keywords": [
      "data wrangling",
      "feature engineering",
      "data visualization",
      "r",
      "python",
      "statistics",
      "data analysis",
      "exploratory data analysis"
    ]
  },
  {
    "name": "Economic Reporting Lab",
    "keywords": [
      "analytical thinking",
      "presentation skills",
      "teamwork"
    ]
  },
  {
    "name": "Entrepreneurship",
    "keywords": [
      "innovation",
      "organizational design",
      "teamwork",
      "corporate finance",
      "model validation",
      "project management",
      "digital transformation"
    ]
  },
  {
    "name": "Economics of Wellbeing",
    "keywords": [
      "forecasting",
      "regression",
      "innovation"
    ]
  },
  {
    "name": "Capital Markets",
    "keywords": [
      "derivatives",
      "market risk",
      "capital markets",
      "valuation",
      "fixed income",
      "excel",
      "financial instruments",
      "stress testing",
      "financial engineering"
    ]
  },
  {
    "name": "Experimental Economics",
    "keywords": [
      "anova"
    ]
  },
  {
    "name": "Economics of Innovation and Technological Change",
    "keywords": [
      "clustering",
      "big data",
      "innovation"
    ]
  },
  {
    "name": "Blockchain and Cryptocurrency",
    "keywords": [
      "innovation",
      "math"
    ]
  },
  {
    "name": "Labor Economics, Digitalization, and AI",
    "keywords": []
  },
  {
    "name": "Behavioral Economics, Finance & Decision-Making",
    "keywords": [
      "arbitrage",
      "data analysis",
      "econometrics",
      "probability"
    ]
  },
  {
    "name": "IE-Challenge",
    "keywords": [
      "innovation",
      "communication",
      "teamwork"
    ]
  },
  {
    "name": "FinTech Innovations",
    "keywords": [
      "excel",
      "fintech",
      "financial technology",
      "innovation",
      "digital finance",
      "startups",
      "finance"
    ]
  },
  {
    "name": "Negotiation Strategy",
    "keywords": []
  },
  {
    "name": "Options and Futures",
    "keywords": [
      "derivatives",
      "capital markets",
      "corporate finance",
      "r",
      "valuation",
      "excel",
      "risk mitigation",
      "risk management"
    ]
  },
  {
    "name": "Collective Intelligence",
    "keywords": [
      "r",
      "optimization",
      "big data",
      "decision trees",
      "random forests",
      "ensemble methods",
      "forecasting",
      "problem solving"
    ]
  },
  {
    "name": "Advanced Analytics",
    "keywords": [
      "classification",
      "linux",
      "neural networks",
      "factor analysis",
      "principal component analysis",
      "hadoop",
      "github",
      "big data",
      "r",
      "regression",
      "predictive modeling",
      "generalized linear models",
      "supervised learning",
      "data analysis",
      "random forests",
      "decision trees",
      "logistic regression",
      "svm",
      "data visualization",
      "data mining",
      "statistics",
      "data cleaning",
      "statistical methods",
      "support vector machines",
      "dimensionality reduction",
      "clustering",
      "ensemble methods",
      "unsupervised learning"
    ]
  },
  {
    "name": "Real Time Data and AI",
    "keywords": [
      "credit risk",
      "regression",
      "natural language processing",
      "python",
      "statistics",
      "big data",
      "math",
      "nlp",
      "spark"
    ]
  },
  {
    "name": "Advanced AI",
    "keywords": [
      "natural language processing",
      "python",
      "pytorch",
      "calculus",
      "statistics",
      "tensorflow",
      "github",
      "deep learning",
      "generative models",
      "probability",
      "nlp"
    ]
  },
  {
    "name": "Deep Reinforcement Learning",
    "keywords": [
      "neural networks",
      "reinforcement learning",
      "python",
      "calculus",
      "tensorflow",
      "valuation",
      "pytorch",
      "matlab",
      "optimization",
      "derivatives",
      "markov chains",
      "innovation",
      "monte carlo methods",
      "probability",
      "dynamic programming",
      "corporate finance",
      "statistics",
      "linear algebra",
      "business transformation"
    ]
  },
  {
    "name": "Economic Research: Regions & Industries",
    "keywords": [
      "capital markets"
    ]
  },
  {
    "name": "Econometrics II: Forecasting & Identification",
    "keywords": [
      "econometrics",
      "stata",
      "time series analysis",
      "forecasting",
      "time series"
    ]
  },
  {
    "name": "Machine Learning & Analytics for Economists",
    "keywords": [
      "classification",
      "neural networks",
      "python",
      "analytical thinking",
      "github",
      "deep learning",
      "big data",
      "hyperparameter tuning",
      "performance improvement",
      "regression",
      "model evaluation",
      "natural language processing",
      "innovation",
      "supervised learning",
      "data analysis",
      "decision trees",
      "logistic regression",
      "nlp",
      "data mining",
      "statistics",
      "gradient boosting",
      "convolutional neural networks",
      "clustering",
      "unsupervised learning"
    ]
  },
  {
    "name": "Economic Research: Consumers & Markets",
    "keywords": [
      "econometrics"
    ]
  },
  {
    "name": "Thesis Study: Algorithmic Collusion in the Super Luxury Icecream Market",
    "keywords": [
      "data analysis"
    ]
  },
  {
    "name": "Applied Econometrics and Big Data",
    "keywords": [
      "r",
      "valuation",
      "econometrics",
      "regression",
      "calculus",
      "statistics",
      "causal inference",
      "big data",
      "linear algebra",
      "forecasting"
    ]
  },
  {
    "name": "Real Estate Economics and Finance",
    "keywords": [
      "r",
      "valuation",
      "regression",
      "statistics",
      "innovation",
      "monte carlo simulations"
    ]
  }
];