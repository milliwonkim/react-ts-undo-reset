import React from 'react';

interface IUndoResetControl {
    undo: () => void;
    reset: () => void;
}

const UndoResetControl = ({ undo, reset }: IUndoResetControl) => (
    <div>
        <h3>Made a mistake?</h3>
        <div className='undo-actions'>
            <div>
                <button type='button' onClick={undo}>
                    Undo
                </button>
            </div>
            <div>
                <button type='button' onClick={reset}>
                    Reset
                </button>
            </div>
        </div>
    </div>
);

export default UndoResetControl;
