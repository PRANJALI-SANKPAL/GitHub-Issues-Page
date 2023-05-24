// Import the axios library for making HTTP requests
import axios from 'axios';

// Set up the base URL for the GitHub API
const baseURL = 'https://api.github.com';

// Function to fetch the list of open issues for a repository
export const fetchIssues = async (owner, repo) => {
  try {
    const response = await axios.get(
      `${baseURL}/repos/${owner}/${repo}/issues?state=open`
    );
    return response.data;
  } catch (error) {
    console.error('Error fetching issues:', error);
    throw error;
  }
};