import { useEffect, useState } from 'react';

const useGithubRepos = (username) => {
  const [repos, setRepos] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchRepos = async () => {
      try {
        const res = await fetch(`https://api.github.com/users/${username}/repos?sort=updated`);
        const data = await res.json();
        setRepos(data.slice(0, 4)); // get latest 2
        setLoading(false);
      } catch (err) {
        console.error(err);
      }
    };

    fetchRepos();
  }, [username]);

  return { repos, loading };
};

export default useGithubRepos;
