const Home = () => {

    // e is referring to event object
    // without event object, function still working
    const handleClick = (e) => {
        console.log("Hello ninja", e)
    }
    const handleClickAgain = (name, e) => {
        console.log('Hello ' + name, e.target)
    }
    return (
        <div className="home">
            <h2>Homepage</h2>
            {/* if we invoke it(contain '()'), it will trigger automatically  at the beginning*/}
            {/* <button onClick={handleClick()}>Click me</button> */}
            <button onClick={handleClick}>Click me</button>

            {/* below is how we can trigger event without invoking it */}
            {/* button still working without event object('e') */}
            <button onClick={(e) => {
                handleClickAgain('Iruiru', e)
            }}>Click me again</button>
        </div>
    );
}

export default Home;