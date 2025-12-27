import React from 'react'
import '../styles/Menu.css'

const menuItems = [
  { id: 1, name: 'Espresso', price: '$3.00', description: 'Rich and bold single shot', tag: 'Classic' },
  { id: 2, name: 'Latte', price: '$4.50', description: 'Espresso with steamed milk', tag: 'Popular' },
  { id: 3, name: 'Cappuccino', price: '$4.50', description: 'Espresso with foamed milk', tag: 'Favorite' },
  { id: 4, name: 'Cold Brew', price: '$5.00', description: 'Steeped for 24 hours', tag: 'Refreshing' },
  { id: 5, name: 'Mocha', price: '$5.50', description: 'Espresso with chocolate', tag: 'Sweet' },
  { id: 6, name: 'Americano', price: '$3.50', description: 'Espresso with hot water', tag: 'Strong' },
]

const Menu = () => {
  return (
    <section className="menu" id="menu">
      <div className="container">
        <h2>Our Specials</h2>
        <p className="menu-subtitle">Hand-crafted with love, just for you.</p>

        <div className="menu-grid">
          {menuItems.map(item => (
            <div key={item.id} className="menu-item">
              <div className="menu-header">
                <h3>{item.name}</h3>
                <span className="price">{item.price}</span>
              </div>
              <p className="description">{item.description}</p>
              <span className="tag">{item.tag}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Menu