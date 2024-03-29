﻿

const Header = (props) => {
  const {countCartItems} = props
  return (
    <div className="row center block">
        <div>
            <a href="#/">
                <h2>Simple Shopping Card</h2>
            </a>
        </div>
        <div>
            <a href="#/card" >Card

            {countCartItems ? (
              <button className="badge">{countCartItems}</button>
            )  : (
              ''
            )}
            </a>{' '} 
            <a href="#/signin">Sign In</a>
        </div>
    </div>
  )
}

export default Header