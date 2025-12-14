
import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div className="container-fluid bg-light min-vh-100 p-0">
      {/* Navigation */}
      <nav className="navbar navbar-expand-lg navbar-dark bg-primary mb-4">
        <div className="container-fluid">
          <a className="navbar-brand d-flex align-items-center" href="#">
            <img src="/octofitapp-small.png" alt="Octofit Logo" className="App-logo me-2" />
            Octofit Tracker
          </a>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Activities</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Teams</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Leaderboard</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <div className="container py-4">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow">
              <div className="card-body">
                <h1 className="card-title display-5 mb-3 text-primary">Welcome to Octofit Tracker</h1>
                <p className="card-text lead mb-4">
                  Track your fitness activities, join teams, and compete on the leaderboard!
                </p>
                <a href="#" className="btn btn-success btn-lg mb-3">Get Started</a>
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
  );
}

export default App;
