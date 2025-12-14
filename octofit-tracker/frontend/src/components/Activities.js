import React, { useEffect, useState } from 'react';

const ACTIVITIES_API = `https://${process.env.REACT_APP_CODESPACE_NAME}-8000.app.github.dev/api/activities/`;


function Activities() {
  const [activities, setActivities] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    console.log('Fetching Activities from:', ACTIVITIES_API);
    fetch(ACTIVITIES_API)
      .then(res => res.json())
      .then(data => {
        const results = data.results || data;
        setActivities(results);
        console.log('Fetched Activities:', results);
      })
      .catch(err => console.error('Error fetching activities:', err))
      .finally(() => setLoading(false));
  }, []);

  if (loading) return <div className="text-center my-4">Loading activities...</div>;

  return (
    <div className="card shadow mb-4">
      <div className="card-body">
        <h2 className="card-title text-primary mb-4">Activities</h2>
        <div className="table-responsive">
          <table className="table table-striped table-bordered">
            <thead className="table-primary">
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Description</th>
                <th>Date</th>
              </tr>
            </thead>
            <tbody>
              {activities.length === 0 ? (
                <tr><td colSpan="4" className="text-center">No activities found.</td></tr>
              ) : (
                activities.map((activity, idx) => (
                  <tr key={activity.id || idx}>
                    <td>{idx + 1}</td>
                    <td>{activity.name || '-'}</td>
                    <td>{activity.description || '-'}</td>
                    <td>{activity.date || '-'}</td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
        <button className="btn btn-success mt-3">Add Activity</button>
      </div>
    </div>
  );
}

export default Activities;
