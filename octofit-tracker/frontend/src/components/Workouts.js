import React, { useEffect, useState } from 'react';

const WORKOUTS_API = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/workouts/`;


function Workouts() {
  const [workouts, setWorkouts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching Workouts from:', WORKOUTS_API);
    fetch(WORKOUTS_API)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setWorkouts(results);
        console.log('Fetched Workouts:', results);
      })
      .catch(err => console.error('Error fetching workouts:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center my-4">Loading workouts...</div>;

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title text-primary mb-4">Workouts</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Type</th>
                <th>Duration</th>
                <th>Calories</th>
              </tr>
            </thead>
            <tbody>
              {workouts.length === 0 ? (
                <tr><td colSpan="5" className="text-center">No workouts found.</td></tr>
              ) : (
                workouts.map((workout, idx) => (
                  <tr key={workout.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{workout.name || '-'}</td>
                    <td>{workout.type || '-'}</td>
                    <td>{workout.duration || '-'}</td>
                    <td>{workout.calories || '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <button className="btn btn-success mt-3">Add Workout</button>
      </div>
    </div>
  );
}

export default Workouts;
