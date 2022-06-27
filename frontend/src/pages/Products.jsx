import {useState, useEffect} from 'react'
import {useSelector, useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
import {toast} from 'react-toastify'
import {products, reset}  from '../features/auth/authSlice'
import Spinner from '../components/Spinner'

import {FaSignInAlt} from 'react-icons/fa'

function Products() {
  const [formData, setFormData] = useState({
    name: '',
    category: '',
    price: '',
    status: ''
  })

  const {name, category, price, status} = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const {user, isLoading, isError, isSuccess, message} = useSelector( 
    (state) => state.auth)

  useEffect(() => {
    if(isError){
      toast.error(message)
    }

    if(isSuccess || user){
      navigate('/')
    }

    dispatch(reset())

  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }) )
  }

  const onSubmit = (e) => {
    e.preventDefault()

    const userData = {
      name,
      category, 
      price,
      status
    }

    dispatch(products(userData))
  }

  if(isLoading){
    return <Spinner/>
  }

  return <>
    <section>
      <h1>
        <FaSignInAlt/> Products
      </h1>
      <p>PRODUCTS</p>
    </section>

    <section>
      <form onSubmit={onSubmit} >
        <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          id="name" 
          name='name' 
          value={name} 
          placeholder='name'
          onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          id="category" 
          name='category' 
          value={category} 
          placeholder='Category'
          onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input 
          type="number" 
          className="form-control" 
          id="price" 
          name='price' 
          value={price} 
          placeholder='Price'
          onChange={onChange}
          />
        </div>

        <div className="form-group">
          <input 
          type="text" 
          className="form-control" 
          id="status" 
          name='status' 
          value={status} 
          placeholder='status'
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

export default Products