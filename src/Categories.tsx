import React from 'react';
import './Categories.css';

interface CategoriesProps {
  logo: any
  title: string;
  total: string;
  spent: string;
  color: string;
}

const Categories: React.FC<CategoriesProps> = ({ logo, title, total, spent, color }) => {
  const totalWithoutCommas = total.replace(/,/g, '');
  const spentWithoutCommas = spent.replace(/,/g, '');

  let progress = (Number(spentWithoutCommas) / Number(totalWithoutCommas)) * 100;
  const left =  Number(totalWithoutCommas) - Number(spentWithoutCommas);


  if(progress === 0) {
    progress = 1;
  }

  return (
    <div style={{marginTop: '2rem'}}>
      <div>
        <div style={{display: 'flex', justifyContent: 'space-between' }}>
          <div style={{display: 'flex', marginBottom: '.6rem'}}>
            <div style={{marginRight: '1rem'}}>
              <img style={{borderRadius: '50%', backgroundColor: color, padding: '.3rem', maxWidth: '2.5rem', marginTop: '.3rem'}} src={logo} />
            </div>
            <div>
              <p className="font" style={{marginBottom: '.2rem'}}>{title}</p>
              <div>
                <p className='categories_font gray' style={{ display: 'inline' }}>{'spent '}</p>
                <p className='categories_font green' style={{ display: 'inline' }}>{`$${spent} `}</p>
                <p className='categories_font gray' style={{ display: 'inline' }}>{' of $' + total}</p>
              </div>
            </div>
          </div>
          <div style={{display: 'flex', flexDirection: 'column'}}>
            <p className='categories_font green' style={{marginBottom: '.2rem'}}>{`$${left}`}</p>
            <p className='left_font gray' style={{marginLeft: '.35rem'}}>left</p>
          </div>
        </div>
        <div className="progress-bar-container">
          <div
            className="progress-bar"
            style={{ width: `${progress}%`, backgroundColor: color }}
          ></div>
        </div>
      </div>
      <hr style={{ margin: '1rem 0', borderColor: '#EFECEC' }} />
    </div>
  );
};

export default Categories;
