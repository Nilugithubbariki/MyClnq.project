import React, { useState } from 'react'

export default function Header({ title }) {
    const [search, setSearch] = useState("");
    console.log(search)
    const handleSearch = (e) => {
      setSearch(e.target.value);
    };
  return (
    <div style={{ width: '100%', position: 'sticky', top: '0', background: 'transparent' }} search={search}>
    <h2 className='position-absolute' style={{ transform: "translate(50%, 50%)", top: "10px", left: '20px', background: 'transparent'}}>{title}</h2>
        <img className='' src="/src/assets/nav_bar.png" alt="" width="100%" height="100px" style={{ background: 'transparent'}} />
          <input
          style={{height: '20px', transform: "translate(50%, 50%)", top: "10px", right: '20px', background: 'transparent',position:"absolute"}}
          type="text"
          placeholder="Search by name"
          value={search}
          onChange={handleSearch}
        />
    </div>
  )
}
