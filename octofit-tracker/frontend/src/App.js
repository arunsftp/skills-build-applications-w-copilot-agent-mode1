

import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Activities from './components/Activities';
import Leaderboard from './components/Leaderboard';
import Teams from './components/Teams';
import Users from './components/Users';
import Workouts from './components/Workouts';

function App() {
  return (
    <Router>
      <div className="container-fluid bg-light min-vh-100 p-0">
        {/* Navigation */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
          <div className="container-fluid">
            <Link className="navbar-brand d-flex align-items-center" to="/" style={{gap: '10px'}}>
              <img src="/octofitapp-small.png" alt="Octofit Logo" className="App-logo" style={{marginRight: '12px', boxShadow: '0 2px 8px #43cea2', background: '#fff', borderRadius: '12px', height: '48px'}} />
              <span style={{fontWeight: 700, fontSize: '1.7rem', color: '#fff', letterSpacing: '1px', textShadow: '0 2px 8px #185a9d'}}>Octofit Tracker</span>
            </Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto">
                <li className="nav-item">
                  <Link className="nav-link" to="/activities">Activities</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/teams">Teams</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/leaderboard">Leaderboard</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/users">Users</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/workouts">Workouts</Link>
                </li>
              </ul>
            </div>
          </div>
        </nav>

        {/* Main Content */}
        <div className="container py-4">
          <Routes>
            <Route path="/activities" element={<Activities />} />
            <Route path="/teams" element={<Teams />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
            <Route path="/users" element={<Users />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/" element={
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card shadow">
                    <div className="card-body">
                      <h1 className="card-title display-5 mb-3 text-primary">Welcome to Octofit Tracker</h1>
                      <p className="card-text lead mb-4">
                        Track your fitness activities, join teams, and compete on the leaderboard!
                      </p>
                      <Link to="/activities" className="btn btn-success btn-lg mb-3">Get Started</Link>
                      <hr />
                      <h2 className="h4 mb-3">Sample Data Table</h2>
                      <div className="table-responsive">
                        <table className="table table-striped table-bordered">
                          <thead className="table-primary">
                            <tr>
                              <th>#</th>
                              <th>Activity</th>
                              <th>Duration (min)</th>
                              <th>Calories</th>
                              <th>Date</th>
                            </tr>
                          </thead>
                          <tbody>
                            <tr>
                              <td>1</td>
                              <td>Running</td>
                              <td>30</td>
                              <td>300</td>
                              <td>2025-12-14</td>
                            </tr>
                            <tr>
                              <td>2</td>
                              <td>Cycling</td>
                              <td>45</td>
                              <td>400</td>
                              <td>2025-12-13</td>
                            </tr>
                          </tbody>
                        </table>
                      </div>
                      <button className="btn btn-outline-primary mt-3" data-bs-toggle="modal" data-bs-target="#infoModal">Show Info Modal</button>
                    </div>
                  </div>
                </div>
              </div>
            } />
          </Routes>
        </div>

        {/* Modal */}
        <div className="modal fade" id="infoModal" tabIndex="-1" aria-labelledby="infoModalLabel" aria-hidden="true">
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <h5 className="modal-title" id="infoModalLabel">About Octofit Tracker</h5>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              <div className="modal-body">
                This is a demo modal using Bootstrap. You can use modals for notifications, forms, and more!
              </div>
              <div className="modal-footer">
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Router>
  );
}

export default App;
