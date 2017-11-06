import React from 'react'
import {Link} from 'react-router-dom'

export default () => {
    return (
        <div>
            <header>
                <p>
                    <Link to='/'>Home</Link>
                    {/*<Link to='/products'>Products</Link>*/}
                    <Link to='/cart'>Cart</Link>
                </p>
            </header>
        </div>
    )
}