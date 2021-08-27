import React, { useState, useRef, useEffect } from 'react';
import classes from './dropdown.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTimes, faArrowDown } from '@fortawesome/free-solid-svg-icons';

const ARROW_NAMES = {
    ArrowDown: 'ArrowDown',
    ArrowUp: 'ArrowUp',
}

const Dropdown = ({ options, placeHolder }) => {
    const [isOpened,setIsOpened] = useState(false);
    const [value, setValue] = useState('');
    const [currentRow,setCurrentRow] = useState(0);
    const [list,setList] = useState(options);

    const ref = useRef(null);

    const handleChangeValue = (e) => {
        if (!isOpened) {
            setIsOpened(true);
        }
        setValue(e.target.value);
        filter(value)
    };

    const handleKeyDown = (e) => {
        if (e.key === ARROW_NAMES.ArrowDown) {
            if (!isOpened) {
                setIsOpened(true)
            }
            setCurrentRow(currentRow+1)
        } else if (e.key === ARROW_NAMES.ArrowUp) {
            setCurrentRow(currentRow-1)
        } else if(e.key === 'Enter') {
            const { name } = list[currentRow];
            setValue(name);
            setIsOpened(false);
            setList(options);
        }
    };

    const handleClickOutside = (e) => {
        if (ref.current && !ref.current.contains(e.target)) {
            setIsOpened(false);
            setCurrentRow(0);
            setList(options);
        }
    };

    const handleChooseValue = (e) => {
        if (!isOpened) return;
        const closestNode = e.target.closest('[data-value]');
        if (closestNode) {
            const chosenValue = closestNode.dataset['value'];
            setValue(chosenValue);
            setIsOpened(false);
            setCurrentRow(0);
            setList(options);
        }
    };

    const filter = () => {
        setList(prev => {
            return prev.filter(option => {
                return option.name.toLowerCase().indexOf(value.toLowerCase()) > - 1;
            });
        })
    };

    const clear = () => {
        setValue('');
        setList(options);
    };

    useEffect(() => {
        document.addEventListener('click', handleClickOutside, true);
        return () => document.removeEventListener('click', handleClickOutside, true);
    }, [isOpened]);

    return (
        <div className={classes.dropdown_container} ref={ref}>
            <div className={classes.buttons_container}>
                <div className={classes.buttons}>
                    <div className={classes.input_container}>
                        <input
                            type="text"
                            placeholder={isOpened ? '' :  placeHolder}
                            onChange={handleChangeValue}
                            onKeyDown={handleKeyDown}
                            value={value}
                            autoFocus={true}
                        />
                    </div>
                    { value !== '' &&
                        <div onClick={clear} className={classes.delete}>
                            <FontAwesomeIcon
                                    icon={faTimes}
                                    size="s"
                                    color={'#D7DEE9'}
                                />
                        </div>
                    }
                    <div onClick={() => setIsOpened(prev => !prev)} className={classes.open}>
                        <FontAwesomeIcon
                            icon={faArrowDown}
                            size="s"
                            transform={{ rotate: isOpened ? 180 : 0 }}
                            color={'#D7DEE9'}
                        />
                    </div>
                </div>
            </div>
            <div
                className={`${classes.options_container} ${isOpened ? classes.options_border : ''}`}
                onClick={handleChooseValue}
            >
                    {isOpened && list.map((option,index) => {
                        return (
                            <div
                                key={option.id}
                                data-value={option.name}
                                className={classes.option}
                                style={{
                                    backgroundColor: `${index === currentRow ? 'lightgrey' : ''}`
                                }}
                            >
                                {option.name}
                            </div>
                        )
                    })}
            </div>
        </div>
    );
};

export default Dropdown;
