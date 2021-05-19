import React , { useReducer } from 'react';
import '../../App';
import './RegisterBook.css';

const formReducer = (state, event) => {
    if(event.reset) {
        return {
          genre: '',
          title: '',
          author: '',
          description: ''
        }
    }
    return {
      ...state,
      [event.name]: event.value
    }
   }
function RegisterBook() {
    const [formData,setFormData] = useReducer(formReducer,{});
    const handleChange = event => {
        setFormData({
            name: event.target.name,
            value: event.target.value
        });
    }
    return(
        <div className='register-container'>
            <h1>Let's get your book registered</h1>
            
            <form>
                <fieldset>
                    <label>
                        <p>Title:</p>
                        <input name="title" onChange={handleChange} value={formData.title || ''}/>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Author:</p>
                        <input name="author" onChange={handleChange} value={formData.author || ''}/>
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Genre:</p>
                        <select name="genre" onChange={handleChange} value={formData.genre || ''}>
                        <option value="">--Please choose an option--</option>
                        <option value="Fiction">Fiction</option>
                        <option value="Non-Fiction">Non-Fiction</option>
                        <option value="Romance">Romance</option>
                        <option value="Engineering">Engineering</option>
                        <option value="Young Adult">Young Adult</option>
                        <option value="Crime/Thriller">Crime/Thriller</option>
                        </select>  
                    </label>
                </fieldset>
                <fieldset>
                    <label>
                        <p>Description:</p>
                        <input name="description" onChange={handleChange} value={formData.description || ''}/>
                    </label>
                </fieldset>
                <button type='submit'>Submit</button>
            </form>
        </div>
    )  
    
}

export default RegisterBook