import './App.css';
import logo from './images/Budgetwise_logo.png';
import aidenPeace from './images/photoOfAiden.png';
import caretPointingDownwards from './images/caret pointing downwards.png';
import '@fortawesome/fontawesome-svg-core/styles.css';
import SideNavbar from './SideNavbar.tsx';
import BudgetDropdown from './BudgetDropdown.tsx';
import ImportantBudgetDetails from './ImportantBudgetDetails.tsx';
import RecentTransactions from './RecentTransactions.tsx';
import BankAndCreditCardInformation from './BankAndCreditCardInformation.tsx';
import SavingsGoals from './SavingGoals.tsx';
import SixMonthBarGraph from './SixMonthBarGraph.js';

export default function App() {
  return (
    <>
      <div>
        <header>
          <div className='navbar'>
            <div className='logo_class'>
              <img className="logo" src={logo} alt="logo" />
              <h2 className='budgetwise_text'>Budgetwise</h2>
            </div>
            <div className="nav__links">
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
              <img className="john_doe_profile_picture" src={aidenPeace} alt="john_doe_profile_picture" />
              <p className='user_name'>John Doe</p>
              <img className="caret_icon" src={caretPointingDownwards} alt="caret_icon" />
            </button>
          </div>
        </header>
      </div>
      <div>
        <div className="menu">
          <section className="sideNavbar">
            <SideNavbar />
          </section>
          {/* <div style={{display: 'flex', marginTop: '5rem', marginLeft: '1rem'}}> */}
            <section className="budgetDropdown">
              <div className="container">
                <div className="budgetDropdown-content">
                  <BudgetDropdown />
                </div>
              </div>
            </section>
            <section className="importantBudgetDetails">
              <div className="container">
                <div className="importantBudgetDetails-content">
                  <ImportantBudgetDetails />
                  <SixMonthBarGraph />
                  <RecentTransactions />
                  <BankAndCreditCardInformation />
                  <SavingsGoals />
                </div>
              </div>
            </section>
          {/* </div> */}
        </div>
      </div>
    </>
  );
}