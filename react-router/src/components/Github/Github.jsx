import React, { useEffect, useState } from 'react';

export default function Github() {
  const [data, setData] = useState(null);
  useEffect(() => {
    fetch('https://api.github.com/users/Faizan3n')
      .then(response => response.json())
      .then(data => setData(data));
  }, []);
  return (
    <div className="text-center m-4 bg-gray-600">
      Github Followers: {data ? data.followers : 'Loading...'}<br />
      Total Public Repositories: {data ? data.public_repos : 'Loading...'}
    </div>
  );
}
