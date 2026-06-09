
import "./Profile.css";

function Profile() {
  return (
    <div className="profile-page">

      <div className="profile-card">

        <div className="profile-header">

          <img
            src="https://i.pravatar.cc/150"
            alt="Profile"
            className="profile-image"
          />

          <div>
            <h2>Prem Kumar</h2>
            <p>Super Administrator</p>
            <span>prem@gmail.com</span>
          </div>

        </div>

        <div className="profile-section">

          <h3>Personal Information</h3>

          <div className="profile-grid">

            <div>
              <label>First Name</label>
              <input type="text" value="Prem" readOnly />
            </div>

            <div>
              <label>Last Name</label>
              <input type="text" value="Kumar" readOnly />
            </div>

            <div>
              <label>Email</label>
              <input
                type="text"
                value="prem@gmail.com"
                readOnly
              />
            </div>

            <div>
              <label>Phone</label>
              <input
                type="text"
                value="9876543210"
                readOnly
              />
            </div>

          </div>

        </div>

        <div className="profile-section">

          <h3>Account Information</h3>

          <div className="account-grid">

            <div className="info-card">
              <p>Role</p>
              <h4>Admin</h4>
            </div>

            <div className="info-card">
              <p>Status</p>
              <h4>Active</h4>
            </div>

            <div className="info-card">
              <p>Member Since</p>
              <h4>June 2026</h4>
            </div>

          </div>

        </div>

        <div className="profile-buttons">

          <button className="edit-btn">
            Edit Profile
          </button>

          <button className="password-btn">
            Change Password
          </button>

        </div>

      </div>

    </div>
  );
}

export default Profile;