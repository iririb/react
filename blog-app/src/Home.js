import { useState } from 'react'

const Home = () => {

    // useState return 2 item, which is variable that store value and function to change those value
    const [name, setName] = useState('mario')
    
    let nameNG = 'iruiru'
    
    const [age, setAge] = useState(25)

    const handleClick = () => {
        setName('luigi')
        setAge(30)
        
        // below method won't update value, thus we use above
        nameNG = 'irsham'

    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            <p>{name} is {age} years old</p>
            <p>{nameNG}</p>
            <button onClick={handleClick}>Click me</button>
        </div>
    );
}

export default Home;