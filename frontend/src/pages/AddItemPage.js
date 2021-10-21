import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

export const AddItemPage = () => {
    const history = useHistory();

    // These states are bound to the values of the text inputs
    // on the page (see JSX below). 
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [image, setImage] = useState('');
    const [dueDate, setDueDate] = useState('');

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

    const saveChanges = async () => {
        // Send a request to the server to
        // update the user's info with any changes we've
        // made to the text input values
        alert('Save functionality not implemented yet');
    }
    
    const addItem = () => {
        // Reset the text input values to
        // their starting values (the data we loaded from the server)
        alert('Add Item Functionality not implemented yet');
    }
    
    // And here we have the JSX for our component. It's pretty straightforward
    return (
        <div className="content-container"
        style = {{
            width:500
        }}>
            {showSuccessMessage && <div className="success">Successfully saved user data!</div>}
            {showErrorMessage && <div className="fail">Uh oh... something went wrong and we couldn't save changes</div>}
            <div style={{
                    display: "flex",
                    margin:"3px 0px 10px 0px",
                    alignItems:"center",
            }}>

                <div>
                <img style={{width:"150px", height:"150px", borderRadius:"100px", margin:"0px 15px"}}
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQyZ4dJNcFDL_NKP58VhlnnBMPex-jCHzHnJw&usqp=CAU"/>
                <label>
                    (Optional) Complete By:
                    <input
                        type="date"
                        onChange={e => setDueDate(e.target.valueAsDate)}
                        width="30px"></input>
                </label>
                </div>
                
                <div>
                    <label>
                        Title:
                        <input
                            type="text"
                            onChange={e => setTitle(e.target.value)}
                            value={title}
                            style={{
                                display:"flex",
                                height: 40,
                                width: 320
                            }}/>
                    </label>
                    <label>
                        Description:
                        <input
                            onChange={e => setDescription(e.target.value)}
                            value={description}
                            style={{
                                display:"flex",
                                height: 150,
                                
                            }} />
                    </label>
                </div>
               
            </div>


           
            <button class="b1" 
                disabled={!title || !description}
                onClick={addItem} 
                style={{marginLeft:"6%", marginTop:"4%" }}
            >Add Item</button>
        </div>
    );
}