import React, { useState } from 'react'
import "../styles/style.css"
import {useSelector, useDispatch} from "react-redux"
import { changeTheme, inputValue, theme } from '../app/calcSlice'
import {reset, backspace, add, evaluate} from '../app/calcSlice'

export default function Calc() {
    const calcValue = useSelector(inputValue)
    const myTheme = useSelector(theme)
    const dispathc = useDispatch()

  return (
    <section className={`calculator theme-${myTheme}`}>
    <div className="containar">
        <div className="calc-modes-bar">
          <h2>calc</h2>
          <div id="theme-bicker">
            <h6>THEME</h6>
            <div className="modes">
              <input type="radio" name="mode" id="1" checked={myTheme == 1 ? true : false} onClick={() => dispathc(changeTheme(1))}/>
              <label htmlFor="1" id="mode" data-mode="1"></label>
              <input type="radio" name="mode" id="2" checked={myTheme == 2 ? true : false} onClick={() => dispathc(changeTheme(2))}/>
              <label htmlFor="2" id="mode" data-mode="2"></label>
              <input type="radio" name="mode" id="3" checked={myTheme == 3 ? true : false} onClick={() => dispathc(changeTheme(3))}/>
              <label htmlFor="3" id="mode" data-mode="3"></label>
            </div>
          </div>
        </div>
        <input type="text" value={calcValue} onKeyDown={(e) => dispathc(add(e.key))} id="calc-field" disabled/>
        <div className="calc-body">
          <button className="numbers" onClick={() => dispathc(add(7))}>7</button>
          <button className="numbers" onClick={() => dispathc(add(8))}>8</button>
          <button className="numbers" onClick={() => dispathc(add(9))}>9</button>
          <button className="numbers" onClick={() => dispathc(backspace())}>DEL</button>
          <button className="numbers" onClick={() => dispathc(add(4))}>4</button>
          <button className="numbers" onClick={() => dispathc(add(5))}>5</button>
          <button className="numbers" onClick={() => dispathc(add(6))}>6</button>
          <button className="numbers" onClick={() => dispathc(add('+'))}>+</button>
          <button className="numbers" onClick={() => dispathc(add(1))}>1</button>
          <button className="numbers" onClick={() => dispathc(add(2))}>2</button>
          <button className="numbers" onClick={() => dispathc(add(3))}>3</button>
          <button className="numbers" onClick={() => dispathc(add('-'))}>-</button>
          <button className="numbers" onClick={() => dispathc(add(0))}>0</button>
          <button className="numbers" onClick={() => dispathc(add('.'))}>.</button>
          <button className="numbers" onClick={() => dispathc(add('/'))}>/</button>
          <button className="numbers" onClick={() => dispathc(add('*'))}>x</button>
          <button className="numbers" id="reset" onClick={() => dispathc(reset())}>RESET</button>
          <button className="numbers" id='equal' onClick={() => dispathc(evaluate())}>=</button>
        </div>
    </div>
    </section>
  )
}
