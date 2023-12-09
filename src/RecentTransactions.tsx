import './RecentTransactions.css';
import FoodLogo from './images/recentTransactionsLogos/Food_TansactionLogo.png';
import EducationLogo from './images/recentTransactionsLogos/Education_TansactionLogo.png';
import GroceriesLogo from './images/recentTransactionsLogos/Groceries_TansactionLogo.png';
import ShoppingLogo from './images/recentTransactionsLogos/Shopping_TansactionLogo.png';
import Transaction from './Transaction';

export default function RecentTransactions() {
  return (
    <div className="recent_transactions_container">
      <div className="recent_transactions_lable_container">
        <h3 className='recent_transactions_title'>Recent Transactions</h3>
        <p>See all</p>
      </div>
        <Transaction logo={FoodLogo} item={'Cold Brew'} color='#213B80' category={'Starbucks'} priceOfItem={'$5.92'} date={'03-30-22'} />
        <Transaction logo={EducationLogo} item={'Coursera'} color='#46BDC6' category={'Education'} priceOfItem={'$39.00'} date={'03-12-2022'} />
        <Transaction logo={GroceriesLogo} item={'AppleTree'} color='#00BC38' category={'Groceries'} priceOfItem={'$3.98'} date={'03-03-2022'} />
        <Transaction logo={ShoppingLogo} item={'BKST-U-PENN'} color='#386BBC' category={'Shopping'} priceOfItem={'$49.89'} date={'03-03-2022'} />
    </div>
  );
}