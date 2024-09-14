// job-match.js

document.getElementById('match-button').addEventListener('click', function() {
    const jobDescription = document.getElementById('job-description').value.toLowerCase();
  
    // Simple text processing: remove punctuation and split into words
    const jobKeywords = jobDescription.replace(/[^\w\s]/gi, '').split(/\s+/);
  
    // Remove common stop words
    const stopWords = ['the', 'and', 'to', 'a', 'of', 'in', 'for', 'with', 'on', 'by', 'an', 'is', 'are', 'as', 'at', 'be', 'or', 'that', 'from', 'this', 'it', 'you', 'your', 'we', 'our'];
    const filteredJobKeywords = jobKeywords.filter(word => !stopWords.includes(word));
  
    // Find matching courses with matched keywords
    const matchingCourses = courses.map(course => {
      // Find matched keywords between course keywords and filtered job keywords
      const matchedKeywords = course.keywords.filter(keyword => filteredJobKeywords.includes(keyword));
      if (matchedKeywords.length > 0) {
        return {
          name: course.name,
          matchedKeywords: matchedKeywords
        };
      } else {
        return null;
      }
    }).filter(course => course !== null);
  
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
  