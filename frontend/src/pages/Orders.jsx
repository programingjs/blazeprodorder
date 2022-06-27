import {useState, useEffect} from 'react'
import {FaUserAlt} from 'react-icons/fa'

function Orders() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    status: ''
  })

  const {consumer, status, date, total} = formData

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }) )
  }

  const onSubmit = (e) => {
    e.preventDefault()
  }

  return <>
    <section>
      <h1>
        <FaUserAlt/> Orders
      </h1>
      <p>ORDERS</p>
    </section>

    <section>
      <form onSubmit={onSubmit} >
        <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          id="consumer" 
          name='consumer' 
          value={consumer} 
          placeholder='Consumer'
          onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input 
          type="status" 
          className="form-control" 
          id="status" 
          name='status' 
          value={status} 
          placeholder='status'
          onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input 
          type="date" 
          className="form-control" 
          id="date" 
          name='date' 
          value={date} 
          placeholder='date'
          onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input 
          type="total " 
          className="form-control" 
          id="total " 
          name='total ' 
          value={total} 
          placeholder='total  '
          onChange={onChange}
          />
        </div>
        <div>
          <button type='submit' className='btn btn-block'>Submit</button>
        </div>
      </form>
    </section>
  </>
}

export default Orders