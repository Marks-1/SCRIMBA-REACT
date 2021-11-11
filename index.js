/**Pract1 */
// ReactDOM.render(<h1>Hello React!</h1>, document.getElementById('root'));

/**Pract2
 Surprise! You probably thought you could just forget
the line of code you just learned! Nope, not on my watch!

Try to write that 1-liner of React code again! This time,
see if you can figure out how to render an <ul> with 2+ <li>s inside
 */
/**ReactDOM.render(
    <div>
        <ul>
            <li>Learning React</li>
            <li>Scrimba as masterclass</li>
            <li>All about deep practice</li>
        </ul>
    </div>, document.getElementById('root')
);*/

/**Pract3 */
// Navbar Component 
function Navbar(){
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <a className="navbar-brand" href="#">Navbar</a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                        <a className="nav-link active" aria-current="page" href="#">Home</a>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link" href="#">Link</a>
                        </li>
                        <li className="nav-item dropdown">
                        <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                            Dropdown
                        </a>
                        <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                            <li><a className="dropdown-item" href="#">Action</a></li>
                            <li><a className="dropdown-item" href="#">Another action</a></li>
                            <li><hr className="dropdown-divider"/></li>
                            <li><a className="dropdown-item" href="#">Something else here</a></li>
                        </ul>
                        </li>
                        <li className="nav-item">
                        <a className="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
                        </li>
                    </ul>
                    <form className="d-flex">
                        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
                        <button className="btn btn-outline-success" type="submit">Search</button>
                    </form>
                </div>
            </div>
        </nav>
    )
}

/**Pract4
 * 
 * Challenge: Create your own custom React component!
Call it "MainContent", and have it return a simple
h1 element that says "I'm learning React!"

Afterward, render it below the Navbar (which
you can do inside the ReactDOM.render call below)
 */
function MainContent(){
    return(
        <div className="card text-center">
            <div className="card-header">
                Featured
            </div>
            <div className="card-body">
                <h5 className="card-title">Special title treatment</h5>
                <p className="card-text">With supporting text below as a natural lead-in to additional content.</p>
                <a href="#" className="btn btn-primary">Go somewhere</a>
            </div>
            <div className="card-footer text-muted">
                2 days ago
            </div>
        </div>
    )
}
// JSX => declarative format
ReactDOM.render(
    <div>
        <Navbar/>
        <MainContent/>
    </div>
, document.getElementById('root'))


/* Pract5
Challenge - recreate the above line of code in vanilla JS by creating and
appending an h1 to our div#root (without using innerHTML).

- Create a new h1 element
- Give it some textContent
- Give it a class name of "header"
- append it as a child of the div#root
    
*/

/**Soln5  imperative format
 * 
    const myBody = document.getElementById('root');
    const header1 = document.createElement('h1');
    header1.textContent = "This is heading one";
    header1.className = "header";
    myBody.appendChild(header1);
    // alternatively
    document.getElementById('root').append(header1);
 */


/* Pract6
Challenge: 

Create a navbar in JSX:
    - Use the semantic `nav` element as the parent wrapper
    - Have an h1 element with the brand name of your "website"
    - Insert an unordered list for the other nav elements
        - Inside the `ul`, have three `li`s for "Pricing",
        "About", and "Contact"
    - Don't worry about styling yet - it'll just be plain-looking HTML for now
*/

/**
 * 
    const navbar = (
        <nav>
            <h1>Mark's Web</h1>
            <ul>
                <li>Pricing</li>
                <li>About</li>
                <li>Contact</li>
            </ul>
        </nav>
    )
    
    ReactDOM.render(
        navbar,
        document.getElementById('root')
    );
 */
