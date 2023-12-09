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
        <Transaction logo={logo} item={'Cold Brew'} color='#213B80' company={'Starbucks'} priceOfItem={'$5.92'} date={'03-30-22'} />
        <Transaction logo={logo} item={'Cold Brew'} color='#213B80' company={'Starbucks'} priceOfItem={'$5.92'} date={'03-30-22'} />
        <Transaction logo={logo} item={'Cold Brew'} color='#213B80' company={'Starbucks'} priceOfItem={'$5.92'} date={'03-30-22'} />
        <Transaction logo={logo} item={'Cold Brew'} color='#213B80' company={'Starbucks'} priceOfItem={'$5.92'} date={'03-30-22'} />
    </div>
  );
}