import './ImportantBudgetDetails.css';
// import RecentTransactions from './RecentTransactions';

export default function ImportantBudgetDetails() {
  const spent = '800';
  const available = '1,200';
  const budget = '2,000';

  return (
    <div>
      <div className="overall_container" >
        <div className='spent_container'>
          <p className='overall_spent_font'>Spent</p>
          <span className='overall_spent_amount_font red'>{`$${spent}`}</span>
        </div>
        <hr className='horizontal_line' />
        <div className='available_container'>
          <p className='overall_available_font'>Available</p>
          <span className='overall_available_amount_font green'>{`$${available}`}</span>
        </div>
        <hr className='horizontal_line' />
        <div className='budget_container'>
          <p className='overall_budget_font'>Budget</p>
          <span className='overall_budget_amount_font'>{`$${budget}`}</span>
        </div>
      </div>
    </div>
  );
}