import './App.css';
import logo from './images/Budgetwise_logo.png';
import aidenPeace from './images/photoOfAiden.png';
import caretPointingDownwards from './images/caret pointing downwards.png';
import '@fortawesome/fontawesome-svg-core/styles.css';
import SideNavbar from './SideNavbar.tsx';
import MonthlyBudgetApril2022 from './MonthlyBudgetApril2022.tsx';
import ImportantBudgetDetails from './ImportantBudgetDetails.tsx';
import RecentTransactions from './RecentTransactions.tsx';
import BankAndCreditCardInformation from './BankAndCreditCardInformation.tsx';
import SavingsGoals from './SavingGoals.tsx';
import SixMonthBarGraph from './SixMonthBarGraph.js';

/************************************************************************
 * App.tsx:
 * App component for the Hompage Budgetwise web application. It includes 
 * imports for various components and assets, as well as the structure of 
 * the application's user interface.
 ************************************************************************/
export default function App() {
  return (
    <>
      <div>
        <header>
          <div className='navigation_bar_container'>
            <div className='logo_container'>
              <img className="logo" src={logo} alt="logo" />
              <h2 className='budgetwise_text'>Budgetwise</h2>
            </div>
            <div className="nav_links">
              <nav>
                <ul>
                  <li>
                    <a href="#">Home</a>
                  </li>
                  <li>
                    <a href="#services">Community</a>
                  </li>
                  <li>
                    <a href="#projects">FAQs</a>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
          <div className='users_profile'>
            <button className="profile_button">
              <img className="john_doe_profile_picture" src={aidenPeace} alt="john doe profile picture" />
              <p className='user_name'>John Doe</p>
              <img className="caret_icon" src={caretPointingDownwards} alt="caret_icon" />
            </button>
          </div>
        </header>
      </div>
      <div>
        <div className="homepage_container">
          <section className="side_navigation_bar_container">
            <SideNavbar />
          </section>
          <section className="budget_dropdown_container">
            <div className="container">
              <div>
                <MonthlyBudgetApril2022 />
              </div>
            </div>
          </section>
          <section className="important_budget_details_container">
            <div className="container">
              <div>
                <ImportantBudgetDetails />
                <SixMonthBarGraph />
                <RecentTransactions />
                <BankAndCreditCardInformation />
                <SavingsGoals />
              </div>
            </div>
          </section>
        </div>
      </div>
    </>
  );
}