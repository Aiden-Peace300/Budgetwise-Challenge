import './ImportantBudgetDetails.css';

/************************************************************************
 * ImportantBudgetDetails.tsx:
 * 
 * The 'ImportantBudgetDetails' component is responsible for displaying
 * essential budget details within the Budgetwise web application. It 
 * includes information such as the amount spent, available funds, and the
 * overall budget for the card the user provides as of now the values are 
 * static.
 * 
 * The component calculates spending progress, adjusts numerical formatting,
 * and presents the data with relevant styling. It also features a 
 * progress bar reflecting the proportion of the budget spent.
 * 
 ************************************************************************/
export default function ImportantBudgetDetails() {
  const spent = '800';
  const available = '1,200';
  const budget = '2,000';

  const spentWithoutCommas = spent.replace(/,/g, '');
  const budgetWithoutCommas = budget.replace(/,/g, '');

  let progress = (Number(spentWithoutCommas) / Number(budgetWithoutCommas)) * 100;
  
  return (
      <div className="overall_container" >
        <div style={{display: 'flex', flexDirection: 'column'}}>
          <div style={{display: 'flex'}}>
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
        <div className="overall_budget_progress_bar_container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%`, backgroundColor: '#5157BF', height: '2rem'}}>
          </div>
      </div>
      </div>
    </div>
  );
}