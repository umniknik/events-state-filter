import React from 'react';

function Toolbar({ filters, selected, onSelectFilter }) {
    return (
        <div className='toolbar'>
            {filters.map((nameButton, index) =>
                <button
                    key={index}
                    className={nameButton === selected ? 'active' : ''}

                    // при клике запускается функция onSelectFilter в компаненте Potfolio через колбек и передает туда имя кликнутой кнопки nameButton, чтобы по ней отсортировать карточки
                    onClick={() => onSelectFilter(nameButton)}>
                    {nameButton}
                </button>
            )}
        </div>
    )
}

export default Toolbar;