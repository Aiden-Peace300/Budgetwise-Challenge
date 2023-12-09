import './SideNavbar.css'

export default function SideNavbar() {
  return (
    <>
      <div className="sideNarbar_container">
        <div className="sidebar_container">
          <nav className="sidebar_content">
            <ul className="sidebar_content_list">
              <li className="sidebar_text">Overview</li>
              <li className="sidebar_text">Budget</li>
              <li className="sidebar_text">Transaction</li>
              <li className="sidebar_text">Trends</li>
              <li className="sidebar_text">Saving Goals</li>
              <li className="sidebar_text">Alert</li>
            </ul>
          </nav>
        </div>
        <div style={{ borderLeft: '1px solid #707070', height: '200vh', padding: '2rem' }}></div>
      </div>
    </>
  );
}
