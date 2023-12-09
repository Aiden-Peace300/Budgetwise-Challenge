import './ImportantBudgetDetails.css';

export default function ImportantBudgetDetails() {
  const spent = '800';
  const available = '1,200';
  const budget = '2,000';

  return (
    <div>
      <div className="overall_container">
        <div className='spent_container'>
          <p>Spent</p>
          <span>{`$${spent}`}</span>
        </div>
        <hr className='horizontal_line' />
        <div className='available_container'>
          <p>Available</p>
          <span>{`$${available}`}</span>
        </div>
        <hr className='horizontal_line' />
        <div className='budget_container'>
          <p>Budget</p>
          <span>{`$${budget}`}</span>
        </div>
      </div>
    </div>
  );
}