import "../Header.css";

function Header(props) {
    function handleClick() {
     props.onModal();
    }
  
    return (
      <header>
        <div>
          <h1>RANKEDM</h1>
          <p>DREAMING, BUT NEVER FORGOTTEN</p>
        </div>
        <div>

          <button onClick={handleClick} className="new-event">
            + New Event
          </button>
        </div>
      </header>
    );
  }
  
  export default Header;
  