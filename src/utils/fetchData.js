export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': '795490a0e0msh98d896a8e642ab3p17666djsn2b3b0e197b23'
      // 'X-RapidAPI-Key': process.env.REACT_APP_RAPIDAPI_KEY,
    }
}

export const youtubeVideoOptions = {
  method: 'GET',
  headers: {
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
    'X-RapidAPI-Key': '795490a0e0msh98d896a8e642ab3p17666djsn2b3b0e197b23'
  }
}

export const fetchData = async(url,options) => {
    try {
      const response = await fetch(url, options);
      console.log('Response:', response); // Log the response object
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
}