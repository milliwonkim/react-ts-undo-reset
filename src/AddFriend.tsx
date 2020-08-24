import React from 'react';

interface IAddFriend {
    currentValues: {
        name: string;
        gender: string;
    };
    onSubmit: () => void;
    onNameChange: (e: React.FormEvent<HTMLInputElement>) => void;
    onGenderChange: (e: React.FormEvent<HTMLInputElement>) => void;
}

const AddFriend = ({
    currentValues,
    onSubmit,
    onNameChange,
    onGenderChange,
}: IAddFriend) => (
    <div>
        <h3>Add a friend</h3>
        <form className='form' onSubmit={onSubmit}>
            <div>
                <input
                    onChange={onNameChange}
                    value={currentValues.name}
                    type='text'
                    name='name'
                    placeholder="Friend's Name"
                />
            </div>
            <div>
                <select
                    onChange={onGenderChange}
                    name='gender'
                    value={currentValues.gender}>
                    <option value='Male'>Male</option>
                    <option value='Female'>Female</option>
                    <option value='Other'>Other</option>
                </select>
            </div>
            <div>
                <button type='submit'>Add</button>
            </div>
        </form>
    </div>
);

export default AddFriend;
