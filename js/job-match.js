document.getElementById('match-button').addEventListener('click', function() {
  const jobDescription = document.getElementById('job-description').value.toLowerCase();

  // Simple text processing: remove punctuation and split into words
  const jobWords = jobDescription.replace(/[^\w\s]/gi, '').split(/\s+/);

  // Remove common stop words
  const stopWords = ['the', 'and', 'to', 'a', 'of', 'in', 'for', 'with', 'on', 'by', 'an', 'is', 'are', 'as', 'at', 'be', 'or', 'that', 'from', 'this', 'it', 'you', 'your', 'we', 'our'];
  const filteredJobWords = jobWords.filter(word => !stopWords.includes(word));

  // Generate unigrams and bigrams
  function generateNgrams(words, n) {
      let ngrams = [];
      for (let i = 0; i < words.length - n + 1; i++) {
          ngrams.push(words.slice(i, i + n).join(' '));
      }
      return ngrams;
  }

  let jobKeywords = [];
  // Generate unigrams (single words)
  jobKeywords = jobKeywords.concat(generateNgrams(filteredJobWords, 1));
  // Generate bigrams (two-word phrases)
  jobKeywords = jobKeywords.concat(generateNgrams(filteredJobWords, 2));

  // Implement Porter Stemmer for accurate stemming
  function stemWord(word) {
      // Simple stemmer for demonstration (replace with Porter Stemmer in production)
      return word.replace(/(ing|ed|s|ies|es|tion|ations|ics|ment|ance|ence|able|ible|al|ism|ist|ity|ty|ness|ous|ive|ize|ise)$/, '');
  }

  // Exclude short words (less than 3 characters)
  const meaningfulJobKeywords = jobKeywords.filter(word => word.length > 2);

  // Stem job keywords and create a mapping to original keywords
  const stemmedJobKeywords = [];
  const jobKeywordMap = {}; // stemmed keyword to original keyword
  meaningfulJobKeywords.forEach(word => {
      const stemmed = stemWord(word);
      stemmedJobKeywords.push(stemmed);
      jobKeywordMap[stemmed] = word;
  });

  // Stem course keywords and create a mapping to original keywords
  const stemmedCourses = courses.map(course => {
      const stemmedKeywords = [];
      const keywordMap = {}; // stemmed keyword to original keyword
      course.keywords.forEach(keyword => {
          const stemmed = stemWord(keyword.toLowerCase());
          stemmedKeywords.push(stemmed);
          keywordMap[stemmed] = keyword;
      });
      return {
          name: course.name,
          stemmedKeywords: stemmedKeywords,
          keywordMap: keywordMap
      };
  });

  // Find matching courses with exact matched keywords
  const matchingCourses = stemmedCourses.map(course => {
      // Find matched keywords between course stemmed keywords and stemmed job keywords
      const matchedStemmedKeywords = course.stemmedKeywords.filter(keyword => {
          return stemmedJobKeywords.includes(keyword);
      });

      // Map matched stemmed keywords to original course keywords
      const matchedKeywords = matchedStemmedKeywords.map(stemmed => course.keywordMap[stemmed]);

      if (matchedKeywords.length > 0) {
          return {
              name: course.name,
              matchedKeywords: matchedKeywords
          };
      } else {
          return null;
      }
  }).filter(course => course !== null);

  // **Sort the matching courses by the number of matched keywords in descending order**
  matchingCourses.sort((a, b) => b.matchedKeywords.length - a.matchedKeywords.length);

  // Display the results
  const resultDiv = document.getElementById('matching-courses');
  if (matchingCourses.length > 0) {
      let resultHtml = '<h3>Relevant Courses:</h3><ul>';
      matchingCourses.forEach(course => {
          resultHtml += `<li><strong>${course.name}</strong><br>`;
          resultHtml += `Matched Keywords: <em>${course.matchedKeywords.join(', ')}</em></li>`;
      });
      resultHtml += '</ul>';
      resultDiv.innerHTML = resultHtml;
  } else {
      resultDiv.innerHTML = '<p>No matching courses found.</p>';
  }
});
