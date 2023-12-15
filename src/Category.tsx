import './Category.css';

type CategoriesProps = {
  logo: any;
  title: string;
  total: string;
  spent: string;
  color: string;
}

/************************************************************************
 * Category.tsx:
 * 
 * Category is responsible for rendering a budget category item within 
 * the MonthlyBudgetApril2022.tsx application It receives properties 
 * such as logo, title, total budget, amount spent, and color to display 
 * and manage individual budget categories.
 ************************************************************************/
const Category: React.FC<CategoriesProps> = ({ logo, title, total, spent, color }) => {

  // Remove commas from total and spent amounts for numerical operations
  const totalWithoutCommas = total.replace(/,/g, '');
  const spentWithoutCommas = spent.replace(/,/g, '');

  // Calculate spending progress percentage and remaining budget
  let progress = (Number(spentWithoutCommas) / Number(totalWithoutCommas)) * 100;
  const left =  Number(totalWithoutCommas) - Number(spentWithoutCommas);


  // Ensure progress is at least 1% to prevent a visually empty progress bar
  if(progress === 0) {
    progress = 1;
  }

  return (
    <div className='category_container'>
      <div className='category'>
        <div className="category_content_container">
          <div className="category_content">
            <div className="logo_container">
              <img className="category_logo" style={{backgroundColor: color}} src={logo} />
            </div>
            <div>
              <p className="categories_title">{title}</p>
              <div>
                <p className='categories_font gray' style={{ display: 'inline' }}>{'spent '}</p>
                <p className='categories_font green' style={{ display: 'inline' }}>{`$${spent} `}</p>
                <p className='categories_font gray' style={{ display: 'inline' }}>{' of $' + total}</p>
              </div>
            </div>
          </div>
          <div className="balance_left_over_container">
            <p className='categories_font green left_margin_bottom'>{`$${left}`}</p>
            <p className='left_text gray left_text_margin'>left</p>
          </div>
        </div>
        <div className="progress_bar_container">
          <div
            className="progress_bar"
            style={{ width: `${progress}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>
      <hr className="category_line" />
    </div>
  );
};

export default Category;
