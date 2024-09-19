import nltk
nltk.download('punkt')
nltk.download('stopwords')

import os
import json5  # Use json5 instead of json
import json
import re
import PyPDF2
from fuzzywuzzy import process
from nltk.corpus import stopwords

# Initialize NLTK resources
stop_words = set(stopwords.words('english'))

desired_keywords = [
    # Core Skills & Tools
    'python', 'r', 'java', 'c++', 'sql', 'sas', 'matlab', 'vba', 'stata',
    'excel', 'tableau', 'power bi', 'alteryx', 'spark', 'hadoop', 'tensorflow',
    'pytorch', 'keras', 'julia', 'cloud computing', 'aws', 'gcp', 'azure', 
    'docker', 'kubernetes', 'git', 'github', 'bash', 'linux', 'unix',
    
    # Consulting-Specific Skills
    'problem solving', 'strategic thinking', 'stakeholder management', 
    'client engagement', 'presentation skills', 'teamwork', 'communication',
    'business strategy', 'change management', 'project management', 
    'industry knowledge', 'data-driven decision making', 'business analysis',
    'financial modeling', 'scenario analysis', 'market research', 'benchmarking',
    'swot analysis', 'gap analysis', 'value chain analysis', 'pestel analysis',

    # Data Science & Machine Learning
    'data analysis', 'analytical thinking', 'data wrangling', 'data cleaning',
    'data visualization', 'exploratory data analysis', 'big data', 'data mining',
    'feature engineering', 'predictive modeling', 'supervised learning', 
    'unsupervised learning', 'natural language processing', 'nlp', 'deep learning',
    'convolutional neural networks', 'recurrent neural networks', 'reinforcement learning',
    'gradient boosting', 'xgboost', 'catboost', 'random forests', 'decision trees',
    'clustering', 'classification', 'neural networks', 'transfer learning',
    'dimensionality reduction', 'support vector machines', 'svm', 'model validation',
    'model evaluation', 'cross-validation', 'hyperparameter tuning', 'feature selection',
    'model interpretability', 'causal inference', 'a/b testing', 'hypothesis testing',
    'bayesian inference', 'time series analysis', 'forecasting', 'optimization',
    'ensemble methods', 'generative models', 'multivariate analysis',

    # Quantitative Finance & Finance
    'financial analysis', 'asset pricing', 'derivatives', 'options pricing',
    'quantitative finance', 'quantitative trading', 'hedging strategies', 
    'risk management', 'portfolio optimization', 'fixed income', 'equity research',
    'capital markets', 'monte carlo simulations', 'black-scholes', 'binomial models', 
    'yield curves', 'volatility modeling', 'liquidity risk', 'credit risk',
    'market risk', 'VaR', 'expected shortfall', 'stress testing', 'financial instruments',
    'financial engineering', 'interest rate models', 'factor models', 'quantitative risk',
    'financial econometrics', 'high-frequency trading', 'algorithmic trading',
    'arbitrage', 'corporate finance', 'valuation', 'DCF analysis', 'investment strategies',
    
    # Strategy Consulting
    'strategy development', 'market entry strategy', 'competitive analysis', 
    'growth strategy', 'cost reduction', 'operational efficiency', 'innovation',
    'business transformation', 'mergers and acquisitions', 'due diligence',
    'synergy analysis', 'portfolio management', 'risk mitigation', 
    'organizational design', 'digital transformation', 'performance improvement',
    'change implementation', 'customer segmentation', 'pricing strategies',
    
    # Mathematical & Statistical Methods
    'math', 'calculus', 'linear algebra', 'differential equations', 
    'probability', 'statistics', 'econometrics', 'statistical methods',
    'regression', 'logistic regression', 'generalized linear models', 'anova',
    'hypothesis testing', 'nonparametric methods', 'multivariate statistics',
    'stochastic processes', 'markov chains', 'bayesian statistics', 
    'monte carlo methods', 'numerical methods', 'time series', 'factor analysis',
    'principal component analysis', 'latent variable models', 'optimization methods',
    'convex optimization', 'linear programming', 'quadratic programming',
    'nonlinear programming', 'integer programming', 'dynamic programming'
]


