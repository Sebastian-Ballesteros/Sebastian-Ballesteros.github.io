// courses.js
// add math as a key word

const courses = [
    {
      name: "Mathematics for Economists",
      keywords: ["math", "mathematics", "economics", 
        "calculus", "linear algebra", "optimization"]
    },
    {
      name: "Foundations of Microeconomics",
      keywords: ["microeconomics", "economics", "supply", 
        "demand", "market structures", "policy", "elasticity"]
    },
    {
      name: "Foundations of Macroeconomics",
      keywords: ["macroeconomics", "economics", "GDP", 
        "inflation", "monetary policy", "fiscal policy"]
    },
    {
      name: "Economic History",
      keywords: ["economic history", "history", "development", 
        "industrialization", "globalization"]
    },
    {
      name: "Impact Writing Lab",
      keywords: ["writing", "communication", "reports", 
        "presentations", "professional writing"]
    },
    {
      name: "Programming for Economists I",
      keywords: ["r", "programming", "python", "coding", 
        "data analysis", "economics applications", "machine learning", "ML", 
        "data"]
    },
    {
      name: "Probability & Statistics",
      keywords: ["probability", "statistics", "data analysis", 
        "statistical inference", "econometrics", "r", "Python", "data"]
    },
    {
      name: "Development and Growth Economics",
      keywords: ["development economics", "growth theory", 
        "emerging markets", "poverty", "inequality"]
    },
    {
      name: "Game Theory",
      keywords: ["game theory", "strategic interaction", 
        "Nash equilibrium", "economics", "decision-making", "problem solving", "strategy"]
    },
    {
      name: "International Trade and Monetary System",
      keywords: ["international trade", "monetary system", 
        "exchange rates", "balance of payments", "global economics"]
    },
    {
      name: "Research Methods",
      keywords: ["r", "research methods", "data collection", 
        "analysis", "survey design", "econometrics", "data"]
    },
    {
      name: "Programming for Economists II",
      keywords: ["r", "advanced programming", "python", 
        "data structures", "algorithms", "economics modeling", "data"]
    },
    {
      name: "Econometrics",
      keywords: ["r", "econometrics", "regression analysis", "time series",
        "statistical modeling", "data analysis", "economics", "data"]
    },
    {
      name: "Financial Economics & Accounting",
      keywords: ["excel", "financial economics", "accounting", 
        "financial statements", "valuation", "corporate finance", "finance",
      "income statement", "balance sheet", "cashflow"]
    },
    {
      name: "Industrial Organization and Strategy",
      keywords: ["industrial organization", "market structures", "monopoly",
        "competition", "strategy", "regulation", "competition", "consulting"]
    },
    {
      name: "Public Economics & Political Economy",
      keywords: ["public economics", "political economy", "wellfare",
        "government policy", "taxation", "public goods", "sustainability"]
    },
    {
      name: "New Economy: Digital Ecosystems & Platforms",
      keywords: ["digital economy", "platforms", "ecosystems",
        "network effects", "technology", "social media"]
    },
    {
      name: "Technology",
      keywords: ["technology", "innovation", "IT", 
        "digital transformation", "emerging technologies"]
    },
    {
      name: "Institutional Economics",
      keywords: ["institutional economics", "institutions", "management",
        "governance", "property rights", "transaction costs", "leadership",
        "fixed income"]
    },
    {
      name: "Corporate Finance",
      keywords: ["excel", "corporate finance", "capital structure", "bonds",
        "investment decisions", "risk management", "financial markets", "risk"]
    },
    {
      name: "Economic Modeling & Simulation",
      keywords: ["r", "python", "economic modeling", "simulation", "time series", "data",
        "computational economics", "agent-based models", "mathematical models", "strategy"]
    },
    {
      name: "Market, Auction and Contract Design",
      keywords: ["market design", "auction theory", "contract theory", "advertising",
        "mechanism design", "economics", "options", "strategy", "management"]
    },
    {
      name: "Data Science for Economists",
      keywords: ["r", "python", "data science", "machine learning", "big data",
         "econometrics", "programming", "data visualization", "data"]
    },
    {
      name: "Economic Reporting Lab",
      keywords: ["economic reporting", "data visualization", 
        "writing", "presentation", "communication"]
    },
    {
      name: "Entrepreneurship",
      keywords: ["entrepreneurship", "startups", "business planning", 
        "innovation", "venture capital"]
    },
    {
      name: "Economics of Wellbeing",
      keywords: ["wellbeing", "happiness economics", 
        "quality of life", "public policy", "social indicators", "culture"]
    },
    {
      name: "Capital Markets",
      keywords: ["excel", "capital markets", "investment", "risk", "DCF", "discounted cashflow",
        "securities", "stock market", "financial instruments", "equity", ]
    },
    {
      name: "Experimental Economics",
      keywords: ["experimental economics", "behavioral economics", "causal inference",
        "laboratory experiments", "human behavior", "decision-making", "regression",
        "econometrics", "research"]
    },
    {
      name: "Economics of Innovation and Technological Change",
      keywords: ["innovation", "technological change", "R&D", 
        "patents", "economic growth", "strategy", "consulting", "change"]
    },
    {
      name: "Blockchain and Cryptocurrency",
      keywords: ["blockchain", "cryptocurrency", "bitcoin", "encryption", "sha256",
        "decentralized finance", "distributed ledger", "monetary policy", "finance",]
    },
    {
      name: "Labor Economics, Digitalization, and AI",
      keywords: ["labor economics", "digitalization", "artificial intelligence", 
        "automation", "future of work"]
    },
    {
      name: "Behavioral Economics, Finance & Decision-Making",
      keywords: ["behavioral economics", "finance", "psychology", "prospect theory",
        "decision-making", "cognitive biases", "wealth management", "advisor"]
    },
    {
      name: "IE-Challenge",
      keywords: ["innovation", "entrepreneurship", "project management", 
        "teamwork", "problem-solving", "consulting", "startup"]
    },
    {
      name: "FinTech Innovations",
      keywords: ["excel", "fintech", "financial technology", 
        "innovation", "digital finance", "startups", "finance"]
    },
    {
      name: "Negotiation Strategy",
      keywords: ["negotiation", "strategy", "conflict resolution", 
        "communication", "deal-making", "consulting", "management"]
    },
    {
      name: "Options and Futures",
      keywords: ["r", "python", "excel", "options", "futures", 
        "derivatives", "financial instruments", "risk management", "hedging",
        "Stochastic Calculus", "monte carlo", "real option", "valuation"]
    },
    {
      name: "Collective Intelligence",
      keywords: ["collective intelligence", "collaboration", 
        "team dynamics", "problem-solving", "decision-making", "teamwork",
        "international", "diversity", "inclusion", "team", "time series"]
    },
    {
      name: "Advanced Analytics",
      keywords: ["r", "python", "advanced analytics", "data analysis", 
        "statistical modeling", "machine learning", "big data", "data", "strategy"]
    },
    {
      name: "Real Time Data and AI",
      keywords: ["real-time data", "artificial intelligence", 
        "machine learning", "data processing", "analytics"]
    },
    {
      name: "Advanced AI",
      keywords: ["r", "python", "advanced AI", "deep learning", 
        "neural networks", "algorithm development", "artificial intelligence"]
    },
    {
      name: "Deep Reinforcement Learning",
      keywords: ["pytorch", "r", "python","deep reinforcement learning", 
        "machine learning", "AI", "neural networks", "algorithmic trading"]
    },
    {
      name: "Economic Research: Regions & Industries",
      keywords: ["excel", "economic research", "regional economics", 
        "industry analysis", "econometrics", "data analysis", "statistics"]
    },
    {
      name: "Econometrics II: Forecasting & Identification",
      keywords: ["r", "python", "econometrics", "forecasting", 
        "time series", "causal inference", "statistical methods", 'statistis']
    },
    {
      name: "Machine Learning & Analytics for Economists",
      keywords: ["r", "python", "machine learning", "analytics", 
        "economics", "data science", "predictive modeling"]
    },
    {
      name: "Economic Research: Consumers & Markets",
      keywords: ["economic research", "consumer behavior", 
        "market analysis", "econometrics", "data analysis"]
    },
    {
      name: "Thesis Study: Algorithmic Collusion in the Super Luxury Icecream Market",
      keywords: ["r", "python", "research project", "capstone", 
        "thesis", "economics", "analysis", "publication"]
    }
  ];