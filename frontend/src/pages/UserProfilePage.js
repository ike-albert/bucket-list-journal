import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleDown, faCoffee, faEllipsisV } from '@fortawesome/free-solid-svg-icons';
import Collapsible from 'react-collapsible';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { SubMenu } from 'react-contextmenu';
import { MenuItem } from 'react-contextmenu';

export const UserProfilePage = () => {
    // We'll use the history to navigate the user
    // programmatically later on (we're not using it yet)
    const history = useHistory();

    // These states are bound to the values of the text inputs
    // on the page (see JSX below). 
    const [favoriteFood, setFavoriteFood] = useState('');
    const [hairColor, setHairColor] = useState('');
    const [bio, setBio] = useState('');

    // These state variables control whether or not we show
    // the success and error message sections after making
    // a network request (see JSX below).
    const [showSuccessMessage, setShowSuccessMessage] = useState(false);
    const [showErrorMessage, setShowErrorMessage] = useState(false);

    // This useEffect hook automatically hides the
    // success and error messages after 3 seconds when they're shown.
    // Just a little user interface improvement.
    useEffect(() => {
        if (showSuccessMessage || showErrorMessage) {
            setTimeout(() => {
                setShowSuccessMessage(false);
                setShowErrorMessage(false);
            }, 3000);
        }
    }, [showSuccessMessage, showErrorMessage]);


    const addItem = () => {
        // Reset the text input values to
        // their starting values (the data we loaded from the server)
        alert('Add Item functionality not implemented yet');
    }

    const logOut = () => {
        // We'll want to log the user out here
        // and send them to the "login page"
        alert('Log out functionality not implemented yet');
    }
    
    const resetValues = () => {
        // Reset the text input values to
        // their starting values (the data we loaded from the server)
        alert('Reset functionality not implemented yet');
    }

    const triggerDropdown = () => {
        // Reset the text input values to
        // their starting values (the data we loaded from the server)
        alert('Trigger Dropdown functionality not implemented yet');
    }
    const archiveItem = () => {
        // Reset the text input values to
        // their starting values (the data we loaded from the server)
        alert('Trigger Dropdown functionality not implemented yet');
    }
    const deleteItem = () => {
        // Reset the text input values to
        // their starting values (the data we loaded from the server)
        alert('Trigger Dropdown functionality not implemented yet');
    }

    const displayMenu = () => {
        // Reset the text input values to
        // their starting values (the data we loaded from the server)
        alert('Display Menu functionality not implemented yet');
    }

    const element = <FontAwesomeIcon icon = {faCoffee}/>;

    const bucketList = {
        "complete" : {"title" : "Complete", "items": ["Skydiving", "Running a marathon"]},
        "inProgress" : {"title" : "In Progress", "items": []},
        "notStarted" : {"title" : "Not Started", "items": ["Get a driver's license", "Street racing"]},
    };
    const titles = [bucketList["complete"]["title"], bucketList["inProgress"]["title"], bucketList["notStarted"]["title"]]

    const complete = bucketList["complete"]["items"];
    const notStarted = bucketList["notStarted"]["items"];
    const inProgress = bucketList["inProgress"]["items"];
    
    // And here we have the JSX for our component. It's pretty straightforward
    return (
        <div className="content-container">
            <div style={{
                    display: "flex",
                    justifyContent:"flex-start",
                    margin:"30px 12px 0px 12px",
                    alignItems:"center",
                    marginRight:"80%"
                }}>
                
                <div>
                    <img style={{width:"200px", height:"200px", borderRadius:"100px", margin:"0px 30px"}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZ4dJNcFDL_NKP58VhlnnBMPex-jCHzHnJw&usqp=CAU"/>
                </div>
                <div>
                    <h2>Holmes'007</h2>
                    <h5 style={{
                        color:"gray"
                    }}>User since 2021</h5>
                </div>
            </div>
                <div style={{
                    display:"flex",
                    margin: "0px 15% 0px 15%",
                    justifyContent: "space-between",
                    width: "70%",
                    borderBottom: "2px solid gray"}}>
                    <h6>{complete.length} Completed</h6>
                    <h6>{inProgress.length} In Progress</h6>
                    <h6>{notStarted.length} Not Started</h6>
                </div>
                
            
            <div style={{
                marginTop:"10px"
            
            }}>

                <Collapsible trigger="Completed" ><ul>{
                    complete.map((item) => (
                        <button className="b1">{item}<FontAwesomeIcon icon={faEllipsisV}  fontWeight="200px" pull="right" transform="left-6"></FontAwesomeIcon></button>
                    ))}
                    </ul>
                    

                </Collapsible>
                
                <Collapsible trigger="In Progress"><ul>{
                    inProgress.map((item) => (
                        <button className="b1">{item}<FontAwesomeIcon icon={faEllipsisV}  fontWeight="200px" pull="right" transform="left-6" onClick={displayMenu}></FontAwesomeIcon></button>
                ))}</ul></Collapsible>
                                

                <Collapsible trigger="Not Started"><ul>{
                notStarted.map((item) => (
                    <button className="b1">{item}<FontAwesomeIcon icon={faEllipsisV}  fontWeight="200px" pull="right" transform="left-6"></FontAwesomeIcon></button>
                ))}</ul></Collapsible>
               
            </div>
            


            <button onClick={() => history.push('/addItem')} style={{
                marginRight:"0px"
            }}>Add Item</button>
            <button onClick={logOut}>Log Out</button>
           
        </div>
        
    );
}