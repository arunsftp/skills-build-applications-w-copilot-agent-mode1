import React, { useEffect, useState } from 'react';

const TEAMS_API = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/teams/`;


function Teams() {
  const [teams, setTeams] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching Teams from:', TEAMS_API);
    fetch(TEAMS_API)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setTeams(results);
        console.log('Fetched Teams:', results);
      })
      .catch(err => console.error('Error fetching teams:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center my-4">Loading teams...</div>;

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title text-primary mb-4">Teams</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Members</th>
              </tr>
            </thead>
            <tbody>
              {teams.length === 0 ? (
                <tr><td colSpan="4" className="text-center">No teams found.</td></tr>
              ) : (
                teams.map((team, idx) => (
                  <tr key={team.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{team.name || '-'}</td>
                    <td>{team.description || '-'}</td>
                    <td>{team.members ? team.members.length : '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <button className="btn btn-success mt-3">Create Team</button>
      </div>
    </div>
  );
}

export default Teams;