# Path to the folder containing the PDF syllabi
syllabi_folder = './syllabi/'

# Path to the courses.js file
courses_js_path = './js/courses.js'

# Read the courses.js file
with open(courses_js_path, 'r', encoding='utf-8') as f:
    courses_js_content = f.read()

# Remove any comments (lines starting with //)
courses_js_content = re.sub(r'//.*', '', courses_js_content)

# Find the position of 'const courses ='
pos = courses_js_content.find('const courses =')
if pos == -1:
    raise ValueError('Could not find "const courses =" in courses.js')

# Get the content after 'const courses ='
courses_json_str = courses_js_content[pos + len('const courses ='):]

# Remove the trailing semicolon and any trailing whitespace
courses_json_str = courses_json_str.rstrip(';\n ')

# Now parse the JSON data using json5
courses = json5.loads(courses_json_str)

# Create a mapping from normalized course names to their data
def normalize_name(name):
    name = name.lower()
    name = re.sub(r'[^\w\s]', '', name)  # Remove punctuation
    name = re.sub(r'\s+', ' ', name)      # Replace multiple spaces with a single space
    name = name.strip()
    return name

courses_dict = {normalize_name(course['name']): course for course in courses}

# Get the list of course names
course_names = list(courses_dict.keys())

# Function to extract keywords by matching desired keywords
def extract_keywords(text, desired_keywords):
    # Preprocess the text
    text_lower = text.lower()
    text_clean = re.sub(r'[^\w\s]', '', text_lower)  # Remove punctuation
    tokens = nltk.word_tokenize(text_clean)
    tokens = [word for word in tokens if word not in stop_words]
    token_set = set(tokens)
    # For phrases, keep the text as is
    matched_keywords = set()
    for keyword in desired_keywords:
        keyword_lower = keyword.lower()
        if ' ' in keyword_lower:
            if keyword_lower in text_clean:
                matched_keywords.add(keyword)
        else:
            if keyword_lower in token_set:
                matched_keywords.add(keyword)
    return list(matched_keywords)

# Process each PDF file in the syllabi folder
for filename in os.listdir(syllabi_folder):
    if filename.endswith('.pdf'):
        pdf_path = os.path.join(syllabi_folder, filename)

        # Extract the base name without extension
        filename_without_ext = os.path.splitext(filename)[0]
        normalized_filename = normalize_name(filename_without_ext)

        print(f'Processing {filename}...')

        # Find the best match for the filename among the course names
        best_match, score = process.extractOne(normalized_filename, course_names)

        if score > 80:  # Adjust the threshold as needed
            course = courses_dict[best_match]

            # Extract text from PDF
            try:
                with open(pdf_path, 'rb') as pdf_file:
                    pdf_reader = PyPDF2.PdfReader(pdf_file)
                    text = ''
                    for page_num in range(len(pdf_reader.pages)):
                        page = pdf_reader.pages[page_num]
                        page_text = page.extract_text()
                        if page_text:
                            text += page_text
            except Exception as e:
                print(f'Error reading {pdf_path}: {e}')
                continue

            # Extract keywords
            keywords = extract_keywords(text, desired_keywords)

            # Update the course's keywords
            course['keywords'] = keywords

            print(f'Extracted {len(keywords)} keywords for {course["name"]}: {keywords}')

        else:
            print(f'No good match found for {filename_without_ext}')

# Write the updated courses back to courses.js
# Convert back to JavaScript format
updated_courses_js_content = 'const courses = ' + json.dumps(courses, indent=2) + ';'

with open(courses_js_path, 'w', encoding='utf-8') as f:
    f.write(updated_courses_js_content)

print('courses.js has been updated with new keywords.')
