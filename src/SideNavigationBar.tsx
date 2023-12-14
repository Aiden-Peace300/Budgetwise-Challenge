import './SideNavigationBar.css'

/************************************************************************
 * SideNavigationBar.tsx:
 * 
 * React component representing the sidebar navigation bar in the Budgetwise
 * web application. It displays various navigation options such as Overview,
 * Budget, Transaction, Trends, Saving Goals, and Alerts.
 ************************************************************************/
export default function SideNavbar() {
  return (
    <div>
      <div className="side_navigation_bar_container">
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
        <div className='sidebar_line'></div>
      </div>
    </div>
  );
}
