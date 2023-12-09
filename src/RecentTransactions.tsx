import './RecentTransactions.css';
import logo from './images/recentTransactionsLogos/Food_TansactionLogo.png';
import Transaction from './Transaction';

export default function RecentTransactions() {
  return (
    <div className="recent_transactions_container">
      <div className="recent_transactions_lable_container">
        <h1>Recent Transactions</h1>
        <p>See all</p>
      </div>
        <Transaction logo={logo} item={'Cold Brew'} color='#213B80' category={'Starbucks'} priceOfItem={'$5.92'} date={'03-30-22'} />
        <Transaction logo={logo} item={'Coursera'} color='#46BDC6' category={'Education'} priceOfItem={'$39.00'} date={'03-12-2022'} />
        <Transaction logo={logo} item={'AppleTree'} color='#00BC38' category={'Groceries'} priceOfItem={'$3.98'} date={'03-03-2022'} />
        <Transaction logo={logo} item={'BKST-U-PENN'} color='#386BBC' category={'Shopping'} priceOfItem={'$49.89'} date={'03-03-2022'} />
    </div>
  );
}