import React from 'react';
import {homeWorkReducer} from "../homeWorkReducer";

 type PeopleType = {
     _id: number
     name: string
     age: number
 }
export type initialStateType = Array<PeopleType>

let initialState: initialStateType

export type actionType = {
    type: string
    payload: string | number
}

beforeEach(() => {
    initialState = [
        {_id: 0, name: "Кот", age: 3},
        {_id: 1, name: "Александр", age: 66},
        {_id: 2, name: "Коля", age: 16},
        {_id: 3, name: "Виктор", age: 44},
        {_id: 4, name: "Дмитрий", age: 40},
        {_id: 5, name: "Ирина", age: 55},
    ]
});

test("sort name up", () => {

    const action: actionType = {
        type: "sort", payload: "up"
    }
    const newState = homeWorkReducer(initialState, action);
    console.log(newState);
    expect(newState[0].name).toBe('Александр');
    expect(newState[5].name).toBe('Кот');
});
test("sort name down", () => {

    const action: actionType = {
        type: "sort", payload: "down"
    }

    const newState = homeWorkReducer(initialState, action);
    expect(newState[0].name).toBe('Кот');
    expect(newState[5].name).toBe('Александр');
});

test("check age 18", () => {

    const action: actionType = {
        type: "check", payload: 18
    }

    const newState = homeWorkReducer(initialState, action);

    expect(newState.length).toBe(4);
    expect(newState[0].name).toBe('Александр');
    expect(newState[1].name).toBe('Виктор');
});
